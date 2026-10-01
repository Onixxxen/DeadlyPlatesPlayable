using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The original's camera and its CameraFollow. Orthographic, isometric, sized every frame so the
    /// island box of <see cref="CameraConfig"/> fits the screen in portrait and in landscape alike. It
    /// watches <see cref="Target"/>: farther than DeadZone from <see cref="Centre"/> it follows the target
    /// at FollowSpeed, otherwise it drifts back to the centre at ReturnSpeed; its height never changes.
    /// </summary>
    [RequireComponent(typeof(Camera))]
    public sealed class CameraRig : MonoBehaviour
    {
        [SerializeField] private Transform target;

        private Camera view;

        public Transform Target
        {
            get => target;
            set => target = value;
        }

        /// <summary>The island the camera rests on, the world origin at first; the island change moves it
        /// [the original's UpdateCenter].</summary>
        public Vector3 Centre { get; set; }

        private void Awake()
        {
            view = GetComponent<Camera>();
            transform.SetPositionAndRotation(PositionFor(Centre), CameraConfig.Rotation);
            view.orthographicSize = FitSize(view.aspect);
        }

        private void LateUpdate()
        {
            view.orthographicSize = FitSize(view.aspect); // the screen may have turned
            if (target == null) return;
            bool away = Vector3.Distance(target.position, Centre) > CameraConfig.DeadZone;
            float speed = away ? CameraConfig.FollowSpeed : CameraConfig.ReturnSpeed;
            transform.position = Vector3.Lerp(transform.position, PositionFor(away ? target.position : Centre), Time.deltaTime * speed);
        }

        /// <summary>Where the camera stands to look at <paramref name="focus"/>: at the middle height of the
        /// island box, so the box sits in the middle of the screen.</summary>
        public static Vector3 PositionFor(Vector3 focus)
        {
            var look = new Vector3(focus.x, (CameraConfig.ViewBottom + CameraConfig.ViewTop) / 2f, focus.z);
            return look - CameraConfig.Rotation * Vector3.forward * CameraConfig.Distance;
        }

        /// <summary>The orthographic size that shows the island box plus the margin at this aspect
        /// (width / height): the box's widest reach along the camera's right and up axes.</summary>
        public static float FitSize(float aspect)
        {
            var half = new Vector3(CameraConfig.IslandHalf, (CameraConfig.ViewTop - CameraConfig.ViewBottom) / 2f, CameraConfig.IslandHalf);
            float right = Reach(CameraConfig.Rotation * Vector3.right, half) + CameraConfig.Margin;
            float up = Reach(CameraConfig.Rotation * Vector3.up, half) + CameraConfig.Margin;
            return Mathf.Max(up, right / aspect);
        }

        private static float Reach(Vector3 axis, Vector3 half) =>
            Mathf.Abs(axis.x) * half.x + Mathf.Abs(axis.y) * half.y + Mathf.Abs(axis.z) * half.z;
    }
}
