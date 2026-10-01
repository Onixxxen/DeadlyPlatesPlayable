using System;
using System.Collections.Generic;
using UnityEngine;

namespace Playable
{
    /// <summary>What a hop lands on: a plate, a trap, or nothing.</summary>
    public enum HopOutcome { Safe, Trap, Void }

    /// <summary>The objective of the moment, as data; the banner that shows it owns the texts.</summary>
    public enum Objective { None, LeaveTwo, CrossBridge }

    /// <summary>What the island change did, for the views to play it.</summary>
    public sealed class IslandChange
    {
        /// <summary>From the beaver toward the new island: one of <see cref="FieldConfig.UpScreen"/>.</summary>
        public readonly Vector2Int Direction;
        public readonly Vector2Int NewCentre;

        /// <summary>The old plates that went. A cell that is also in <see cref="Bridge"/> got a new plate.</summary>
        public readonly List<Vector2Int> Removed = new List<Vector2Int>();

        /// <summary>The bridge's plates, row by row from the beaver.</summary>
        public readonly List<Vector2Int> Bridge = new List<Vector2Int>();

        /// <summary>The new island's plates; none is a trap.</summary>
        public readonly List<Vector2Int> NewIsland = new List<Vector2Int>();

        public IslandChange(Vector2Int direction, Vector2Int newCentre)
        {
            Direction = direction;
            NewCentre = newCentre;
        }
    }

    /// <summary>
    /// The field's rules, ported from the original's TileSpawner and PlayerController:
    /// plates on a grid, the beaver on one of them, hops, traps, the island change and the win.
    /// No time in here: a hop resolves at once and the views play it afterwards. Everything random
    /// comes from the seed, so the same seed gives the same field.
    /// </summary>
    public sealed class Field
    {
        static readonly Vector2Int[] Steps = { Vector2Int.up, Vector2Int.right, Vector2Int.down, Vector2Int.left };

        static readonly Vector2Int[] Around =
        {
            new Vector2Int(-1, -1), new Vector2Int(0, -1), new Vector2Int(1, -1), new Vector2Int(-1, 0),
            new Vector2Int(1, 0), new Vector2Int(-1, 1), new Vector2Int(0, 1), new Vector2Int(1, 1),
        };

        readonly System.Random rng;
        readonly Dictionary<Vector2Int, bool> plates = new Dictionary<Vector2Int, bool>(); // cell → is a trap
        readonly HashSet<Vector2Int> newIsland = new HashSet<Vector2Int>();

        /// <summary>The beaver's cell; it starts in the centre, (0, 0).</summary>
        public Vector2Int Beaver { get; private set; }

        /// <summary>+1 per safe landing. Any other landing ends the game, so this also counts the hops.</summary>
        public int Score { get; private set; }

        public Objective Objective { get; private set; }

        /// <summary>Null until the island changes, which happens once.</summary>
        public IslandChange Change { get; private set; }

        public bool Won { get; private set; }
        public bool Lost { get; private set; }

        public IEnumerable<Vector2Int> Plates => plates.Keys;

        public Field(int seed)
        {
            rng = new System.Random(seed);
            int rim = FieldConfig.IslandSize / 2;
            var ring = new List<Vector2Int>();
            foreach (Vector2Int cell in Island(Vector2Int.zero))
            {
                plates[cell] = false;
                if (Math.Max(Math.Abs(cell.x), Math.Abs(cell.y)) == rim) ring.Add(cell);
            }

            // Traps only on the outer ring, never next to each other (diagonals included): the beaver
            // starts in the centre, so the first hop is always safe.
            int traps = rng.Next(FieldConfig.TrapsMin, FieldConfig.TrapsMax + 1);
            for (int i = ring.Count - 1; i > 0; i--)
            {
                int j = rng.Next(i + 1);
                Vector2Int swap = ring[i];
                ring[i] = ring[j];
                ring[j] = swap;
            }
            foreach (Vector2Int cell in ring)
            {
                if (traps == 0) break;
                if (TrapAround(cell)) continue;
                plates[cell] = true;
                traps--;
            }
        }

        /// <summary>The step of a beaver turned to <paramref name="yawDegrees"/>, the nearest of the four.
        /// Unity's yaw: 0 faces world +z (grid +y), 90 faces world +x (grid +x).</summary>
        public static Vector2Int Facing(float yawDegrees)
        {
            int quarter = (int)Math.Floor(yawDegrees / 90f + 0.5f) % 4;
            return Steps[quarter < 0 ? quarter + 4 : quarter];
        }

        public HopOutcome OutcomeAt(Vector2Int cell)
        {
            bool trap;
            if (!plates.TryGetValue(cell, out trap)) return HopOutcome.Void;
            return trap ? HopOutcome.Trap : HopOutcome.Safe;
        }

        public bool IsTrap(Vector2Int cell) => OutcomeAt(cell) == HopOutcome.Trap;

        /// <summary>Plates, traps included, in the 8 cells around <paramref name="cell"/>.</summary>
        public int PlatesAround(Vector2Int cell)
        {
            int count = 0;
            foreach (Vector2Int offset in Around)
                if (plates.ContainsKey(cell + offset)) count++;
            return count;
        }

        /// <summary>
        /// One hop of one step. The plate left goes at once. A safe landing scores 1, then wins on the
        /// new island or may change the island; a trap or the void ends the game (the trap plate stays:
        /// the view drops it with the beaver).
        /// </summary>
        public HopOutcome Hop(Vector2Int step)
        {
            if (Won || Lost) throw new InvalidOperationException("The game is over.");
            if (Math.Abs(step.x) + Math.Abs(step.y) != 1)
                throw new ArgumentException("A hop is one step in one of four directions.", nameof(step));

            plates.Remove(Beaver);
            Beaver += step;
            HopOutcome outcome = OutcomeAt(Beaver);
            if (outcome != HopOutcome.Safe)
            {
                Lost = true;
                return outcome;
            }

            Score++;
            if (Change != null)
            {
                Won = newIsland.Contains(Beaver);
                return outcome;
            }
            if (Score >= FieldConfig.ObjectiveHop) Objective = Objective.LeaveTwo;
            // With no safe hop left the beaver could only fall, through no fault of the player's:
            // that changes the island too.
            if (PlatesAround(Beaver) <= FieldConfig.ChangeAtPlatesAround || Score >= FieldConfig.ChangeAtHop
                || !SafeHopLeft())
                ChangeIsland();
            return outcome;
        }

        void ChangeIsland()
        {
            Vector2Int ahead = FieldConfig.UpScreen[rng.Next(FieldConfig.UpScreen.Length)];
            Vector2Int side = new Vector2Int(-ahead.y, ahead.x);
            var change = new IslandChange(ahead, Beaver + ahead * FieldConfig.NewIslandDistance);

            // Every old plate goes except the beaver's and its 4 neighbours [as in the original].
            foreach (Vector2Int cell in plates.Keys)
            {
                Vector2Int d = cell - Beaver;
                if (Math.Abs(d.x) + Math.Abs(d.y) > 1) change.Removed.Add(cell);
            }
            foreach (Vector2Int cell in change.Removed) plates.Remove(cell);

            // The bridge fills the rows up to the new island and replaces the + plate in front [as in
            // the original]. Its first plate straight ahead is never a trap: with fewer traps than the
            // bridge is wide, a safe path then always runs across.
            int rows = FieldConfig.NewIslandDistance - FieldConfig.IslandSize / 2 - 1;
            int half = FieldConfig.BridgeWidth / 2;
            int traps = 0;
            for (int row = 1; row <= rows; row++)
            {
                int rowTraps = 0;
                for (int col = -half; col <= half; col++)
                {
                    Vector2Int cell = Beaver + ahead * row + side * col;
                    bool entry = row == 1 && col == 0;
                    bool trap = !entry && traps < FieldConfig.BridgeTrapsMax && rowTraps < FieldConfig.BridgeWidth - 1
                        && rng.NextDouble() < FieldConfig.BridgeTrapChance;
                    if (trap)
                    {
                        traps++;
                        rowTraps++;
                    }
                    if (plates.ContainsKey(cell)) change.Removed.Add(cell);
                    plates[cell] = trap;
                    change.Bridge.Add(cell);
                }
            }

            foreach (Vector2Int cell in Island(change.NewCentre))
            {
                plates[cell] = false;
                newIsland.Add(cell);
                change.NewIsland.Add(cell);
            }
            Objective = Objective.CrossBridge;
            Change = change;
        }

        static List<Vector2Int> Island(Vector2Int centre)
        {
            int rim = FieldConfig.IslandSize / 2;
            var cells = new List<Vector2Int>();
            for (int y = -rim; y <= rim; y++)
                for (int x = -rim; x <= rim; x++)
                    cells.Add(centre + new Vector2Int(x, y));
            return cells;
        }

        bool TrapAround(Vector2Int cell)
        {
            foreach (Vector2Int offset in Around)
                if (IsTrap(cell + offset)) return true;
            return false;
        }

        bool SafeHopLeft()
        {
            foreach (Vector2Int step in Steps)
                if (OutcomeAt(Beaver + step) == HopOutcome.Safe) return true;
            return false;
        }
    }
}
