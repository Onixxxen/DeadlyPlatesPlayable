using TMPro;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The score: the counter top-left reads the safe hops so far and punches when it changes; a "+1" pops
    /// over the plate each one landed on. Both on <see cref="HopController.Landed"/>, whose hops are the score. The
    /// counter, its number and the "+1"s are scene objects the scene builder made (HudScene).
    /// </summary>
    public sealed class ScoreHud : MonoBehaviour
    {
        [SerializeField] private TextMeshProUGUI score;
        [SerializeField] private ScorePopup[] popups; // HudConfig.Popups, used in turn

        private int next;

        private void OnEnable() => HopController.Landed += Show;

        private void OnDisable() => HopController.Landed -= Show;

        private void Show(Vector2Int cell, int hops)
        {
            score.text = hops.ToString();
            Tween.Scale(score.transform, Vector3.one * HudConfig.Punch, HudConfig.PunchUpSeconds, Ease.OutQuad, 0f,
                () => Tween.Scale(score.transform, Vector3.one, HudConfig.PunchDownSeconds, Ease.InOutQuad));
            popups[next].Show(new Vector3(cell.x * FieldConfig.Spacing, HudConfig.PopupHeight, cell.y * FieldConfig.Spacing));
            next = (next + 1) % popups.Length;
        }
    }
}
