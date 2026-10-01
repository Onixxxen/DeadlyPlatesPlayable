using System;
using System.IO;
using System.Linq;
using System.Reflection;
using TMPro;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Rendering;
using UnityEngine.UI;

namespace Playable.Editor
{
    /// <summary>
    /// Builds Assets/_Project/Scenes/Main.unity from code: the base scene (the original's camera and light on
    /// a cyan background, the canvas, input, INSTALL), then every <see cref="SceneContributionAttribute"/>
    /// method, then points Playworks at the scene.
    ///
    ///   Unity -batchmode -projectPath &lt;project&gt; -executeMethod Playable.Editor.Batch.RunThenExit -paMethod Playable.Editor.MainSceneBuilder.Build
    ///
    /// The scene is never edited as text and never merged: a feature changes its own contribution and re-runs this.
    /// </summary>
    public static class MainSceneBuilder
    {
        public const string ScenePath = "Assets/_Project/Scenes/Main.unity";

        // INSTALL in canvas units (1080×1920 reference, match 0.5: a unit is 0.4 px of a 390×844 phone in either
        // orientation). 140 down from the top keeps it under the top-right 50×50 px corner (125 units).
        private const string InstallText = "INSTALL";
        private static readonly Vector2 InstallOffset = new Vector2(-40f, -140f);
        private static readonly Vector2 InstallSize = new Vector2(300f, 110f);
        private const float InstallFontSize = 46f;
        private static readonly Color InstallColor = new Color32(0xFF, 0x97, 0x31, 0xFF); // the original's orange

        [MenuItem("Playable/Build Main Scene")]
        public static void Build()
        {
            Directory.CreateDirectory(Path.GetDirectoryName(ScenePath));
            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            BaseScene parts = BuildBase();
            foreach (MethodInfo contribution in Contributions())
            {
                contribution.Invoke(null, new object[] { parts });
                Debug.Log($"[MainSceneBuilder] {contribution.DeclaringType.Name}.{contribution.Name}");
            }

            EditorSceneManager.SaveScene(scene, ScenePath);
            EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(ScenePath, true) };
            // The project template's Input System actions: this project reads legacy Input only.
            EditorBuildSettings.RemoveConfigObject("com.unity.input.settings.actions");
            AssetDatabase.SaveAssets();
            PlayworksScenes.PointAt(ScenePath);
            Debug.Log($"[MainSceneBuilder] built {ScenePath}");
        }

        private static BaseScene BuildBase()
        {
            var cameraGo = new GameObject("Main Camera") { tag = "MainCamera" };
            var camera = cameraGo.AddComponent<Camera>();
            camera.orthographic = true;
            camera.clearFlags = CameraClearFlags.SolidColor;
            camera.backgroundColor = CameraConfig.Background;
            camera.nearClipPlane = 0.1f;
            camera.farClipPlane = 100f;
            cameraGo.transform.SetPositionAndRotation(CameraRig.PositionFor(Vector3.zero), CameraConfig.Rotation);
            camera.orthographicSize = CameraRig.FitSize(1080f / 2340f); // for the editor's view; the rig refits every frame
            var rig = cameraGo.AddComponent<CameraRig>();

            var light = new GameObject("Directional Light").AddComponent<Light>();
            light.type = LightType.Directional;
            light.transform.rotation = CameraConfig.LightRotation;
            light.intensity = CameraConfig.LightIntensity;
            light.color = Color.white;
            light.shadows = LightShadows.None;
            RenderSettings.ambientMode = AmbientMode.Flat;
            RenderSettings.ambientLight = CameraConfig.Ambient;

            // Screen Space - Camera: the camera draws the UI, so a frame captured from Camera.main shows it.
            var canvasGo = new GameObject("Canvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            var canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceCamera;
            canvas.worldCamera = camera;
            canvas.planeDistance = 1f;
            var scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1080f, 1920f);
            scaler.matchWidthOrHeight = 0.5f;
            BuildInstall(canvas.transform);

            new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));
            new GameObject("Playable").AddComponent<PlayableInputSource>();
            return new BaseScene { Camera = camera, CameraRig = rig, Canvas = canvas };
        }

        private static void BuildInstall(Transform canvas)
        {
            var button = new GameObject("Install", typeof(RectTransform), typeof(Image), typeof(InstallButton));
            button.transform.SetParent(canvas, false);
            var rect = (RectTransform)button.transform;
            rect.anchorMin = rect.anchorMax = rect.pivot = Vector2.one;
            rect.anchoredPosition = InstallOffset;
            rect.sizeDelta = InstallSize;
            var image = button.GetComponent<Image>();
            image.sprite = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/UISprite.psd"); // rounded corners
            image.type = Image.Type.Sliced;
            image.color = InstallColor;

            var label = new GameObject("Label", typeof(RectTransform), typeof(TextMeshProUGUI));
            label.transform.SetParent(button.transform, false);
            var labelRect = (RectTransform)label.transform;
            labelRect.anchorMin = Vector2.zero;
            labelRect.anchorMax = Vector2.one;
            labelRect.offsetMin = labelRect.offsetMax = Vector2.zero;
            var text = label.GetComponent<TextMeshProUGUI>();
            text.font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(ArtImport.FontAsset);
            text.text = InstallText;
            text.fontSize = InstallFontSize;
            text.color = Color.white;
            text.alignment = TextAlignmentOptions.Center;
            text.textWrappingMode = TextWrappingModes.NoWrap;
            text.raycastTarget = false;
        }

        private static MethodInfo[] Contributions()
        {
            MethodInfo[] methods = TypeCache.GetMethodsWithAttribute<SceneContributionAttribute>()
                .OrderBy(m => m.GetCustomAttribute<SceneContributionAttribute>().Order)
                .ThenBy(m => m.DeclaringType.FullName, StringComparer.Ordinal)
                .ToArray();
            foreach (MethodInfo m in methods)
            {
                ParameterInfo[] p = m.GetParameters();
                if (!m.IsStatic || p.Length != 1 || p[0].ParameterType != typeof(BaseScene))
                    throw new InvalidOperationException($"{m.DeclaringType.FullName}.{m.Name}: вклад в сцену — static void M(BaseScene scene)");
            }
            return methods;
        }
    }
}
