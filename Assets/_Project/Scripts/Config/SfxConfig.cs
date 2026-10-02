namespace Playable
{
    /// <summary>
    /// The sounds: the volumes of the original's AudioSources (its MainScene and Tile.prefab), at which
    /// <see cref="Sfx"/> plays each clip as a 2D one-shot, at pitch 1 unless a pitch is given. The original's names in
    /// brackets.
    /// </summary>
    public static class SfxConfig
    {
        /// <summary>A plate pops in, at the top of its bounce [Tile.prefab's TileSpawnSound].</summary>
        public static readonly float TileSpawn = 0.08f;

        /// <summary>A plate starts to crumble [Tile.prefab's TileDeleteSound, at pitch 0.8].</summary>
        public static readonly float TileDelete = 0.08f;
        public static readonly float TileDeletePitch = 0.8f;

        /// <summary>A hop takes off [Jump].</summary>
        public static readonly float Jump = 0.5f;

        /// <summary>A safe landing [Steps: step.ogg looped from the match's start at pitch 0, so never heard].</summary>
        public static readonly float Step = 0.5f;

        /// <summary>The score's +1, with the landing [ScoreAdd: its Play() was commented out in ScoreUI].</summary>
        public static readonly float ScoreAdd = 0.1f;

        /// <summary>A fall begins [Fall].</summary>
        public static readonly float Fall = 0.1f;

        /// <summary>The island change and the win [MatchGoal, at every new goal but the first].</summary>
        public static readonly float MatchGoal = 0.07f;
    }
}
