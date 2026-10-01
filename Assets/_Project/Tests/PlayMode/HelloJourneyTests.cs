using System.Collections;
using NUnit.Framework;
using Playable.Hello;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The skeleton's journey: hook → three taps → end card → CTA, with frames.
    /// A real playable replaces it with its own journey and keeps the shape: wait for
    /// Play, tap through PlayableInput.Simulate, a Frame per beat of the ad, and the two rules a
    /// network checks — no store from gameplay taps, the store from the CTA.
    /// </summary>
    public class HelloJourneyTests
    {
        [UnityTest]
        public IEnumerator HelloPlayable_PlaysFromHookToCta()
        {
            PlayableJourneyCapture.Reset();
            SceneManager.LoadScene("Main");

            float start = Time.realtimeSinceStartup;
            while ((HelloPlayable.Instance == null || HelloPlayable.Instance.Current != HelloPlayable.State.Play)
                   && Time.realtimeSinceStartup - start < 10f)
                yield return null;
            Assert.IsNotNull(HelloPlayable.Instance, "сцена Main не запустила игру за 10 с");

            yield return PlayableJourneyCapture.Frame("hook");

            for (int i = 0; i < 3; i++)
            {
                var points = HelloPlayable.Instance.TargetScreenPoints();
                Assert.IsNotEmpty(points, $"тап {i + 1}: целей на экране нет");
                PlayableInput.Simulate(points[0]);
                yield return new WaitForSecondsRealtime(0.3f);
                if (i == 0) yield return PlayableJourneyCapture.Frame("first-hit");
            }

            Assert.AreEqual(HelloPlayable.State.End, HelloPlayable.Instance.Current, "три попадания не довели до конца");
            Assert.IsTrue(PlayableAd.Ended, "конец игры не сообщён сети (PlayableAd.GameEnded)");
            Assert.AreEqual(0, PlayableAd.InstallCalls, "игровые тапы не должны открывать стор");
            yield return PlayableJourneyCapture.Frame("endcard");

            PlayableInput.Simulate(new Vector2(Screen.width / 2f, Screen.height / 2f));
            Assert.AreEqual(1, PlayableAd.InstallCalls, "тап по end card должен открывать стор ровно один раз");
        }
    }
}
