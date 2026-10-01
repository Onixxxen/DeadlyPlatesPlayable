using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace Playable.Editor
{
    /// <summary>
    /// Unity Playworks keeps its own scene list in luna.json (unity.scenes) and does not follow
    /// the build settings: a list naming a deleted scene fails the export with LP1025
    /// ExportCollectionException: ScenesCollection. Every scene builder calls PointAt.
    /// The file is rewritten only when the list really changes: Playworks formats it its own way,
    /// and a rewrite on every build would be a diff in every checkout.
    /// </summary>
    public static class PlayworksScenes
    {
        private static readonly Regex ScenesList = new Regex("\"scenes\"\\s*:\\s*\\[([^\\]]*)\\]");
        private static readonly Regex StartupScene = new Regex("\"startupScene\"\\s*:\\s*\\d+");

        public static void PointAt(string scenePath)
        {
            const string file = "luna.json";
            if (!File.Exists(file)) return;
            string json = File.ReadAllText(file);

            Match list = ScenesList.Match(json);
            string[] scenes = list.Success
                ? list.Groups[1].Value.Split(',').Select(s => s.Trim().Trim('"')).Where(s => s.Length > 0).ToArray()
                : new string[0];
            bool listOk = scenes.Length == 1 && scenes[0] == scenePath;
            bool startupOk = Regex.IsMatch(json, "\"startupScene\"\\s*:\\s*0\\b");
            if (listOk && startupOk) return;

            string updated = ScenesList.Replace(json, $"\"scenes\": [\"{scenePath}\"]");
            updated = StartupScene.Replace(updated, "\"startupScene\": 0");
            File.WriteAllText(file, updated);
        }
    }
}
