using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Playable.Hello
{
    /// <summary>
    /// The skeleton's stand-in game: tap three cubes, see the end card, tap the CTA. A real playable
    /// replaces this and keeps what the journey test relies on: <see cref="Current"/>,
    /// <see cref="TargetScreenPoints"/>, <see cref="CtaButton"/>. Everything is wired by
    /// HelloSceneBuilder at edit time, so nothing here creates shaders or materials at runtime —
    /// Playworks exports only what the scene references.
    /// </summary>
    public sealed class HelloPlayable : MonoBehaviour
    {
        public enum State { Boot, Play, End }

        public static HelloPlayable Instance { get; private set; }

        [SerializeField] private Camera viewCamera;
        [SerializeField] private List<Transform> targets = new List<Transform>();
        [SerializeField] private GameObject endCard;
        [SerializeField] private Button ctaEnd;
        [SerializeField] private Button ctaTop;
        [SerializeField] private int hitsToWin = 3;
        [SerializeField] private float spinDegreesPerSecond = 90f;

        public State Current { get; private set; } = State.Boot;
        public int Hits { get; private set; }
        public Button CtaButton => ctaEnd;

        private readonly List<Transform> live = new List<Transform>();

        private void Awake() => Instance = this;

        private void Start()
        {
            live.AddRange(targets);
            endCard.SetActive(false);
            // The end card is handled by the tap itself (the whole card is the CTA); its button is the
            // visual target. The top button works while playing; on the end card the tap already
            // opens the store, and a second call would open it twice.
            ctaTop.onClick.AddListener(() => { if (Current != State.End) PlayableAd.Install(); });
            PlayableInput.Tapped += OnTap;
            Current = State.Play;
        }

        private void OnDestroy()
        {
            PlayableInput.Tapped -= OnTap;
            if (Instance == this) Instance = null;
        }

        private void Update()
        {
            float step = spinDegreesPerSecond * Time.deltaTime;
            foreach (Transform t in live) t.Rotate(step, step * 1.3f, 0f, Space.Self);
        }

        private void OnTap(Vector2 screen)
        {
            // The whole end card is the CTA (networks ask for it).
            if (Current == State.End)
            {
                PlayableAd.Install();
                return;
            }
            if (Current != State.Play) return;
            bool hitSomething = Physics.Raycast(viewCamera.ScreenPointToRay(screen), out RaycastHit hit);
            Debug.Log($"[hello] tap {screen} screen {Screen.width}x{Screen.height} hit {(hitSomething ? hit.transform.name : "nothing")}");
            if (!hitSomething) return;
            if (!live.Remove(hit.transform)) return;
            hit.transform.gameObject.SetActive(false);
            Hits++;
            if (Hits >= hitsToWin) End();
        }

        private void End()
        {
            Current = State.End;
            // The end card replaces the game: nothing of the play field stays on top of it.
            foreach (Transform t in live) t.gameObject.SetActive(false);
            live.Clear();
            endCard.SetActive(true);
            PlayableAd.GameEnded();
        }

        /// <summary>Where each live target is on screen (pixels, origin bottom-left).</summary>
        public List<Vector2> TargetScreenPoints()
        {
            var points = new List<Vector2>(live.Count);
            foreach (Transform t in live) points.Add(viewCamera.WorldToScreenPoint(t.position));
            return points;
        }
    }
}
