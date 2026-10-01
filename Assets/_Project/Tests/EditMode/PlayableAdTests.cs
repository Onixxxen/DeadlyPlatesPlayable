using NUnit.Framework;
using UnityEngine;

namespace Playable.Tests
{
    /// <summary>Pure checks that need no scene: they keep the EditMode run non-empty and fast.</summary>
    public class PlayableAdTests
    {
        [Test]
        public void Install_InTheEditor_CountsAndOpensNothing()
        {
            int before = PlayableAd.InstallCalls;
            PlayableAd.Install();
            Assert.AreEqual(before + 1, PlayableAd.InstallCalls);
        }

        [Test]
        public void SetPaused_StopsTimeAndSound_AndResumes()
        {
            PlayableAd.SetPaused(true);
            Assert.AreEqual(0f, Time.timeScale);
            Assert.AreEqual(0f, AudioListener.volume);
            PlayableAd.SetPaused(false);
            Assert.AreEqual(1f, Time.timeScale);
            Assert.AreEqual(1f, AudioListener.volume);
        }
    }
}
