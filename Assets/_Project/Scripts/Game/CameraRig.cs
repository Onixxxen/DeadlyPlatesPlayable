using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The original's camera and its CameraFollow. Orthographic, isometric, sized every frame so the
    /// island box of <see cref="CameraConfig"/> fits the screen in portrait and in landscape alike. It
    /// watches <see cref="Target"/>: farther than DeadZone from <see cref="Centre"/> on the ground it follows the target
    /// at FollowSpeed, otherwise it drifts back to the centre at ReturnSpeed; its height never changes.
    /// While it <see cref="Frame"/>s a set of boxes (the island change: the beaver and the new island) it shows those
    /// instead, zooming out as far as they need, and zooms back at <see cref="Follow"/>.
    /// </summary>
    [RequireComponent(typeof(Camera))]
    public sealed class CameraRig : MonoBehaviour
    {
        [SerializeField] private Transform target;

        private Camera view;
        private Bounds[] framed = new Bounds[0];
        private float framedTop = 1f;
        private float framedSize; // what fits the framed boxes; kept while zooming back
        private float zoom;       // 0: the island box, 1: the framed boxes; eases at ReturnSpeed like the camera

        public Transform Target
        {
            get => target;
            set => target = value;
        }

        /// <summary>The island the camera rests on, the world origin at first; the island change moves it
        /// [the original's UpdateCenter].</summary>
        public Vector3 Centre { get; set; }

        /// <summary>Keeps these world boxes on screen, with Margin round them, inside the screen's lower
        /// <paramref name="top"/> share (the rest is the banner's) — instead of the island box round Centre.</summary>
        public void Frame(Bounds[] boxes, float top)
        {
            framed = boxes;
            framedTop = top;
        }

        /// <summary>Back to the island box round Centre, following Target, at the island's scale.</summary>
        public void Follow() => framed = new Bounds[0];

        private void Awake()
        {
            view = GetComponent<Camera>();
            transform.SetPositionAndRotation(PositionFor(Centre), CameraConfig.Rotation);
            view.orthographicSize = FitSize(view.aspect);
        }

        private void LateUpdate()
        {
            bool framing = framed.Length > 0;
            float speed = CameraConfig.ReturnSpeed;
            Vector3 goal = transform.position;
            if (framing)
            {
                goal = Fit(framed, framedTop, view.aspect, out framedSize);
            }
            else if (target != null)
            {
                Vector3 offset = target.position - Centre;
                offset.y = 0f; // on the ground: a hop's height near the rim would nudge the camera otherwise
                bool away = offset.magnitude > CameraConfig.DeadZone;
                if (away) speed = CameraConfig.FollowSpeed;
                goal = PositionFor(away ? target.position : Centre);
            }

            float zoomTo = framing ? 1f : 0f;
            zoom = Mathf.Lerp(zoom, zoomTo, Time.deltaTime * CameraConfig.ReturnSpeed);
            if (Mathf.Abs(zoom - zoomTo) < 0.01f) zoom = zoomTo; // the last hundredth: a pixel or two at the screen's edge
            view.orthographicSize = Mathf.Lerp(FitSize(view.aspect), framedSize, zoom); // the screen may have turned
            transform.position = Vector3.Lerp(transform.position, goal, Time.deltaTime * speed);
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

        /// <summary>Where the camera stands, and its size, to show <paramref name="boxes"/> with Margin round them inside
        /// the lower <paramref name="top"/> share of a screen of this aspect: the boxes' corners' reach along the camera's
        /// right and up axes. In the screen's middle when that leaves the top share free, else just under it.</summary>
        public static Vector3 Fit(Bounds[] boxes, float top, float aspect, out float size)
        {
            Vector3 right = CameraConfig.Rotation * Vector3.right, up = CameraConfig.Rotation * Vector3.up;
            float x0 = float.MaxValue, x1 = float.MinValue, y0 = float.MaxValue, y1 = float.MinValue;
            foreach (Bounds box in boxes)
                for (int i = 0; i < 8; i++)
                {
                    Vector3 corner = box.center + Vector3.Scale(box.extents, new Vector3(i & 1, (i >> 1) & 1, (i >> 2) & 1) * 2f - Vector3.one);
                    float x = Vector3.Dot(corner, right), y = Vector3.Dot(corner, up);
                    x0 = Mathf.Min(x0, x);
                    x1 = Mathf.Max(x1, x);
                    y0 = Mathf.Min(y0, y);
                    y1 = Mathf.Max(y1, y);
                }
            size = Mathf.Max(((x1 - x0) / 2f + CameraConfig.Margin) / aspect, ((y1 - y0) / 2f + CameraConfig.Margin) / top);
            float middle = Mathf.Max((y0 + y1) / 2f, y1 + CameraConfig.Margin - size * (2f * top - 1f));
            return right * ((x0 + x1) / 2f) + up * middle - CameraConfig.Rotation * Vector3.forward * CameraConfig.Distance;
        }

        private static float Reach(Vector3 axis, Vector3 half) =>
            Mathf.Abs(axis.x) * half.x + Mathf.Abs(axis.y) * half.y + Mathf.Abs(axis.z) * half.z;
    }
}
