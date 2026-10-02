using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The original's sound effects, 2D one-shots at SfxConfig's volumes: TileSpawn as a plate pops in,
    /// TileDelete as one starts to crumble, jump at a take-off, step and ScoreAdd at a safe landing, Fall as a fall
    /// starts, MatchGoal at the island change and the win. Nothing before the first touch — the first island's wave is
    /// silent, as a browser keeps audio locked until a gesture anyway — and nothing while PlayableAd pauses: what is
    /// playing then stops (Luna's AudioListener has volume but no pause). Plates that pop or crumble at the same moment
    /// make one sound: one clip started N times at once is N times as loud. Each sound is logged as "[Sfx] clip", so
    /// the build's console shows them.
    ///
    /// The clips are this component's own references, not the AudioSources' clips: Unity 6 keeps an AudioSource's clip
    /// as an AudioResource, which no Playworks build here has exported yet.
    /// </summary>
    public sealed class Sfx : MonoBehaviour
    {
        /// <summary>A sound started.</summary>
        public static event Action<AudioClip> Played;

        [SerializeField] private AudioSource voice;    // every sound but TileDelete
        [SerializeField] private AudioSource crumbles; // TileDelete, at SfxConfig.TileDeletePitch
        [SerializeField] private AudioClip tileSpawn;
        [SerializeField] private AudioClip tileDelete;
        [SerializeField] private AudioClip jump;
        [SerializeField] private AudioClip step;
        [SerializeField] private AudioClip scoreAdd;
        [SerializeField] private AudioClip fall;
        [SerializeField] private AudioClip matchGoal;

        private int taps; // PlayableInput.TapCount as the scene began: the first touch is the next one
        private float spawnedAt = -1f;
        private float removedAt = -1f;

        private void Awake() => taps = PlayableInput.TapCount;

        private void OnEnable()
        {
            PlatesView.PlateSpawned += OnPlateSpawned;
            PlatesView.PlateRemoved += OnPlateRemoved;
            HopController.HopStarted += OnHopStarted;
            HopController.Landed += OnLanded;
            HopController.Fell += OnFell;
            GameFlow.IslandChanged += OnIslandChanged;
            GameFlow.Ended += OnEnded;
            PlayableAd.PauseChanged += OnPauseChanged;
        }

        private void OnDisable()
        {
            PlatesView.PlateSpawned -= OnPlateSpawned;
            PlatesView.PlateRemoved -= OnPlateRemoved;
            HopController.HopStarted -= OnHopStarted;
            HopController.Landed -= OnLanded;
            HopController.Fell -= OnFell;
            GameFlow.IslandChanged -= OnIslandChanged;
            GameFlow.Ended -= OnEnded;
            PlayableAd.PauseChanged -= OnPauseChanged;
        }

        private void OnPlateSpawned(Vector3 at)
        {
            if (spawnedAt == Time.time) return;
            spawnedAt = Time.time;
            Play(voice, tileSpawn, SfxConfig.TileSpawn);
        }

        private void OnPlateRemoved(Vector3 at)
        {
            if (removedAt == Time.time) return;
            removedAt = Time.time;
            Play(crumbles, tileDelete, SfxConfig.TileDelete);
        }

        private void OnHopStarted() => Play(voice, jump, SfxConfig.Jump);

        private void OnLanded(Vector2Int cell, int score)
        {
            Play(voice, step, SfxConfig.Step);
            Play(voice, scoreAdd, SfxConfig.ScoreAdd);
        }

        private void OnFell() => Play(voice, fall, SfxConfig.Fall);

        private void OnIslandChanged() => Play(voice, matchGoal, SfxConfig.MatchGoal);

        private void OnEnded(bool won, int score)
        {
            if (won) Play(voice, matchGoal, SfxConfig.MatchGoal);
        }

        private void OnPauseChanged(bool paused)
        {
            if (paused)
            {
                voice.Stop();
                crumbles.Stop();
            }
            Debug.Log(paused ? "[Sfx] paused: stopped, silent" : "[Sfx] resumed");
        }

        /// <summary>Once, over whatever the source still plays: the crumbles of a wave overlap.</summary>
        private void Play(AudioSource source, AudioClip clip, float volume)
        {
            if (PlayableAd.Paused || PlayableInput.TapCount == taps) return;
            source.PlayOneShot(clip, volume);
            Debug.Log($"[Sfx] {clip.name}");
            if (Played != null) Played(clip);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetStatics()
        {
            // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
            Played = null;
        }
    }
}
