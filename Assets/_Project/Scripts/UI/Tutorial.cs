using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The tutorial. When input first opens (<see cref="HopController.Ready"/>) the hand and "TAP TO JUMP!"
    /// scale in, the hand pulsing; the hop of a tap (<see cref="HopController.HopStarted"/>) sends them away, and later
    /// Readys do not bring them back. With input open and no tap the hand alone returns after TutorialConfig.ReturnSeconds,
    /// and after IdleSeconds <see cref="IdleTimedOut"/> is raised, once. The clock runs only while a tap would hop: a hop
    /// in the air, a fall, closed input (the win, an end card) never count as idle. It counts from the last Ready — a tap
    /// closes input and only a Ready opens it again — not from an Update that saw input closed: one long frame can start
    /// and land a hop between two Updates.
    /// </summary>
    public sealed class Tutorial : MonoBehaviour
    {
        /// <summary>IdleSeconds with input open and no tap: the player is not playing, the end card takes over.
        /// Raised once; the tutorial is gone by then.</summary>
        public static event Action IdleTimedOut;

        [SerializeField] private HopController hop;
        [SerializeField] private Transform hand; // HandPointer.png, at scale 0 until shown
        [SerializeField] private Transform hint; // the text over its shadow, at scale 0 until shown

        private bool introduced;
        private bool handShown;
        private bool pulsing;
        private float pulseStart;
        private float openedAt; // Time.time of the last Ready: the idle clock's zero
        private bool timedOut;

        private void OnEnable()
        {
            HopController.Ready += OnReady;
            HopController.HopStarted += Hide;
        }

        private void OnDisable()
        {
            HopController.Ready -= OnReady;
            HopController.HopStarted -= Hide;
        }

        private void Update()
        {
            if (pulsing) hand.localScale = Vector3.one * Pulse(Time.time - pulseStart);
            if (timedOut || !hop.InputOpen) return;
            float idle = Time.time - openedAt;
            if (idle >= TutorialConfig.ReturnSeconds && !handShown) Show(false);
            if (idle < TutorialConfig.IdleSeconds) return;
            timedOut = true;
            Hide();
            if (IdleTimedOut != null) IdleTimedOut();
        }

        private void OnReady()
        {
            openedAt = Time.time;
            if (introduced) return;
            introduced = true;
            Show(true);
        }

        private void Show(bool withHint)
        {
            handShown = true;
            ScaleIn(hand, () =>
            {
                pulsing = true;
                pulseStart = Time.time;
            });
            if (withHint) ScaleIn(hint, null);
        }

        /// <summary>Both out; a scale-in still running is replaced and never starts the pulse.</summary>
        private void Hide()
        {
            handShown = false;
            pulsing = false;
            Tween.Scale(hand, Vector3.zero, TutorialConfig.ScaleDownSeconds);
            Tween.Scale(hint, Vector3.zero, TutorialConfig.ScaleDownSeconds);
        }

        private static void ScaleIn(Transform target, Action done)
        {
            target.localScale = Vector3.zero;
            Tween.Scale(target, Vector3.one * TutorialConfig.Overshoot, TutorialConfig.ScaleUpSeconds, Ease.OutQuad, 0f,
                () => Tween.Scale(target, Vector3.one, TutorialConfig.ScaleDownSeconds, Ease.OutQuad, 0f, done));
        }

        /// <summary>1 at the start of each beat, 1 − PulseDepth in its middle, smooth at both ends.</summary>
        private static float Pulse(float seconds) =>
            1f - TutorialConfig.PulseDepth * (1f - Mathf.Cos(2f * Mathf.PI * seconds / TutorialConfig.PulseSeconds)) / 2f;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            IdleTimedOut = null;
        }
    }
}
