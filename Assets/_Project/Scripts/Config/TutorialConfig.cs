using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The tutorial; the original's Tutorial values in brackets. Sizes are units of the main canvas
    /// (1080×1920 reference, match 0.5: about 0.4 px of a 390×844 phone in either orientation).
    /// </summary>
    public static class TutorialConfig
    {
        /// <summary>The hint, white in Benzin ["нажми на экран и не попади в ловушку", white, 60 on a canvas matching
        /// height] ...</summary>
        public static readonly string Hint = "TAP TO JUMP!";
        public static readonly float HintSize = 80f;
        public static readonly Color HintColor = Color.white;

        /// <summary>... over a copy of itself in a dark orange, ShadowOffset lower: white alone is lost on the cyan
        /// [the original dimmed the whole screen to 86 % black behind it, which would hide the island].</summary>
        public static readonly Color HintShadow = new Color32(0xB8, 0x5A, 0x12, 0xFF);
        public static readonly Vector2 ShadowOffset = new Vector2(0f, -8f);

        /// <summary>Where they stand, so the island, the beaver and the glowing target stay in view [both over the
        /// island: the text 175 above the screen centre, the hand 149 below]. The hint this far above the screen centre:
        /// a canvas unit spans about the same world distance in either orientation, so it sits just above the island in
        /// both. The hand at this fraction of the screen from its bottom-left: below the island in portrait, right of it
        /// in landscape, its fingertip clear of the rim trap at the island's right (FieldConfig.Seed's 2,1).</summary>
        public static readonly float HintAbove = 300f;
        public static readonly Vector2 HandAt = new Vector2(0.8f, 0.17f);

        /// <summary>HandPointer.png, its aspect kept [186 × 204].</summary>
        public static readonly Vector2 HandSize = new Vector2(200f, 217f);

        /// <summary>Both scale in 0 → Overshoot over ScaleUpSeconds, then to 1 over ScaleDownSeconds, and out to 0 over
        /// ScaleDownSeconds [1.1, 0.2 s, 0.1 s; the dim panel faded over 0.3 s].</summary>
        public static readonly float Overshoot = 1.1f;
        public static readonly float ScaleUpSeconds = 0.2f;
        public static readonly float ScaleDownSeconds = 0.1f;

        /// <summary>Once in, the hand pulses down to 1 − PulseDepth and back every PulseSeconds [the GrowAndDown clip:
        /// 1 → 0.8 → 1 in 1.67 s].</summary>
        public static readonly float PulseDepth = 0.2f;
        public static readonly float PulseSeconds = 1.6667f;

        /// <summary>With input open and no tap the hand comes back after ReturnSeconds, and after IdleSeconds the
        /// tutorial gives up: Tutorial.IdleTimedOut, the end card follows [after 10 s without a tap the whole tutorial
        /// came back].</summary>
        public static readonly float ReturnSeconds = 3f;
        public static readonly float IdleSeconds = 10f;
    }
}
