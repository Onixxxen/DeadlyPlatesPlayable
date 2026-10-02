# Deadly Plates — a playable ad

<p align="center">
  <img src="showcase/deadly-plates.gif" width="300" alt="Deadly Plates: the island pops in, the beaver hops from plate to plate, crosses the bridge and wins">
</p>

A 22-second playable ad for a hyper-casual game. A beaver spins in place on a grid of floating
plates; a tap makes it hop onto the plate it faces, the plate behind it crumbles, and the cracked
red plates are traps. One verb, a timing skill, a fall into the void as the fail state.

Made in Unity 6 and converted to HTML5 with Unity Playworks (formerly Luna).

**[Play it in the browser](https://onixxxen.github.io/DeadlyPlatesPlayable/)** — the Unity Ads file
itself, in a phone frame, portrait and landscape.

## The 22 seconds

| time | on screen |
|---|---|
| 0–2.5 s | A 5×5 island pops in plate by plate; the beaver drops onto the centre with a puff of smoke and starts turning. The plate it faces glows. A hand and "TAP TO JUMP!". |
| 2.5–8 s | Tap: an arc onto the glowing plate, a landing dip and puff, "+1" and the score. The plate behind crumbles. The traps sit on the rim, cracked and reddish. |
| 8–14 s | After the 3rd hop: "LEAVE ONLY 2 TILES AROUND YOU!". Then the island crumbles, a new one pops in up the screen with a 3-wide bridge, traps on it, and "CROSS THE BRIDGE!"; the camera follows. |
| 14–22 s | Crossing the bridge. |
| ~22 s | The end card: "YOU MADE IT!", the score and a pulsing PLAY NOW. The whole card is the button. |

A hop onto a trap or into the void drops the beaver into the cyan ("OOPS, YOU FELL!"); no tap for
10 seconds brings "TRY IT YOURSELF!". Every ending shows the same card and the same call to action.
The store opens only from INSTALL (top right, on screen all through the play) or from the end card,
never from a gameplay tap. Sound starts with the first tap.

## Stack

- **Unity 6** (6000.0 LTS, URP) and C#, with TextMesh Pro for the text.
- **Unity Playworks 7.2** turns the Unity project into an HTML5 playable: it compiles the C# to
  JavaScript and runs the scene in its own WebGL runtime.
- **Playwright** plays the built ad in headless Chromium for QA (`qa/`), in portrait and landscape,
  with the ad networks' APIs stubbed and their rules checked.

## Size

| what | size |
|---|---|
| assets in the build (Playworks' size breakdown) | ≈ 642 KB — meshes 346.7 KB, textures 156.9 KB, animation clips 54.6 KB, sounds 38.8 KB, shaders 18.9 KB |
| the whole build before packing (runtime, code, assets) | 1.87 MB |
| the Unity Ads file, exported from the Playworks platform (`showcase/ad/index.html`, the file the demo plays) | 1.90 MB (1,989,752 bytes) of the 5 MB limit |

## How it was built

- **Scenes and prefabs come from code.** Builder scripts in `Assets/_Project/Editor/` generate the
  scene, the prefabs and the art import; nothing is edited by hand, so every change is a code change
  that can be reviewed and rebuilt.
- **The rules are plain C#.** The field (plates, traps, hops, the island change, the bridge) is not
  a MonoBehaviour and is covered by EditMode tests.
- **A PlayMode journey plays the ad.** It taps through every beat at 1080×2340 and saves a pair of
  frames at each one, so a pair shows what moves and what stands still.
- **Browser QA plays the built ad.** A Playwright script (`qa/`; the `luna` profile for the plugin's
  develop build, `unity` for the Unity Ads file) serves the build locally with the ad container's API
  stubbed, plays a journey in portrait (390×844) and landscape (844×390), saves frames and checks
  what networks reject playables for: the store opening only from a deliberate tap, no sound before
  the first touch, no requests outside the build, the file size. On the Unity Ads file the ad plays
  through to the idle card, the store tap is detected, and the file is 1.90 MB of 5 MB. The three
  violations it reports there come from the exporter, not from the game's code: the file relies on
  the container's global `mraid` instead of a `<script src="mraid.js">` tag (`missing-marker`), and
  when the ad is hidden it mutes through `luna:unsafe:mute` but leaves the AudioContext running
  (`audio-not-paused-when-hidden`, once per orientation).

## Repository

```
Assets/_Project/Scripts/   the game; PlayableAd.cs is the only code that talks to Playworks
Assets/_Project/Editor/    builders for the scene, the prefabs and the art import
Assets/_Project/Tests/     EditMode tests for the rules; a PlayMode journey that plays the ad
qa/                        browser QA of the built playable (Playwright)
showcase/                  the GIF above and the GitHub Pages demo
luna.json                  Playworks project settings
```

To build it: Unity 6000.0.84f1 and the Unity Playworks plugin (installed separately, not part of
this repository). The scene is committed; **Playable > Build Main Scene** regenerates it from code.
The plugin's develop build lands in `LunaTemp/stage4/develop/`; the network files (the free tier
exports Unity Ads) come from uploading the build to the Playworks platform and exporting it there.

## The demo page

`showcase/index.html` plays the Unity Ads file (`showcase/ad/index.html`, as exported) in a phone
frame. It needs a web server, not `file://`:

```
python -m http.server 8000 -d showcase
```

then open <http://localhost:8000/>. The file expects the `mraid` object of the ad container; the
page hands it a small stand-in with only the calls the file makes, and where a real ad would open
the store (the export's store links are placeholders) it shows a note. **Full screen** (`#full`)
plays it filling the window.

To refresh the demo, export the Unity Ads HTML from the Playworks platform again and copy it over
`showcase/ad/index.html`. The GIF comes from the QA video of a recorded run (after `npm install` in
`qa/`):

```
node qa/pa-qa.mjs --html showcase/ad/index.html --network unity --journey showcase/record.json --viewports portrait --video --out qa-out/record
ffmpeg -ss 1 -to 24 -i qa-out/record/portrait/journey.webm -vf "fps=12,scale=300:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" showcase/deadly-plates.gif
```

The recorded run taps at fixed times, measured on one machine against the beaver's turn; on a
faster or slower machine the waits may need adjusting.

## Credits

- The beaver (model, texture and its walk, jump and fall clips), the sound effects and the tutorial
  hand come from the original game, DeadlyPlates1 (an unpublished Unity game made for Yandex Games).
- The landing smoke uses the "cfxr smoke cloud x4" texture from Cartoon FX Remaster by JMO Assets
  (Unity Asset Store), as shipped with the original game.
- The text is set in Benzin Bold, the original game's font.
- `showcase/ad/index.html`, the runtime in it included, is generated by Unity Playworks.
