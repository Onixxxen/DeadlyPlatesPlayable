using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The tutorial's clock on the main scene, the game sped up: the hand and the hint on the first Ready and
    /// pulsing, gone on the hop — one that starts and lands inside one long frame —, not back on the next Ready, the hand
    /// alone back ReturnSeconds after it without a tap, IdleTimedOut once after IdleSeconds. What it looks like is the
    /// journey's `hook` and `first-hop` frames.
    /// </summary>
    public class TutorialTests
    {
        private const float Speed = 4f; // Time.timeScale: 10 idle seconds in 2.5
        private const float PulseFrame = 1f / 60f; // Time.captureDeltaTime while the pulse is watched: 25 frames a beat at Speed

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
            System.Action onReady = () => readies++;
            System.Action onTimeout = () => timeouts++;
            HopController.Ready += onReady;
            Tutorial.IdleTimedOut += onTimeout;
            Time.timeScale = Speed;
            try
            {
                Assert.IsFalse(Shown(hand) || Shown(hint), "подсказка видна до того, как открылся ввод");
                yield return WaitFor(() => readies == 1, 5f, "Ready не пришёл после волны");

                // The scale-in and one beat at a fixed step of game time, however long the real frames take: every
                // frame of the beat within its bounds, and frames dense enough to reach both of its ends. The beat
                // starts the frame the hand is back to 1 after its overshoot.
                Time.captureDeltaTime = PulseFrame;
                yield return WaitFor(() => hand.localScale.x > 1f, 1f, "рука не вылетела за 1 на первом Ready");
                yield return WaitFor(() => hand.localScale.x <= 1f, 1f, "рука не встала в 1 после перелёта");
                Assert.IsTrue(Shown(hand) && Shown(hint), "на первом Ready нет руки или подсказки");
                float least = 2f, most = 0f, end = Time.time + TutorialConfig.PulseSeconds;
                while (Time.time < end)
                {
                    float scale = hand.localScale.x;
                    Assert.That(scale, Is.InRange(1f - TutorialConfig.PulseDepth - 0.001f, 1.001f), "рука вне пределов пульса");
                    least = Mathf.Min(least, scale);
                    most = Mathf.Max(most, scale);
                    yield return null;
                }
                Time.captureDeltaTime = 0f;
                Assert.IsTrue(Mathf.Abs(least - (1f - TutorialConfig.PulseDepth)) < 0.01f && most > 0.99f, $"рука не пульсирует: {least:0.00}…{most:0.00}");
                Assert.AreEqual(1f, hint.localScale.x, 0.001f, "подсказка не в полный размер");

                // One long frame holds the whole hop, as on a slow device: the tweens step a hop's length before the
                // tutorial's next Update, so it never sees input closed, whichever of the two Updates runs first.
                PlayableInput.Simulate(new Vector2(Screen.width / 2f, Screen.height / 2f)); // the centre's neighbours are never traps
                Assert.IsFalse(hop.InputOpen, "тап не начал прыжок");
                Tween.Advance(HopConfig.HopSeconds);
                Assert.AreEqual(2, readies, "прыжок не приземлился в том же кадре");
                Assert.IsFalse(Shown(hand) || Shown(hint), "рука и подсказка не ушли с первым прыжком");
                float opened = Time.time;

                // Every frame, not at a moment: a long frame can jump past any moment the test looks at.
                while (Time.time - opened < TutorialConfig.ReturnSeconds)
                {
                    Assert.IsFalse(Shown(hand) || Shown(hint), "подсказка вернулась со вторым Ready или раньше ReturnSeconds");
                    yield return null;
                }
                yield return null; // the hand's scale-in steps from the tween runner's next Update
                Assert.IsTrue(Shown(hand), $"рука не вернулась через {TutorialConfig.ReturnSeconds} с без тапа");
                Assert.IsFalse(Shown(hint), "вернулась не одна рука");

                while (Time.time - opened < TutorialConfig.IdleSeconds)
                {
                    Assert.AreEqual(0, timeouts, "IdleTimedOut раньше IdleSeconds открытого ввода без тапа");
                    yield return null;
                }
                Assert.AreEqual(1, timeouts, "IdleTimedOut не через IdleSeconds открытого ввода без тапа");
                yield return WaitGame(TutorialConfig.ScaleDownSeconds + 0.1f);
                Assert.IsFalse(Shown(hand), "рука осталась после IdleTimedOut");
                yield return WaitGame(TutorialConfig.ReturnSeconds + 0.5f);
                Assert.IsFalse(Shown(hand), "рука вернулась после IdleTimedOut");
                Assert.AreEqual(1, timeouts, "IdleTimedOut не один раз");
            }
            finally
            {
                Time.timeScale = 1f;
                Time.captureDeltaTime = 0f;
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
