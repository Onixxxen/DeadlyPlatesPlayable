namespace Playable
{
    /// <summary>
    /// The beaver and the hop; the original's values in brackets. The landing dip and the fall are
    /// PlateConfig's Dip* and Drop*: the beaver moves with its plate.
    /// </summary>
    public static class HopConfig
    {
        /// <summary>The beaver turns this fast, clockwise seen from above, while it stands on the island; the target
        /// is the plate it faces, updated at once [90 °/s, the target changed only at each 90° boundary].</summary>
        public static readonly float TurnSpeed = 120f;

        /// <summary>Its facing as it drops in: 0 faces grid +y, up the screen to the right [0].</summary>
        public static readonly float StartYaw = 0f;

        /// <summary>It waits this high above the centre plate, over the top of the screen in either orientation,
        /// and drops onto it over DropInSeconds, speeding up [it stood there from the start].</summary>
        public static readonly float DropInHeight = 14f;
        public static readonly float DropInSeconds = 0.45f;

        /// <summary>Its height over a plate's centre: feet on the plate [the original scene's beaver].</summary>
        public static readonly float StandHeight = 0.159f;

        /// <summary>A hop: an arc this high over this long, eased out [DOJump(2, 0.4 s) with DOTween's default OutQuad].</summary>
        public static readonly float HopHeight = 2f;
        public static readonly float HopSeconds = 0.4f;

        /// <summary>The plate left behind starts to crumble this long after the take-off [0.5 s after the landing:
        /// the `first-hop` frame, half a second after the tap, would show it whole].</summary>
        public static readonly float LeftPlateDelay = 0.15f;

        /// <summary>Copies of SmokePuff.prefab the scene holds for the landings, used in turn: a puff lasts 1.5 s (0.5 s of
        /// clouds, 1 s each) and landings come at least a hop apart, so each has finished before it plays again.
        /// Scene objects, not instantiated: the Playworks build failed on the second Instantiate of the prefab
        /// ("Don't know what should be instantiated", 2026-10-02).</summary>
        public static readonly int Puffs = 4;
    }
}
