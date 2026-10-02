using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The game's one verb. Once the first island is in, the beaver drops onto the centre plate and turns;
    /// the cell it faces is the target (<see cref="PlatesView.Target"/>: the void glows nothing). A tap hops it there:
    /// the field resolves the hop at once and the beaver plays it. A safe landing opens input again; a trap drops
    /// away with the beaver after its dip, a hop into the void falls on its own, and the game is lost. Taps during
    /// a hop or a fall, and taps on INSTALL, are not hops.
    /// </summary>
    [RequireComponent(typeof(BeaverView))]
    public sealed class HopController : MonoBehaviour
    {
        /// <summary>Input opened: the beaver stands on a plate, turning, and a tap hops. Raised after the drop-in and
        /// after every safe landing, unless <see cref="CloseInput"/> came first; during a <see cref="Hold"/>, at its
        /// release.</summary>
        public static event Action Ready;

        /// <summary>A tap started a hop; input stays closed until it lands.</summary>
        public static event Action HopStarted;

        /// <summary>A hop landed safely on this cell; the int is the safe hops so far — the score. The drop-in is not a hop.</summary>
        public static event Action<Vector2Int, int> Landed;

        /// <summary>The beaver began to fall, off a trap or into the void; it sinks over PlateConfig.DropSeconds. The game is lost.</summary>
        public static event Action Fell;

        [SerializeField] private PlatesView plates;

        private BeaverView beaver;
        private bool turning;
        private bool open;
        private bool closed;
        private bool held;
        private bool waiting; // input would have opened during a hold

        /// <summary>A gameplay tap now would hop.</summary>
        public bool InputOpen => open;

        /// <summary>No hop ever again (the win, the end card); a hop in the air still lands.</summary>
        public void CloseInput()
        {
            closed = true;
            open = false;
        }

        /// <summary>No hop until <see cref="Release"/> (the island change, while its plates come in): input that would
        /// open meanwhile opens at the release. A hop in the air still lands.</summary>
        public void Hold()
        {
            held = true;
            if (!open) return;
            open = false;
            waiting = true;
            plates.Target = null;
        }

        public void Release()
        {
            held = false;
            if (!waiting) return;
            waiting = false;
            Open();
        }

        private void Awake() => beaver = GetComponent<BeaverView>();

        private void OnEnable()
        {
            PlatesView.WaveFinished += DropIn;
            PlayableInput.Tapped += OnTap;
        }

        private void OnDisable()
        {
            PlatesView.WaveFinished -= DropIn;
            PlayableInput.Tapped -= OnTap;
        }

        private void Update()
        {
            if (!turning) return;
            beaver.Turn(HopConfig.TurnSpeed * Time.deltaTime);
            if (open) Aim();
        }

        private void DropIn()
        {
            Vector2Int centre = plates.Field.Beaver;
            beaver.DropIn(SpotOn(centre), () =>
            {
                turning = true;
                Open();
                Touchdown(centre);
            });
        }

        private void OnTap(Vector2 screen)
        {
            if (!open || InstallButton.Covers(screen)) return;
            open = false;
            Vector2Int from = plates.Field.Beaver;
            Vector2Int step = Field.Facing(beaver.Yaw); // the same yaw Aim showed this frame
            HopOutcome outcome = plates.Field.Hop(step);
            Vector2Int to = from + step;
            plates.Remove(from, HopConfig.LeftPlateDelay);
            if (HopStarted != null) HopStarted();
            beaver.Hop(SpotOn(to), () => Arrive(to, outcome));
        }

        private void Arrive(Vector2Int cell, HopOutcome outcome)
        {
            plates.Target = null;
            if (outcome == HopOutcome.Void)
            {
                Fall();
                return;
            }
            if (outcome == HopOutcome.Trap)
            {
                // At the bottom of the dip, as in the original: the plate gives way under the beaver.
                Tween.Delay(this, PlateConfig.DipDownSeconds, () =>
                {
                    Fall();
                    plates.Drop(cell);
                });
            }
            else
            {
                if (Landed != null) Landed(cell, plates.Field.Score);
                Open();
            }
            Touchdown(cell);
        }

        /// <summary>The look of a landing — plate and beaver dip, a smoke puff, Walk — after the game has moved on, so
        /// that nothing in it can hold the game up.</summary>
        private void Touchdown(Vector2Int cell)
        {
            plates.Dip(cell);
            beaver.Land();
        }

        private void Fall()
        {
            turning = false;
            if (Fell != null) Fell();
            beaver.Fall();
        }

        private void Open()
        {
            if (closed) return;
            if (held)
            {
                waiting = true;
                return;
            }
            open = true;
            Aim();
            if (Ready != null) Ready();
        }

        /// <summary>The faced cell glows; set only on a change, a glow fades in over PlateConfig.GlowSeconds.</summary>
        private void Aim()
        {
            Vector2Int faced = plates.Field.Beaver + Field.Facing(beaver.Yaw);
            Vector2Int? target = plates.Target;
            if (!target.HasValue || target.Value != faced) plates.Target = faced;
        }

        /// <summary>Where the beaver stands on a cell (FieldConfig: cell (x, y) at world (x, 0, y) · Spacing).</summary>
        private static Vector3 SpotOn(Vector2Int cell) =>
            new Vector3(cell.x * FieldConfig.Spacing, HopConfig.StandHeight, cell.y * FieldConfig.Spacing);

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            Ready = null;
            HopStarted = null;
            Landed = null;
            Fell = null;
        }
    }
}
