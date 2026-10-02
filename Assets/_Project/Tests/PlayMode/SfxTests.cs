using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

namespace Playable.Tests
{
    /// <summary>
    /// The sounds on the main scene: none through the first island's wave and the drop-in; the first hop's
    /// after the first tap — jump, the plate left behind's TileDelete, step and ScoreAdd at the landing; none while
    /// PlayableAd pauses. Which clip plays where is SfxScene's; this listens to <see cref="Sfx.Played"/>, not to the
    /// audio device a batch run may lack.
    /// </summary>
    public class SfxTests
    {
        [UnityTest]
        public IEnumerator Sfx_SilentUntilTheFirstTap_TheHopsSounds_SilentWhilePaused()
        {
            SceneManager.LoadScene("Main");
            yield return null;
            Assert.IsNotNull(Camera.main.GetComponent<AudioListener>(), "на камере нет AudioListener — MainSceneBuilder.Build не запускали?");
            var hop = Object.FindFirstObjectByType<HopController>();
            var played = new List<string>();
            System.Action<AudioClip> onPlayed = clip => played.Add(clip.name);
            Sfx.Played += onPlayed;
            try
            {
                yield return WaitFor(() => hop.InputOpen, 5f, "ввод не открылся после волны");
                CollectionAssert.IsEmpty(played, "звук до первого касания");

                var centre = new Vector2(Screen.width / 2f, Screen.height / 2f); // the centre's neighbours are never traps
                PlayableInput.Simulate(centre);
                CollectionAssert.AreEqual(new[] { "jump" }, played, "первый тап — не прыжок со звуком");
                yield return WaitFor(() => hop.InputOpen, 2f, "первый прыжок не приземлился");
                CollectionAssert.AreEquivalent(new[] { "jump", "TileDelete", "step", "ScoreAdd" }, played, "не те звуки первого прыжка");

                PlayableAd.SetPaused(true);
                played.Clear();
                PlayableInput.Simulate(centre); // the hop starts, frozen in time: its jump must not sound
                Assert.IsFalse(hop.InputOpen, "тап на паузе не начал прыжок");
                CollectionAssert.IsEmpty(played, "звук на паузе");
            }
            finally
            {
                PlayableAd.SetPaused(false);
                Sfx.Played -= onPlayed;
            }
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
    }
}
