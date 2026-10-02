using System.Linq;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// The beaver's part of the main scene: the imported beaver with <see cref="BeaverView"/> and
    /// <see cref="HopController"/>, waiting above the centre plate to drop in once the plates are in, and the camera's
    /// target; the smoke puffs its landings play, as scene objects. Runs after <see cref="PlatesScene"/>, whose
    /// PlatesView it plays on.
    /// </summary>
    public static class BeaverScene
    {
        [SceneContribution(30)]
        public static void Contribute(BaseScene scene)
        {
            var beaver = (GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(ArtImport.BeaverPrefab));
            // Plain objects with plain components, as every other part of the scene: components added onto a prefab
            // instance are overrides, which no Playworks build here has been through yet.
            PrefabUtility.UnpackPrefabInstance(beaver, PrefabUnpackMode.Completely, InteractionMode.AutomatedAction);
            beaver.transform.SetPositionAndRotation(Vector3.up * (HopConfig.StandHeight + HopConfig.DropInHeight), Quaternion.Euler(0f, HopConfig.StartYaw, 0f));

            var view = new SerializedObject(beaver.AddComponent<BeaverView>());
            SerializedProperty puffs = view.FindProperty("puffs");
            puffs.arraySize = HopConfig.Puffs;
            var root = new GameObject("Puffs").transform;
            for (int i = 0; i < HopConfig.Puffs; i++)
                puffs.GetArrayElementAtIndex(i).objectReferenceValue = Puff(root);
            view.ApplyModifiedPropertiesWithoutUndo();

            var hop = new SerializedObject(beaver.AddComponent<HopController>());
            hop.FindProperty("plates").objectReferenceValue = Object.FindFirstObjectByType<PlatesView>();
            hop.ApplyModifiedPropertiesWithoutUndo();

            scene.CameraRig.Target = beaver.transform;
            FillEmptyStates();
        }

        /// <summary>
        /// The original's Idle, the controller's entry state, has no clip. The Playworks runtime warns about such a state
        /// ("Missing motion for state"), and a develop build posts its warnings to /runtime/diagnostics about 10 s in.
        /// Idle plays Walk's clip: it lasts one frame, until the Walk trigger BeaverView sets at Start.
        /// Runnable on its own: <c>Playable.Editor.BeaverScene.FillEmptyStates</c>.
        /// </summary>
        public static void FillEmptyStates()
        {
            var animator = AssetDatabase.LoadAssetAtPath<GameObject>(ArtImport.BeaverPrefab).GetComponent<Animator>();
            var controller = (AnimatorController)animator.runtimeAnimatorController;
            ChildAnimatorState[] states = controller.layers[0].stateMachine.states;
            Motion walking = states.First(child => child.state.name == "Walk").state.motion;
            foreach (ChildAnimatorState child in states.Where(child => child.state.motion == null))
            {
                child.state.motion = walking;
                EditorUtility.SetDirty(child.state);
            }
            AssetDatabase.SaveAssets();
        }

        /// <summary>A copy of SmokePuff.prefab that waits for BeaverView to play it.</summary>
        private static ParticleSystem Puff(Transform parent)
        {
            var go = (GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(ArtImport.SmokePrefab), parent);
            PrefabUtility.UnpackPrefabInstance(go, PrefabUnpackMode.Completely, InteractionMode.AutomatedAction);
            var puff = go.GetComponent<ParticleSystem>();
            ParticleSystem.MainModule main = puff.main;
            main.playOnAwake = false;
            return puff;
        }
    }
}
