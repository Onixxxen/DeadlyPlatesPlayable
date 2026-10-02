using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

namespace Playable.Editor
{
    /// <summary>
    /// The game flow's part of the main scene: <see cref="GameFlow"/> and <see cref="IslandTransition"/> on one object, and the
    /// <see cref="ObjectiveBanner"/> on the canvas with a hidden line per objective. Runs after
    /// <see cref="BeaverScene"/>, whose HopController it plays with.
    /// </summary>
    public static class FlowScene
    {
        [SceneContribution(40)]
        public static void Contribute(BaseScene scene)
        {
            var plates = Object.FindFirstObjectByType<PlatesView>();
            var hop = Object.FindFirstObjectByType<HopController>();
            ObjectiveBanner banner = Banner(scene.Canvas.transform);

            var flow = new GameObject("Flow");
            var transition = new SerializedObject(flow.AddComponent<IslandTransition>());
            transition.FindProperty("plates").objectReferenceValue = plates;
            transition.FindProperty("hop").objectReferenceValue = hop;
            transition.FindProperty("rig").objectReferenceValue = scene.CameraRig;
            transition.FindProperty("banner").objectReferenceValue = banner;
            transition.ApplyModifiedPropertiesWithoutUndo();

            var game = new SerializedObject(flow.AddComponent<GameFlow>());
            game.FindProperty("plates").objectReferenceValue = plates;
            game.FindProperty("hop").objectReferenceValue = hop;
            game.FindProperty("transition").objectReferenceValue = transition.targetObject;
            game.FindProperty("banner").objectReferenceValue = banner;
            game.ApplyModifiedPropertiesWithoutUndo();
        }

        private static ObjectiveBanner Banner(Transform canvas)
        {
            var root = new GameObject("Objective", typeof(RectTransform));
            root.transform.SetParent(canvas, false);
            var rect = (RectTransform)root.transform;
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, FlowConfig.BannerY);
            rect.anchoredPosition = Vector2.zero;
            rect.sizeDelta = Vector2.zero;

            var banner = new SerializedObject(root.AddComponent<ObjectiveBanner>());
            banner.FindProperty("leaveTwo").objectReferenceValue = Line(rect, "Leave two", FlowConfig.LeaveTwoText);
            banner.FindProperty("crossBridge").objectReferenceValue = Line(rect, "Cross the bridge", FlowConfig.CrossBridgeText);
            banner.ApplyModifiedPropertiesWithoutUndo();
            return (ObjectiveBanner)banner.targetObject;
        }

        /// <summary>One objective's line: its text wrapped at FlowConfig.BannerWidth on a pill sized to it, hidden.</summary>
        private static GameObject Line(Transform parent, string name, string line)
        {
            var pill = new GameObject(name, typeof(RectTransform), typeof(Image));
            pill.transform.SetParent(parent, false);
            var image = pill.GetComponent<Image>();
            image.sprite = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/UISprite.psd"); // INSTALL's rounded corners
            image.type = Image.Type.Sliced;
            image.color = FlowConfig.BannerPanel;
            image.raycastTarget = false;

            var label = new GameObject("Label", typeof(RectTransform), typeof(TextMeshProUGUI));
            label.transform.SetParent(pill.transform, false);
            var text = label.GetComponent<TextMeshProUGUI>();
            text.font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(ArtImport.FontAsset);
            text.text = line;
            text.fontSize = FlowConfig.BannerFontSize;
            text.color = FlowConfig.BannerText;
            text.alignment = TextAlignmentOptions.Center;
            text.textWrappingMode = TextWrappingModes.Normal;
            text.raycastTarget = false;

            // The text wraps in a box as wide as it was measured in, so it breaks where the pill was sized for.
            Vector2 size = text.GetPreferredValues(line, FlowConfig.BannerWidth, 0f);
            ((RectTransform)label.transform).sizeDelta = new Vector2(FlowConfig.BannerWidth, size.y);
            ((RectTransform)pill.transform).sizeDelta = new Vector2(Mathf.Ceil(size.x), Mathf.Ceil(size.y)) + FlowConfig.BannerPadding * 2f;
            pill.SetActive(false);
            return pill;
        }
    }
}
