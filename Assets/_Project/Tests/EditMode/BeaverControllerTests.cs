using System.Linq;
using NUnit.Framework;
using UnityEditor;
using UnityEditor.Animations;

namespace Playable.Tests
{
    /// <summary>
    /// The Playworks runtime warns about an animator state without a clip ("Missing motion for state"), and a develop
    /// build posts its warnings to /runtime/diagnostics about 10 s after the start: a 404 under pa-qa.
    /// </summary>
    public class BeaverControllerTests
    {
        [Test]
        public void EveryState_HasAClip()
        {
            var controller = AssetDatabase.LoadAssetAtPath<AnimatorController>("Assets/_Project/Art/Beaver/Character.controller");
            Assert.IsNotNull(controller, "нет контроллера бобра");
            string[] empty = controller.layers.SelectMany(layer => layer.stateMachine.states)
                .Where(child => child.state.motion == null).Select(child => child.state.name).ToArray();
            Assert.IsEmpty(empty, $"состояния без клипа: {string.Join(", ", empty)}");
        }
    }
}
