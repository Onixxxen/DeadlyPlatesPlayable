using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The end card; the original's GameOverPanel values in brackets. Layout in canvas units (1080×1920
    /// reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either orientation, whose short side is about 980
    /// units — the window fits it with room for its overshoot.
    /// </summary>
    public static class EndCardConfig
    {
        /// <summary>Each ending's title, on two lines so that it can be large: Benzin is wide, and on one line the
        /// longest would shrink to about half this size in the window [the original's defeat causes, #FFC183, 45,
        /// under the score].</summary>
        public static readonly string WinTitle = "YOU\nMADE IT!";
        public static readonly string FellTitle = "OOPS,\nYOU FELL!";
        public static readonly string IdleTitle = "TRY IT\nYOURSELF!";
        public static readonly string PlayNow = "PLAY NOW";

        /// <summary>Over the whole screen, the original's lighter orange, translucent: the game shows through, the card
        /// is what is tapped [#FFAE51 at 65 %, which over the cyan turns olive].</summary>
        public static readonly Color Overlay = new Color32(0xF3, 0xAB, 0x42, 0xD9);

        /// <summary>The white window in the middle [677 × 739, white, framed] ...</summary>
        public static readonly Vector2 WindowSize = new Vector2(760f, 740f);
        public static readonly Color Window = Color.white;

        /// <summary>... holds, top to bottom, the title, the score and PLAY NOW; centres from the window's centre, text in
        /// Benzin in the original's darker orange [the score #FF9731, 100–200, at +206; the restart button #FF9731,
        /// 300 × 114, at −226, "еще раз" white, 42].</summary>
        public static readonly Vector2 TitleAt = new Vector2(0f, 210f);
        public static readonly Vector2 TitleBox = new Vector2(680f, 240f);
        public static readonly float TitleSize = 84f;
        public static readonly Vector2 ScoreAt = new Vector2(0f, -30f);
        public static readonly Vector2 ScoreBox = new Vector2(680f, 200f);
        public static readonly float ScoreSize = 150f;
        public static readonly Color Ink = new Color32(0xFF, 0x97, 0x31, 0xFF);
        public static readonly Vector2 PlayNowAt = new Vector2(0f, -245f);
        public static readonly Vector2 PlayNowSize = new Vector2(580f, 150f);
        public static readonly float PlayNowFontSize = 60f;
        public static readonly Color PlayNowPanel = new Color32(0xFF, 0x97, 0x31, 0xFF);
        public static readonly Color PlayNowInk = Color.white;

        /// <summary>It comes in: the overlay fades in over FadeSeconds while the window scales 0 → Overshoot over
        /// ScaleUpSeconds, then to 1 over ScaleDownSeconds. Only then does a tap open the store, so a tap meant for the
        /// game cannot [shown at once].</summary>
        public static readonly float FadeSeconds = 0.3f;
        public static readonly float Overshoot = 1.1f;
        public static readonly float ScaleUpSeconds = 0.3f;
        public static readonly float ScaleDownSeconds = 0.2f;

        /// <summary>Once in, PLAY NOW pulses up to PulseScale and back every PulseSeconds: a frame pair 0.4 s apart
        /// catches it at different sizes.</summary>
        public static readonly float PulseScale = 1.08f;
        public static readonly float PulseSeconds = 1f;
    }
}
