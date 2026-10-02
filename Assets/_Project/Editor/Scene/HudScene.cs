using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

namespace Playable.Editor
{
    /// <summary>
    /// The score's part of the main scene: the score counter top-left — a pill like INSTALL's with the number in
    /// Benzin, reading 0 — and the "+1"s its <see cref="ScoreHud"/> pops over the landings: HudConfig.Popups inactive
    /// texts on the canvas, used in turn, so nothing is instantiated at runtime.
    /// </summary>
    public static class HudScene
    {
        [SceneContribution(40)]
        public static void Contribute(BaseScene scene)
        {
            var font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(ArtImport.FontAsset);
            Transform canvas = scene.Canvas.transform;

            var panel = new GameObject("Score", typeof(RectTransform), typeof(Image), typeof(ScoreHud));
            panel.transform.SetParent(canvas, false);
            var rect = (RectTransform)panel.transform;
            rect.anchorMin = rect.anchorMax = rect.pivot = new Vector2(0f, 1f);
            rect.anchoredPosition = HudConfig.ScoreOffset;
            rect.sizeDelta = HudConfig.ScoreSize;
            var image = panel.GetComponent<Image>();
            image.sprite = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/UISprite.psd"); // INSTALL's rounded corners
            image.type = Image.Type.Sliced;
            image.color = HudConfig.ScorePanel;
            image.raycastTarget = false;

            TextMeshProUGUI score = Text(panel.transform, "Number", font, "0", HudConfig.ScoreFontSize, Color.white);
            var number = (RectTransform)score.transform;
            number.anchorMin = Vector2.zero;
            number.anchorMax = Vector2.one;
            number.offsetMin = number.offsetMax = Vector2.zero;

            var hud = new SerializedObject(panel.GetComponent<ScoreHud>());
            hud.FindProperty("score").objectReferenceValue = score;
            SerializedProperty popups = hud.FindProperty("popups");
            popups.arraySize = HudConfig.Popups;
            for (int i = 0; i < HudConfig.Popups; i++)
            {
                TextMeshProUGUI plus = Text(canvas, $"Plus one {i}", font, HudConfig.PopupText, HudConfig.PopupFontSize, HudConfig.PopupColor);
                popups.GetArrayElementAtIndex(i).objectReferenceValue = plus.gameObject.AddComponent<ScorePopup>();
                plus.gameObject.SetActive(false);
            }
            hud.ApplyModifiedPropertiesWithoutUndo();
        }

        private static TextMeshProUGUI Text(Transform parent, string name, TMP_FontAsset font, string value, float size, Color color)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(TextMeshProUGUI));
            go.transform.SetParent(parent, false);
            var text = go.GetComponent<TextMeshProUGUI>();
            text.font = font;
            text.text = value;
            text.fontSize = size;
            text.color = color;
            text.alignment = TextAlignmentOptions.Center;
            text.textWrappingMode = TextWrappingModes.NoWrap;
            text.raycastTarget = false;
            return text;
        }
    }
}
