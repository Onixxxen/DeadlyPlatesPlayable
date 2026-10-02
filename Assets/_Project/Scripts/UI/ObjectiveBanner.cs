using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The objective banner, the original's MatchTasks: one line per objective — its text in a pill, made by
    /// FlowScene from FlowConfig and hidden — of which <see cref="Show"/> brings one in with the original's scale-in.
    /// </summary>
    public sealed class ObjectiveBanner : MonoBehaviour
    {
        [SerializeField] private GameObject leaveTwo;
        [SerializeField] private GameObject crossBridge;

        /// <summary>The objective on screen; None until the first one.</summary>
        public Objective Shown { get; private set; }

        public void Show(Objective objective)
        {
            if (objective == Shown) return;
            Shown = objective;
            leaveTwo.SetActive(objective == Objective.LeaveTwo);
            crossBridge.SetActive(objective == Objective.CrossBridge);
            transform.localScale = Vector3.zero;
            Tween.Scale(transform, Vector3.one * FlowConfig.BannerOvershoot, FlowConfig.BannerUpSeconds, Ease.OutQuad, 0f,
                () => Tween.Scale(transform, Vector3.one, FlowConfig.BannerDownSeconds, Ease.OutQuad));
        }
    }
}
