using TMPro;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// One "+1": a text on the canvas kept over a point of the world — the original's BillboardText turned
    /// to the camera, exactly — that pops in, rises and fades, then hides until <see cref="ScoreHud"/> shows it again.
    /// On the canvas rather than in the world: TextMeshProUGUI is what the Playworks build is known to draw.
    /// </summary>
    [RequireComponent(typeof(TextMeshProUGUI))]
    public sealed class ScorePopup : MonoBehaviour
    {
        private TextMeshProUGUI text;
        private Camera view;
        private float plane; // the canvas's distance from the camera
        private Vector3 anchor;
        private float rise;

        private void Awake()
        {
            text = GetComponent<TextMeshProUGUI>();
            Canvas canvas = GetComponentInParent<Canvas>();
            view = canvas.worldCamera;
            plane = canvas.planeDistance;
        }

        /// <summary>Pops in over the world point <paramref name="spot"/>, rises HudConfig.PopupRise and fades out.</summary>
        public void Show(Vector3 spot)
        {
            gameObject.SetActive(true);
            anchor = spot;
            rise = 0f;
            text.alpha = 1f;
            transform.localScale = Vector3.zero;
            Tween.Scale(transform, Vector3.one * HudConfig.PopupOvershoot, HudConfig.PopupUpSeconds, Ease.OutQuad, 0f,
                () => Tween.Scale(transform, Vector3.one, HudConfig.PopupDownSeconds, Ease.InOutQuad));
            Tween.Value(this, HudConfig.PopupSeconds, t =>
            {
                rise = HudConfig.PopupRise * Tween.Eased(Ease.OutQuad, t);
                text.alpha = Mathf.Clamp01((1f - t) * HudConfig.PopupSeconds / HudConfig.PopupFadeSeconds);
            }, Ease.Linear, 0f, () => gameObject.SetActive(false));
        }

        /// <summary>Onto the canvas plane where the camera sees the risen point, every frame: the camera may move.</summary>
        private void LateUpdate()
        {
            Vector3 screen = view.WorldToScreenPoint(anchor + Vector3.up * rise);
            screen.z = plane;
            transform.position = view.ScreenToWorldPoint(screen);
        }
    }
}
