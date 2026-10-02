using System.Collections;
using System.Linq;
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
        private const float WaveSeconds = 0.4f;
        private const float HookSeconds = 2.5f;

        [UnityTest]
        public IEnumerator Main_FromHookToInstall()
        {
            PlayableJourneyCapture.Reset();
            SceneManager.LoadScene("Main");
            yield return null;
            var rig = Object.FindFirstObjectByType<CameraRig>();
            Assert.IsNotNull(rig, "в сцене Main нет CameraRig — MainSceneBuilder.Build не запускали?");
            var plates = Object.FindFirstObjectByType<PlatesView>();
            Assert.IsNotNull(plates, "в сцене Main нет PlatesView");

            while (Time.timeSinceLevelLoad < WaveSeconds) yield return null;
            AssertMidWave(plates, "wave-a");
            yield return PlayableJourneyCapture.Frame("wave");
            AssertMidWave(plates, "wave-b");

            while (Time.timeSinceLevelLoad < HookSeconds) yield return null;
            yield return PlayableJourneyCapture.Frame("hook");

            Camera camera = Camera.main;
            Assert.AreSame(rig.GetComponent<Camera>(), camera, "кадры сняты не камерой CameraRig");
            AssertIslandInView(camera, "на hook");
            AssertIslandComplete(plates, rig.Target);
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

        /// <summary>The calls the hop and the island change make on the plates, which they may not edit:
        /// a crumble, a dip, a drop, a second wave on a freed cell.</summary>
        [UnityTest]
        public IEnumerator Plates_CrumbleDipDropAndPopInAgain()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            var plates = Object.FindFirstObjectByType<PlatesView>();
            int waves = 0, spawned = 0, removed = 0;
            System.Action onWave = () => waves++;
            System.Action<Vector3> onSpawned = _ => spawned++;
            System.Action<Vector3> onRemoved = _ => removed++;
            PlatesView.WaveFinished += onWave;
            PlatesView.PlateSpawned += onSpawned;
            PlatesView.PlateRemoved += onRemoved;
            try
            {
                float timeout = Time.time + 5f;
                while (waves == 0 && Time.time < timeout) yield return null;
                Assert.AreEqual(1, waves, "WaveFinished не пришёл после первой волны");
                Assert.AreEqual(plates.Field.Plates.Count(), spawned, "PlateSpawned не по разу на плиту");

                Vector2Int crumbling = new Vector2Int(1, 0), dipping = new Vector2Int(-1, 0), dropping = new Vector2Int(0, 1);
                PlateView crumbled = plates.Plate(crumbling), dipped = plates.Plate(dipping), dropped = plates.Plate(dropping);
                plates.Remove(crumbling);
                plates.Dip(dipping);
                plates.Drop(dropping);
                Assert.IsNull(plates.Plate(crumbling), "клетка раскрошенной плиты не освободилась сразу");
                Assert.IsNull(plates.Plate(dropping), "клетка упавшей плиты не освободилась сразу");
                float lowest = 0f, end = Time.time + PlateConfig.DipDownSeconds + PlateConfig.DipUpSeconds + 0.1f;
                while (Time.time < end)
                {
                    lowest = Mathf.Min(lowest, dipped.transform.localPosition.y);
                    yield return null;
                }
                Assert.AreEqual(-PlateConfig.DipDepth, lowest, 0.001f, "плита не прогнулась на DipDepth");
                Assert.AreEqual(0f, dipped.transform.localPosition.y, 0.001f, "плита не вернулась после прогиба");
                yield return new WaitForSeconds(PlateConfig.DropSeconds); // the drop is the longest
                Assert.IsTrue(crumbled == null, "раскрошенная плита осталась в сцене");
                Assert.AreEqual(1, removed, "PlateRemoved не один раз");
                Assert.IsTrue(dropped == null, "упавшая плита осталась в сцене");

                bool done = false;
                plates.PopIn(new[] { crumbling }, crumbling, () => done = true);
                yield return new WaitForSeconds(PlateConfig.PopUpSeconds + PlateConfig.PopDownSeconds + 0.1f);
                Assert.IsTrue(done, "PopIn не позвал done");
                Assert.AreEqual(1f, plates.Plate(crumbling).transform.localScale.x, 0.001f, "новая плита не встала в полный размер");
                Assert.AreEqual(1, waves, "WaveFinished — только для первого острова");
            }
            finally
            {
                PlatesView.WaveFinished -= onWave;
                PlatesView.PlateSpawned -= onSpawned;
                PlatesView.PlateRemoved -= onRemoved;
            }
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

        /// <summary>Some plate of the field between nothing and its rest size: the wave is running.</summary>
        private static void AssertMidWave(PlatesView plates, string when)
        {
            int between = 0;
            foreach (Vector2Int cell in plates.Field.Plates)
            {
                float scale = plates.Plate(cell).transform.localScale.x;
                if (scale > 0.02f && Mathf.Abs(scale - 1f) > 0.02f) between++;
            }
            Assert.Greater(between, 0, $"{when} ({Time.timeSinceLevelLoad:0.00} с): ни одна плита не в середине волны");
        }

        /// <summary>Every plate of the field at rest size, a trap among them, the plate the beaver faces glowing.</summary>
        private static void AssertIslandComplete(PlatesView plates, Transform beaver)
        {
            int traps = 0;
            foreach (Vector2Int cell in plates.Field.Plates)
            {
                PlateView plate = plates.Plate(cell);
                Assert.IsNotNull(plate, $"на hook нет плиты {cell}");
                Assert.AreEqual(1f, plate.transform.localScale.x, 0.001f, $"плита {cell} на hook не в полный размер");
                Assert.AreEqual(plates.Field.IsTrap(cell), plate.IsTrap, $"плита {cell} выглядит не тем, что она в поле");
                if (plate.IsTrap) traps++;
            }
            Assert.Greater(traps, 0, "на hook ни одной ловушки");
            Vector2Int faced = plates.Field.Beaver + Field.Facing(beaver.eulerAngles.y);
            Assert.IsTrue(plates.Target.HasValue && plates.Target.Value == faced, $"цель {plates.Target} — не плита {faced}, на которую смотрит бобёр");
            Assert.IsTrue(plates.Plate(faced).Glowing, $"плита {faced}, на которую смотрит бобёр, не светится");
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
