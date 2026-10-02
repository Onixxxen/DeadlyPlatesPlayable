using System.IO;
using UnityEditor;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// The sounds' part of the main scene: the AudioListener on the camera (the scene had none) and <see cref="Sfx"/> with
    /// its two 2D AudioSources — one at pitch 1, one at TileDelete's pitch — and the seven clips it plays on them. Needs
    /// nothing else from the scene: Sfx listens to the game's events.
    /// </summary>
    public static class SfxScene
    {
        private const string Sounds = "Assets/_Project/Art/Sounds/"; // ArtImport copies the original's sounds here

        [SceneContribution(50)]
        public static void Contribute(BaseScene scene)
        {
            scene.Camera.gameObject.AddComponent<AudioListener>();
            var root = new GameObject("Sfx");
            var sfx = new SerializedObject(root.AddComponent<Sfx>());
            sfx.FindProperty("voice").objectReferenceValue = Source(root.transform, "Voice", 1f);
            sfx.FindProperty("crumbles").objectReferenceValue = Source(root.transform, "Crumbles", SfxConfig.TileDeletePitch);
            Clip(sfx, "tileSpawn", "TileSpawn");
            Clip(sfx, "tileDelete", "TileDelete");
            Clip(sfx, "jump", "jump");
            Clip(sfx, "step", "step");
            Clip(sfx, "scoreAdd", "ScoreAdd");
            Clip(sfx, "fall", "Fall");
            Clip(sfx, "matchGoal", "MatchGoal");
            sfx.ApplyModifiedPropertiesWithoutUndo();
        }

        /// <summary>An empty source for one-shots: the clips and volumes come with each PlayOneShot.</summary>
        private static AudioSource Source(Transform parent, string name, float pitch)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var source = go.AddComponent<AudioSource>();
            source.playOnAwake = false;
            source.spatialBlend = 0f;
            source.pitch = pitch;
            return source;
        }

        private static void Clip(SerializedObject sfx, string field, string clip)
        {
            string path = Sounds + clip + ".ogg";
            var sound = AssetDatabase.LoadAssetAtPath<AudioClip>(path);
            if (sound == null) throw new FileNotFoundException($"нет {path} — ArtImport.Run не запускали?");
            sfx.FindProperty(field).objectReferenceValue = sound;
        }
    }
}
