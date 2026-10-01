using System.Collections;
using NUnit.Framework;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The playable's journey on the main scene, with a frame pair per beat of the ad.
    /// Taps go through <see cref="PlayableInput.Simulate"/>, the way the build's come through
    /// PlayableInputSource.
    /// </summary>
    public class GameJourneyTests
    {
        private const float HookSeconds = 2.5f;

        [UnityTest]
        public IEnumerator Main_FromHookToInstall()
        {
            PlayableJourneyCapture.Reset();
            SceneManager.LoadScene("Main");
            yield return null;
            var rig = Object.FindFirstObjectByType<CameraRig>();
            Assert.IsNotNull(rig, "в сцене Main нет CameraRig — MainSceneBuilder.Build не запускали?");

            while (Time.timeSinceLevelLoad < HookSeconds) yield return null;
            yield return PlayableJourneyCapture.Frame("hook");

            Camera camera = Camera.main;
            Assert.AreSame(rig.GetComponent<Camera>(), camera, "кадры сняты не камерой CameraRig");
            AssertIslandInView(camera, "на hook");
            Bounds beaver = rig.Target.GetComponentInChildren<SkinnedMeshRenderer>().bounds;
            AssertInView(camera, beaver, "бобёр на hook");
            Assert.LessOrEqual(beaver.max.y, CameraConfig.ViewTop, $"бобёр ({beaver.max.y:0.00}) выше коробки, которую держит камера (CameraConfig.ViewTop)");
            Assert.IsTrue(rig.Target.GetComponent<Animator>().GetCurrentAnimatorStateInfo(0).IsName("Walk"), "бобёр не в Walk");

            var install = Object.FindFirstObjectByType<InstallButton>();
            Assert.IsNotNull(install, "нет кнопки INSTALL");
            var label = install.GetComponentInChildren<TMP_Text>();
            Assert.AreEqual("INSTALL", label.text);
            Assert.AreEqual("Benzin-Bold SDF", label.font.name, "INSTALL не шрифтом Benzin");
            Rect button = ScreenRect((RectTransform)install.transform, camera);
            Assert.IsTrue(button.xMin >= 0f && button.yMin >= 0f && button.xMax <= Screen.width && button.yMax <= Screen.height, $"INSTALL {button} за краем экрана");
            float corner = 50f * Mathf.Sqrt(Screen.width * Screen.height / (390f * 844f)); // 50 px of a 390×844 phone
            Assert.IsTrue(button.xMax <= Screen.width - corner || button.yMax <= Screen.height - corner, $"INSTALL {button} заходит в верхний угол 50×50");

            var centre = new Vector2(Screen.width / 2f, Screen.height / 2f);
            Assert.IsFalse(InstallButton.Covers(centre), "тап в центр экрана считается тапом по INSTALL");
            Assert.IsTrue(InstallButton.Covers(button.center), "тап по INSTALL не считается тапом по INSTALL");
            int before = PlayableAd.InstallCalls;
            PlayableInput.Simulate(button.center);
            Assert.AreEqual(before + 1, PlayableAd.InstallCalls, "тап по INSTALL должен открывать стор ровно один раз");
        }

        /// <summary>The camera's fit in the build's orientations too, and the island not lost in the middle.</summary>
        [TestCase(390, 844)]
        [TestCase(844, 390)]
        [TestCase(1080, 2340)]
        public void TheIslandFitsTheScreen(int width, int height)
        {
            var go = new GameObject("Fit test camera");
            try
            {
                var camera = go.AddComponent<Camera>();
                camera.enabled = false;
                camera.orthographic = true;
                camera.aspect = (float)width / height;
                camera.orthographicSize = CameraRig.FitSize(camera.aspect);
                go.transform.SetPositionAndRotation(CameraRig.PositionFor(Vector3.zero), CameraConfig.Rotation);
                Rect span = AssertIslandInView(camera, $"при {width}×{height}");
                Assert.Greater(Mathf.Max(span.width, span.height), 0.65f, $"при {width}×{height} остров занимает {span} экрана — мелко");
            }
            finally
            {
                Object.DestroyImmediate(go);
            }
        }

        /// <summary>Every plate of the 5×5 island at the world origin, and the hat of a beaver standing on any of
        /// them, inside the viewport; returns the plates' viewport rect.</summary>
        private static Rect AssertIslandInView(Camera camera, string when)
        {
            Rect span = Rect.MinMaxRect(1f, 1f, 0f, 0f);
            int rim = FieldConfig.IslandSize / 2;
            for (int x = -rim; x <= rim; x++)
            for (int y = -rim; y <= rim; y++)
            {
                var cell = new Vector3(x * FieldConfig.Spacing, 0f, y * FieldConfig.Spacing);
                Rect plate = AssertInView(camera, new Bounds(cell, new Vector3(1f, 0.36f, 1f)), $"плита {x},{y} {when}");
                AssertInView(camera, new Bounds(cell + Vector3.up * CameraConfig.ViewTop, Vector3.zero), $"бобёр на {x},{y} {when}");
                span = Rect.MinMaxRect(Mathf.Min(span.xMin, plate.xMin), Mathf.Min(span.yMin, plate.yMin), Mathf.Max(span.xMax, plate.xMax), Mathf.Max(span.yMax, plate.yMax));
            }
            return span;
        }

        /// <summary>Every corner of the box inside the viewport; returns the box's viewport rect.</summary>
        private static Rect AssertInView(Camera camera, Bounds bounds, string what)
        {
            Rect seen = Rect.MinMaxRect(1f, 1f, 0f, 0f);
            for (int i = 0; i < 8; i++)
            {
                Vector3 corner = bounds.center + Vector3.Scale(bounds.extents, new Vector3(i & 1, (i >> 1) & 1, (i >> 2) & 1) * 2f - Vector3.one);
                Vector3 v = camera.WorldToViewportPoint(corner);
                Assert.IsTrue(v.x >= 0f && v.x <= 1f && v.y >= 0f && v.y <= 1f, $"{what}: угол {corner} вне экрана ({v.x:0.00}, {v.y:0.00})");
                seen = Rect.MinMaxRect(Mathf.Min(seen.xMin, v.x), Mathf.Min(seen.yMin, v.y), Mathf.Max(seen.xMax, v.x), Mathf.Max(seen.yMax, v.y));
            }
            return seen;
        }

        private static Rect ScreenRect(RectTransform rect, Camera camera)
        {
            var corners = new Vector3[4];
            rect.GetWorldCorners(corners);
            Vector2 a = RectTransformUtility.WorldToScreenPoint(camera, corners[0]);
            Vector2 b = RectTransformUtility.WorldToScreenPoint(camera, corners[2]);
            return Rect.MinMaxRect(Mathf.Min(a.x, b.x), Mathf.Min(a.y, b.y), Mathf.Max(a.x, b.x), Mathf.Max(a.y, b.y));
        }
    }
}
