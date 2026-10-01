using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The only code that talks to the ad network, through Unity Playworks (Luna). The game calls
    /// <see cref="Install"/> from a deliberate tap (CTA button, end card) and <see cref="GameEnded"/>
    /// when the end card shows (Mintegral and Vungle reject playables without it).
    ///
    /// Luna's API is referenced unconditionally so the editor compiler checks it, and called only
    /// outside the editor: in the editor InstallFullGame has no store to open, and a PlayMode run
    /// must not open a browser. Nothing else in the project references Luna.Unity.*.
    /// </summary>
    public static class PlayableAd
    {
        /// <summary>How many times the store was requested — the PlayMode journey asserts on it.</summary>
        public static int InstallCalls { get; private set; }

        public static bool Ended { get; private set; }

        public static bool Paused { get; private set; }

        /// <summary>Raised when the container hides or shows the ad.</summary>
        public static event Action<bool> PauseChanged;

        public static void Install()
        {
            InstallCalls++;
            if (Application.isEditor)
            {
                Debug.Log("[PlayableAd] Install — in the build Luna.Unity.Playable.InstallFullGame() opens the store");
                return;
            }
            Luna.Unity.Playable.InstallFullGame();
        }

        public static void GameEnded()
        {
            if (Ended) return;
            Ended = true;
            if (!Application.isEditor) Luna.Unity.LifeCycle.GameEnded();
        }

        /// <summary>Pause or resume the whole playable: time, sound, and whoever listens.</summary>
        public static void SetPaused(bool paused)
        {
            if (Paused == paused) return;
            Paused = paused;
            // Not AudioListener.pause: Luna's UnityEngine has no such member (CS0117 at the
            // Playworks build, 2026-10-01). Volume exists on both sides.
            AudioListener.volume = paused ? 0f : 1f;
            Time.timeScale = paused ? 0f : 1f;
            PauseChanged?.Invoke(paused);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            InstallCalls = 0;
            Ended = false;
            Paused = false;
            PauseChanged = null;
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void SubscribeToContainer()
        {
            if (Application.isEditor) return;
            Luna.Unity.LifeCycle.OnPause += OnContainerPause;
            Luna.Unity.LifeCycle.OnResume += OnContainerResume;
        }

        private static void OnContainerPause() => SetPaused(true);

        private static void OnContainerResume() => SetPaused(false);
    }
}
