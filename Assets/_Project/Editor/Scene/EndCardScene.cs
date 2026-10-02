using System;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using Object = UnityEngine.Object;

namespace Playable.Editor
{
    /// <summary>
    /// The end card's part of the main scene: the <see cref="EndCard"/> as the canvas's last child, so its card covers
    /// everything there — the overlay over the whole screen with the window in its middle (the title, the score, PLAY
    /// NOW), inactive until it shows. Runs after the contributions it plays with or covers: BeaverScene's HopController,
    /// PlatesScene's PlatesView, HudScene's score, FlowScene's banner, and the base scene's INSTALL.
    /// </summary>
    public static class EndCardScene
    {
        [SceneContribution(50)]
        public static void Contribute(BaseScene scene)
        {
            var hop = Find<HopController>();
            var plates = Find<PlatesView>();
            GameObject[] covered = { Find<InstallButton>().gameObject, Find<ScoreHud>().gameObject, Find<ObjectiveBanner>().gameObject };
            var font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(ArtImport.FontAsset);
            var rounded = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/UISprite.psd"); // INSTALL's rounded corners

            RectTransform root = Stretched("End card", scene.Canvas.transform);
            RectTransform card = Stretched("Card", root);
            var overlay = card.gameObject.AddComponent<Image>();
            overlay.color = EndCardConfig.Overlay;
            overlay.raycastTarget = false;

            RectTransform window = Panel("Window", card, Vector2.zero, EndCardConfig.WindowSize, rounded, EndCardConfig.Window);
            TextMeshProUGUI title = Label("Title", window, EndCardConfig.TitleAt, EndCardConfig.TitleBox, font, EndCardConfig.WinTitle,
                EndCardConfig.TitleSize, EndCardConfig.Ink);
            TextMeshProUGUI score = Label("Score", window, EndCardConfig.ScoreAt, EndCardConfig.ScoreBox, font, "0",
                EndCardConfig.ScoreSize, EndCardConfig.Ink);
            RectTransform playNow = Panel("Play now", window, EndCardConfig.PlayNowAt, EndCardConfig.PlayNowSize, rounded, EndCardConfig.PlayNowPanel);
            Label("Label", playNow, Vector2.zero, EndCardConfig.PlayNowSize, font, EndCardConfig.PlayNow, EndCardConfig.PlayNowFontSize,
                EndCardConfig.PlayNowInk);
            card.gameObject.SetActive(false);

            var endCard = new SerializedObject(root.gameObject.AddComponent<EndCard>());
            endCard.FindProperty("hop").objectReferenceValue = hop;
            endCard.FindProperty("plates").objectReferenceValue = plates;
            SerializedProperty list = endCard.FindProperty("covered");
            list.arraySize = covered.Length;
            for (int i = 0; i < covered.Length; i++) list.GetArrayElementAtIndex(i).objectReferenceValue = covered[i];
            endCard.FindProperty("overlay").objectReferenceValue = overlay;
            endCard.FindProperty("window").objectReferenceValue = window;
            endCard.FindProperty("title").objectReferenceValue = title;
            endCard.FindProperty("score").objectReferenceValue = score;
            endCard.FindProperty("playNow").objectReferenceValue = playNow;
            endCard.ApplyModifiedPropertiesWithoutUndo();
        }

        private static T Find<T>() where T : Object
        {
            var found = Object.FindFirstObjectByType<T>();
            if (found == null) throw new InvalidOperationException($"EndCardScene: в сцене нет {typeof(T).Name} — его вклад в сцену не отработал раньше");
            return found;
        }

        private static RectTransform Stretched(string name, Transform parent)
        {
            var rect = (RectTransform)new GameObject(name, typeof(RectTransform)).transform;
            rect.SetParent(parent, false);
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = rect.offsetMax = Vector2.zero;
            return rect;
        }

        /// <summary>A box of <paramref name="size"/> centred <paramref name="at"/> from its parent's centre.</summary>
        private static RectTransform Box(string name, Transform parent, Vector2 at, Vector2 size)
        {
            var rect = (RectTransform)new GameObject(name, typeof(RectTransform)).transform;
            rect.SetParent(parent, false);
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.anchoredPosition = at;
            rect.sizeDelta = size;
            return rect;
        }

        private static RectTransform Panel(string name, Transform parent, Vector2 at, Vector2 size, Sprite sprite, Color color)
        {
            RectTransform rect = Box(name, parent, at, size);
            var image = rect.gameObject.AddComponent<Image>();
            image.sprite = sprite;
            image.type = Image.Type.Sliced;
            image.color = color;
            image.raycastTarget = false;
            return rect;
        }

        private static TextMeshProUGUI Label(string name, Transform parent, Vector2 at, Vector2 size, TMP_FontAsset font, string value, float fontSize, Color color)
        {
            var text = Box(name, parent, at, size).gameObject.AddComponent<TextMeshProUGUI>();
            text.font = font;
            text.text = value;
            text.fontSize = fontSize;
            text.color = color;
            text.alignment = TextAlignmentOptions.Center;
            text.textWrappingMode = TextWrappingModes.NoWrap;
            text.raycastTarget = false;
            return text;
        }
    }
}
