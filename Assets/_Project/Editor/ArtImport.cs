using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.TextCore.LowLevel;
using Object = UnityEngine.Object;

namespace Playable.Editor
{
    /// <summary>
    /// Brings the original game's art into Assets/_Project/Art and builds what the playable makes of it:
    /// the beaver (FBX, texture at 1024, the three clips Character.controller plays, the controller, the
    /// original's material) and Beaver.prefab; the landing smoke (texture, Particles/Unlit material,
    /// SmokePuff.prefab); the ten sounds; the tutorial hand; TMP's essential resources and a static Benzin
    /// font asset on one 512² atlas, made TMP's default font (no default sprite asset).
    ///
    ///   Unity -batchmode -projectPath &lt;project&gt; -executeMethod Playable.Editor.Batch.RunThenExit -paMethod Playable.Editor.ArtImport.Run
    ///
    /// Files are copied byte for byte together with their .meta, so the GUIDs travel: the controller still
    /// finds its clips, the material its texture. No YAML is written by hand. Re-runnable: a file already in
    /// Art/ is not copied again (the source project need not exist then), import settings are re-applied,
    /// the prefabs rebuilt; the font asset is made once (delete it to remake it).
    /// </summary>
    public static class ArtImport
    {
        // The original game, DeadlyPlates1; read-only.
        private const string Source = @"D:\fm-p\no fm\GIT\DeadlyPlates\DeadlyPlates1\Assets";
        private const string Root = "Assets/_Project/Art";

        public const string BeaverPrefab = Root + "/Beaver/Beaver.prefab";
        public const string SmokePrefab = Root + "/Smoke/SmokePuff.prefab";
        public const string FontAsset = Root + "/Fonts/Benzin-Bold SDF.asset";

        private const string BeaverModel = Root + "/Beaver/Human_Beaver.fbx";
        private const string BeaverTexture = Root + "/Beaver/Human_Beaver_texture.png";
        private const string BeaverMaterial = Root + "/Beaver/Beaver.mat";
        private const string BeaverController = Root + "/Beaver/Character.controller";
        private const string SmokeTexture = Root + "/Smoke/cfxr smoke cloud x4.png";
        private const string SmokeMaterialPath = Root + "/Smoke/SmokePuff.mat";
        private const string FontFile = Root + "/Fonts/Benzin-Bold.ttf";
        private const string TmpSettings = "Assets/TextMesh Pro/Resources/TMP Settings.asset";

        private const float BeaverScale = 0.8f; // the original Human_Beaver.prefab's root scale
        private const int BeaverTextureSize = 1024;
        private const int AtlasSize = 512;

        private static readonly string[] Sounds =
            { "step", "jump", "Fall", "TileSpawn", "TileDelete", "MatchGoal", "ScoreAdd", "EffectDrop", "Spin", "ButtonClick" };

        [MenuItem("Playable/Import Art")]
        public static void Run()
        {
            CopySources();
            ImportTmpEssentials();

            var texture = (TextureImporter)AssetImporter.GetAtPath(BeaverTexture);
            if (texture.maxTextureSize != BeaverTextureSize)
            {
                texture.maxTextureSize = BeaverTextureSize;
                texture.SaveAndReimport();
            }

            BuildBeaver();
            BuildSmokePuff(SmokeMaterial());
            BuildFont();
            PointTmpAtBenzin();
            AssetDatabase.SaveAssets();
            Debug.Log($"[ArtImport] done: {BeaverPrefab}, {SmokePrefab}, {FontAsset}");
        }

        private static void CopySources()
        {
            Copy("_Project/Models/Human_Beaver (1).fbx", BeaverModel);
            Copy("_Project/Textures/Human_Beaver_texture.png", BeaverTexture);
            Copy("_Project/Materials/Beaver.mat", BeaverMaterial);
            Copy("_Project/Animations/Character/Character.controller", BeaverController);
            foreach (string clip in new[] { "Walking", "Jump", "Fall" }) // what the controller plays; Walk.anim is unused
                Copy($"_Project/Animations/Character/{clip}.anim", $"{Root}/Beaver/{clip}.anim");
            Copy("JMO Assets/Cartoon FX Remaster/CFXR Assets/Graphics/cfxr smoke cloud x4.png", SmokeTexture);
            foreach (string sound in Sounds)
                Copy($"_Project/Sounds/{sound}.ogg", $"{Root}/Sounds/{sound}.ogg");
            Copy("_Project/UI/HandPointer.png", Root + "/UI/HandPointer.png"); // the image of the original's Tutorial panel
            Copy("TextMesh Pro/Fonts/Benzin-Bold.ttf", FontFile);
            AssetDatabase.Refresh();
        }

        private static void Copy(string from, string to)
        {
            if (File.Exists(to)) return;
            string source = Path.Combine(Source, from);
            if (!File.Exists(source)) throw new FileNotFoundException($"нет ни {to}, ни исходника {source}");
            Directory.CreateDirectory(Path.GetDirectoryName(to));
            File.Copy(source, to);
            File.Copy(source + ".meta", to + ".meta");
        }

        // AssetDatabase.ImportPackage only queues the import for a later editor tick, and a batch run
        // (Batch.RunThenExit) exits before it (measured 2026-10-01). A .unitypackage is a gzipped tar of
        // <guid>/asset, <guid>/asset.meta, <guid>/pathname; writing those files out is the same import, now.
        private static void ImportTmpEssentials()
        {
            if (File.Exists(TmpSettings)) return;
            string package = Path.GetFullPath("Packages/com.unity.ugui/Package Resources/TMP Essential Resources.unitypackage");
            var entries = new Dictionary<string, byte[]>();
            using (var tar = new GZipStream(File.OpenRead(package), CompressionMode.Decompress))
            {
                var header = new byte[512];
                while (ReadFully(tar, header) && header[0] != 0)
                {
                    string name = Encoding.UTF8.GetString(header, 0, 100).TrimEnd('\0');
                    int size = Convert.ToInt32(Encoding.ASCII.GetString(header, 124, 12).Trim('\0', ' '), 8);
                    var data = new byte[size];
                    ReadFully(tar, data);
                    ReadFully(tar, new byte[(512 - size % 512) % 512]);
                    bool file = header[156] == '0' || header[156] == 0; // not a directory, not a pax header
                    if (file) entries[name.StartsWith("./") ? name.Substring(2) : name] = data;
                }
            }
            foreach (string key in entries.Keys.Where(k => k.EndsWith("/pathname")).ToList())
            {
                string guid = key.Substring(0, key.Length - "/pathname".Length);
                string path = Encoding.UTF8.GetString(entries[key]).Split('\n')[0].Trim();
                if (entries.TryGetValue(guid + "/asset", out byte[] asset))
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(path));
                    File.WriteAllBytes(path, asset);
                }
                else Directory.CreateDirectory(path);
                File.WriteAllBytes(path + ".meta", entries[guid + "/asset.meta"]);
            }
            AssetDatabase.Refresh();
            if (!File.Exists(TmpSettings)) throw new InvalidOperationException($"TMP Essential Resources не распаковались: нет {TmpSettings}");
        }

        private static bool ReadFully(Stream stream, byte[] buffer)
        {
            int read = 0;
            while (read < buffer.Length)
            {
                int n = stream.Read(buffer, read, buffer.Length - read);
                if (n == 0) return false;
                read += n;
            }
            return true;
        }

        private static void BuildBeaver()
        {
            GameObject beaver = Object.Instantiate(AssetDatabase.LoadAssetAtPath<GameObject>(BeaverModel));
            beaver.name = "Beaver";
            beaver.transform.localScale = Vector3.one * BeaverScale;

            var material = AssetDatabase.LoadAssetAtPath<Material>(BeaverMaterial);
            foreach (Renderer renderer in beaver.GetComponentsInChildren<Renderer>())
                renderer.sharedMaterials = Enumerable.Repeat(material, renderer.sharedMaterials.Length).ToArray();

            Animator animator = beaver.GetComponent<Animator>();
            if (animator == null) animator = beaver.AddComponent<Animator>();
            animator.runtimeAnimatorController = AssetDatabase.LoadAssetAtPath<RuntimeAnimatorController>(BeaverController);
            animator.applyRootMotion = false;
            animator.cullingMode = AnimatorCullingMode.AlwaysAnimate;

            PrefabUtility.SaveAsPrefabAsset(beaver, BeaverPrefab);
            Debug.Log($"[ArtImport] Beaver: {string.Join(", ", beaver.GetComponentsInChildren<Renderer>().Select(r => $"{r.name} ({r.sharedMaterial.shader.name})"))}");
            Object.DestroyImmediate(beaver);
        }

        // Surface Type Transparent, Blending Mode Alpha: the values URP's material inspector would set.
        private static Material SmokeMaterial()
        {
            var material = AssetDatabase.LoadAssetAtPath<Material>(SmokeMaterialPath);
            bool created = material == null;
            if (created) material = new Material(Shader.Find("Universal Render Pipeline/Particles/Unlit"));
            material.SetTexture("_BaseMap", AssetDatabase.LoadAssetAtPath<Texture2D>(SmokeTexture));
            material.SetFloat("_Surface", 1f);
            material.SetFloat("_Blend", 0f);
            material.SetFloat("_SrcBlend", (float)BlendMode.SrcAlpha);
            material.SetFloat("_DstBlend", (float)BlendMode.OneMinusSrcAlpha);
            material.SetFloat("_SrcBlendAlpha", (float)BlendMode.One);
            material.SetFloat("_DstBlendAlpha", (float)BlendMode.OneMinusSrcAlpha);
            material.SetFloat("_ZWrite", 0f);
            material.EnableKeyword("_SURFACE_TYPE_TRANSPARENT");
            material.SetOverrideTag("RenderType", "Transparent");
            material.renderQueue = (int)RenderQueue.Transparent;
            if (created) AssetDatabase.CreateAsset(material, SmokeMaterialPath);
            EditorUtility.SetDirty(material);
            return material;
        }

        // The original's GroundedSmoke (a CFXR smoke variant the beaver plays on landing), at its world size:
        // 0.5 s of 20 clouds/s rising slowly in a narrow cone, a random cloud of the 2×2 sheet each. The CFXR
        // shader dissolved them; here the alpha fades over the last 40 % of the life instead.
        private static void BuildSmokePuff(Material material)
        {
            var go = new GameObject("SmokePuff");
            var ps = go.AddComponent<ParticleSystem>();
            ps.useAutoRandomSeed = false; // frames repeat from run to run; a caller wanting variety sets randomSeed from its seeded rng
            ps.randomSeed = 1;

            ParticleSystem.MainModule main = ps.main;
            main.duration = 0.5f;
            main.loop = false;
            main.playOnAwake = true;
            main.startLifetime = 1f;
            main.startSpeed = 0.2f;
            main.startSize = new ParticleSystem.MinMaxCurve(0.3f, 0.85f);
            main.startRotation = new ParticleSystem.MinMaxCurve(-20f * Mathf.Deg2Rad, 20f * Mathf.Deg2Rad);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 1f, 1f, 0.5f), Color.white);
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.scalingMode = ParticleSystemScalingMode.Hierarchy;
            main.maxParticles = 30;

            ParticleSystem.EmissionModule emission = ps.emission;
            emission.rateOverTime = 20f;

            ParticleSystem.ShapeModule shape = ps.shape;
            shape.shapeType = ParticleSystemShapeType.Cone;
            shape.angle = 16f;
            shape.radius = 0.0001f;
            shape.rotation = new Vector3(-90f, 0f, 0f); // the cone points up
            // Clouds sit on the surface the prefab is put on: billboards emitted at its pivot sank into the
            // plate, which cut them along straight lines.
            shape.position = new Vector3(0f, 0.3f, 0f);

            ParticleSystem.SizeOverLifetimeModule size = ps.sizeOverLifetime;
            size.enabled = true;
            size.size = new ParticleSystem.MinMaxCurve(1f, new AnimationCurve(new Keyframe(0f, 0.73f), new Keyframe(0.27f, 0.96f), new Keyframe(1f, 1f)));

            ParticleSystem.ColorOverLifetimeModule color = ps.colorOverLifetime;
            color.enabled = true;
            var fade = new Gradient();
            fade.SetKeys(new[] { new GradientColorKey(Color.white, 0f), new GradientColorKey(Color.white, 1f) },
                new[] { new GradientAlphaKey(1f, 0f), new GradientAlphaKey(1f, 0.6f), new GradientAlphaKey(0f, 1f) });
            color.color = fade;

            ParticleSystem.TextureSheetAnimationModule sheet = ps.textureSheetAnimation;
            sheet.enabled = true;
            sheet.numTilesX = 2;
            sheet.numTilesY = 2;
            sheet.frameOverTime = new ParticleSystem.MinMaxCurve(0f, 0.9999f);

            var renderer = go.GetComponent<ParticleSystemRenderer>();
            renderer.sharedMaterial = material;
            renderer.sortMode = ParticleSystemSortMode.OldestInFront;

            PrefabUtility.SaveAsPrefabAsset(go, SmokePrefab);
            Object.DestroyImmediate(go);
        }

        // Static: the atlas is baked here and the TTF stays out of the build (the original's dynamic
        // Benzin atlas was 8.6 MB). Printable ASCII — A–Z, a–z, 0–9, punctuation — at the largest
        // sampling size whose glyphs all fit one 512² atlas.
        private static void BuildFont()
        {
            if (File.Exists(FontAsset)) return;
            var ttf = AssetDatabase.LoadAssetAtPath<Font>(FontFile);
            FontEngine.LoadFontFace(ttf);
            string glyphs = new string(Enumerable.Range(32, 95)
                .Where(c => FontEngine.TryGetGlyphIndex((uint)c, out uint index) && index != 0)
                .Select(c => (char)c).ToArray());
            if (glyphs.Length == 0) throw new InvalidOperationException($"{FontFile}: шрифт не прочитался, глифов 0");

            for (int size = 72; size >= 24; size -= 4)
            {
                TMP_FontAsset font = TMP_FontAsset.CreateFontAsset(ttf, size, size / 10, GlyphRenderMode.SDFAA, AtlasSize, AtlasSize, AtlasPopulationMode.Dynamic, false);
                if (font.TryAddCharacters(glyphs, out string _))
                {
                    font.atlasPopulationMode = AtlasPopulationMode.Static;
                    AssetDatabase.CreateAsset(font, FontAsset);
                    font.atlasTexture.name = font.name + " Atlas";
                    font.material.name = font.name + " Material";
                    AssetDatabase.AddObjectToAsset(font.atlasTexture, font);
                    AssetDatabase.AddObjectToAsset(font.material, font);
                    EditorUtility.SetDirty(font);
                    AssetDatabase.SaveAssets();
                    string absent = new string(Enumerable.Range(32, 95).Select(c => (char)c).Where(c => glyphs.IndexOf(c) < 0).ToArray());
                    Debug.Log($"[ArtImport] Benzin: {glyphs.Length} glyphs at {size} pt on {AtlasSize}², not in the font: «{absent}»");
                    return;
                }
                Object.DestroyImmediate(font.atlasTexture);
                Object.DestroyImmediate(font.material);
                Object.DestroyImmediate(font);
            }
            throw new InvalidOperationException($"{glyphs.Length} глифов Benzin не помещаются в {AtlasSize}² даже при 24 pt");
        }

        // TMP Settings is in luna.json's includes, so the build takes everything it references. As shipped
        // that is LiberationSans SDF with its dynamic Fallback and the TTF behind it, and the EmojiOne sprite
        // sheet — 240 KB the playable never shows (the build's STATS=1 breakdown, 2026-10-02). Benzin covers
        // every printable ASCII glyph, so nothing falls back to the default font.
        private static void PointTmpAtBenzin()
        {
            var settings = new SerializedObject(AssetDatabase.LoadAssetAtPath<TMP_Settings>(TmpSettings));
            settings.FindProperty("m_defaultFontAsset").objectReferenceValue = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(FontAsset);
            settings.FindProperty("m_defaultSpriteAsset").objectReferenceValue = null;
            settings.ApplyModifiedPropertiesWithoutUndo();
        }
    }
}
