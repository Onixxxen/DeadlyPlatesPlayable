using System;
using System.Collections.Generic;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The plates on screen, drawn from the field state, and the only owner of plate objects. It
    /// makes the playable's <see cref="Field"/> and pops its first island in as a wave from the beaver's cell;
    /// after that it only does what it is told: the hop points the glow with <see cref="Target"/>, dips,
    /// drops and removes plates; the island change removes the old plates and pops the bridge and the
    /// new island in. The plates are copies of two inactive templates the scene builder made (PlatesScene).
    /// </summary>
    public sealed class PlatesView : MonoBehaviour
    {
        /// <summary>The first island has popped in completely (raised once): the beaver may drop onto it.</summary>
        public static event Action WaveFinished;

        /// <summary>A plate popped, at the top of its bounce, at its world position: one per plate.</summary>
        public static event Action<Vector3> PlateSpawned;

        /// <summary>A removed plate began to crumble, at its world position. Not raised for one that drops away.</summary>
        public static event Action<Vector3> PlateRemoved;

        [SerializeField] private PlateView plate;
        [SerializeField] private PlateView trap;

        // A target before anyone drives it (the placeholder beaver's), shown once the first island is in.
        [SerializeField] private bool glowAtStart;
        [SerializeField] private Vector2Int startTarget;

        private readonly Dictionary<Vector2Int, PlateView> plates = new Dictionary<Vector2Int, PlateView>();
        private Vector2Int? target;

        /// <summary>The playable's field (FieldConfig.Seed): the game plays on it, this draws it.</summary>
        public Field Field { get; private set; }

        /// <summary>The cell whose plate glows, or none. A cell with no plate (the void) glows nothing; a plate
        /// popping in on the target cell glows at once.</summary>
        public Vector2Int? Target
        {
            get { return target; }
            set
            {
                if (target.HasValue) SetGlow(target.Value, false);
                target = value;
                if (target.HasValue) SetGlow(target.Value, true);
            }
        }

        private void Awake()
        {
            Field = new Field(FieldConfig.Seed);
            LogTraps();
            PopIn(Field.Plates, Field.Beaver, () =>
            {
                // Rebuilt: Playworks deserializes a Vector2Int field into a bare {x, y} without Vector2Int's
                // Equals and GetHashCode, and as a key it matched no plate (traced in the build, 2026-10-01).
                if (glowAtStart) Target = new Vector2Int(startTarget.x, startTarget.y);
                if (WaveFinished != null) WaveFinished();
            });
        }

        /// <summary>
        /// Pops the field's plates on these cells in as a staggered wave: a cell starts WaveStep later per cell
        /// of distance (|dx| + |dy|) from <paramref name="from"/>, whatever order the cells come in. A plate
        /// already on a cell crumbles to make way; a cell the field has no plate on is skipped.
        /// <paramref name="done"/> when the last one has settled.
        /// </summary>
        public void PopIn(IEnumerable<Vector2Int> cells, Vector2Int from, Action done = null)
        {
            int farthest = 0;
            foreach (Vector2Int cell in cells)
            {
                if (Field.OutcomeAt(cell) == HopOutcome.Void) continue;
                Remove(cell);
                PlateView view = Create(cell);
                int distance = Math.Abs(cell.x - from.x) + Math.Abs(cell.y - from.y);
                farthest = Math.Max(farthest, distance);
                view.PopIn(distance * PlateConfig.WaveStep, () => { if (PlateSpawned != null) PlateSpawned(view.transform.position); });
            }
            if (done != null) Tween.Delay(this, farthest * PlateConfig.WaveStep + PlateConfig.PopUpSeconds + PlateConfig.PopDownSeconds, done);
        }

        /// <summary>The plate on <paramref name="cell"/> crumbles after <paramref name="delay"/>. The cell is free
        /// at once: a PopIn there makes a new plate.</summary>
        public void Remove(Vector2Int cell, float delay = 0f)
        {
            PlateView view = Take(cell);
            if (view != null) view.Crumble(delay, () => { if (PlateRemoved != null) PlateRemoved(view.transform.position); });
        }

        /// <summary>The landing dip: down PlateConfig.DipDepth and back.</summary>
        public void Dip(Vector2Int cell)
        {
            PlateView view = Plate(cell);
            if (view != null) view.Dip();
        }

        /// <summary>A trap's plate falls away PlateConfig.DropDistance; the cell is free at once.</summary>
        public void Drop(Vector2Int cell)
        {
            PlateView view = Take(cell);
            if (view != null) view.Drop();
        }

        /// <summary>The plate on <paramref name="cell"/>, or null.</summary>
        public PlateView Plate(Vector2Int cell)
        {
            PlateView view;
            return plates.TryGetValue(cell, out view) ? view : null;
        }

        private PlateView Create(Vector2Int cell)
        {
            bool isTrap = Field.IsTrap(cell);
            PlateView view = Instantiate(isTrap ? trap : plate, transform);
            view.name = $"Plate {cell.x},{cell.y}";
            view.transform.localPosition = new Vector3(cell.x * FieldConfig.Spacing, 0f, cell.y * FieldConfig.Spacing);
            view.Show(cell, isTrap);
            plates[cell] = view;
            if (target.HasValue && target.Value == cell) view.Glow(true);
            return view;
        }

        private PlateView Take(Vector2Int cell)
        {
            PlateView view = Plate(cell);
            if (view != null) plates.Remove(cell);
            return view;
        }

        private void SetGlow(Vector2Int cell, bool on)
        {
            PlateView view = Plate(cell);
            if (view != null) view.Glow(on);
        }

        /// <summary>The layout in the log, row by row: the build's console.txt and the PlayMode log must agree
        /// (System.Random and Dictionary order are Playworks' own in the build).</summary>
        private void LogTraps()
        {
            string traps = "";
            int rim = FieldConfig.IslandSize / 2;
            for (int y = rim; y >= -rim; y--)
                for (int x = -rim; x <= rim; x++)
                    if (Field.IsTrap(new Vector2Int(x, y))) traps += $" {x},{y}";
            Debug.Log($"[PlatesView] seed {FieldConfig.Seed}, traps at{traps}");
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            WaveFinished = null;
            PlateSpawned = null;
            PlateRemoved = null;
        }
    }
}
