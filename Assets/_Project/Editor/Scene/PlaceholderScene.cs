using UnityEditor;
using UnityEngine;

namespace Playable.Editor
{
    /// <summary>
    /// A stand-in, until the beaver and the hop replace it: the beaver in the centre, walking in
    /// place, the camera's target. The plates are real now; this points their glow at the plate the
    /// beaver faces, so it runs after <see cref="PlatesScene"/>.
    /// </summary>
    public static class PlaceholderScene
    {
        private const float BeaverHeight = 0.159f; // the original scene's beaver, feet on the plate
        private const float BeaverYaw = 150f;      // three-quarters toward the camera

        [SceneContribution(30)]
        public static void Contribute(BaseScene scene)
        {
            var root = new GameObject("Placeholder");
            var beaver = (GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(ArtImport.BeaverPrefab));
            beaver.transform.SetParent(root.transform, false);
            beaver.transform.SetPositionAndRotation(new Vector3(0f, BeaverHeight, 0f), Quaternion.Euler(0f, BeaverYaw, 0f));
            scene.CameraRig.Target = beaver.transform;

            var placeholder = new SerializedObject(root.AddComponent<Placeholder>()); // its plate list stays empty
            placeholder.FindProperty("beaver").objectReferenceValue = beaver.GetComponent<Animator>();
            placeholder.ApplyModifiedPropertiesWithoutUndo();

            var plates = new SerializedObject(Object.FindFirstObjectByType<PlatesView>());
            plates.FindProperty("glowAtStart").boolValue = true;
            plates.FindProperty("startTarget").vector2IntValue = Field.Facing(BeaverYaw); // a step from the centre, (0, 0)
            plates.ApplyModifiedPropertiesWithoutUndo();
        }
    }
}
