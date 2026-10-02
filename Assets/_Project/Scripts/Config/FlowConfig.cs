using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The game's flow: the objective banner, the island change and the end; the original's values in
    /// brackets. Layout in canvas units (1080×1920 reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either
    /// orientation.
    /// </summary>
    public static class FlowConfig
    {
        /// <summary>The objectives' texts [the original's NoMoves and CrossBridge tasks: "Leave only two tiles around you",
        /// "Cross the bridge with traps"].</summary>
        public static readonly string LeaveTwoText = "LEAVE ONLY 2 TILES AROUND YOU!";
        public static readonly string CrossBridgeText = "CROSS THE BRIDGE!";

        /// <summary>The banner: Benzin in the original's darker orange on a white pill sized to the text, its centre at
        /// BannerY of the screen's height — under INSTALL and the score in portrait, between them in landscape
        /// [white text near the bottom of a portrait-only screen]. A line wraps past BannerWidth: the objective breaks
        /// after "TILES".</summary>
        public static readonly float BannerY = 0.82f;
        public static readonly float BannerWidth = 860f;
        public static readonly float BannerFontSize = 48f;
        public static readonly Vector2 BannerPadding = new Vector2(40f, 24f);
        public static readonly Color BannerPanel = Color.white;
        public static readonly Color BannerText = new Color32(0xFF, 0x97, 0x31, 0xFF);

        /// <summary>Each objective scales in 0 → BannerOvershoot over BannerUpSeconds, then to 1 over BannerDownSeconds
        /// [the original's TasksActivationAnimation].</summary>
        public static readonly float BannerOvershoot = 1.1f;
        public static readonly float BannerUpSeconds = 0.5f;
        public static readonly float BannerDownSeconds = 0.5f;

        /// <summary>The old plates crumble in a wave: a plate starts this much later per cell of distance from the beaver
        /// [all at once, with random durations].</summary>
        public static readonly float CrumbleStep = 0.05f;

        /// <summary>The new island and the bridge pop in this long after the old plates start to crumble [0.5 s].</summary>
        public static readonly float NewIslandDelay = 0.5f;

        /// <summary>From then until the win the camera frames the beaver and every plate left — the old island's, the
        /// bridge, the whole new island — zooming out as far as they need, in this lower share of the screen's height:
        /// above it is the banner's (its bottom edge at 0.77 of a landscape screen, 0.80 of a portrait one)
        /// [UpdateCenter onto the new island, 7 cells off: CameraFollow kept the beaver in the middle and the new island
        /// mostly off screen].</summary>
        public static readonly float CameraTop = 0.74f;

        /// <summary>The win's end (GameFlow.Ended) comes this long after the landing on the new island: the landing's dip
        /// and puff play before the end card [the original ended the match at once].</summary>
        public static readonly float WinSeconds = 0.8f;
    }
}
