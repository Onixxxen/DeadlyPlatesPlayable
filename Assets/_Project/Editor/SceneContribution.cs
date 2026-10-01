using System;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// Marks a method that adds one feature's objects to the main scene:
    /// <c>[SceneContribution(20)] public static void Contribute(BaseScene scene)</c>, in the feature's own
    /// <c>Editor/Scene/&lt;Feature&gt;Scene.cs</c>. <see cref="MainSceneBuilder"/> builds the base scene, then
    /// calls every marked method, lower order first (ties by type name), then saves the scene.
    /// </summary>
    [AttributeUsage(AttributeTargets.Method)]
    public sealed class SceneContributionAttribute : Attribute
    {
        public int Order { get; }

        public SceneContributionAttribute(int order) => Order = order;
    }

    /// <summary>What the base scene hands every contribution.</summary>
    public sealed class BaseScene
    {
        /// <summary>The main camera; <see cref="CameraRig"/> sits on it.</summary>
        public Camera Camera;

        public CameraRig CameraRig;

        /// <summary>The Screen Space - Camera canvas (1080×1920 reference, match 0.5): UI goes under it.</summary>
        public Canvas Canvas;
    }
}
