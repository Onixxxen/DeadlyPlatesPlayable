using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

namespace Playable.Editor
{
    /// <summary>
    /// The plates' part of the main scene: <see cref="PlatesView"/> and the two inactive templates it copies at
    /// runtime, one per plate of the field — the original's white slab, and a trap's with a crack across its top.
    /// Both use the pipeline's default material, the original Tile's; PlateView tints its own copy.
    /// </summary>
    public static class PlatesScene
    {
        // The crack, on the top face in the plate's units (it spans −0.5…0.5): a zig-zag from the −x edge to
        // the +x edge with a branch to each of the other two, as segments between these points.
        private static readonly Vector2[] CrackPoints =
        {
            new Vector2(-0.46f, 0.14f), new Vector2(-0.18f, 0.02f), new Vector2(0.02f, 0.22f), new Vector2(0.2f, -0.06f),
            new Vector2(0.46f, 0.04f), new Vector2(0.08f, 0.46f), new Vector2(0.08f, -0.42f),
        };
        private static readonly int[] CrackSegments = { 0, 1, 1, 2, 2, 3, 3, 4, 2, 5, 3, 6 };
        private const float CrackWidth = 0.07f;
        private const float CrackHeight = 0.012f;

        [SceneContribution(20)]
        public static void Contribute(BaseScene scene)
        {
            var root = new GameObject("Plates");
            Material material = GraphicsSettings.currentRenderPipeline.defaultMaterial;
            var view = new SerializedObject(root.AddComponent<PlatesView>());
            view.FindProperty("plate").objectReferenceValue = Template(root.transform, "Plate template", material, false);
            view.FindProperty("trap").objectReferenceValue = Template(root.transform, "Trap template", material, true);
            view.ApplyModifiedPropertiesWithoutUndo();
        }

        private static PlateView Template(Transform parent, string name, Material material, bool trap)
        {
            var go = new GameObject(name);
            go.SetActive(false);
            go.transform.SetParent(parent, false);
            Renderer slab = Box(go.transform, "Slab", Vector3.zero, PlateConfig.Size, 0f, material);
            var cracks = new Renderer[trap ? CrackSegments.Length / 2 : 0];
            for (int i = 0; i < cracks.Length; i++)
            {
                Vector2 a = CrackPoints[CrackSegments[2 * i]];
                Vector2 b = CrackPoints[CrackSegments[2 * i + 1]];
                Vector2 mid = (a + b) / 2f;
                var size = new Vector3(CrackWidth, CrackHeight, Vector2.Distance(a, b) + CrackWidth); // overlapping at the joints
                float yaw = Mathf.Atan2(b.x - a.x, b.y - a.y) * Mathf.Rad2Deg;
                cracks[i] = Box(go.transform, $"Crack {i}", new Vector3(mid.x, (PlateConfig.Size.y + CrackHeight) / 2f, mid.y), size, yaw, material);
            }

            var view = new SerializedObject(go.AddComponent<PlateView>());
            view.FindProperty("slab").objectReferenceValue = slab;
            SerializedProperty list = view.FindProperty("cracks");
            list.arraySize = cracks.Length;
            for (int i = 0; i < cracks.Length; i++) list.GetArrayElementAtIndex(i).objectReferenceValue = cracks[i];
            view.ApplyModifiedPropertiesWithoutUndo();
            return (PlateView)view.targetObject;
        }

        private static Renderer Box(Transform parent, string name, Vector3 position, Vector3 size, float yaw, Material material)
        {
            GameObject box = GameObject.CreatePrimitive(PrimitiveType.Cube);
            box.name = name;
            Object.DestroyImmediate(box.GetComponent<Collider>());
            box.transform.SetParent(parent, false);
            box.transform.localPosition = position;
            box.transform.localRotation = Quaternion.Euler(0f, yaw, 0f);
            box.transform.localScale = size;
            var renderer = box.GetComponent<MeshRenderer>();
            renderer.sharedMaterial = material;
            return renderer;
        }
    }
}
