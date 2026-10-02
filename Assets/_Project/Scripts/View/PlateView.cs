using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// One plate on screen: the original's white slab, or a trap's reddish one with dark cracks on
    /// top, and its own copy of the slab's material for the glow. <see cref="PlatesView"/> makes, moves and
    /// removes plates; everyone else only reads them.
    /// </summary>
    public sealed class PlateView : MonoBehaviour
    {
        private const string BaseColor = "_BaseColor";

        [SerializeField] private Renderer slab;
        [SerializeField] private Renderer[] cracks;

        private Material tint;
        private Material dark;
        private Color rest;
        private Vector3 home;

        public Vector2Int Cell { get; private set; }

        public bool IsTrap { get; private set; }

        public bool Glowing { get; private set; }

        /// <summary>Makes a fresh copy of a template ready at its cell's position, at scale 0, and wakes it.</summary>
        internal void Show(Vector2Int cell, bool trap)
        {
            Cell = cell;
            IsTrap = trap;
            rest = trap ? PlateConfig.Trap : PlateConfig.Plate;
            // Copies of the scene's material: Playworks exports what the scene references.
            tint = new Material(slab.sharedMaterial);
            tint.SetColor(BaseColor, rest);
            slab.sharedMaterial = tint;
            if (cracks.Length > 0)
            {
                dark = new Material(cracks[0].sharedMaterial);
                dark.SetColor(BaseColor, PlateConfig.Crack);
                foreach (Renderer crack in cracks) crack.sharedMaterial = dark;
            }
            home = transform.localPosition;
            transform.localScale = Vector3.zero;
            gameObject.SetActive(true);
        }

        /// <summary>0 → overshoot → 1 after <paramref name="delay"/>; <paramref name="popped"/> at the top of the bounce.</summary>
        internal void PopIn(float delay, Action popped)
        {
            Tween.Scale(transform, Vector3.one * PlateConfig.PopOvershoot, PlateConfig.PopUpSeconds, Ease.OutQuad, delay, () =>
            {
                popped();
                Tween.Scale(transform, Vector3.one, PlateConfig.PopDownSeconds, Ease.InOutQuad);
            });
        }

        internal void Glow(bool on)
        {
            Glowing = on;
            Tween.Tint(tint, on ? PlateConfig.Glow : rest, PlateConfig.GlowSeconds);
        }

        /// <summary>Shrinks and sinks away after <paramref name="delay"/>, then is switched off; <paramref name="started"/> as it starts.
        /// Switched off, never destroyed: in the Playworks build an Instantiate after a Destroy failed (2026-10-02), and the
        /// island change makes plates after others have gone.</summary>
        internal void Crumble(float delay, Action started)
        {
            Tween.Delay(this, delay, () =>
            {
                started();
                Tween.Scale(transform, Vector3.zero, PlateConfig.CrumbleSeconds, Ease.InQuad, 0f, () => gameObject.SetActive(false));
                Tween.Move(transform, home + Vector3.down * PlateConfig.CrumbleDrop, PlateConfig.CrumbleSeconds, Ease.InQuad);
            });
        }

        internal void Dip()
        {
            Tween.Move(transform, home + Vector3.down * PlateConfig.DipDepth, PlateConfig.DipDownSeconds, Ease.OutQuad, 0f,
                () => Tween.Move(transform, home, PlateConfig.DipUpSeconds, Ease.OutQuad));
        }

        /// <summary>Falls away from wherever it is, then is switched off (see <see cref="Crumble"/>).</summary>
        internal void Drop()
        {
            Tween.Move(transform, home + Vector3.down * PlateConfig.DropDistance, PlateConfig.DropSeconds, Ease.InQuad, 0f, () => gameObject.SetActive(false));
        }

        private void OnDestroy() // only when the scene goes: plates are never destroyed in play
        {
            if (tint != null) Destroy(tint);
            if (dark != null) Destroy(dark);
        }
    }
}
