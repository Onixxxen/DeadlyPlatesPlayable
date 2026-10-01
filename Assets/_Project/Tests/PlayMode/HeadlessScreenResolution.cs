using UnityEngine;

namespace Playable.Tests
{
    /// <summary>
    /// Gives a headless PlayMode run a phone's geometry before the first scene loads: the value of
    /// PA_SCREEN ("1080x2340"), set by the test run. Without it a batch run plays at
    /// 640x480 and every frame is judged in an aspect no player sees.
    ///
    /// Learned in idle_boxer (HeadlessScreenResolution, 2026-09-12/16): -screen-width/-height are
    /// player arguments and change nothing in the editor; Screen.SetResolution changes nothing;
    /// PlayModeWindow.SetCustomRenderingResolution works, and only from inside Play Mode — hence
    /// BeforeSceneLoad. A malformed value throws instead of silently falling back.
    /// </summary>
    public static class HeadlessScreenResolution
    {
        public const string Variable = "PA_SCREEN";

        public static Vector2Int Parse(string value)
        {
            string[] parts = (value ?? string.Empty).Trim().Split('x', 'X', '×');
            if (parts.Length == 2 && int.TryParse(parts[0], out int w) && int.TryParse(parts[1], out int h) && w > 0 && h > 0)
                return new Vector2Int(w, h);
            throw new System.FormatException($"{Variable}=«{value}» — не разрешение. Формат один: 1080x2340.");
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void Apply()
        {
#if UNITY_EDITOR
            string value = System.Environment.GetEnvironmentVariable(Variable);
            if (string.IsNullOrWhiteSpace(value)) return;
            Vector2Int size = Parse(value);
            if (Screen.width == size.x && Screen.height == size.y) return;
            try
            {
                UnityEditor.PlayModeWindow.SetCustomRenderingResolution((uint)size.x, (uint)size.y, "playable phone");
            }
            catch (System.Exception e)
            {
                Debug.LogWarning($"Не удалось задать прогону {size.x}×{size.y}: {e.Message}");
            }
#endif
        }
    }
}
