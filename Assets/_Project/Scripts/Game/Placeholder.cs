using UnityEngine;

namespace Playable
{
    /// <summary>
    /// Stand-ins until the plates and the beaver are real. The plates turn white the
    /// way the original's Tile did it to the pipeline's grey default material; the beaver walks in place
    /// (Character.controller starts in an Idle state with no clip, so something pulls the Walk trigger).
    /// </summary>
    public sealed class Placeholder : MonoBehaviour
    {
        [SerializeField] private Renderer[] plates;
        [SerializeField] private Animator beaver;

        private void Start()
        {
            beaver.SetTrigger("Walk");
            if (plates.Length == 0) return; // the real plates took the grid's place
            var white = new Material(plates[0].sharedMaterial);
            white.SetColor("_BaseColor", Color.white);
            foreach (Renderer plate in plates) plate.sharedMaterial = white;
        }
    }
}
