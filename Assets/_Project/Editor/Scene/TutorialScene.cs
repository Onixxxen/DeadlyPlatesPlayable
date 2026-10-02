using System;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using Object = UnityEngine.Object;

namespace Playable.Editor
{
    /// <summary>
    /// The tutorial's part of the main scene: <see cref="Tutorial"/> on the canvas with the hand (HandPointer.png) and the
    /// hint over its shadow, both at scale 0 until it scales them in. Runs after <see cref="BeaverScene"/>, whose
    /// HopController it watches.
    /// </summary>
    public static class TutorialScene
    {
        private const string HandSprite = "Assets/_Project/Art/UI/HandPointer.png";
        private static readonly Vector2 HintBox = new Vector2(1000f, 140f); // the text overflows it rather than wrap

        [SceneContribution(40)]
        public static void Contribute(BaseScene scene)
        {
            var hop = Object.FindFirstObjectByType<HopController>();
            if (hop == null) throw new InvalidOperationException("TutorialScene: в сцене нет HopController — BeaverScene не отработал");

            var root = new GameObject("Tutorial", typeof(RectTransform));
            root.transform.SetParent(scene.Canvas.transform, false);
            var area = (RectTransform)root.transform;
            area.anchorMin = Vector2.zero;
            area.anchorMax = Vector2.one;
            area.offsetMin = area.offsetMax = Vector2.zero;

            RectTransform hint = Place(root.transform, "Hint", new Vector2(0.5f, 0.5f), HintBox);
            hint.anchoredPosition = new Vector2(0f, TutorialConfig.HintAbove);
            Label(hint, "Shadow", TutorialConfig.HintShadow, TutorialConfig.ShadowOffset);
            Label(hint, "Text", TutorialConfig.HintColor, Vector2.zero);

            RectTransform hand = Place(root.transform, "Hand", TutorialConfig.HandAt, TutorialConfig.HandSize);
            var image = hand.gameObject.AddComponent<Image>();
            image.sprite = AssetDatabase.LoadAssetAtPath<Sprite>(HandSprite);
            if (image.sprite == null) throw new InvalidOperationException($"TutorialScene: нет спрайта {HandSprite} — ArtImport не запускали?");
            image.raycastTarget = false;

            hint.localScale = hand.localScale = Vector3.zero;
            var tutorial = new SerializedObject(root.AddComponent<Tutorial>());
            tutorial.FindProperty("hop").objectReferenceValue = hop;
            tutorial.FindProperty("hand").objectReferenceValue = hand;
            tutorial.FindProperty("hint").objectReferenceValue = hint;
            tutorial.ApplyModifiedPropertiesWithoutUndo();
        }

        /// <summary>A box of <paramref name="size"/> centred on a point given as a fraction of the screen.</summary>
        private static RectTransform Place(Transform parent, string name, Vector2 at, Vector2 size)
        {
            var rect = (RectTransform)new GameObject(name, typeof(RectTransform)).transform;
            rect.SetParent(parent, false);
            rect.anchorMin = rect.anchorMax = at;
            rect.anchoredPosition = Vector2.zero;
            rect.sizeDelta = size;
            return rect;
        }

        private static void Label(Transform parent, string name, Color color, Vector2 offset)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(TextMeshProUGUI));
            go.transform.SetParent(parent, false);
            var rect = (RectTransform)go.transform;
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = rect.offsetMax = offset;
            var text = go.GetComponent<TextMeshProUGUI>();
            text.font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(ArtImport.FontAsset);
            text.text = TutorialConfig.Hint;
            text.fontSize = TutorialConfig.HintSize;
            text.color = color;
            text.alignment = TextAlignmentOptions.Center;
            text.textWrappingMode = TextWrappingModes.NoWrap;
            text.raycastTarget = false;
        }
    }
}
