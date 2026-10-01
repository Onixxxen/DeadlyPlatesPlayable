using System.Collections.Generic;
using System.IO;
using Playable.Hello;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Playable.Editor
{
    /// <summary>
    /// Builds Assets/_Project/Scenes/Main.unity from code. Scenes are never edited as text and never
    /// merged: a branch that needs a different scene changes the builder and re-runs it
    /// (Playable.Editor.HelloSceneBuilder.Build). The real playable replaces
    /// this builder with its own; the rule stays.
    /// </summary>
    public static class HelloSceneBuilder
    {
        public const string ScenePath = "Assets/_Project/Scenes/Main.unity";
        private const string MaterialDir = "Assets/_Project/Materials";

        private static readonly Color[] Palette =
        {
            new Color(1f, 0.36f, 0.45f), new Color(1f, 0.76f, 0.27f), new Color(0.36f, 0.75f, 0.92f),
            new Color(0.61f, 0.77f, 0.24f), new Color(0.77f, 0.56f, 0.82f),
        };

        // Fixed spots, not random: the PlayMode journey and the browser journey tap known places.
        private static readonly Vector3[] Spots =
        {
            new Vector3(-1.5f, 2.0f, 0f), new Vector3(1.5f, 1.5f, 0f), new Vector3(-1.4f, -1.3f, 0f),
            new Vector3(1.4f, -1.9f, 0f), new Vector3(0f, 0.2f, 0f),
        };

        [MenuItem("Playable/Build Hello Scene")]
        public static void Build()
        {
            Directory.CreateDirectory(MaterialDir);
            Directory.CreateDirectory(Path.GetDirectoryName(ScenePath));
            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

            var cameraGo = new GameObject("Main Camera") { tag = "MainCamera" };
            var camera = cameraGo.AddComponent<Camera>();
            camera.clearFlags = CameraClearFlags.SolidColor;
            camera.backgroundColor = new Color(0.106f, 0.165f, 0.29f);
            camera.fieldOfView = 60f;
            cameraGo.transform.position = new Vector3(0f, 0f, -10f);

            var lightGo = new GameObject("Directional Light");
            var light = lightGo.AddComponent<Light>();
            light.type = LightType.Directional;
            light.color = Color.white;
            light.intensity = 1.6f;
            lightGo.transform.rotation = Quaternion.Euler(40f, -25f, 0f);

            // An empty scene has a black ambient until a skybox is baked; flat ambient is
            // immediate in the editor and in the Playworks build alike.
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            RenderSettings.ambientLight = new Color(0.55f, 0.55f, 0.6f);

            Shader lit = Shader.Find("Universal Render Pipeline/Lit");
            var targets = new List<Transform>();
            for (int i = 0; i < Spots.Length; i++)
            {
                string matPath = $"{MaterialDir}/Target{i}.mat";
                var material = AssetDatabase.LoadAssetAtPath<Material>(matPath);
                if (material == null)
                {
                    material = new Material(lit);
                    AssetDatabase.CreateAsset(material, matPath);
                }
                material.SetColor("_BaseColor", Palette[i % Palette.Length]); // URP Lit's main colour
                EditorUtility.SetDirty(material);

                GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
                cube.name = $"Target{i}";
                cube.transform.position = Spots[i];
                cube.transform.rotation = Quaternion.Euler(20f * i, 35f * i, 0f);
                cube.GetComponent<MeshRenderer>().sharedMaterial = material;
                targets.Add(cube.transform);
            }

            // Screen Space - Camera: the camera renders the UI, so a PlayMode frame captured from
            // Camera.main shows it (an Overlay canvas would be missing from every frame).
            var canvasGo = new GameObject("Canvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            var canvas = canvasGo.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceCamera;
            canvas.worldCamera = camera;
            canvas.planeDistance = 1f;
            var scaler = canvasGo.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1080f, 1920f);
            scaler.matchWidthOrHeight = 0.5f;

            Button ctaTop = MakeButton(canvasGo.transform, "CtaTop", new Vector2(1f, 1f), new Vector2(-190f, -110f), new Vector2(300f, 110f));
            GameObject endCard = MakePanel(canvasGo.transform, "EndCard", new Color(0.04f, 0.06f, 0.13f, 0.85f));
            Button ctaEnd = MakeButton(endCard.transform, "CtaEnd", new Vector2(0.5f, 0.5f), Vector2.zero, new Vector2(640f, 200f));

            new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));

            var gameGo = new GameObject("Playable");
            gameGo.AddComponent<PlayableInputSource>();
            var hello = gameGo.AddComponent<HelloPlayable>();
            var so = new SerializedObject(hello);
            so.FindProperty("viewCamera").objectReferenceValue = camera;
            SerializedProperty list = so.FindProperty("targets");
            list.arraySize = targets.Count;
            for (int i = 0; i < targets.Count; i++) list.GetArrayElementAtIndex(i).objectReferenceValue = targets[i];
            so.FindProperty("endCard").objectReferenceValue = endCard;
            so.FindProperty("ctaEnd").objectReferenceValue = ctaEnd;
            so.FindProperty("ctaTop").objectReferenceValue = ctaTop;
            so.ApplyModifiedPropertiesWithoutUndo();

            EditorSceneManager.SaveScene(scene, ScenePath);
            EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(ScenePath, true) };
            EditorBuildSettings.RemoveConfigObject("com.unity.input.settings.actions");
            AssetDatabase.SaveAssets();
            PlayworksScenes.PointAt(ScenePath);
            Debug.Log($"[HelloSceneBuilder] built {ScenePath}");
        }

        private static GameObject MakePanel(Transform parent, string name, Color color)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(Image));
            go.transform.SetParent(parent, false);
            var rt = (RectTransform)go.transform;
            rt.anchorMin = Vector2.zero;
            rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero;
            rt.offsetMax = Vector2.zero;
            go.GetComponent<Image>().color = color;
            return go;
        }

        private static Button MakeButton(Transform parent, string name, Vector2 anchor, Vector2 position, Vector2 size)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(Image), typeof(Button));
            go.transform.SetParent(parent, false);
            var rt = (RectTransform)go.transform;
            rt.anchorMin = anchor;
            rt.anchorMax = anchor;
            rt.anchoredPosition = position;
            rt.sizeDelta = size;
            go.GetComponent<Image>().color = new Color(1f, 0.76f, 0.27f);
            return go.GetComponent<Button>();
        }
    }
}
