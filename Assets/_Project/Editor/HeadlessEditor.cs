using System.IO;
using UnityEditor;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// A batchmode editor that stays up for a Unity Playworks build of this tree, and leaves when
    /// asked. The Playworks command line does not start Unity itself: its asset export runs
    /// inside an editor already open on the project, so a checkout without an interactive editor
    /// needs one of these for the length of a build.
    ///
    ///   Unity.exe -batchmode -projectPath &lt;project&gt; -executeMethod Playable.Editor.HeadlessEditor.Serve
    ///
    /// Ready when Temp/pa-headless.ready exists; exits cleanly (no orphaned UnityLockfile) when
    /// Temp/pa-headless.stop appears. Both files are written by the build script.
    /// </summary>
    public static class HeadlessEditor
    {
        private const string ReadyFile = "Temp/pa-headless.ready";
        private const string StopFile = "Temp/pa-headless.stop";
        private static double nextPoll;

        public static void Serve()
        {
            Directory.CreateDirectory("Temp");
            if (File.Exists(StopFile)) File.Delete(StopFile);
            File.WriteAllText(ReadyFile, System.Diagnostics.Process.GetCurrentProcess().Id.ToString());
            EditorApplication.update += Poll;
            Debug.Log($"[pa-headless] serving this tree; create {StopFile} to exit");
        }

        private static void Poll()
        {
            if (EditorApplication.timeSinceStartup < nextPoll) return;
            nextPoll = EditorApplication.timeSinceStartup + 0.5;
            if (!File.Exists(StopFile)) return;

            EditorApplication.update -= Poll;
            try
            {
                File.Delete(StopFile);
                File.Delete(ReadyFile);
            }
            catch (IOException) { /* the build script cleans up after a hard stop */ }
            Debug.Log("[pa-headless] stop requested, exiting");
            EditorApplication.Exit(0);
        }
    }
}
