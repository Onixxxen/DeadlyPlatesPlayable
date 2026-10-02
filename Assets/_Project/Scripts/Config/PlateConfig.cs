using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The plates' look and motion; the original's values in brackets. Colours are the albedo of
    /// the pipeline's Lit material under CameraConfig's light, which shows a top face about 1.12× brighter
    /// (linear) than its albedo: the colour on screen is given where it differs.
    /// </summary>
    public static class PlateConfig
    {
        /// <summary>A slab, its centre at the cell's height 0 [the original's Tile.prefab: a cube 1 × 0.356 × 1].</summary>
        public static readonly Vector3 Size = new Vector3(1f, 0.356f, 1f);

        /// <summary>A plate [white].</summary>
        public static readonly Color Plate = Color.white;

        /// <summary>A trap: reddish, its top shows about #FF7F73, with dark cracks [white: in the original a trap
        /// looked like any plate].</summary>
        public static readonly Color Trap = new Color32(0xFF, 0x73, 0x66, 0xFF);
        public static readonly Color Crack = new Color32(0x40, 0x12, 0x10, 0xFF);

        /// <summary>The target: its top shows #FFBD49 [the original's orange QuickOutline],
        /// faded in and out over GlowSeconds.</summary>
        public static readonly Color Glow = new Color32(0xFF, 0xB0, 0x38, 0xFF);
        public static readonly float GlowSeconds = 0.1f;

        /// <summary>The wave: a plate starts this long after the previous cell of distance from the wave's
        /// origin [all at once, with random durations] ...</summary>
        public static readonly float WaveStep = 0.2f;

        /// <summary>... and scales 0 → PopOvershoot over PopUpSeconds, then back to 1 over PopDownSeconds
        /// [1.1; 0.4–0.8 s up, 0.1–0.4 s down].</summary>
        public static readonly float PopOvershoot = 1.1f;
        public static readonly float PopUpSeconds = 0.35f;
        public static readonly float PopDownSeconds = 0.15f;

        /// <summary>A removed plate shrinks to nothing while it sinks CrumbleDrop [a 1.2× swell over 0.1–0.4 s,
        /// then down to nothing over 0.4–0.8 s, in place].</summary>
        public static readonly float CrumbleSeconds = 0.45f;
        public static readonly float CrumbleDrop = 0.8f;

        /// <summary>The landing dip: down DipDepth, then back up three times slower [0.2; 0.1–0.3 s down, 3× up].
        /// The beaver dips with the plate by the same numbers.</summary>
        public static readonly float DipDepth = 0.2f;
        public static readonly float DipDownSeconds = 0.12f;
        public static readonly float DipUpSeconds = 0.36f;

        /// <summary>A trap plate drops away with the beaver: DropDistance down over DropSeconds, speeding up
        /// [the trap plate vanished; the beaver sank 15 units in 2 s].</summary>
        public static readonly float DropDistance = 15f;
        public static readonly float DropSeconds = 1.2f;
    }
}
