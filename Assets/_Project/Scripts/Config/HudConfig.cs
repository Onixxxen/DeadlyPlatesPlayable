using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The score: the counter top-left and the "+1" over each landing; the original's values in brackets.
    /// Layout in canvas units (1080×1920 reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either
    /// orientation, so the top-left 50×50 px corner is 125 units.
    /// </summary>
    public static class HudConfig
    {
        /// <summary>The counter: a pill of the original's lighter orange with the number in white Benzin, its top-left
        /// corner here from the screen's — INSTALL's mirror, clear of the corner by 15 units [a white number, 220 at
        /// most, auto-sized: white on the cyan barely read].</summary>
        public static readonly Vector2 ScoreOffset = new Vector2(40f, -140f);
        public static readonly Vector2 ScoreSize = new Vector2(170f, 110f);
        public static readonly float ScoreFontSize = 80f;
        public static readonly Color ScorePanel = new Color32(0xF3, 0xAB, 0x42, 0xFF);

        /// <summary>On every safe landing the number changes at once and punches: up to Punch over PunchUpSeconds, back
        /// over PunchDownSeconds [it changed 0.7 s after the landing, with no punch: `first-hop`, 0.1 s after the
        /// landing, would still read 0].</summary>
        public static readonly float Punch = 1.3f;
        public static readonly float PunchUpSeconds = 0.08f;
        public static readonly float PunchDownSeconds = 0.17f;

        /// <summary>The "+1": Benzin in the original's darker orange [#F3AB42, 50, world-space, turned to the camera by
        /// BillboardText], drawn on the canvas over the landing plate, so it faces the camera exactly.</summary>
        public static readonly string PopupText = "+1";
        public static readonly float PopupFontSize = 100f;
        public static readonly Color PopupColor = new Color32(0xFF, 0x97, 0x31, 0xFF);

        /// <summary>It starts this high over the landing plate's centre, just over the beaver's hat (2.1), and rises
        /// PopupRise, slowing, over PopupSeconds; at 3.1 over a far-rim plate it stays inside a landscape screen
        /// [from 1.68 to 2.1 over the beaver in 0.5 s, then back down].</summary>
        public static readonly float PopupHeight = 2.5f;
        public static readonly float PopupRise = 0.6f;
        public static readonly float PopupSeconds = 0.9f;

        /// <summary>It pops in — 0 → PopupOvershoot over PopupUpSeconds, back to 1 over PopupDownSeconds — and fades
        /// out over the last PopupFadeSeconds [faded in over 0.3 s, out over 0.3 s from 0.7 s].</summary>
        public static readonly float PopupOvershoot = 1.2f;
        public static readonly float PopupUpSeconds = 0.12f;
        public static readonly float PopupDownSeconds = 0.1f;
        public static readonly float PopupFadeSeconds = 0.4f;

        /// <summary>"+1"s the scene holds, used in turn: landings come at least a hop (HopConfig.HopSeconds) apart, so
        /// with PopupSeconds under Popups hops each has finished before it plays again. Scene objects, not instantiated
        /// (the Playworks build broke on Instantiate after a Destroy, 2026-10-02).</summary>
        public static readonly int Popups = 3;
    }
}
