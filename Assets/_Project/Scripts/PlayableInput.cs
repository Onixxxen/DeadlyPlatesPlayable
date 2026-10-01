using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// One tap = one event, from a finger, a mouse, or a PlayMode test. Legacy Input on purpose:
    /// it is what Unity Playworks converts (the Input System package is not supported there).
    /// The game listens to <see cref="Tapped"/> and never reads Input itself, so the journey
    /// test can play it with <see cref="Simulate"/>.
    /// </summary>
    public static class PlayableInput
    {
        /// <summary>Screen position in pixels, origin bottom-left (Unity's screen space).</summary>
        public static event Action<Vector2> Tapped;

        public static int TapCount { get; private set; }

        public static void Simulate(Vector2 screenPosition) => Raise(screenPosition);

        internal static void Raise(Vector2 screenPosition)
        {
            TapCount++;
            Tapped?.Invoke(screenPosition);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            Tapped = null;
            TapCount = 0;
        }
    }
}
