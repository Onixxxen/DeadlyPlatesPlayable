using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Playable
{
    /// <summary>
    /// The end card. On <see cref="GameFlow.Ended"/> — won, or fallen — or on <see cref="Tutorial.IdleTimedOut"/>,
    /// whichever comes first, once: gameplay input closes for good, what the card covers goes (INSTALL among it: the card
    /// is the CTA now, and one tap must open the store once), the network hears the game ended, and the card comes in —
    /// the overlay fades in, the window scales in. Once it is in, a tap anywhere opens the store, through
    /// <see cref="PlayableInput.Tapped"/> like INSTALL's taps, and PLAY NOW pulses; a tap during the entry, meant for the
    /// game, opens nothing. Its objects are scene objects the scene builder made (EndCardScene), the card inactive.
    /// </summary>
    public sealed class EndCard : MonoBehaviour
    {
        [SerializeField] private HopController hop;
        [SerializeField] private PlatesView plates; // the score when the player stops playing
        [SerializeField] private GameObject[] covered; // INSTALL, the score counter, the objective banner
        [SerializeField] private Image overlay; // on the card's root, which holds the rest
        [SerializeField] private Transform window;
        [SerializeField] private TextMeshProUGUI title;
        [SerializeField] private TextMeshProUGUI score;
        [SerializeField] private Transform playNow;

        private float pulseStart;

        /// <summary>The card is up, coming in or in.</summary>
        public bool Shown { get; private set; }

        /// <summary>The card is in: a tap opens the store.</summary>
        public bool Tappable { get; private set; }

        private void OnEnable()
        {
            GameFlow.Ended += OnEnded;
            Tutorial.IdleTimedOut += OnIdle;
            PlayableInput.Tapped += OnTap;
        }

        private void OnDisable()
        {
            GameFlow.Ended -= OnEnded;
            Tutorial.IdleTimedOut -= OnIdle;
            PlayableInput.Tapped -= OnTap;
        }

        private void Update()
        {
            if (Tappable) playNow.localScale = Vector3.one * Pulse(Time.time - pulseStart);
        }

        private void OnEnded(bool won, int points) => Show(won ? EndCardConfig.WinTitle : EndCardConfig.FellTitle, points);

        private void OnIdle() => Show(EndCardConfig.IdleTitle, plates.Field.Score);

        private void OnTap(Vector2 screen)
        {
            if (Tappable) PlayableAd.Install();
        }

        private void Show(string heading, int points)
        {
            if (Shown) return;
            Shown = true;
            hop.CloseInput();
            foreach (GameObject part in covered) part.SetActive(false);
            title.text = heading;
            score.text = points.ToString();

            Color full = EndCardConfig.Overlay;
            overlay.color = new Color(full.r, full.g, full.b, 0f);
            overlay.gameObject.SetActive(true);
            Tween.Value(this, EndCardConfig.FadeSeconds, t => overlay.color = new Color(full.r, full.g, full.b, full.a * t));
            window.localScale = Vector3.zero;
            Tween.Scale(window, Vector3.one * EndCardConfig.Overshoot, EndCardConfig.ScaleUpSeconds, Ease.OutQuad, 0f,
                () => Tween.Scale(window, Vector3.one, EndCardConfig.ScaleDownSeconds, Ease.OutQuad, 0f, () =>
                {
                    Tappable = true;
                    pulseStart = Time.time;
                }));
            PlayableAd.GameEnded();
        }

        /// <summary>1 at the start of each beat, PulseScale in its middle, smooth at both ends.</summary>
        private static float Pulse(float seconds) =>
            1f + (EndCardConfig.PulseScale - 1f) * (1f - Mathf.Cos(2f * Mathf.PI * seconds / EndCardConfig.PulseSeconds)) / 2f;
    }
}
