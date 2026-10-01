using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

namespace Playable.Editor
{
    /// <summary>
    /// Stand-ins: a 5×5 grid of white plates and the beaver in the centre, walking in place, the
    /// camera's target. Plates on screen replace the grid, the beaver and the hop the rest.
    /// </summary>
    public static class PlaceholderScene
    {
        private const float PlateThickness = 0.356f; // the original's Tile.prefab: a cube scaled 1 × 0.356 × 1
        private const float BeaverHeight = 0.159f;   // the original scene's beaver, feet on the plate
        private const float BeaverYaw = 150f;        // three-quarters toward the camera

        [SceneContribution(10)]
        public static void Contribute(BaseScene scene)
        {
            var root = new GameObject("Placeholder");
            // The pipeline's default material, the original Tile's; Placeholder turns it white at runtime.
            Material material = GraphicsSettings.currentRenderPipeline.defaultMaterial;
            int rim = FieldConfig.IslandSize / 2;
            var plates = new Renderer[FieldConfig.IslandSize * FieldConfig.IslandSize];
            int n = 0;
            for (int x = -rim; x <= rim; x++)
            for (int y = -rim; y <= rim; y++)
            {
                GameObject plate = GameObject.CreatePrimitive(PrimitiveType.Cube);
                plate.name = $"Plate {x},{y}";
                Object.DestroyImmediate(plate.GetComponent<Collider>());
                plate.transform.SetParent(root.transform, false);
                plate.transform.localPosition = new Vector3(x * FieldConfig.Spacing, 0f, y * FieldConfig.Spacing);
                plate.transform.localScale = new Vector3(1f, PlateThickness, 1f);
                plates[n] = plate.GetComponent<MeshRenderer>();
                plates[n++].sharedMaterial = material;
            }

            var beaver = (GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(ArtImport.BeaverPrefab));
            beaver.transform.SetParent(root.transform, false);
            beaver.transform.SetPositionAndRotation(new Vector3(0f, BeaverHeight, 0f), Quaternion.Euler(0f, BeaverYaw, 0f));
            scene.CameraRig.Target = beaver.transform;

            var placeholder = new SerializedObject(root.AddComponent<Placeholder>());
            SerializedProperty list = placeholder.FindProperty("plates");
            list.arraySize = plates.Length;
            for (int i = 0; i < plates.Length; i++) list.GetArrayElementAtIndex(i).objectReferenceValue = plates[i];
            placeholder.FindProperty("beaver").objectReferenceValue = beaver.GetComponent<Animator>();
            placeholder.ApplyModifiedPropertiesWithoutUndo();
        }
    }
}
