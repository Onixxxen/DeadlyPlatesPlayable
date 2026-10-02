using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The tutorial's clock on the main scene, the game sped up: the hand and the hint on the first Ready and
    /// pulsing, gone on the hop, not back on the next Ready, the hand alone back after ReturnSeconds without a tap,
    /// IdleTimedOut once after IdleSeconds. What it looks like is the journey's `hook` and `first-hop` frames.
    /// </summary>
    public class TutorialTests
    {
        private const float Speed = 4f; // Time.timeScale: 10 idle seconds in 2.5

        [UnityTest]
        public IEnumerator Tutorial_ShowsGoesReturnsAndTimesOut()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            var tutorial = Object.FindFirstObjectByType<Tutorial>();
            Assert.IsNotNull(tutorial, "в сцене Main нет Tutorial — MainSceneBuilder.Build не запускали?");
            Transform hand = tutorial.transform.Find("Hand"), hint = tutorial.transform.Find("Hint");
            var hop = Object.FindFirstObjectByType<HopController>();
            int readies = 0, timeouts = 0;
            float timedOutAt = 0f;
            System.Action onReady = () => readies++;
            System.Action onTimeout = () =>
            {
                timeouts++;
                timedOutAt = Time.time;
            };
            HopController.Ready += onReady;
            Tutorial.IdleTimedOut += onTimeout;
            Time.timeScale = Speed;
            try
            {
                Assert.IsFalse(Shown(hand) || Shown(hint), "подсказка видна до того, как открылся ввод");
                yield return WaitFor(() => readies == 1, 5f, "Ready не пришёл после волны");
                yield return WaitGame(TutorialConfig.ScaleUpSeconds + TutorialConfig.ScaleDownSeconds + 0.1f);
                Assert.IsTrue(Shown(hand) && Shown(hint), "на первом Ready нет руки или подсказки");
                float least = 2f, most = 0f, end = Time.time + TutorialConfig.PulseSeconds;
                while (Time.time < end)
                {
                    least = Mathf.Min(least, hand.localScale.x);
                    most = Mathf.Max(most, hand.localScale.x);
                    yield return null;
                }
                Assert.IsTrue(least < 1f - TutorialConfig.PulseDepth * 0.7f && most > 0.95f, $"рука не пульсирует: {least:0.00}…{most:0.00}");
                Assert.AreEqual(1f, hint.localScale.x, 0.001f, "подсказка не в полный размер");

                PlayableInput.Simulate(new Vector2(Screen.width / 2f, Screen.height / 2f)); // the centre's neighbours are never traps
                Assert.IsFalse(hop.InputOpen, "тап не начал прыжок");
                yield return WaitGame(TutorialConfig.ScaleDownSeconds + 0.1f);
                Assert.IsFalse(Shown(hand) || Shown(hint), "рука и подсказка не ушли с первым прыжком");

                yield return WaitFor(() => readies == 2, 2f, "первый прыжок не приземлился");
                float opened = Time.time;
                yield return WaitGame(TutorialConfig.ReturnSeconds - 0.3f);
                Assert.IsFalse(Shown(hand) || Shown(hint), "подсказка вернулась со вторым Ready или раньше ReturnSeconds");
                yield return WaitGame(0.3f + TutorialConfig.ScaleUpSeconds + TutorialConfig.ScaleDownSeconds + 0.2f);
                Assert.IsTrue(Shown(hand), $"рука не вернулась за {TutorialConfig.ReturnSeconds} с без тапа");
                Assert.IsFalse(Shown(hint), "вернулась не одна рука");

                yield return WaitFor(() => timeouts > 0, TutorialConfig.IdleSeconds, "IdleTimedOut не пришёл");
                Assert.AreEqual(TutorialConfig.IdleSeconds, timedOutAt - opened, 0.5f, "IdleTimedOut не через IdleSeconds открытого ввода без тапа");
                yield return WaitGame(TutorialConfig.ScaleDownSeconds + 0.1f);
                Assert.IsFalse(Shown(hand), "рука осталась после IdleTimedOut");
                yield return WaitGame(TutorialConfig.ReturnSeconds + 0.5f);
                Assert.IsFalse(Shown(hand), "рука вернулась после IdleTimedOut");
                Assert.AreEqual(1, timeouts, "IdleTimedOut не один раз");
            }
            finally
            {
                Time.timeScale = 1f;
                HopController.Ready -= onReady;
                Tutorial.IdleTimedOut -= onTimeout;
            }
        }

        private static bool Shown(Transform part) => part.localScale.x > 0.01f;

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
    }
}
