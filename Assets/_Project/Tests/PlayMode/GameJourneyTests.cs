using System.Collections;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;
using UnityEngine.UI;

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
        private const float FirstHopSeconds = 0.5f; // after the tap, as the build's journey waits

        /// <summary>
        /// The journey's hops on FieldConfig.Seed's field (traps at 0,2 2,1 −2,0): from the centre down-left to the rim,
        /// along it, and back in. Fixed cells, not "the first safe target": the frames then show the same path from run
        /// to run, and the island change stays past the 4th hop — the beaver keeps 4 plates around it.
        /// </summary>
        private static readonly Vector2Int[] Path = { new Vector2Int(0, -1), new Vector2Int(0, -2), new Vector2Int(-1, -2), new Vector2Int(-1, -1) };

        /// <summary>Then up the island's left half to (−1, 1): the 6th hop changes the island there, with the + plates
        /// behind and beside the beaver standing, and the bridge goes left (−x) — FieldConfig.Seed's straight line across
        /// is free, between a trap in the first row and one in the second.</summary>
        private static readonly Vector2Int[] ToTheChange = { new Vector2Int(-1, 0), new Vector2Int(-1, 1) };

        [UnityTest]
        public IEnumerator Main_FromHookToTheEndCard()
        {
            PlayableJourneyCapture.Reset();
            float firstPop = -1f; // Time.time of the wave's first pop: the centre plate, PlateConfig.PopUpSeconds into it
            System.Action<Vector3> onPop = _ => { if (firstPop < 0f) firstPop = Time.time; };
            PlatesView.PlateSpawned += onPop;
            SceneManager.LoadScene("Main");
            yield return null;
            var rig = Object.FindFirstObjectByType<CameraRig>();
            Assert.IsNotNull(rig, "в сцене Main нет CameraRig — MainSceneBuilder.Build не запускали?");
            var plates = Object.FindFirstObjectByType<PlatesView>();
            Assert.IsNotNull(plates, "в сцене Main нет PlatesView");
            var hop = Object.FindFirstObjectByType<HopController>();
            Assert.IsNotNull(hop, "в сцене Main нет HopController");
            Assert.AreSame(hop.transform, rig.Target, "камера следит не за бобром");
            var beaver = hop.GetComponent<BeaverView>();
            var flow = Object.FindFirstObjectByType<GameFlow>();
            Assert.IsNotNull(flow, "в сцене Main нет GameFlow");
            var banner = Object.FindFirstObjectByType<ObjectiveBanner>();
            Assert.IsNotNull(banner, "в сцене Main нет ObjectiveBanner");
            int hops = 0, islandChanges = 0, ends = 0;
            bool endedWon = false;
            int endedScore = -1;
            System.Action onHop = () => hops++;
            System.Action onIslandChanged = () => islandChanges++;
            System.Action<bool, int> onEnded = (won, score) =>
            {
                ends++;
                endedWon = won;
                endedScore = score;
            };
            HopController.HopStarted += onHop;
            GameFlow.IslandChanged += onIslandChanged;
            GameFlow.Ended += onEnded;
            try
            {
                // Timed from the wave's own start: Time.timeSinceLevelLoad misses the first frame's deltaTime (up to 0.33 s
                // on a cold run), which the wave's tweens get — a run once found the wave over at 1.09 s.
                yield return WaitFor(() => firstPop >= 0f, 5f, "волна не началась: PlateSpawned не пришёл");
                float waveStart = firstPop - PlateConfig.PopUpSeconds;
                while (Time.time < waveStart + WaveSeconds) yield return null;
                AssertMidWave(plates, "wave-a");
                Assert.IsFalse(Object.FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None).Any(p => p.isPlaying), "дымок играет до приземления бобра");
                yield return PlayableJourneyCapture.Frame("wave");
                AssertMidWave(plates, "wave-b");

                while (Time.timeSinceLevelLoad < HookSeconds) yield return null;
                float yaw = beaver.Yaw;
                yield return PlayableJourneyCapture.Frame("hook");
                AssertTurned(beaver, yaw, "hook");

                Camera camera = Camera.main;
                Assert.AreSame(rig.GetComponent<Camera>(), camera, "кадры сняты не камерой CameraRig");
                Assert.AreEqual(CameraRig.FitSize(camera.aspect), camera.orthographicSize, 0.001f, "на hook камера не в масштабе острова");
                AssertIslandInView(camera, "на hook");
                AssertIslandComplete(plates, beaver);
                Bounds body = rig.Target.GetComponentInChildren<SkinnedMeshRenderer>().bounds;
                AssertInView(camera, body, "бобёр на hook");
                Assert.LessOrEqual(body.max.y, CameraConfig.ViewTop, $"бобёр ({body.max.y:0.00}) выше коробки, которую держит камера (CameraConfig.ViewTop)");
                Assert.IsTrue(rig.Target.GetComponent<Animator>().GetCurrentAnimatorStateInfo(0).IsName("Walk"), "бобёр не в Walk");
                Assert.IsTrue(hop.InputOpen, "на hook ввод ещё закрыт");
                Assert.AreEqual(FlowState.Hook, flow.State, "до первого прыжка игра не в hook");
                Assert.AreEqual(Objective.None, banner.Shown, "задание на hook");

                // The first hop, a tap in the air that must not hop, the frame when the build's journey takes it.
                var centre = new Vector2(Screen.width / 2f, Screen.height / 2f);
                Vector2Int start = plates.Field.Beaver;
                PlateView startPlate = plates.Plate(start);
                PlateView[] trail = Path.Take(3).Select(plates.Plate).ToArray();
                yield return HopOnto(hop, plates, Path[0]);
                PlayableInput.Simulate(centre);
                yield return WaitGame(FirstHopSeconds);
                Assert.IsTrue(!startPlate.gameObject.activeSelf || startPlate.transform.localScale.x < 0.9f, "стартовая плита на first-hop не крошится");
                yaw = beaver.Yaw;
                yield return PlayableJourneyCapture.Frame("first-hop");
                AssertTurned(beaver, yaw, "first-hop");
                Assert.AreEqual(1, hops, "тап во время прыжка начал ещё один");
                Assert.AreEqual(1, plates.Field.Score, "очко за первый прыжок");
                Assert.AreEqual(FlowState.Play, flow.State, "после первого прыжка игра не в play");
                AssertStandsOn(beaver, Path[0], "first-hop");
                Assert.IsTrue(Object.FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None).Any(p => p.particleCount > 0), "на first-hop нет дымка");

                for (int i = 1; i < Path.Length; i++) yield return HopOnto(hop, plates, Path[i]);
                yield return WaitGame(HopConfig.LeftPlateDelay + PlateConfig.CrumbleSeconds + 0.1f); // the last plate left is gone
                Assert.IsTrue(hop.InputOpen, "после 4-го прыжка ввод не открылся");
                yaw = beaver.Yaw;
                yield return PlayableJourneyCapture.Frame("hops");
                AssertTurned(beaver, yaw, "hops");
                Assert.AreEqual(4, hops, "не четыре прыжка");
                Assert.AreEqual(4, plates.Field.Score, "не 4 очка за четыре прыжка");
                Assert.IsNull(plates.Field.Change, "остров сменился раньше кадра hops");
                AssertStandsOn(beaver, Path[3], "hops");
                Assert.IsTrue(!startPlate.gameObject.activeSelf && trail.All(p => !p.gameObject.activeSelf), "на hops не исчезли все четыре плиты пути");
                Assert.IsTrue(Object.FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None).Any(p => p.isPlaying && Vector3.Distance(p.transform.position, beaver.transform.position) < 0.5f),
                    $"5-я посадка (дымки сцены по кругу: их {HopConfig.Puffs}) без дымка");
                AssertBanner(banner, Objective.LeaveTwo, FlowConfig.LeaveTwoText, "hops");
                Vector3 cameraAtHops = camera.transform.position;

                var install = Object.FindFirstObjectByType<InstallButton>();
                Assert.IsNotNull(install, "нет кнопки INSTALL");
                var label = install.GetComponentInChildren<TMP_Text>();
                Assert.AreEqual("INSTALL", label.text);
                Assert.AreEqual("Benzin-Bold SDF", label.font.name, "INSTALL не шрифтом Benzin");
                Rect button = ScreenRect((RectTransform)install.transform, camera);
                Assert.IsTrue(button.xMin >= 0f && button.yMin >= 0f && button.xMax <= Screen.width && button.yMax <= Screen.height, $"INSTALL {button} за краем экрана");
                float corner = 50f * Mathf.Sqrt(Screen.width * Screen.height / (390f * 844f)); // 50 px of a 390×844 phone
                Assert.IsTrue(button.xMax <= Screen.width - corner || button.yMax <= Screen.height - corner, $"INSTALL {button} заходит в верхний угол 50×50");

                Assert.IsFalse(InstallButton.Covers(centre), "тап в центр экрана считается тапом по INSTALL");
                Assert.IsTrue(InstallButton.Covers(button.center), "тап по INSTALL не считается тапом по INSTALL");
                int before = PlayableAd.InstallCalls;
                PlayableInput.Simulate(button.center);
                Assert.AreEqual(before + 1, PlayableAd.InstallCalls, "тап по INSTALL должен открывать стор ровно один раз");
                Assert.AreEqual(4, hops, "тап по INSTALL начал прыжок");
                Assert.IsTrue(hop.InputOpen, "тап по INSTALL закрыл ввод");

                // The island change: the 6th hop makes it; input waits until the bridge is in.
                foreach (Vector2Int cell in ToTheChange) yield return HopOnto(hop, plates, cell);
                IslandChange change = plates.Field.Change;
                Assert.IsNotNull(change, "остров не сменился на 6-м прыжке");
                Vector2Int foot = plates.Field.Beaver;
                yield return WaitFor(() => islandChanges > 0, HopConfig.HopSeconds + 0.5f, "GameFlow.IslandChanged не пришёл после посадки");
                Assert.IsFalse(hop.InputOpen, "ввод открыт, пока мост ещё не появился");
                yield return WaitFor(() => hop.InputOpen, FlowConfig.NewIslandDelay + 3f, "ввод не открылся после смены острова");
                yield return CameraFraming(camera, plates, foot, "island");
                yield return PlayableJourneyCapture.Frame("island");
                Assert.AreEqual(1, islandChanges, "IslandChanged не один раз");
                AssertOnlyTheFieldsPlates(plates, "island");
                AssertBanner(banner, Objective.CrossBridge, FlowConfig.CrossBridgeText, "island");
                var ahead = new Vector3(change.Direction.x, 0f, change.Direction.y);
                float moved = Vector3.Dot(camera.transform.position - cameraAtHops, ahead);
                Assert.Greater(moved, 2f, $"камера на island сдвинулась к новому острову на {moved:0.00} — мало");
                AssertCrossingInView(camera, plates, beaver, banner, "island");

                // Onto the bridge: straight across, along the change's direction.
                for (int row = 1; row <= 2; row++) yield return HopOnto(hop, plates, plates.Field.Beaver + change.Direction);
                Vector2Int onBridge = plates.Field.Beaver;
                yield return WaitGame(HopConfig.HopSeconds + 0.05f);
                yield return CameraFraming(camera, plates, onBridge, "bridge");
                yield return PlayableJourneyCapture.Frame("bridge");
                CollectionAssert.Contains(change.Bridge, onBridge, "кадр bridge — бобёр не на мосту");
                AssertStandsOn(beaver, onBridge, "bridge");
                AssertCrossingInView(camera, plates, beaver, banner, "bridge");

                // Onto the new island: the win, and the end after the landing has played.
                while (!plates.Field.Won) yield return HopOnto(hop, plates, plates.Field.Beaver + change.Direction);
                Assert.AreEqual(FieldConfig.NewIslandDistance - FieldConfig.IslandSize / 2, Vector2.Dot(plates.Field.Beaver - foot, change.Direction), 0.001f,
                    "победа не на ближнем краю нового острова");
                int finalScore = plates.Field.Score;
                yield return WaitFor(() => flow.State == FlowState.Won, HopConfig.HopSeconds + 0.5f, "посадка на новый остров — не победа");
                Assert.IsFalse(hop.InputOpen, "после победы ввод открыт");
                Assert.AreEqual(0, ends, "Ended раньше, чем посадка отыграла");
                yield return WaitFor(() => ends > 0, FlowConfig.WinSeconds + 0.5f, "GameFlow.Ended не пришёл после победы");
                Assert.IsTrue(endedWon, "Ended — не победа");
                Assert.AreEqual(finalScore, endedScore, "Ended не с тем счётом");

                // The win card: up with Ended, INSTALL gone; a tap while it comes in (a hop meant) opens nothing.
                var card = Object.FindFirstObjectByType<EndCard>();
                Assert.IsNotNull(card, "в сцене Main нет EndCard");
                AssertCard(card, EndCardConfig.WinTitle, finalScore, "победа");
                Assert.IsFalse(install.gameObject.activeInHierarchy || InstallButton.Covers(button.center), "карточка не спрятала INSTALL");
                int installs = PlayableAd.InstallCalls;
                PlayableInput.Simulate(centre);
                Assert.AreEqual(installs, PlayableAd.InstallCalls, "тап, пока карточка въезжает, открыл стор");
                yield return WaitFor(() => card.Tappable, EndCardConfig.ScaleUpSeconds + EndCardConfig.ScaleDownSeconds + 0.5f, "карточка так и не встала");
                yield return WaitFor(() => Mathf.Abs(camera.orthographicSize - CameraRig.FitSize(camera.aspect)) < 0.001f, 4f, "после победы камера не вернулась к масштабу острова");
                yield return PlayableJourneyCapture.Frame("endcard");
                Rect window = ScreenRect((RectTransform)card.transform.Find("Card/Window"), camera);
                Assert.IsTrue(window.xMin >= 0f && window.yMin >= 0f && window.xMax <= Screen.width && window.yMax <= Screen.height, $"окно карточки {window} за краем экрана");
                yield return AssertPulses(card.transform.Find("Card/Window/Play now"));
                PlayableInput.Simulate(centre);
                Assert.AreEqual(installs + 1, PlayableAd.InstallCalls, "тап по карточке должен открывать стор ровно один раз");
                Assert.AreEqual(1, ends, "Ended не один раз");
            }
            finally
            {
                PlatesView.PlateSpawned -= onPop;
                HopController.HopStarted -= onHop;
                GameFlow.IslandChanged -= onIslandChanged;
                GameFlow.Ended -= onEnded;
            }
        }

        /// <summary>No tap for TutorialConfig.IdleSeconds, the game sped up: the idle card — the fail card's look with
        /// "TRY IT YOURSELF!" and the score — with gameplay input closed and INSTALL gone; a tap while it comes in opens
        /// nothing, one after opens the store once. What it looks like is the build's `endcard` frame.</summary>
        [UnityTest]
        public IEnumerator EndCard_AfterIdle_OpensTheStoreOnATap()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            var card = Object.FindFirstObjectByType<EndCard>();
            Assert.IsNotNull(card, "в сцене Main нет EndCard — MainSceneBuilder.Build не запускали?");
            var hop = Object.FindFirstObjectByType<HopController>();
            GameObject install = Object.FindFirstObjectByType<InstallButton>().gameObject;
            var centre = new Vector2(Screen.width / 2f, Screen.height / 2f);
            Time.timeScale = 4f; // 10 idle seconds in 2.5
            try
            {
                yield return WaitFor(() => hop.InputOpen, 5f, "ввод не открылся после волны");
                yield return WaitFor(() => card.Shown, TutorialConfig.IdleSeconds + 1f, "без тапов карточка не показалась");
                AssertCard(card, EndCardConfig.IdleTitle, 0, "простой");
                Assert.IsFalse(hop.InputOpen, "карточка показалась, а ввод игры открыт");
                Assert.IsFalse(install.activeInHierarchy, "карточка не спрятала INSTALL");
                int installs = PlayableAd.InstallCalls;
                PlayableInput.Simulate(centre);
                Assert.AreEqual(installs, PlayableAd.InstallCalls, "тап, пока карточка въезжает, открыл стор");
                yield return WaitFor(() => card.Tappable, EndCardConfig.ScaleUpSeconds + EndCardConfig.ScaleDownSeconds + 0.5f, "карточка так и не встала");
                PlayableInput.Simulate(centre);
                Assert.AreEqual(installs + 1, PlayableAd.InstallCalls, "тап по карточке должен открывать стор ровно один раз");
            }
            finally
            {
                Time.timeScale = 1f;
            }
        }

        /// <summary>A trap: the plate dips, then drops away with the beaver, which falls in Fall; a tap then is no hop.</summary>
        [UnityTest]
        public IEnumerator Hop_OntoATrap_FallsWithThePlate()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            var plates = Object.FindFirstObjectByType<PlatesView>();
            var hop = Object.FindFirstObjectByType<HopController>();
            var flow = Object.FindFirstObjectByType<GameFlow>();
            Transform beaver = hop.transform;
            int fell = 0, landed = 0, ends = 0;
            bool endedWon = true;
            int endedScore = -1;
            System.Action onFell = () => fell++;
            System.Action<Vector2Int, int> onLanded = (cell, score) => landed++;
            System.Action<bool, int> onEnded = (won, score) =>
            {
                ends++;
                endedWon = won;
                endedScore = score;
            };
            HopController.Fell += onFell;
            HopController.Landed += onLanded;
            GameFlow.Ended += onEnded;
            try
            {
                var trap = new Vector2Int(-2, 0); // FieldConfig.Seed's trap on the left rim
                yield return HopOnto(hop, plates, new Vector2Int(-1, 0));
                PlateView plate = plates.Plate(trap);
                yield return HopOnto(hop, plates, trap, HopOutcome.Trap);
                float landing = Time.time + HopConfig.HopSeconds;
                yield return WaitFor(() => fell > 0, HopConfig.HopSeconds + 1f, "Fell не пришёл после прыжка на ловушку");
                Assert.GreaterOrEqual(Time.time, landing + PlateConfig.DipDownSeconds - 0.05f, "ловушка ушла вниз, не прогнувшись");
                Assert.AreEqual(1, landed, "посадку на ловушку посчитали за Landed");
                Assert.IsNull(plates.Plate(trap), "клетка ловушки не освободилась");
                float offset = beaver.position.y - plate.transform.position.y;
                yield return WaitGame(PlateConfig.DropSeconds / 2f);
                Assert.AreEqual(offset, beaver.position.y - plate.transform.position.y, 0.02f, "бобёр падает не вместе с плитой");
                Assert.IsTrue(beaver.GetComponent<Animator>().GetCurrentAnimatorStateInfo(0).IsName("Fall"), "бобёр падает не в Fall");
                PlayableInput.Simulate(new Vector2(Screen.width / 2f, Screen.height / 2f)); // a hop now would throw: the game is over
                Assert.IsFalse(hop.InputOpen, "ввод открыт во время падения");
                Assert.AreEqual(FlowState.Lost, flow.State, "падение — не проигрыш");
                Assert.AreEqual(0, ends, "Ended посреди падения: карточка закрыла бы его");
                yield return WaitGame(PlateConfig.DropSeconds / 2f + 0.1f);
                Assert.AreEqual(HopConfig.StandHeight - PlateConfig.DropDistance, beaver.position.y, 0.01f, "бобёр не провалился на DropDistance");
                Assert.IsTrue(plate != null && !plate.gameObject.activeSelf, "упавшая ловушка не выключилась (или уничтожена)");
                Assert.AreEqual(1, fell, "Fell не один раз");
                Assert.AreEqual(1, ends, "Ended не один раз после падения");
                Assert.IsFalse(endedWon, "падение закончилось победой");
                Assert.AreEqual(1, endedScore, "Ended не с тем счётом");
                AssertCard(Object.FindFirstObjectByType<EndCard>(), EndCardConfig.FellTitle, 1, "падение");
            }
            finally
            {
                HopController.Fell -= onFell;
                HopController.Landed -= onLanded;
                GameFlow.Ended -= onEnded;
            }
        }

        /// <summary>The void: a hop back onto the plate just left jumps and falls the same way.</summary>
        [UnityTest]
        public IEnumerator Hop_IntoTheVoid_Falls()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            var plates = Object.FindFirstObjectByType<PlatesView>();
            var hop = Object.FindFirstObjectByType<HopController>();
            var beaver = hop.GetComponent<BeaverView>();
            int fell = 0;
            System.Action onFell = () => fell++;
            HopController.Fell += onFell;
            try
            {
                Vector2Int start = plates.Field.Beaver;
                yield return HopOnto(hop, plates, new Vector2Int(0, 1));
                yield return WaitFor(() => hop.InputOpen && plates.Target.HasValue && plates.Target.Value == start, 8f, "бобёр не повернулся к пустоте");
                Assert.IsFalse(Object.FindObjectsByType<PlateView>(FindObjectsSortMode.None).Any(p => p.Glowing), "бобёр смотрит в пустоту, а плита светится");
                yield return HopOnto(hop, plates, start, HopOutcome.Void); // the plate left behind is gone
                yield return WaitFor(() => fell > 0, HopConfig.HopSeconds + 0.5f, "Fell не пришёл после прыжка в пустоту");
                AssertStandsOn(beaver, start, "прыжок в пустоту");
                yield return WaitGame(PlateConfig.DropSeconds + 0.1f);
                Assert.AreEqual(HopConfig.StandHeight - PlateConfig.DropDistance, beaver.transform.position.y, 0.01f, "бобёр не провалился на DropDistance");
                Assert.IsFalse(hop.InputOpen, "ввод открыт после падения");
                Assert.AreEqual(1, fell, "Fell не один раз");
            }
            finally
            {
                HopController.Fell -= onFell;
            }
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
                // Switched off, not destroyed: in the Playworks build an Instantiate after a Destroy failed.
                Assert.IsTrue(crumbled != null && !crumbled.gameObject.activeSelf, "раскрошенная плита не выключилась (или уничтожена)");
                Assert.AreEqual(1, removed, "PlateRemoved не один раз");
                Assert.IsTrue(dropped != null && !dropped.gameObject.activeSelf, "упавшая плита не выключилась (или уничтожена)");

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

        /// <summary>The crossing's framing (IslandTransition.Framed, CameraRig.Fit) in the build's orientations too: with the
        /// beaver anywhere from the bridge's foot to its last row, what is framed is on screen and under the banner's line
        /// (FlowConfig.CameraTop).</summary>
        [TestCase(390, 844)]
        [TestCase(844, 390)]
        [TestCase(1080, 2340)]
        public void TheCrossingFitsUnderTheBanner(int width, int height)
        {
            var field = new Field(FieldConfig.Seed);
            foreach (Vector2Int cell in Path.Concat(ToTheChange)) Assert.AreEqual(HopOutcome.Safe, field.Hop(cell - field.Beaver), $"путь сценария: {cell}");
            Assert.IsNotNull(field.Change, "путь сценария не меняет остров");
            var go = new GameObject("Fit test camera");
            try
            {
                var camera = go.AddComponent<Camera>();
                camera.enabled = false;
                camera.orthographic = true;
                camera.aspect = (float)width / height;
                go.transform.rotation = CameraConfig.Rotation;
                while (!field.Won)
                {
                    Bounds[] boxes = IslandTransition.Framed(field, field.Beaver);
                    float size;
                    go.transform.position = CameraRig.Fit(boxes, FlowConfig.CameraTop, camera.aspect, out size);
                    camera.orthographicSize = size;
                    float left = 1f, right = 1f, bottom = 1f, under = 1f;
                    foreach (Bounds box in boxes)
                    {
                        Rect seen = AssertInView(camera, box, $"при {width}×{height}, бобёр на {field.Beaver}");
                        left = Mathf.Min(left, seen.xMin);
                        right = Mathf.Min(right, 1f - seen.xMax);
                        bottom = Mathf.Min(bottom, seen.yMin);
                        under = Mathf.Min(under, FlowConfig.CameraTop - seen.yMax);
                    }
                    Debug.Log($"[Crossing fit] {width}x{height}, beaver on {field.Beaver}: zoom {size / CameraRig.FitSize(camera.aspect):0.00}, " +
                        $"px to the left edge {left * width:0}, the right {right * width:0}, the bottom {bottom * height:0}, the banner's line {under * height:0}");
                    Assert.GreaterOrEqual(under, 0f, $"при {width}×{height}, бобёр на {field.Beaver}: кадр заходит выше линии баннера");
                    Assert.AreEqual(HopOutcome.Safe, field.Hop(field.Change.Direction), "прямая через мост не свободна");
                }
            }
            finally
            {
                Object.DestroyImmediate(go);
            }
        }

        /// <summary>Waits until a gameplay tap would hop onto <paramref name="cell"/> — input open, the beaver facing it,
        /// the field saying what it is — and taps the screen centre, as the build's journey does.</summary>
        private static IEnumerator HopOnto(HopController hop, PlatesView plates, Vector2Int cell, HopOutcome expected = HopOutcome.Safe)
        {
            Assert.AreEqual(expected, plates.Field.OutcomeAt(cell), $"путь сценария: {cell} в поле seed {FieldConfig.Seed} — не {expected}");
            yield return WaitFor(() => hop.InputOpen && plates.Target.HasValue && plates.Target.Value == cell, 8f,
                $"бобёр так и не повернулся к {cell} с открытым вводом");
            int score = plates.Field.Score;
            PlayableInput.Simulate(new Vector2(Screen.width / 2f, Screen.height / 2f));
            Assert.IsFalse(hop.InputOpen, $"тап не начал прыжок на {cell}");
            Assert.AreEqual(cell, plates.Field.Beaver, $"прыжок не на {cell}");
            Assert.AreEqual(expected == HopOutcome.Safe ? score + 1 : score, plates.Field.Score, "очко не за безопасную посадку");
        }

        private static IEnumerator WaitFor(System.Func<bool> done, float seconds, string failure)
        {
            float end = Time.time + seconds;
            while (!done())
            {
                Assert.Less(Time.time, end, failure);
                yield return null;
            }
        }

        private static IEnumerator WaitGame(float seconds)
        {
            float end = Time.time + seconds;
            while (Time.time < end) yield return null;
        }

        /// <summary>The beaver turned between a frame pair's -a and -b (the yaw from before the pair).</summary>
        private static void AssertTurned(BeaverView beaver, float yaw, string frame) =>
            Assert.Greater(Mathf.Abs(Mathf.DeltaAngle(yaw, beaver.Yaw)), 10f, $"{frame}: бобёр не поворачивается между -a и -b");

        /// <summary>The beaver over the middle of <paramref name="cell"/>.</summary>
        private static void AssertStandsOn(BeaverView beaver, Vector2Int cell, string when)
        {
            Vector3 at = beaver.transform.position;
            Assert.IsTrue(Mathf.Abs(at.x - cell.x * FieldConfig.Spacing) < 0.01f && Mathf.Abs(at.z - cell.y * FieldConfig.Spacing) < 0.01f,
                $"{when}: бобёр в {at}, а не на {cell}");
        }

        /// <summary>The end card is up with this title and score, and the network has heard the game ended.</summary>
        private static void AssertCard(EndCard card, string title, int score, string when)
        {
            Assert.IsTrue(card.Shown, $"{when}: нет карточки");
            Assert.AreEqual(title, card.transform.Find("Card/Window/Title").GetComponent<TMP_Text>().text, $"{when}: не тот заголовок карточки");
            Assert.AreEqual(score.ToString(), card.transform.Find("Card/Window/Score").GetComponent<TMP_Text>().text, $"{when}: на карточке не тот счёт");
            Assert.IsTrue(PlayableAd.Ended, $"{when}: карточка показалась, а PlayableAd.GameEnded не позван");
        }

        /// <summary>PLAY NOW pulses: over one beat its scale swings by most of EndCardConfig.PulseScale's.</summary>
        private static IEnumerator AssertPulses(Transform button)
        {
            float least = 2f, most = 0f, end = Time.time + EndCardConfig.PulseSeconds;
            while (Time.time < end)
            {
                least = Mathf.Min(least, button.localScale.x);
                most = Mathf.Max(most, button.localScale.x);
                yield return null;
            }
            Assert.Greater(most - least, (EndCardConfig.PulseScale - 1f) * 0.7f, $"PLAY NOW не пульсирует: {least:0.00}…{most:0.00}");
        }

        /// <summary>The banner shows this objective, its one line reading <paramref name="text"/>, at rest size.</summary>
        private static void AssertBanner(ObjectiveBanner banner, Objective objective, string text, string frame)
        {
            Assert.AreEqual(objective, banner.Shown, $"{frame}: на баннере не {objective}");
            TMP_Text[] lines = banner.GetComponentsInChildren<TMP_Text>(); // the shown line only: the others are inactive
            Assert.AreEqual(1, lines.Length, $"{frame}: на баннере не одна строка");
            Assert.AreEqual(text, lines[0].text, $"{frame}: не тот текст задания");
            Assert.AreEqual(1f, banner.transform.localScale.x, 0.01f, $"{frame}: баннер не в полный размер");
        }

        /// <summary>Every plate on screen is one the field has, at rest size and looking like it: the old island has gone
        /// but for the beaver's +, the bridge and the new island are in.</summary>
        private static void AssertOnlyTheFieldsPlates(PlatesView plates, string frame)
        {
            int count = 0;
            foreach (Vector2Int cell in plates.Field.Plates)
            {
                PlateView plate = plates.Plate(cell);
                Assert.IsNotNull(plate, $"{frame}: нет плиты {cell}");
                Assert.AreEqual(1f, plate.transform.localScale.x, 0.001f, $"{frame}: плита {cell} не в полный размер");
                Assert.AreEqual(plates.Field.IsTrap(cell), plate.IsTrap, $"{frame}: плита {cell} выглядит не тем, что она в поле");
                count++;
            }
            Assert.AreEqual(count, Object.FindObjectsByType<PlateView>(FindObjectsSortMode.None).Length,
                $"{frame}: на экране плиты, которых нет в поле — старый остров не ушёл");
        }

        /// <summary>Waits until the camera has eased onto what it frames with the beaver on <paramref name="cell"/>: the
        /// beaver and every plate left.</summary>
        private static IEnumerator CameraFraming(Camera camera, PlatesView plates, Vector2Int cell, string frame)
        {
            float size;
            Vector3 goal = CameraRig.Fit(IslandTransition.Framed(plates.Field, cell), FlowConfig.CameraTop, camera.aspect, out size);
            yield return WaitFor(() => Vector3.Distance(camera.transform.position, goal) < 0.05f && Mathf.Abs(camera.orthographicSize - size) < 0.01f, 5f,
                $"{frame}: камера так и не встала на бобра и новый остров");
        }

        /// <summary>The beaver and every plate left — the whole new island among them — on screen, none cut by an edge, and
        /// under the banner; logs how many pixels the nearest of them leave to each edge and to the banner.</summary>
        private static void AssertCrossingInView(Camera camera, PlatesView plates, BeaverView beaver, ObjectiveBanner banner, string frame)
        {
            var boxes = new List<Bounds> { beaver.GetComponentInChildren<SkinnedMeshRenderer>().bounds };
            foreach (Vector2Int cell in plates.Field.Plates) boxes.Add(PlateBounds(cell));
            Rect pill = ScreenRect((RectTransform)banner.GetComponentInChildren<Image>().transform, camera);
            float left = float.MaxValue, right = float.MaxValue, bottom = float.MaxValue, under = float.MaxValue;
            foreach (Bounds box in boxes)
            {
                Rect seen = AssertInView(camera, box, $"{frame}: {box.center}");
                left = Mathf.Min(left, seen.xMin * Screen.width);
                right = Mathf.Min(right, (1f - seen.xMax) * Screen.width);
                bottom = Mathf.Min(bottom, seen.yMin * Screen.height);
                under = Mathf.Min(under, pill.yMin - seen.yMax * Screen.height);
            }
            Debug.Log($"[GameJourney] {frame} at {Screen.width}x{Screen.height}, zoom {camera.orthographicSize / CameraRig.FitSize(camera.aspect):0.00}: " +
                $"px to the left edge {left:0}, the right {right:0}, the bottom {bottom:0}, the banner {under:0}");
            Assert.Greater(under, 0f, $"{frame}: бобёр или новый остров под баннером ({under:0} px)");
        }

        private static Bounds PlateBounds(Vector2Int cell) =>
            new Bounds(new Vector3(cell.x * FieldConfig.Spacing, 0f, cell.y * FieldConfig.Spacing), PlateConfig.Size);

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
        private static void AssertIslandComplete(PlatesView plates, BeaverView beaver)
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
            Vector2Int faced = plates.Field.Beaver + Field.Facing(beaver.Yaw);
            Assert.IsTrue(plates.Target.HasValue && plates.Target.Value == faced, $"цель {plates.Target} — не плита {faced}, на которую смотрит бобёр");
            Assert.IsTrue(plates.Plate(faced).Glowing, $"плита {faced}, на которую смотрит бобёр, не светится");
        }

        /// <summary>Every plate of the 5×5 island at the world origin, and the top of the box the camera keeps over
        /// each of them, inside the viewport; returns the plates' viewport rect.</summary>
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
