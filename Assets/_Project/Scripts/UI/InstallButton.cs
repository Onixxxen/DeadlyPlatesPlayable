using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The INSTALL button top-right: a tap on it opens the store. The tap comes through
    /// <see cref="PlayableInput.Tapped"/> like every other tap, so the PlayMode journey presses it with
    /// <see cref="PlayableInput.Simulate"/> and the build the same way; no uGUI click is involved.
    /// A tap on it is not a gameplay tap: whoever plays on <see cref="PlayableInput.Tapped"/> skips a tap
    /// where <see cref="Covers"/> is true. A full-screen CTA that takes over (the end card) hides this
    /// object, or one tap there would open the store twice.
    /// </summary>
    public sealed class InstallButton : MonoBehaviour
    {
        private static InstallButton shown;

        private RectTransform rect;
        private Camera canvasCamera;

        /// <summary>Whether a screen point (pixels, origin bottom-left) is on the button while it shows.</summary>
        public static bool Covers(Vector2 screen) =>
            shown != null && RectTransformUtility.RectangleContainsScreenPoint(shown.rect, screen, shown.canvasCamera);

        private void Awake()
        {
            rect = (RectTransform)transform;
            canvasCamera = GetComponentInParent<Canvas>().worldCamera;
        }

        private void OnEnable()
        {
            shown = this;
            PlayableInput.Tapped += OnTap;
        }

        private void OnDisable()
        {
            PlayableInput.Tapped -= OnTap;
            if (shown == this) shown = null;
        }

        private void OnTap(Vector2 screen)
        {
            if (Covers(screen)) PlayableAd.Install();
        }
    }
}
