using System;
using System.Collections.Generic;
using UnityEngine;

namespace Playable
{
    /// <summary>
    /// The island change on screen, played as <see cref="GameFlow"/> says once the field has made it: the old
    /// plates crumble in a quick wave from the beaver, all but its +; FlowConfig.NewIslandDelay later the new island pops
    /// in from its centre while the bridge comes plate by plate from the beaver, with "CROSS THE BRIDGE!", and the camera
    /// moves and zooms out to show the beaver, the bridge and the whole new island under the banner until the beaver is
    /// across. The field has the bridge before the screen shows it, so input is held until the bridge is in.
    /// </summary>
    public sealed class IslandTransition : MonoBehaviour
    {
        [SerializeField] private PlatesView plates;
        [SerializeField] private HopController hop;
        [SerializeField] private CameraRig rig;
        [SerializeField] private ObjectiveBanner banner;

        private IslandChange change;

        public bool Started => change != null;

        /// <summary>Plays <paramref name="island"/>, made by the safe landing on <paramref name="beaver"/>.</summary>
        public void Play(IslandChange island, Vector2Int beaver)
        {
            change = island;
            hop.Hold();

            // The + plate in front is the bridge's first; a plate there stays (a trap there gives way to a plate).
            Vector2Int front = beaver + island.Direction;
            PlateView entry = plates.Plate(front);
            bool keep = entry != null && !entry.IsTrap;
            foreach (Vector2Int cell in island.Removed)
                if (!keep || cell != front) plates.Remove(cell, Distance(cell, beaver) * FlowConfig.CrumbleStep);
            var bridge = new List<Vector2Int>();
            foreach (Vector2Int cell in island.Bridge)
                if (!keep || cell != front) bridge.Add(cell);

            Tween.Delay(this, FlowConfig.NewIslandDelay, () =>
            {
                plates.PopIn(island.NewIsland, island.NewCentre);
                plates.PopIn(bridge, beaver, hop.Release);
                banner.Show(Objective.CrossBridge);
                rig.Frame(Framed(plates.Field, beaver), FlowConfig.CameraTop);
            });
        }

        /// <summary>A safe landing after the change: the camera keeps the crossing framed, and once the beaver is on the
        /// new island (the win) rests on that island at the island's scale.</summary>
        public void Landed(Vector2Int cell)
        {
            if (!plates.Field.Won)
            {
                rig.Frame(Framed(plates.Field, cell), FlowConfig.CameraTop);
                return;
            }
            rig.Centre = World(change.NewCentre);
            rig.Follow();
        }

        /// <summary>What the camera keeps on screen while the beaver on <paramref name="cell"/> crosses: the beaver up to
        /// CameraConfig.ViewTop and every plate the field has — what stands of the old island, the bridge, the whole new
        /// island. A plate behind the beaver is never cut by an edge, so the view holds still while it crosses.</summary>
        public static Bounds[] Framed(Field field, Vector2Int cell)
        {
            float height = CameraConfig.ViewTop - CameraConfig.ViewBottom;
            var boxes = new List<Bounds>
            {
                new Bounds(World(cell) + Vector3.up * (CameraConfig.ViewTop + CameraConfig.ViewBottom) / 2f, new Vector3(PlateConfig.Size.x, height, PlateConfig.Size.z)),
            };
            foreach (Vector2Int plate in field.Plates) boxes.Add(new Bounds(World(plate), PlateConfig.Size));
            return boxes.ToArray();
        }

        private static Vector3 World(Vector2Int cell) => new Vector3(cell.x * FieldConfig.Spacing, 0f, cell.y * FieldConfig.Spacing);

        private static int Distance(Vector2Int a, Vector2Int b) => Math.Abs(a.x - b.x) + Math.Abs(a.y - b.y);
    }
}
