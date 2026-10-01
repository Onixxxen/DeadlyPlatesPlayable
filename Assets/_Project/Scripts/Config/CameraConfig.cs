using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The view: the original's camera and light, the box the camera keeps on screen, and the
    /// original's CameraFollow numbers. The original's values in brackets.
    /// </summary>
    public static class CameraConfig
    {
        /// <summary>The background cyan #5EF0FD [the original camera's background].</summary>
        public static readonly Color Background = new Color32(0x5E, 0xF0, 0xFD, 0xFF);

        /// <summary>Orthographic, isometric: pitch 38°, yaw −45° [as in the original].</summary>
        public static readonly Quaternion Rotation = Quaternion.Euler(38f, -45f, 0f);

        /// <summary>How far the camera stands from what it looks at; orthographic, so only the clip planes
        /// care [(10, 11, −10) from the origin: 17.9].</summary>
        public static readonly float Distance = 18f;

        /// <summary>The box kept on screen in either orientation, around the island centre: half a 5×5 island
        /// with its gaps (2.75) across, from the plates' bottom to the hat of a beaver standing on one.</summary>
        public static readonly float IslandHalf = FieldConfig.IslandSize * FieldConfig.Spacing / 2f;
        public static readonly float ViewBottom = -0.18f;
        public static readonly float ViewTop = 2.1f;

        /// <summary>World units kept free around that box.</summary>
        public static readonly float Margin = 0.3f;

        /// <summary>Past this distance from the island centre the camera follows its target [3.1] ...</summary>
        public static readonly float DeadZone = 3.1f;

        /// <summary>... at this rate [5]; inside it, it drifts back to the centre at ReturnSpeed [2].</summary>
        public static readonly float FollowSpeed = 5f;
        public static readonly float ReturnSpeed = 2f;

        /// <summary>The original's directional light at 50°, −30°, white, no shadows (the Playworks build has no
        /// realtime shadows, so the editor frames have none either) [intensity 2, 5000 K: with the flat ambient
        /// they washed the plates' left faces into their tops, the build's grid read as strips; and the build
        /// does not linearise a light's colour as the editor does, so a tint differs between the two —
        /// measured on the first build's frames, 2026-10-01].</summary>
        public static readonly Quaternion LightRotation = Quaternion.Euler(50f, -30f, 0f);
        public static readonly float LightIntensity = 1.3f;

        /// <summary>Flat ambient [the original's default skybox]: immediate in the editor and the build.</summary>
        public static readonly Color Ambient = new Color(0.45f, 0.45f, 0.45f);
    }
}
