using System;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The beaver on screen: its turn, its moves and its clips, played as <see cref="HopController"/> says.
    /// It moves with its plate — the landing dip and the fall are PlateView's numbers from the same spot — and leaves
    /// a smoke puff where it lands. Sits on the imported Beaver prefab, next to its Animator.
    /// </summary>
    [RequireComponent(typeof(Animator))]
    public sealed class BeaverView : MonoBehaviour
    {
        [SerializeField] private ParticleSystem[] puffs; // HopConfig.Puffs copies of SmokePuff.prefab in the scene

        private Animator animator;
        private Vector3 home; // where it stands: the spot it last dropped or hopped onto
        private int nextPuff;

        /// <summary>Its facing in degrees, 0…360: 0 faces world +z (grid +y), turning clockwise seen from above.</summary>
        public float Yaw { get; private set; }

        private void Awake()
        {
            animator = GetComponent<Animator>();
            Yaw = transform.eulerAngles.y;
            home = transform.localPosition;
        }

        private void Start() => animator.SetTrigger("Walk"); // Character.controller's Idle has no clip and leads only to Walk

        public void Turn(float degrees)
        {
            Yaw = Mathf.Repeat(Yaw + degrees, 360f);
            transform.localRotation = Quaternion.Euler(0f, Yaw, 0f);
        }

        /// <summary>Falls from where it waits onto <paramref name="spot"/>, speeding up; <paramref name="arrived"/> on touching it.</summary>
        public void DropIn(Vector3 spot, Action arrived)
        {
            animator.SetTrigger("Fall");
            home = spot;
            Tween.Move(transform, spot, HopConfig.DropInSeconds, Ease.InQuad, 0f, arrived);
        }

        /// <summary>The arc onto <paramref name="spot"/> with the Jump clip; <paramref name="arrived"/> at its end.</summary>
        public void Hop(Vector3 spot, Action arrived)
        {
            animator.SetTrigger("Jump");
            Tween.Move(transform, transform.localPosition, 0f); // ends a landing dip still running: a replaced move never calls back
            Vector3 from = transform.localPosition;
            home = spot;
            Tween.Value(this, HopConfig.HopSeconds, s => transform.localPosition = Vector3.Lerp(from, spot, s) + Vector3.up * (4f * HopConfig.HopHeight * s * (1f - s)),
                Ease.OutQuad, 0f, arrived);
        }

        /// <summary>Down with the plate and back up (PlateView.Dip's numbers), a smoke puff, walking again.</summary>
        public void Land()
        {
            animator.SetTrigger("Walk");
            Tween.Move(transform, home + Vector3.down * PlateConfig.DipDepth, PlateConfig.DipDownSeconds, Ease.OutQuad, 0f,
                () => Tween.Move(transform, home, PlateConfig.DipUpSeconds, Ease.OutQuad));
            ParticleSystem smoke = puffs[nextPuff];
            nextPuff = (nextPuff + 1) % puffs.Length;
            smoke.transform.position = home; // world-space clouds: the previous puff's stay where they rose
            smoke.Play();
        }

        /// <summary>Falls from where it stands — with its plate (PlateView.Drop's numbers) or into the void — playing Fall.</summary>
        public void Fall()
        {
            animator.SetTrigger("Fall");
            Tween.Move(transform, home + Vector3.down * PlateConfig.DropDistance, PlateConfig.DropSeconds, Ease.InQuad);
        }
    }
}
