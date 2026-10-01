#if UNITY_EDITOR
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The art ArtImport brought over, put together at runtime on one frame pair (art-a / art-b): the
    /// textured beaver playing Walk on a white plate, a smoke puff beside it, a world-space line in the
    /// static Benzin font, under the original's isometric camera on the cyan background. The beaver's pose
    /// must differ between -a and -b. Editor-only: the assets come through AssetDatabase.
    /// </summary>
    public class ArtTests
    {
        private const string Art = "Assets/_Project/Art";
        private const string Glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,:;'\"-+()%";

        private static readonly string[] Sounds =
            { "step", "jump", "Fall", "TileSpawn", "TileDelete", "MatchGoal", "ScoreAdd", "EffectDrop", "Spin", "ButtonClick" };

        private Scene scene;

        [UnityTest]
        public IEnumerator ImportedArt_ShowsOnOneFramePair()
        {
            PlayableJourneyCapture.Reset();
            scene = SceneManager.CreateScene("ArtTest");
            SceneManager.SetActiveScene(scene);

            var font = Load<TMP_FontAsset>("Fonts/Benzin-Bold SDF.asset");
            Assert.AreEqual(AtlasPopulationMode.Static, font.atlasPopulationMode, "шрифт Benzin должен быть статическим");
            Assert.LessOrEqual(Mathf.Max(font.atlasTexture.width, font.atlasTexture.height), 512, "атлас Benzin больше 512²");
            bool hasGlyphs = font.HasCharacters(Glyphs, out List<char> missing);
            Assert.IsTrue(hasGlyphs, $"в атласе Benzin нет «{(missing == null ? Glyphs : string.Concat(missing))}»");
            foreach (string sound in Sounds) Load<AudioClip>($"Sounds/{sound}.ogg");
            Load<Sprite>("UI/HandPointer.png");

            Camera camera = new GameObject("Camera") { tag = "MainCamera" }.AddComponent<Camera>();
            camera.orthographic = true;
            camera.orthographicSize = 2.6f;
            camera.clearFlags = CameraClearFlags.SolidColor;
            camera.backgroundColor = new Color32(0x5E, 0xF0, 0xFD, 0xFF);
            camera.transform.rotation = Quaternion.Euler(38f, -45f, 0f); // the original's isometric view
            camera.transform.position = new Vector3(0f, 0.7f, 0f) - camera.transform.forward * 20f;

            var sun = new GameObject("Sun").AddComponent<Light>();
            sun.type = LightType.Directional;
            sun.intensity = 1.3f;
            sun.transform.rotation = Quaternion.Euler(50f, -30f, 0f); // the original's light
            RenderSettings.ambientMode = AmbientMode.Flat;
            RenderSettings.ambientLight = new Color(0.6f, 0.6f, 0.6f);

            GameObject plate = GameObject.CreatePrimitive(PrimitiveType.Cube);
            plate.transform.localScale = new Vector3(1f, 0.25f, 1f);
            plate.transform.position = new Vector3(0f, -0.125f, 0f);
            plate.GetComponent<Renderer>().sharedMaterial = new Material(Shader.Find("Universal Render Pipeline/Lit")) { color = Color.white };

            GameObject beaver = Object.Instantiate(Load<GameObject>("Beaver/Beaver.prefab"), Vector3.zero, Quaternion.Euler(0f, 150f, 0f));
            Texture skin = beaver.GetComponentInChildren<SkinnedMeshRenderer>().sharedMaterial.GetTexture("_BaseMap");
            Assert.IsNotNull(skin, "у бобра нет текстуры");
            Assert.AreEqual(1024, skin.width, "текстура бобра импортируется в 1024");
            var animator = beaver.GetComponent<Animator>();
            foreach (string trigger in new[] { "Walk", "Jump", "Fall", "JumpIntoVoid" })
                Assert.IsTrue(animator.parameters.Any(p => p.name == trigger && p.type == AnimatorControllerParameterType.Trigger), $"в контроллере нет триггера {trigger}");
            foreach (string state in new[] { "Idle", "Walk", "Jump", "Fall" })
                Assert.IsTrue(animator.HasState(0, Animator.StringToHash(state)), $"в контроллере нет состояния {state}");

            var line = new GameObject("Benzin").AddComponent<TextMeshPro>();
            line.font = font;
            line.text = "Tap to jump! 0123";
            line.color = new Color(0.106f, 0.165f, 0.29f);
            line.alignment = TextAlignmentOptions.Center;
            line.textWrappingMode = TextWrappingModes.NoWrap;
            line.enableAutoSizing = true;
            line.fontSizeMin = 0.5f;
            line.fontSizeMax = 4f;
            line.rectTransform.sizeDelta = new Vector2(2.1f, 0.5f);
            line.transform.SetPositionAndRotation(new Vector3(0f, 1.75f, 0f), camera.transform.rotation);

            animator.SetTrigger("Walk");
            var puff = Object.Instantiate(Load<GameObject>("Smoke/SmokePuff.prefab"), new Vector3(-0.55f, 0.02f, -0.55f), Quaternion.identity)
                .GetComponent<ParticleSystem>();

            // The puff's own clock, not a wait in seconds: the first frames compile the new shaders and
            // run at the 0.33 s delta cap, and a 0.2 s wait was one frame in which the puff had not started.
            float timeout = Time.realtimeSinceStartup + 5f;
            while (puff.time < 0.25f && Time.realtimeSinceStartup < timeout) yield return null;
            Assert.AreSame(camera, Camera.main, "кадр снимет чужую камеру");
            Assert.IsTrue(animator.GetCurrentAnimatorStateInfo(0).IsName("Walk"), "бобёр не перешёл в Walk");
            Assert.Greater(puff.particleCount, 0, $"дымок пуст (playing={puff.isPlaying}, time={puff.time:0.00})");

            Transform leg = beaver.GetComponentsInChildren<Transform>().First(t => t.name == "mixamorig:LeftUpLeg");
            Quaternion before = leg.localRotation;
            yield return PlayableJourneyCapture.Frame("art");
            Assert.Greater(Quaternion.Angle(before, leg.localRotation), 1f, "поза бобра не меняется — Walk не играет");
        }

        [UnityTearDown]
        public IEnumerator UnloadScene()
        {
            if (scene.IsValid() && scene.isLoaded) yield return SceneManager.UnloadSceneAsync(scene);
        }

        private static T Load<T>(string path) where T : Object
        {
            var asset = AssetDatabase.LoadAssetAtPath<T>($"{Art}/{path}");
            Assert.IsNotNull(asset, $"нет {Art}/{path} — ArtImport.Run не запускали?");
            return asset;
        }
    }
}
#endif
