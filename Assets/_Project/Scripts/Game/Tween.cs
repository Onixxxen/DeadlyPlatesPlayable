using System;
using System.Collections.Generic;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Playable
{
    public enum Ease { Linear, InQuad, OutQuad, InOutQuad }

    /// <summary>
    /// The small tween helper the playable uses instead of the original's DOTween: a local position, a
    /// local scale or a material's colour driven to a value over time with an ease, after a delay, then a
    /// callback. Game time (Time.deltaTime), so a paused game (Time.timeScale 0) pauses its tweens.
    ///
    /// Move, Scale and Tint own their channel: a newer one on the same transform or material replaces the one
    /// running or waiting there, and the replaced one never calls back. Value and Delay run alongside anything.
    /// A destroyed target ends its tweens silently. A tween started from a callback steps from the next frame.
    /// The runner is made on first use in play mode; EditMode tests drive <see cref="Advance"/> themselves.
    /// </summary>
    public sealed class Tween : MonoBehaviour
    {
        private const int Free = -1, MoveChannel = 0, ScaleChannel = 1, TintChannel = 2;
        private const string BaseColor = "_BaseColor"; // URP Lit's and Unlit's main colour

        private sealed class Run
        {
            public Object Target;
            public int Channel;
            public float Delay;
            public float Seconds;
            public float Elapsed;
            public Ease Ease;
            public Action Begin;
            public Action<float> Step;
            public Action Done;
            public bool Started;
            public bool Dead;
        }

        private static readonly List<Run> runs = new List<Run>();
        private static Tween runner;

        public static void Move(Transform target, Vector3 to, float seconds, Ease ease = Ease.OutQuad, float delay = 0f, Action done = null)
        {
            Vector3 from = Vector3.zero;
            Add(target, MoveChannel, seconds, ease, delay, () => from = target.localPosition, t => target.localPosition = Vector3.Lerp(from, to, t), done);
        }

        public static void Scale(Transform target, Vector3 to, float seconds, Ease ease = Ease.OutQuad, float delay = 0f, Action done = null)
        {
            Vector3 from = Vector3.zero;
            Add(target, ScaleChannel, seconds, ease, delay, () => from = target.localScale, t => target.localScale = Vector3.Lerp(from, to, t), done);
        }

        /// <summary>The material's _BaseColor.</summary>
        public static void Tint(Material target, Color to, float seconds, Ease ease = Ease.OutQuad, float delay = 0f, Action done = null)
        {
            Color from = Color.white;
            Add(target, TintChannel, seconds, ease, delay, () => from = target.GetColor(BaseColor), t => target.SetColor(BaseColor, Color.Lerp(from, to, t)), done);
        }

        /// <summary>Anything else: <paramref name="step"/> gets the eased progress 0…1 every frame while
        /// <paramref name="owner"/> lives (a hop's arc, a text's alpha).</summary>
        public static void Value(Object owner, float seconds, Action<float> step, Ease ease = Ease.Linear, float delay = 0f, Action done = null) =>
            Add(owner, Free, seconds, ease, delay, null, step, done);

        /// <summary><paramref name="then"/> after <paramref name="seconds"/>, unless <paramref name="owner"/> is
        /// destroyed first.</summary>
        public static void Delay(Object owner, float seconds, Action then) =>
            Add(owner, Free, 0f, Ease.Linear, seconds, null, null, then);

        public static float Eased(Ease ease, float t)
        {
            switch (ease)
            {
                case Ease.InQuad: return t * t;
                case Ease.OutQuad: return 1f - (1f - t) * (1f - t);
                case Ease.InOutQuad: return t < 0.5f ? 2f * t * t : 1f - 2f * (1f - t) * (1f - t);
                default: return t;
            }
        }

        /// <summary>Steps every tween by <paramref name="deltaTime"/>: the runner's Update in play mode, a test's
        /// hand otherwise.</summary>
        public static void Advance(float deltaTime)
        {
            int count = runs.Count; // tweens added by a callback below wait for the next frame
            for (int i = 0; i < count; i++)
            {
                Run run = runs[i];
                if (run.Dead) continue;
                if (run.Target == null)
                {
                    run.Dead = true;
                    continue;
                }
                run.Elapsed += deltaTime;
                if (run.Elapsed < run.Delay) continue;
                if (!run.Started)
                {
                    run.Started = true;
                    if (run.Begin != null) run.Begin();
                }
                float t = run.Seconds > 0f ? Mathf.Clamp01((run.Elapsed - run.Delay) / run.Seconds) : 1f;
                if (run.Step != null) run.Step(Eased(run.Ease, t));
                if (t < 1f) continue;
                run.Dead = true;
                if (run.Done != null) run.Done();
            }
            runs.RemoveAll(IsDead);
        }

        private static void Add(Object target, int channel, float seconds, Ease ease, float delay, Action begin, Action<float> step, Action done)
        {
            if (channel != Free)
                foreach (Run old in runs)
                    if (old.Channel == channel && old.Target == target) old.Dead = true;
            runs.Add(new Run { Target = target, Channel = channel, Seconds = seconds, Ease = ease, Delay = delay, Begin = begin, Step = step, Done = done });
            if (runner == null && Application.isPlaying) runner = new GameObject("Tween").AddComponent<Tween>();
        }

        private static bool IsDead(Run run) => run.Dead;

        private void Update() => Advance(Time.deltaTime);

        private void OnDestroy()
        {
            if (runner != this) return;
            runner = null;
            runs.Clear(); // the scene went, and its tweens with it
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            runs.Clear();
            runner = null;
        }
    }
}
