using System;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;

namespace Playable.Tests
{
    /// <summary>The field rules. A rule that rests on chance is checked over many seeds.</summary>
    public class FieldTests
    {
        const int Seeds = 200;

        static readonly Vector2Int Up = Vector2Int.up, Down = Vector2Int.down, Left = Vector2Int.left, Right = Vector2Int.right;

        /// <summary>Six hops round the centre: all inside the rim, so safe whatever the seed, and never at a
        /// corner, so the island changes on the sixth.</summary>
        static readonly Vector2Int[] RoundTheCentre = { Right, Up, Left, Left, Down, Down };

        static Vector2Int V(int x, int y) => new Vector2Int(x, y);

        [Test]
        public void TheBeaverStartsInTheCentreOfAFiveByFiveIsland_WithSafePlatesAllAround()
        {
            for (int seed = 0; seed < Seeds; seed++)
            {
                var field = new Field(seed);
                Assert.AreEqual(Vector2Int.zero, field.Beaver);
                var plates = new List<Vector2Int>(field.Plates);
                Assert.AreEqual(25, plates.Count);
                foreach (Vector2Int cell in plates)
                    Assert.That(Math.Abs(cell.x) <= 2 && Math.Abs(cell.y) <= 2, $"seed {seed}: {cell} off the island");
                for (int x = -1; x <= 1; x++)
                    for (int y = -1; y <= 1; y++)
                        Assert.AreEqual(HopOutcome.Safe, field.OutcomeAt(V(x, y)), $"seed {seed}: {V(x, y)}");
            }
        }

        [Test]
        public void TrapsAreTwoToFour_OnTheRimOnly_NeverNextToEachOther()
        {
            var counts = new HashSet<int>();
            for (int seed = 0; seed < Seeds; seed++)
            {
                var traps = new List<Vector2Int>();
                var field = new Field(seed);
                foreach (Vector2Int cell in field.Plates)
                    if (field.IsTrap(cell)) traps.Add(cell);
                counts.Add(traps.Count);
                foreach (Vector2Int a in traps)
                {
                    Assert.AreEqual(2, Math.Max(Math.Abs(a.x), Math.Abs(a.y)), $"seed {seed}: trap {a} off the rim");
                    foreach (Vector2Int b in traps)
                        Assert.That(a == b || Math.Max(Math.Abs(a.x - b.x), Math.Abs(a.y - b.y)) > 1,
                            $"seed {seed}: traps {a} and {b} touch");
                }
            }
            CollectionAssert.AreEquivalent(new[] { 2, 3, 4 }, counts);
        }

        [TestCase(0f, 0, 1)]
        [TestCase(44f, 0, 1)]
        [TestCase(46f, 1, 0)]
        [TestCase(90f, 1, 0)]
        [TestCase(180f, 0, -1)]
        [TestCase(270f, -1, 0)]
        [TestCase(-90f, -1, 0)]
        [TestCase(359f, 0, 1)]
        [TestCase(450f, 1, 0)]
        public void Facing_IsTheNearestOfTheFourSteps(float yaw, int x, int y)
        {
            Assert.AreEqual(V(x, y), Field.Facing(yaw));
        }

        [Test]
        public void AHopOntoAPlate_IsSafe_ScoresOne_AndThePlateLeftGoesAtOnce()
        {
            var field = new Field(FieldConfig.Seed);
            Assert.AreEqual(HopOutcome.Safe, field.Hop(Up));
            Assert.AreEqual(V(0, 1), field.Beaver);
            Assert.AreEqual(1, field.Score);
            Assert.AreEqual(HopOutcome.Void, field.OutcomeAt(Vector2Int.zero));
            Assert.IsFalse(field.Won || field.Lost);
        }

        [Test]
        public void AHopOntoATrap_LosesWithoutScoring_AndTheTrapStaysForTheViewToDrop()
        {
            Field field = FieldWhere(f => f.IsTrap(V(2, 0)));
            Walk(field, Right);
            Assert.AreEqual(HopOutcome.Trap, field.Hop(Right));
            Assert.IsTrue(field.Lost);
            Assert.AreEqual(1, field.Score);
            Assert.IsTrue(field.IsTrap(V(2, 0)));
        }

        [Test]
        public void AHopIntoTheVoid_LosesWithoutScoring()
        {
            var field = new Field(FieldConfig.Seed);
            Walk(field, Up);
            Assert.AreEqual(HopOutcome.Void, field.Hop(Down), "the start plate went with the first hop");
            Assert.IsTrue(field.Lost);
            Assert.AreEqual(1, field.Score);
        }

        [Test]
        public void TheIslandChanges_WhenAtMostTwoPlatesAreLeftAround()
        {
            // Up to the corner (2, 2): the plates it came by are gone, only (2, 1) is left around, on the
            // fourth hop and with a safe hop still there — so neither of the other triggers.
            Field field = FieldWhere(f => !f.IsTrap(V(1, 2)) && !f.IsTrap(V(2, 2)) && !f.IsTrap(V(2, 1)));
            Walk(field, Right, Up, Up);
            Assert.IsNull(field.Change);
            Walk(field, Right);
            Assert.IsNotNull(field.Change);
        }

        [Test]
        public void TheIslandChanges_OnTheSixthHop_AtTheLatest()
        {
            var field = new Field(FieldConfig.Seed);
            Walk(field, Right, Up, Left, Left, Down);
            Assert.IsNull(field.Change);
            Walk(field, Down);
            Assert.IsNotNull(field.Change);
        }

        [Test]
        public void TheIslandChanges_WhenNoSafeHopIsLeft()
        {
            // (2, 0) between two traps, walked into from the inside: only traps and the void around it,
            // yet four plates there and two hops made.
            Field field = FieldWhere(f => f.IsTrap(V(2, 1)) && f.IsTrap(V(2, -1)));
            Walk(field, Right, Right);
            Assert.IsNotNull(field.Change);
        }

        [Test]
        public void TheChange_KeepsTheBeaversPlus_AndBridgesToANewIslandUpTheScreen_WithASafePathAcross()
        {
            int bridgesWithTraps = 0;
            for (int seed = 0; seed < Seeds; seed++)
            {
                string at = $"seed {seed}";
                var field = new Field(seed);
                Walk(field, Right, Up, Left, Left, Down);
                var before = new Dictionary<Vector2Int, bool>();
                foreach (Vector2Int cell in field.Plates)
                    if (cell != field.Beaver) before[cell] = field.IsTrap(cell);
                Walk(field, Down);

                IslandChange change = field.Change;
                Vector2Int beaver = field.Beaver, ahead = change.Direction, side = new Vector2Int(-ahead.y, ahead.x);
                CollectionAssert.Contains(FieldConfig.UpScreen, ahead, at);
                Assert.AreEqual(beaver + ahead * 6, change.NewCentre, at);

                // The bridge: three rows of three from the beaver up to the new island's edge.
                var bridge = new List<Vector2Int>();
                for (int row = 1; row <= 3; row++)
                    for (int col = -1; col <= 1; col++)
                        bridge.Add(beaver + ahead * row + side * col);
                CollectionAssert.AreEqual(bridge, change.Bridge, at);
                int traps = 0;
                for (int row = 0; row < 3; row++)
                {
                    int rowTraps = 0;
                    for (int col = 0; col < 3; col++)
                        if (field.IsTrap(bridge[row * 3 + col])) rowTraps++;
                    Assert.Less(rowTraps, 3, $"{at}: a whole row of traps");
                    traps += rowTraps;
                }
                Assert.LessOrEqual(traps, 2, at);
                if (traps > 0) bridgesWithTraps++;

                Assert.AreEqual(25, change.NewIsland.Count, at);
                foreach (Vector2Int cell in change.NewIsland)
                {
                    Vector2Int d = cell - change.NewCentre;
                    Assert.That(Math.Abs(d.x) <= 2 && Math.Abs(d.y) <= 2 && !field.IsTrap(cell), $"{at}: {cell}");
                }

                // Of the old plates only the beaver's + stands, as it was; every other one is in Removed.
                var standing = new HashSet<Vector2Int>();
                foreach (KeyValuePair<Vector2Int, bool> plate in before)
                {
                    Vector2Int d = plate.Key - beaver;
                    if (Math.Abs(d.x) + Math.Abs(d.y) > 1 || bridge.Contains(plate.Key)) continue;
                    standing.Add(plate.Key);
                    Assert.AreEqual(plate.Value, field.IsTrap(plate.Key), $"{at}: {plate.Key}");
                }
                var expected = new HashSet<Vector2Int>(standing);
                expected.UnionWith(change.Bridge);
                expected.UnionWith(change.NewIsland);
                CollectionAssert.AreEquivalent(expected, new List<Vector2Int>(field.Plates), at);
                var gone = new HashSet<Vector2Int>(before.Keys);
                gone.ExceptWith(standing);
                CollectionAssert.AreEquivalent(gone, change.Removed, at);

                Assert.IsNotNull(StepsAcross(field), $"{at}: no safe path across");
            }
            Assert.That(bridgesWithTraps > 0 && bridgesWithTraps < Seeds, "bridge traps come by chance");
        }

        [Test]
        public void LandingOnTheNewIsland_IsTheWin()
        {
            var field = new Field(FieldConfig.Seed);
            Walk(field, RoundTheCentre);
            List<Vector2Int> steps = StepsAcross(field);
            foreach (Vector2Int step in steps)
            {
                Assert.IsFalse(field.Won, "won before the new island");
                Walk(field, step);
            }
            Assert.IsTrue(field.Won);
            Assert.IsFalse(field.Lost);
            Assert.AreEqual(RoundTheCentre.Length + steps.Count, field.Score);
        }

        [Test]
        public void TheObjectiveAppearsAfterTheThirdHop_AndTurnsToTheBridgeWhenTheIslandChanges()
        {
            var field = new Field(FieldConfig.Seed);
            Walk(field, Right, Up);
            Assert.AreEqual(Objective.None, field.Objective);
            Walk(field, Left);
            Assert.AreEqual(Objective.LeaveTwo, field.Objective);
            Walk(field, Left, Down, Down);
            Assert.AreEqual(Objective.CrossBridge, field.Objective);
        }

        [Test]
        public void TheSameSeed_GivesTheSameField()
        {
            var layouts = new HashSet<string>();
            for (int seed = 0; seed < 20; seed++)
            {
                Field a = new Field(seed), b = new Field(seed);
                Assert.AreEqual(Layout(a), Layout(b));
                layouts.Add(Layout(a));
                Walk(a, RoundTheCentre);
                Walk(b, RoundTheCentre);
                Assert.AreEqual(Layout(a), Layout(b), "after the island change");
            }
            Assert.Greater(layouts.Count, 1, "the seed makes the field");
        }

        [Test]
        public void ThePlayablesSeed_PutsTrapsOnTheBridge()
        {
            var field = new Field(FieldConfig.Seed);
            Walk(field, RoundTheCentre);
            Assert.That(field.Change.Bridge.Exists(field.IsTrap), "the playable's bridge carries traps");
        }

        /// <summary>The first seed's field with the layout a test needs.</summary>
        static Field FieldWhere(Func<Field, bool> wanted)
        {
            for (int seed = 0; seed < 1000; seed++)
            {
                var field = new Field(seed);
                if (wanted(field)) return field;
            }
            throw new AssertionException("no seed below 1000 gives that layout");
        }

        static void Walk(Field field, params Vector2Int[] steps)
        {
            foreach (Vector2Int step in steps)
                Assert.AreEqual(HopOutcome.Safe, field.Hop(step), $"the hop {step} onto {field.Beaver}");
        }

        /// <summary>A shortest way over safe plates from the beaver onto the new island, or null.</summary>
        static List<Vector2Int> StepsAcross(Field field)
        {
            var goal = new HashSet<Vector2Int>(field.Change.NewIsland);
            var cameFrom = new Dictionary<Vector2Int, Vector2Int> { { field.Beaver, field.Beaver } };
            var queue = new Queue<Vector2Int>();
            queue.Enqueue(field.Beaver);
            while (queue.Count > 0)
            {
                Vector2Int cell = queue.Dequeue();
                if (goal.Contains(cell))
                {
                    var steps = new List<Vector2Int>();
                    for (; cell != field.Beaver; cell = cameFrom[cell]) steps.Insert(0, cell - cameFrom[cell]);
                    return steps;
                }
                foreach (Vector2Int step in new[] { Up, Right, Down, Left })
                {
                    Vector2Int next = cell + step;
                    if (field.OutcomeAt(next) != HopOutcome.Safe || cameFrom.ContainsKey(next)) continue;
                    cameFrom[next] = cell;
                    queue.Enqueue(next);
                }
            }
            return null;
        }

        /// <summary>The plates as text, traps marked, in a fixed order.</summary>
        static string Layout(Field field)
        {
            var cells = new List<string>();
            foreach (Vector2Int cell in field.Plates) cells.Add($"{cell.x},{cell.y}{(field.IsTrap(cell) ? "T" : "")}");
            cells.Sort(StringComparer.Ordinal);
            return string.Join(" ", cells);
        }
    }
}
