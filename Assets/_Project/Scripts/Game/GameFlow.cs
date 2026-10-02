using System;
using UnityEngine;

namespace Playable
{
    public enum FlowState { Hook, Play, Won, Lost }

    /// <summary>
    /// The game's flow: hook → play (the first hop) → won (a landing on the new island) or lost (a fall). It
    /// reads the field after every safe landing: the objective banner after the 3rd hop, the island change when the
    /// field has made one (<see cref="IslandTransition"/> plays it), the win.
    /// </summary>
    public sealed class GameFlow : MonoBehaviour
    {
        /// <summary>The field changed the island at the landing just made; the transition starts.</summary>
        public static event Action IslandChanged;

        /// <summary>The game is over, won or not, with the score: FlowConfig.WinSeconds after the winning landing, or once
        /// a fall has played (PlateConfig.DropSeconds), so that what follows does not cover it.</summary>
        public static event Action<bool, int> Ended;

        [SerializeField] private PlatesView plates;
        [SerializeField] private HopController hop;
        [SerializeField] private IslandTransition transition;
        [SerializeField] private ObjectiveBanner banner;

        public FlowState State { get; private set; }

        private void OnEnable()
        {
            HopController.HopStarted += OnHopStarted;
            HopController.Landed += OnLanded;
            HopController.Fell += OnFell;
        }

        private void OnDisable()
        {
            HopController.HopStarted -= OnHopStarted;
            HopController.Landed -= OnLanded;
            HopController.Fell -= OnFell;
        }

        private void OnHopStarted()
        {
            if (State == FlowState.Hook) State = FlowState.Play;
        }

        /// <summary>Before HopController opens input again, so a hold or a close here comes first.</summary>
        private void OnLanded(Vector2Int cell, int score)
        {
            Field field = plates.Field;
            if (field.Change == null)
            {
                if (field.Objective == Objective.LeaveTwo) banner.Show(Objective.LeaveTwo);
                return;
            }
            if (!transition.Started)
            {
                transition.Play(field.Change, cell);
                if (IslandChanged != null) IslandChanged();
                return;
            }
            transition.Landed(cell);
            if (!field.Won) return;
            State = FlowState.Won;
            hop.CloseInput();
            Tween.Delay(this, FlowConfig.WinSeconds, () => End(true, score));
        }

        private void OnFell()
        {
            State = FlowState.Lost;
            int score = plates.Field.Score;
            Tween.Delay(this, PlateConfig.DropSeconds, () => End(false, score));
        }

        private static void End(bool won, int score)
        {
            if (Ended != null) Ended(won, score);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            IslandChanged = null;
            Ended = null;
        }
    }
}
