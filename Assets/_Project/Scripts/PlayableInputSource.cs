using UnityEngine;

namespace Playable
{
    /// <summary>
    /// Put one in the scene: it turns the device's touch or click into <see cref="PlayableInput.Tapped"/>.
    ///
    /// Its own file on purpose: Unity binds a serialized component to its script by FILE name. Kept
    /// inside PlayableInput.cs it worked in the editor and was silently dropped by the Playworks
    /// export — no input at all in the ad (found by the browser QA on 2026-10-01). One
    /// MonoBehaviour per file, named like the file.
    /// </summary>
    public sealed class PlayableInputSource : MonoBehaviour
    {
        private void Update()
        {
            for (int i = 0; i < Input.touchCount; i++)
            {
                Touch touch = Input.GetTouch(i);
                if (touch.phase != TouchPhase.Began) continue;
                PlayableInput.Raise(touch.position);
                return;
            }
            // Touches are usually mirrored as mouse input too; take the mouse only when no finger
            // is down, or one tap would count twice.
            if (Input.touchCount == 0 && Input.GetMouseButtonDown(0)) PlayableInput.Raise(Input.mousePosition);
        }
    }
}
