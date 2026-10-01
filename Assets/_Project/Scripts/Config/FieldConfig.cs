using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The field's numbers, tuned for a 22-second ad; the original's values in brackets.
    /// Cell (x, y) sits at world (x · Spacing, 0, y · Spacing), as in the original.
    /// </summary>
    public static class FieldConfig
    {
        /// <summary>The playable's field: three traps on the rim, and two on the bridge, one each side of its
        /// straight line across, for the ad's near miss (FieldTests pins the bridge traps).</summary>
        public static readonly int Seed = 5;

        /// <summary>An island is IslandSize × IslandSize plates [7].</summary>
        public static readonly int IslandSize = 5;

        /// <summary>World distance between neighbouring plates [1.1].</summary>
        public static readonly float Spacing = 1.1f;

        /// <summary>The first island's traps: this many, on its outer ring, never next to each other
        /// [0.25 chance per plate, up to 8, anywhere].</summary>
        public static readonly int TrapsMin = 2;
        public static readonly int TrapsMax = 4;

        /// <summary>The objective text appears after this hop.</summary>
        public static readonly int ObjectiveHop = 3;

        /// <summary>The island changes when at most this many plates, traps included, are left around the
        /// beaver [3 counting its own but no traps, once 19 plates are gone] ...</summary>
        public static readonly int ChangeAtPlatesAround = 2;

        /// <summary>... or on this hop, whichever comes first [no cap].</summary>
        public static readonly int ChangeAtHop = 6;

        /// <summary>The new island's centre, in cells from the beaver [7].</summary>
        public static readonly int NewIslandDistance = 6;

        /// <summary>The grid directions that run up the screen under the original's camera (yaw −45°):
        /// +y up and to the right, −x up and to the left. The new island goes one of them.</summary>
        public static readonly Vector2Int[] UpScreen = { Vector2Int.up, Vector2Int.left };

        /// <summary>The bridge is this many plates wide [3]; its rows fill the gap to the new island.</summary>
        public static readonly int BridgeWidth = 3;

        /// <summary>Bridge traps: this chance per plate [0.125], at most BridgeTrapsMax, never a whole row.
        /// BridgeTrapsMax below BridgeWidth is what keeps a safe path across.</summary>
        public static readonly double BridgeTrapChance = 0.125;
        public static readonly int BridgeTrapsMax = 2;
    }
}
