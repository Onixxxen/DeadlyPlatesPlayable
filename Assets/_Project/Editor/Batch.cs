using System;
using System.Reflection;
using UnityEditor;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// Ends batch runs with EditorApplication.Exit instead of -quit.
    ///
    /// Measured 2026-10-01 on this project: with the Unity Playworks plugin installed, every
    /// `-batchmode -quit` run waits 300 s for "async operations to finish" and exits 1, even with
    /// nothing to do. EditorApplication.Exit does not wait. So batch runs never pass -quit:
    ///
    ///   -executeMethod Playable.Editor.Batch.RunThenExit                       compile check only
    ///   -executeMethod Playable.Editor.Batch.RunThenExit -paMethod Ns.Type.M  run M, then exit
    ///
    /// Exit code 0 when the method returned, 1 when it threw. A tree that does not compile never
    /// reaches this method: Unity aborts batch mode on compile errors by itself.
    /// </summary>
    public static class Batch
    {
        public static void RunThenExit()
        {
            string target = Argument("-paMethod");
            try
            {
                if (!string.IsNullOrEmpty(target)) Invoke(target);
                Debug.Log($"[pa-batch] done{(string.IsNullOrEmpty(target) ? " (compile check)" : $": {target}")}");
                EditorApplication.Exit(0);
            }
            catch (Exception e)
            {
                Debug.LogError($"[pa-batch] {target} failed: {e}");
                EditorApplication.Exit(1);
            }
        }

        private static void Invoke(string fullName)
        {
            int dot = fullName.LastIndexOf('.');
            if (dot <= 0) throw new ArgumentException($"-paMethod «{fullName}»: нужно Namespace.Type.Method");
            string typeName = fullName.Substring(0, dot);
            string methodName = fullName.Substring(dot + 1);
            foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                Type type = assembly.GetType(typeName);
                if (type == null) continue;
                MethodInfo method = type.GetMethod(methodName, BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);
                if (method == null) throw new MissingMethodException(typeName, methodName);
                method.Invoke(null, null);
                return;
            }
            throw new TypeLoadException($"тип {typeName} не найден");
        }

        private static string Argument(string name)
        {
            string[] args = Environment.GetCommandLineArgs();
            for (int i = 0; i < args.Length - 1; i++)
                if (args[i] == name) return args[i + 1];
            return null;
        }
    }
}
