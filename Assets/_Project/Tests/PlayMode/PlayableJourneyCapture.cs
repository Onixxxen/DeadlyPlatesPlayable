using System;
using System.Collections;
using System.IO;
using UnityEngine;

namespace Playable.Tests
{
    /// <summary>
    /// Frame pairs: NN-name-a.png, then 400 ms later NN-name-b.png — one
    /// frame cannot show that something is NOT moving. Written to PA_RUN_DIR (set by
    /// the test run), else to qa-out/&lt;date&gt;/editor/playmode in the project (gitignored).
    ///
    /// Renders Camera.main straight into a RenderTexture instead of ScreenCapture: in a headless
    /// run the Game View back buffer refreshes on the editor's schedule, not the scene's, so two
    /// captures in a row could read the same stale buffer (idle_boxer, GameplayLoopJourney). The
    /// canvas must be Screen Space - Camera for the UI to be in the frame.
    /// </summary>
    public static class PlayableJourneyCapture
    {
        public const string DirVariable = "PA_RUN_DIR";
        private static int index;

        public static string Dir
        {
            get
            {
                string dir = Environment.GetEnvironmentVariable(DirVariable);
                if (string.IsNullOrWhiteSpace(dir))
                    dir = Path.Combine(Application.dataPath, "..", "qa-out", DateTime.Now.ToString("yyyy-MM-dd"), "editor", "playmode");
                Directory.CreateDirectory(dir);
                return dir;
            }
        }

        public static void Reset() => index = 0;

        public static IEnumerator Frame(string name)
        {
            yield return null;
            yield return CompiledShaders();
            Save($"{index:00}-{name}-a");
            yield return new WaitForSecondsRealtime(0.4f);
            yield return CompiledShaders();
            Save($"{index:00}-{name}-b");
            index++;
        }

        /// <summary>
        /// With a cold shader cache (the first test run after a Playworks build) the editor compiles shaders
        /// asynchronously and draws placeholders until they are ready: a frame showed the beaver as a red
        /// silhouette (ArtTests, 2026-10-01). The compilation is waited out with game time stopped, so
        /// the frame still shows the moment it was asked for: with the clock running, the one-shot smoke
        /// puff was gone by then. ShaderUtil.allowAsyncCompilation = false around the capture does not reach
        /// URP's own command buffers (tried the same day: the silhouette stayed).
        /// </summary>
        private static IEnumerator CompiledShaders()
        {
#if UNITY_EDITOR
            if (!UnityEditor.ShaderUtil.anythingCompiling) yield break;
            float timeScale = Time.timeScale;
            Time.timeScale = 0f;
            float timeout = Time.realtimeSinceStartup + 60f;
            while (UnityEditor.ShaderUtil.anythingCompiling)
            {
                if (Time.realtimeSinceStartup > timeout)
                {
                    Time.timeScale = timeScale;
                    throw new TimeoutException("шейдеры компилируются дольше 60 с — кадр снял бы заглушки");
                }
                yield return null;
            }
            yield return null; // one frame drawn with the compiled shaders
            Time.timeScale = timeScale;
#else
            yield break;
#endif
        }

        private static void Save(string fileName)
        {
            Camera camera = Camera.main;
            if (camera == null) throw new InvalidOperationException("В сцене нет камеры с тегом MainCamera — снимать нечем.");

            int width = Screen.width;
            int height = Screen.height;
            RenderTexture texture = RenderTexture.GetTemporary(width, height, 24, RenderTextureFormat.ARGB32);
            RenderTexture previousActive = RenderTexture.active;
            RenderTexture previousTarget = camera.targetTexture;
            try
            {
                Canvas.ForceUpdateCanvases();
                camera.targetTexture = texture;
                camera.Render();
                RenderTexture.active = texture;
                var frame = new Texture2D(width, height, TextureFormat.RGB24, false);
                frame.ReadPixels(new Rect(0, 0, width, height), 0, 0);
                frame.Apply();
                File.WriteAllBytes(Path.Combine(Dir, fileName + ".png"), frame.EncodeToPNG());
                UnityEngine.Object.Destroy(frame);
            }
            finally
            {
                camera.targetTexture = previousTarget;
                RenderTexture.active = previousActive;
                RenderTexture.ReleaseTemporary(texture);
            }
        }
    }
}
