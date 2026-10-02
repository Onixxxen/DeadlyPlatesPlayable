if ( TRACE ) { TRACE( JSON.parse( '["Playable.BeaverView#init","Playable.BeaverView#Awake","Playable.BeaverView#Start","Playable.BeaverView#Turn","Playable.BeaverView#DropIn","Playable.BeaverView#Hop","Playable.BeaverView#Land","Playable.BeaverView#Fall","Playable.CameraConfig#init","Playable.CameraRig#PositionFor","Playable.CameraRig#FitSize","Playable.CameraRig#Fit","Playable.CameraRig#Reach","Playable.CameraRig#Target#get","Playable.CameraRig#Target#set","Playable.CameraRig#init","Playable.CameraRig#Frame","Playable.CameraRig#Follow","Playable.CameraRig#Awake","Playable.CameraRig#LateUpdate","Playable.EndCard#Pulse","Playable.EndCard#OnEnable","Playable.EndCard#OnDisable","Playable.EndCard#Update","Playable.EndCard#OnEnded","Playable.EndCard#OnIdle","Playable.EndCard#OnTap","Playable.EndCard#Show","Playable.EndCardConfig#init","Playable.Field#init","Playable.Field#Facing","Playable.Field#Island","Playable.Field#Plates#get","Playable.Field#init","Playable.Field#ctor","Playable.Field#OutcomeAt","Playable.Field#IsTrap","Playable.Field#PlatesAround","Playable.Field#Hop","Playable.Field#ChangeIsland","Playable.Field#TrapAround","Playable.Field#SafeHopLeft","Playable.FieldConfig#init","Playable.FlowConfig#init","Playable.GameFlow#End","Playable.GameFlow#ResetStatics","Playable.GameFlow#OnEnable","Playable.GameFlow#OnDisable","Playable.GameFlow#OnHopStarted","Playable.GameFlow#OnLanded","Playable.GameFlow#OnFell","Playable.HopConfig#init","Playable.HopController#SpotOn","Playable.HopController#ResetStatics","Playable.HopController#InputOpen#get","Playable.HopController#CloseInput","Playable.HopController#Hold","Playable.HopController#Release","Playable.HopController#Awake","Playable.HopController#OnEnable","Playable.HopController#OnDisable","Playable.HopController#Update","Playable.HopController#DropIn","Playable.HopController#OnTap","Playable.HopController#Arrive","Playable.HopController#Touchdown","Playable.HopController#Fall","Playable.HopController#Open","Playable.HopController#Aim","Playable.HudConfig#init","Playable.InstallButton#Covers","Playable.InstallButton#Awake","Playable.InstallButton#OnEnable","Playable.InstallButton#OnDisable","Playable.InstallButton#OnTap","Playable.IslandChange#init","Playable.IslandChange#ctor","Playable.IslandTransition#Framed","Playable.IslandTransition#World","Playable.IslandTransition#Distance","Playable.IslandTransition#Started#get","Playable.IslandTransition#Play","Playable.IslandTransition#Landed","Playable.ObjectiveBanner#Show","Playable.PlateConfig#init","Playable.PlatesView#ResetStatics","Playable.PlatesView#Target#get","Playable.PlatesView#Target#set","Playable.PlatesView#init","Playable.PlatesView#Awake","Playable.PlatesView#PopIn","Playable.PlatesView#Remove","Playable.PlatesView#Dip","Playable.PlatesView#Drop","Playable.PlatesView#Plate","Playable.PlatesView#Create","Playable.PlatesView#Take","Playable.PlatesView#SetGlow","Playable.PlatesView#LogTraps","Playable.PlateView#init","Playable.PlateView#init","Playable.PlateView#Show","Playable.PlateView#PopIn","Playable.PlateView#Glow","Playable.PlateView#Crumble","Playable.PlateView#Dip","Playable.PlateView#Drop","Playable.PlateView#OnDestroy","Playable.PlayableAd#Install","Playable.PlayableAd#GameEnded","Playable.PlayableAd#SetPaused","Playable.PlayableAd#ResetStatics","Playable.PlayableAd#SubscribeToContainer","Playable.PlayableAd#OnContainerPause","Playable.PlayableAd#OnContainerResume","Playable.PlayableInput#Simulate","Playable.PlayableInput#Raise","Playable.PlayableInput#ResetStatics","Playable.PlayableInputSource#Update","Playable.ScoreHud#OnEnable","Playable.ScoreHud#OnDisable","Playable.ScoreHud#Show","Playable.ScorePopup#init","Playable.ScorePopup#Awake","Playable.ScorePopup#Show","Playable.ScorePopup#MakeWay","Playable.ScorePopup#LateUpdate","Playable.Sfx#ResetStatics","Playable.Sfx#init","Playable.Sfx#Awake","Playable.Sfx#OnEnable","Playable.Sfx#OnDisable","Playable.Sfx#OnPlateSpawned","Playable.Sfx#OnPlateRemoved","Playable.Sfx#OnHopStarted","Playable.Sfx#OnLanded","Playable.Sfx#OnFell","Playable.Sfx#OnIslandChanged","Playable.Sfx#OnEnded","Playable.Sfx#OnPauseChanged","Playable.Sfx#Play","Playable.SfxConfig#init","Playable.Tutorial#ScaleIn","Playable.Tutorial#Pulse","Playable.Tutorial#ResetStatics","Playable.Tutorial#OnEnable","Playable.Tutorial#OnDisable","Playable.Tutorial#Update","Playable.Tutorial#OnReady","Playable.Tutorial#Show","Playable.Tutorial#Hide","Playable.TutorialConfig#init","Playable.Tween#init","Playable.Tween#Move","Playable.Tween#Scale","Playable.Tween#Tint","Playable.Tween#Value","Playable.Tween#Delay","Playable.Tween#Eased","Playable.Tween#Advance","Playable.Tween#Add","Playable.Tween#IsDead","Playable.Tween#ResetStatics","Playable.Tween#Update","Playable.Tween#OnDestroy"]' ) ); }
/**
 * @version 1.0.9771.33117
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @return  {void}
     */


    /*Playable.BeaverView start.*/
    /** @namespace Playable */

    /**
     * The beaver on screen: its turn, its moves and its clips, played as {@link } says.
     It moves with its plate — the landing dip and the fall are PlateView's numbers from the same spot — and leaves
     a smoke puff where it lands. Sits on the imported Beaver prefab, next to its Animator.
     *
     * @public
     * @class Playable.BeaverView
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.BeaverView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            puffs: null,
            animator: null,
            home: null,
            nextPuff: 0,
            /**
             * Its facing in degrees, 0…360: 0 faces world +z (grid +y), turning clockwise seen from above.
             *
             * @instance
             * @public
             * @memberof Playable.BeaverView
             * @function Yaw
             * @type number
             */
            Yaw: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.BeaverView#init", this ); }

                this.home = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*Playable.BeaverView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.BeaverView#Awake", this ); }

                this.animator = this.GetComponent(UnityEngine.Animator);
                this.Yaw = this.transform.eulerAngles.y;
                this.home = this.transform.localPosition.$clone();
            },
            /*Playable.BeaverView.Awake end.*/

            /*Playable.BeaverView.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Playable.BeaverView#Start", this ); }

                this.animator.SetTrigger$1("Walk");
            },
            /*Playable.BeaverView.Start end.*/

            /*Playable.BeaverView.Turn start.*/
            Turn: function (degrees) {
if ( TRACE ) { TRACE( "Playable.BeaverView#Turn", this ); }

                var $t;
                this.Yaw = ($t = this.Yaw + degrees, $t - Math.floor($t / 360.0) * 360.0);
                this.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.Yaw, 0.0 );
            },
            /*Playable.BeaverView.Turn end.*/

            /*Playable.BeaverView.DropIn start.*/
            /**
             * Falls from where it waits onto <b />, speeding up; <b /> on touching it.
             *
             * @instance
             * @public
             * @this Playable.BeaverView
             * @memberof Playable.BeaverView
             * @param   {UnityEngine.Vector3}    spot       
             * @param   {System.Action}          arrived
             * @return  {void}
             */
            DropIn: function (spot, arrived) {
if ( TRACE ) { TRACE( "Playable.BeaverView#DropIn", this ); }

                this.animator.SetTrigger$1("Fall");
                this.home = spot.$clone();
                Playable.Tween.Move(this.transform, spot, Playable.HopConfig.DropInSeconds, Playable.Ease.InQuad, 0.0, arrived);
            },
            /*Playable.BeaverView.DropIn end.*/

            /*Playable.BeaverView.Hop start.*/
            /**
             * The arc onto <b /> with the Jump clip; <b /> at its end.
             *
             * @instance
             * @public
             * @this Playable.BeaverView
             * @memberof Playable.BeaverView
             * @param   {UnityEngine.Vector3}    spot       
             * @param   {System.Action}          arrived
             * @return  {void}
             */
            Hop: function (spot, arrived) {
if ( TRACE ) { TRACE( "Playable.BeaverView#Hop", this ); }

                this.animator.SetTrigger$1("Jump");
                Playable.Tween.Move(this.transform, this.transform.localPosition, 0.0); // ends a landing dip still running: a replaced move never calls back
                var from = this.transform.localPosition.$clone();
                this.home = spot.$clone();
                Playable.Tween.Value(this, Playable.HopConfig.HopSeconds, Bridge.fn.bind(this, function (s) {
                    this.transform.localPosition = new pc.Vec3().lerp( from, spot, s ).add( pc.Vec3.UP.clone().clone().scale( (4.0 * Playable.HopConfig.HopHeight * s * (1.0 - s)) ) );
                }), Playable.Ease.OutQuad, 0.0, arrived);
            },
            /*Playable.BeaverView.Hop end.*/

            /*Playable.BeaverView.Land start.*/
            /**
             * Down with the plate and back up (PlateView.Dip's numbers), a smoke puff, walking again.
             *
             * @instance
             * @public
             * @this Playable.BeaverView
             * @memberof Playable.BeaverView
             * @return  {void}
             */
            Land: function () {
if ( TRACE ) { TRACE( "Playable.BeaverView#Land", this ); }

                this.animator.SetTrigger$1("Walk");
                Playable.Tween.Move(this.transform, this.home.$clone().add( pc.Vec3.DOWN.clone().clone().scale( Playable.PlateConfig.DipDepth ) ), Playable.PlateConfig.DipDownSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Move(this.transform, this.home, Playable.PlateConfig.DipUpSeconds, Playable.Ease.OutQuad);
                }));
                var smoke = this.puffs[this.nextPuff];
                this.nextPuff = (((this.nextPuff + 1) | 0)) % this.puffs.length;
                smoke.transform.position = this.home.$clone(); // world-space clouds: the previous puff's stay where they rose
                smoke.Play();
            },
            /*Playable.BeaverView.Land end.*/

            /*Playable.BeaverView.Fall start.*/
            /**
             * Falls from where it stands — with its plate (PlateView.Drop's numbers) or into the void — playing Fall.
             *
             * @instance
             * @public
             * @this Playable.BeaverView
             * @memberof Playable.BeaverView
             * @return  {void}
             */
            Fall: function () {
if ( TRACE ) { TRACE( "Playable.BeaverView#Fall", this ); }

                this.animator.SetTrigger$1("Fall");
                Playable.Tween.Move(this.transform, this.home.$clone().add( pc.Vec3.DOWN.clone().clone().scale( Playable.PlateConfig.DropDistance ) ), Playable.PlateConfig.DropSeconds, Playable.Ease.InQuad);
            },
            /*Playable.BeaverView.Fall end.*/


        }
    });
    /*Playable.BeaverView end.*/

    /*Playable.CameraConfig start.*/
    /**
     * The view: the original's camera and light, the box the camera keeps on screen, and the
     original's CameraFollow numbers. The original's values in brackets.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.CameraConfig
     */
    Bridge.define("Playable.CameraConfig", {
        statics: {
            fields: {
                /**
                 * The background cyan #5EF0FD [the original camera's background].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @type UnityEngine.Color
                 */
                Background: null,
                /**
                 * Orthographic, isometric: pitch 38°, yaw −45° [as in the original].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @type UnityEngine.Quaternion
                 */
                Rotation: null,
                /**
                 * How far the camera stands from what it looks at; orthographic, so only the clip planes
                 care [(10, 11, −10) from the origin: 17.9].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @default 18.0
                 * @type number
                 */
                Distance: 0,
                /**
                 * The box kept on screen in either orientation, around the island centre: half a 5×5 island
                 with its gaps (2.75) across, from the plates' bottom up to where a hop lifts the beaver's hat. Standing,
                 the hat is at 2.1; at the top of a hop (HopConfig.HopHeight) at 4.1, and in landscape a hop along the far
                 rim left the screen by a third of the beaver. At 2.6 that hop grazes the top edge with the hat while the
                 island still spans 0.66 of a landscape screen (0.69 at 2.1); portrait has room to spare either way.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @type number
                 */
                IslandHalf: 0,
                ViewBottom: 0,
                ViewTop: 0,
                /**
                 * World units kept free around that box.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @default 0.3
                 * @type number
                 */
                Margin: 0,
                /**
                 * Past this distance from the island centre the camera follows its target [3.1] ...
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @default 3.1
                 * @type number
                 */
                DeadZone: 0,
                /**
                 * ... at this rate [5]; inside it, it drifts back to the centre at ReturnSpeed [2].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @default 5.0
                 * @type number
                 */
                FollowSpeed: 0,
                ReturnSpeed: 0,
                /**
                 * The original's directional light at 50°, −30°, white, no shadows (the Playworks build has no
                 realtime shadows, so the editor frames have none either) [intensity 2, 5000 K: with the flat ambient
                 they washed the plates' left faces into their tops, the build's grid read as strips; and the build
                 does not linearise a light's colour as the editor does, so a tint differs between the two —
                 measured on the first build's frames, 2026-10-01].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @type UnityEngine.Quaternion
                 */
                LightRotation: null,
                LightIntensity: 0,
                /**
                 * Flat ambient [the original's default skybox]: immediate in the editor and the build.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.CameraConfig
                 * @type UnityEngine.Color
                 */
                Ambient: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.CameraConfig#init", this ); }

                    this.Background = new UnityEngine.Color();
                    this.Rotation = new UnityEngine.Quaternion();
                    this.LightRotation = new UnityEngine.Quaternion();
                    this.Ambient = new UnityEngine.Color();
                    this.Background = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(94, 240, 253, 255));
                    this.Rotation = new pc.Quat().setFromEulerAngles_Unity( 38.0, -45.0, 0.0 );
                    this.Distance = 18.0;
                    this.IslandHalf = Playable.FieldConfig.IslandSize * Playable.FieldConfig.Spacing / 2.0;
                    this.ViewBottom = -0.18;
                    this.ViewTop = 2.6;
                    this.Margin = 0.3;
                    this.DeadZone = 3.1;
                    this.FollowSpeed = 5.0;
                    this.ReturnSpeed = 2.0;
                    this.LightRotation = new pc.Quat().setFromEulerAngles_Unity( 50.0, -30.0, 0.0 );
                    this.LightIntensity = 1.3;
                    this.Ambient = new pc.Color( 0.45, 0.45, 0.45, 1 );
                }
            }
        }
    });
    /*Playable.CameraConfig end.*/

    /*Playable.CameraRig start.*/
    /**
     * The original's camera and its CameraFollow. Orthographic, isometric, sized every frame so the
     island box of {@link } fits the screen in portrait and in landscape alike. It
     watches {@link }: farther than DeadZone from {@link } on the ground it follows the target
     at FollowSpeed, otherwise it drifts back to the centre at ReturnSpeed; its height never changes.
     While it {@link }s a set of boxes (the island change: the beaver and the new island) it shows those
     instead, zooming out as far as they need, and zooms back at {@link }.
     *
     * @public
     * @class Playable.CameraRig
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.CameraRig", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Playable.CameraRig.PositionFor:static start.*/
                /**
                 * Where the camera stands to look at <b />: at the middle height of the
                 island box, so the box sits in the middle of the screen.
                 *
                 * @static
                 * @public
                 * @this Playable.CameraRig
                 * @memberof Playable.CameraRig
                 * @param   {UnityEngine.Vector3}    focus
                 * @return  {UnityEngine.Vector3}
                 */
                PositionFor: function (focus) {
if ( TRACE ) { TRACE( "Playable.CameraRig#PositionFor", this ); }

                    var look = new pc.Vec3( focus.x, (Playable.CameraConfig.ViewBottom + Playable.CameraConfig.ViewTop) / 2.0, focus.z );
                    return look.$clone().sub( Playable.CameraConfig.Rotation.transformVector( new pc.Vec3( 0, 0, 1 ) ).clone().scale( Playable.CameraConfig.Distance ) );
                },
                /*Playable.CameraRig.PositionFor:static end.*/

                /*Playable.CameraRig.FitSize:static start.*/
                /**
                 * The orthographic size that shows the island box plus the margin at this aspect
                 (width / height): the box's widest reach along the camera's right and up axes.
                 *
                 * @static
                 * @public
                 * @this Playable.CameraRig
                 * @memberof Playable.CameraRig
                 * @param   {number}    aspect
                 * @return  {number}
                 */
                FitSize: function (aspect) {
if ( TRACE ) { TRACE( "Playable.CameraRig#FitSize", this ); }

                    var half = new pc.Vec3( Playable.CameraConfig.IslandHalf, (Playable.CameraConfig.ViewTop - Playable.CameraConfig.ViewBottom) / 2.0, Playable.CameraConfig.IslandHalf );
                    var right = Playable.CameraRig.Reach(Playable.CameraConfig.Rotation.transformVector( pc.Vec3.RIGHT.clone() ), half.$clone()) + Playable.CameraConfig.Margin;
                    var up = Playable.CameraRig.Reach(Playable.CameraConfig.Rotation.transformVector( pc.Vec3.UP.clone() ), half.$clone()) + Playable.CameraConfig.Margin;
                    return UnityEngine.Mathf.Max(up, right / aspect);
                },
                /*Playable.CameraRig.FitSize:static end.*/

                /*Playable.CameraRig.Fit:static start.*/
                /**
                 * Where the camera stands, and its size, to show <b /> with Margin round them inside
                 the lower <b /> share of a screen of this aspect: the boxes' corners' reach along the camera's
                 right and up axes. In the screen's middle when that leaves the top share free, else just under it.
                 *
                 * @static
                 * @public
                 * @this Playable.CameraRig
                 * @memberof Playable.CameraRig
                 * @param   {Array.<UnityEngine.Bounds>}    boxes     
                 * @param   {number}                        top       
                 * @param   {number}                        aspect    
                 * @param   {System.Single}                 size
                 * @return  {UnityEngine.Vector3}
                 */
                Fit: function (boxes, top, aspect, size) {
if ( TRACE ) { TRACE( "Playable.CameraRig#Fit", this ); }

                    var $t;
                    var right = Playable.CameraConfig.Rotation.transformVector( pc.Vec3.RIGHT.clone() ), up = Playable.CameraConfig.Rotation.transformVector( pc.Vec3.UP.clone() );
                    var x0 = 3.40282347E+38, x1 = -3.40282347E+38, y0 = 3.40282347E+38, y1 = -3.40282347E+38;
                    $t = Bridge.getEnumerator(boxes);
                    try {
                        while ($t.moveNext()) {
                            var box = $t.Current;
                            for (var i = 0; i < 8; i = (i + 1) | 0) {
                                var corner = box.center.$clone().add( new pc.Vec3().mul2( box.halfExtents, new pc.Vec3( i & 1, (i >> 1) & 1, (i >> 2) & 1 ).clone().scale( 2.0 ).sub( new pc.Vec3( 1, 1, 1 ) ) ) );
                                var x = corner.dot( right ), y = corner.dot( up );
                                x0 = UnityEngine.Mathf.Min(x0, x);
                                x1 = UnityEngine.Mathf.Max(x1, x);
                                y0 = UnityEngine.Mathf.Min(y0, y);
                                y1 = UnityEngine.Mathf.Max(y1, y);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    size.v = UnityEngine.Mathf.Max(((x1 - x0) / 2.0 + Playable.CameraConfig.Margin) / aspect, ((y1 - y0) / 2.0 + Playable.CameraConfig.Margin) / top);
                    var middle = UnityEngine.Mathf.Max((y0 + y1) / 2.0, y1 + Playable.CameraConfig.Margin - size.v * (2.0 * top - 1.0));
                    return right.$clone().clone().scale( ((x0 + x1) / 2.0) ).add( up.$clone().clone().scale( middle ) ).sub( Playable.CameraConfig.Rotation.transformVector( new pc.Vec3( 0, 0, 1 ) ).clone().scale( Playable.CameraConfig.Distance ) );
                },
                /*Playable.CameraRig.Fit:static end.*/

                /*Playable.CameraRig.Reach:static start.*/
                Reach: function (axis, half) {
if ( TRACE ) { TRACE( "Playable.CameraRig#Reach", this ); }

                    return Math.abs(axis.x) * half.x + Math.abs(axis.y) * half.y + Math.abs(axis.z) * half.z;
                },
                /*Playable.CameraRig.Reach:static end.*/


            }
        },
        fields: {
            target: null,
            view: null,
            framed: null,
            framedTop: 0,
            framedSize: 0,
            zoom: 0,
            /**
             * The island the camera rests on, the world origin at first; the island change moves it
             [the original's UpdateCenter].
             *
             * @instance
             * @public
             * @memberof Playable.CameraRig
             * @function Centre
             * @type UnityEngine.Vector3
             */
            Centre: null
        },
        props: {
            Target: {
                get: function () {
if ( TRACE ) { TRACE( "Playable.CameraRig#Target#get", this ); }

                    return this.target;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Playable.CameraRig#Target#set", this ); }

                    this.target = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.CameraRig#init", this ); }

                this.Centre = new UnityEngine.Vector3();
                this.framed = System.Array.init(0, function (){
                    return new UnityEngine.Bounds();
                }, UnityEngine.Bounds);
                this.framedTop = 1.0;
            }
        },
        methods: {
            /*Playable.CameraRig.Frame start.*/
            /**
             * Keeps these world boxes on screen, with Margin round them, inside the screen's lower
             <b /> share (the rest is the banner's) — instead of the island box round Centre.
             *
             * @instance
             * @public
             * @this Playable.CameraRig
             * @memberof Playable.CameraRig
             * @param   {Array.<UnityEngine.Bounds>}    boxes    
             * @param   {number}                        top
             * @return  {void}
             */
            Frame: function (boxes, top) {
if ( TRACE ) { TRACE( "Playable.CameraRig#Frame", this ); }

                this.framed = boxes;
                this.framedTop = top;
            },
            /*Playable.CameraRig.Frame end.*/

            /*Playable.CameraRig.Follow start.*/
            /**
             * Back to the island box round Centre, following Target, at the island's scale.
             *
             * @instance
             * @public
             * @this Playable.CameraRig
             * @memberof Playable.CameraRig
             * @return  {void}
             */
            Follow: function () {
if ( TRACE ) { TRACE( "Playable.CameraRig#Follow", this ); }

                this.framed = System.Array.init(0, function (){
                    return new UnityEngine.Bounds();
                }, UnityEngine.Bounds);
            },
            /*Playable.CameraRig.Follow end.*/

            /*Playable.CameraRig.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.CameraRig#Awake", this ); }

                this.view = this.GetComponent(UnityEngine.Camera);
                this.transform.SetPositionAndRotation(Playable.CameraRig.PositionFor(this.Centre), Playable.CameraConfig.Rotation);
                this.view.orthographicSize = Playable.CameraRig.FitSize(this.view.aspect);
            },
            /*Playable.CameraRig.Awake end.*/

            /*Playable.CameraRig.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Playable.CameraRig#LateUpdate", this ); }

                var framing = this.framed.length > 0;
                var speed = Playable.CameraConfig.ReturnSpeed;
                var goal = this.transform.position.$clone();
                if (framing) {
                    goal = Playable.CameraRig.Fit(this.framed, this.framedTop, this.view.aspect, Bridge.ref(this, "framedSize"));
                } else if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    var offset = this.target.position.$clone().sub( this.Centre );
                    offset.y = 0.0; // on the ground: a hop's height near the rim would nudge the camera otherwise
                    var away = offset.length() > Playable.CameraConfig.DeadZone;
                    if (away) {
                        speed = Playable.CameraConfig.FollowSpeed;
                    }
                    goal = Playable.CameraRig.PositionFor(away ? this.target.position.$clone() : this.Centre.$clone());
                }

                var zoomTo = framing ? 1.0 : 0.0;
                this.zoom = pc.math.lerp(this.zoom, zoomTo, UnityEngine.Time.deltaTime * Playable.CameraConfig.ReturnSpeed);
                if (Math.abs(this.zoom - zoomTo) < 0.01) {
                    this.zoom = zoomTo;
                } // the last hundredth: a pixel or two at the screen's edge
                this.view.orthographicSize = pc.math.lerp(Playable.CameraRig.FitSize(this.view.aspect), this.framedSize, this.zoom); // the screen may have turned
                this.transform.position = new pc.Vec3().lerp( this.transform.position, goal, UnityEngine.Time.deltaTime * speed );
            },
            /*Playable.CameraRig.LateUpdate end.*/


        }
    });
    /*Playable.CameraRig end.*/

    /*Playable.Ease start.*/
    Bridge.define("Playable.Ease", {
        $kind: 6,
        statics: {
            fields: {
                Linear: 0,
                InQuad: 1,
                OutQuad: 2,
                InOutQuad: 3
            }
        }
    });
    /*Playable.Ease end.*/

    /*Playable.EndCard start.*/
    /**
     * The end card. On {@link } — won, or fallen — or on {@link },
     whichever comes first, once: gameplay input closes for good, what the card covers goes (INSTALL among it: the card
     is the CTA now, and one tap must open the store once), the network hears the game ended, and the card comes in —
     the overlay fades in, the window scales in. Once it is in, a tap anywhere opens the store, through
     {@link } like INSTALL's taps, and PLAY NOW pulses; a tap during the entry, meant for the
     game, opens nothing. Its objects are scene objects the scene builder made (EndCardScene), the card inactive.
     *
     * @public
     * @class Playable.EndCard
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.EndCard", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Playable.EndCard.Pulse:static start.*/
                /**
                 * 1 at the start of each beat, PulseScale in its middle, smooth at both ends.
                 *
                 * @static
                 * @private
                 * @this Playable.EndCard
                 * @memberof Playable.EndCard
                 * @param   {number}    seconds
                 * @return  {number}
                 */
                Pulse: function (seconds) {
if ( TRACE ) { TRACE( "Playable.EndCard#Pulse", this ); }

                    return 1.0 + (Playable.EndCardConfig.PulseScale - 1.0) * (1.0 - Math.cos(6.28318548 * seconds / Playable.EndCardConfig.PulseSeconds)) / 2.0;
                },
                /*Playable.EndCard.Pulse:static end.*/


            }
        },
        fields: {
            hop: null,
            plates: null,
            covered: null,
            overlay: null,
            window: null,
            title: null,
            score: null,
            playNow: null,
            pulseStart: 0,
            /**
             * The card is up, coming in or in.
             *
             * @instance
             * @public
             * @memberof Playable.EndCard
             * @function Shown
             * @type boolean
             */
            Shown: false,
            /**
             * The card is in: a tap opens the store.
             *
             * @instance
             * @public
             * @memberof Playable.EndCard
             * @function Tappable
             * @type boolean
             */
            Tappable: false
        },
        methods: {
            /*Playable.EndCard.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.EndCard#OnEnable", this ); }

                Playable.GameFlow.addEnded(Bridge.fn.cacheBind(this, this.OnEnded));
                Playable.Tutorial.addIdleTimedOut(Bridge.fn.cacheBind(this, this.OnIdle));
                Playable.PlayableInput.addTapped(Bridge.fn.cacheBind(this, this.OnTap));
            },
            /*Playable.EndCard.OnEnable end.*/

            /*Playable.EndCard.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.EndCard#OnDisable", this ); }

                Playable.GameFlow.removeEnded(Bridge.fn.cacheBind(this, this.OnEnded));
                Playable.Tutorial.removeIdleTimedOut(Bridge.fn.cacheBind(this, this.OnIdle));
                Playable.PlayableInput.removeTapped(Bridge.fn.cacheBind(this, this.OnTap));
            },
            /*Playable.EndCard.OnDisable end.*/

            /*Playable.EndCard.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.EndCard#Update", this ); }

                if (this.Tappable) {
                    this.playNow.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.EndCard.Pulse(UnityEngine.Time.time - this.pulseStart) );
                }
            },
            /*Playable.EndCard.Update end.*/

            /*Playable.EndCard.OnEnded start.*/
            OnEnded: function (won, points) {
if ( TRACE ) { TRACE( "Playable.EndCard#OnEnded", this ); }

                this.Show(won ? Playable.EndCardConfig.WinTitle : Playable.EndCardConfig.FellTitle, points);
            },
            /*Playable.EndCard.OnEnded end.*/

            /*Playable.EndCard.OnIdle start.*/
            OnIdle: function () {
if ( TRACE ) { TRACE( "Playable.EndCard#OnIdle", this ); }

                this.Show(Playable.EndCardConfig.IdleTitle, this.plates.Field.Score);
            },
            /*Playable.EndCard.OnIdle end.*/

            /*Playable.EndCard.OnTap start.*/
            OnTap: function (screen) {
if ( TRACE ) { TRACE( "Playable.EndCard#OnTap", this ); }

                if (this.Tappable) {
                    Playable.PlayableAd.Install();
                }
            },
            /*Playable.EndCard.OnTap end.*/

            /*Playable.EndCard.Show start.*/
            Show: function (heading, points) {
if ( TRACE ) { TRACE( "Playable.EndCard#Show", this ); }

                var $t;
                if (this.Shown) {
                    return;
                }
                this.Shown = true;
                this.hop.CloseInput();
                $t = Bridge.getEnumerator(this.covered);
                try {
                    while ($t.moveNext()) {
                        var part = $t.Current;
                        part.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.title.text = heading;
                this.score.text = Bridge.toString(points);

                var full = Playable.EndCardConfig.Overlay.$clone();
                this.overlay.color = new pc.Color( full.r, full.g, full.b, 0.0 );
                this.overlay.gameObject.SetActive(true);
                Playable.Tween.Value(this, Playable.EndCardConfig.FadeSeconds, Bridge.fn.bind(this, function (t) {
                    this.overlay.color = new pc.Color( full.r, full.g, full.b, full.a * t );
                }));
                this.window.localScale = pc.Vec3.ZERO.clone();
                Playable.Tween.Scale(this.window, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.EndCardConfig.Overshoot ), Playable.EndCardConfig.ScaleUpSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Scale(this.window, new pc.Vec3( 1, 1, 1 ), Playable.EndCardConfig.ScaleDownSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                        this.Tappable = true;
                        this.pulseStart = UnityEngine.Time.time;
                    }));
                }));
                Playable.PlayableAd.GameEnded();
            },
            /*Playable.EndCard.Show end.*/


        }
    });
    /*Playable.EndCard end.*/

    /*Playable.EndCardConfig start.*/
    /**
     * The end card; the original's GameOverPanel values in brackets. Layout in canvas units (1080×1920
     reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either orientation, whose short side is about 980
     units — the window fits it with room for its overshoot.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.EndCardConfig
     */
    Bridge.define("Playable.EndCardConfig", {
        statics: {
            fields: {
                /**
                 * Each ending's title, on two lines so that it can be large: Benzin is wide, and on one line the
                 longest would shrink to about half this size in the window [the original's defeat causes, #FFC183, 45,
                 under the score].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @default "YOU\nMADE IT!"
                 * @type string
                 */
                WinTitle: null,
                FellTitle: null,
                IdleTitle: null,
                PlayNow: null,
                /**
                 * Over the whole screen, the original's lighter orange, translucent: the game shows through, the card
                 is what is tapped [#FFAE51 at 65 %, which over the cyan turns olive].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @type UnityEngine.Color
                 */
                Overlay: null,
                /**
                 * The white window in the middle [677 × 739, white, framed] ...
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @type UnityEngine.Vector2
                 */
                WindowSize: null,
                Window: null,
                /**
                 * ... holds, top to bottom, the title, the score and PLAY NOW; centres from the window's centre, text in
                 Benzin in the original's darker orange [the score #FF9731, 100–200, at +206; the restart button #FF9731,
                 300 × 114, at −226, "еще раз" white, 42].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @type UnityEngine.Vector2
                 */
                TitleAt: null,
                TitleBox: null,
                TitleSize: 0,
                ScoreAt: null,
                ScoreBox: null,
                ScoreSize: 0,
                Ink: null,
                PlayNowAt: null,
                PlayNowSize: null,
                PlayNowFontSize: 0,
                PlayNowPanel: null,
                PlayNowInk: null,
                /**
                 * It comes in: the overlay fades in over FadeSeconds while the window scales 0 → Overshoot over
                 ScaleUpSeconds, then to 1 over ScaleDownSeconds. Only then does a tap open the store, so a tap meant for the
                 game cannot [shown at once].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @default 0.3
                 * @type number
                 */
                FadeSeconds: 0,
                Overshoot: 0,
                ScaleUpSeconds: 0,
                ScaleDownSeconds: 0,
                /**
                 * Once in, PLAY NOW pulses up to PulseScale and back every PulseSeconds: a frame pair 0.4 s apart
                 catches it at different sizes.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.EndCardConfig
                 * @default 1.08
                 * @type number
                 */
                PulseScale: 0,
                PulseSeconds: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.EndCardConfig#init", this ); }

                    this.Overlay = new UnityEngine.Color();
                    this.WindowSize = new UnityEngine.Vector2();
                    this.Window = new UnityEngine.Color();
                    this.TitleAt = new UnityEngine.Vector2();
                    this.TitleBox = new UnityEngine.Vector2();
                    this.ScoreAt = new UnityEngine.Vector2();
                    this.ScoreBox = new UnityEngine.Vector2();
                    this.Ink = new UnityEngine.Color();
                    this.PlayNowAt = new UnityEngine.Vector2();
                    this.PlayNowSize = new UnityEngine.Vector2();
                    this.PlayNowPanel = new UnityEngine.Color();
                    this.PlayNowInk = new UnityEngine.Color();
                    this.WinTitle = "YOU\nMADE IT!";
                    this.FellTitle = "OOPS,\nYOU FELL!";
                    this.IdleTitle = "TRY IT\nYOURSELF!";
                    this.PlayNow = "PLAY NOW";
                    this.Overlay = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(243, 171, 66, 217));
                    this.WindowSize = new pc.Vec2( 760.0, 740.0 );
                    this.Window = new pc.Color( 1, 1, 1, 1 );
                    this.TitleAt = new pc.Vec2( 0.0, 210.0 );
                    this.TitleBox = new pc.Vec2( 680.0, 240.0 );
                    this.TitleSize = 84.0;
                    this.ScoreAt = new pc.Vec2( 0.0, -30.0 );
                    this.ScoreBox = new pc.Vec2( 680.0, 200.0 );
                    this.ScoreSize = 150.0;
                    this.Ink = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 151, 49, 255));
                    this.PlayNowAt = new pc.Vec2( 0.0, -245.0 );
                    this.PlayNowSize = new pc.Vec2( 580.0, 150.0 );
                    this.PlayNowFontSize = 60.0;
                    this.PlayNowPanel = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 151, 49, 255));
                    this.PlayNowInk = new pc.Color( 1, 1, 1, 1 );
                    this.FadeSeconds = 0.3;
                    this.Overshoot = 1.1;
                    this.ScaleUpSeconds = 0.3;
                    this.ScaleDownSeconds = 0.2;
                    this.PulseScale = 1.08;
                    this.PulseSeconds = 1.0;
                }
            }
        }
    });
    /*Playable.EndCardConfig end.*/

    /*Playable.Field start.*/
    /**
     * The field's rules, ported from the original's TileSpawner and PlayerController:
     plates on a grid, the beaver on one of them, hops, traps, the island change and the win.
     No time in here: a hop resolves at once and the views play it afterwards. Everything random
     comes from the seed, so the same seed gives the same field.
     *
     * @public
     * @class Playable.Field
     */
    Bridge.define("Playable.Field", {
        statics: {
            fields: {
                Steps: null,
                Around: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.Field#init", this ); }

                    this.Steps = System.Array.init([
                        UnityEngine.Vector2Int.up.$clone(), 
                        UnityEngine.Vector2Int.right.$clone(), 
                        UnityEngine.Vector2Int.down.$clone(), 
                        UnityEngine.Vector2Int.left.$clone()
                    ], UnityEngine.Vector2Int);
                    this.Around = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(-1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1), 
                        new UnityEngine.Vector2Int.$ctor1(1, 1)
                    ], UnityEngine.Vector2Int);
                }
            },
            methods: {
                /*Playable.Field.Facing:static start.*/
                /**
                 * The step of a beaver turned to <b />, the nearest of the four.
                 Unity's yaw: 0 faces world +z (grid +y), 90 faces world +x (grid +x).
                 *
                 * @static
                 * @public
                 * @this Playable.Field
                 * @memberof Playable.Field
                 * @param   {number}                    yawDegrees
                 * @return  {UnityEngine.Vector2Int}
                 */
                Facing: function (yawDegrees) {
if ( TRACE ) { TRACE( "Playable.Field#Facing", this ); }

                    var quarter = Bridge.Int.clip32(Math.floor(yawDegrees / 90.0 + 0.5)) % 4;
                    return Playable.Field.Steps[quarter < 0 ? ((quarter + 4) | 0) : quarter].$clone();
                },
                /*Playable.Field.Facing:static end.*/

                /*Playable.Field.Island:static start.*/
                Island: function (centre) {
if ( TRACE ) { TRACE( "Playable.Field#Island", this ); }

                    var rim = (Bridge.Int.div(Playable.FieldConfig.IslandSize, 2)) | 0;
                    var cells = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                    for (var y = (-rim) | 0; y <= rim; y = (y + 1) | 0) {
                        for (var x = (-rim) | 0; x <= rim; x = (x + 1) | 0) {
                            cells.add(UnityEngine.Vector2Int.op_Addition(centre.$clone(), new UnityEngine.Vector2Int.$ctor1(x, y)));
                        }
                    }
                    return cells;
                },
                /*Playable.Field.Island:static end.*/


            }
        },
        fields: {
            rng: null,
            plates: null,
            newIsland: null,
            /**
             * The beaver's cell; it starts in the centre, (0, 0).
             *
             * @instance
             * @public
             * @memberof Playable.Field
             * @function Beaver
             * @type UnityEngine.Vector2Int
             */
            Beaver: null,
            /**
             * +1 per safe landing. Any other landing ends the game, so this also counts the hops.
             *
             * @instance
             * @public
             * @memberof Playable.Field
             * @function Score
             * @type number
             */
            Score: 0,
            Objective: 0,
            /**
             * Null until the island changes, which happens once.
             *
             * @instance
             * @public
             * @memberof Playable.Field
             * @function Change
             * @type Playable.IslandChange
             */
            Change: null,
            Won: false,
            Lost: false
        },
        props: {
            Plates: {
                get: function () {
if ( TRACE ) { TRACE( "Playable.Field#Plates#get", this ); }

                    return this.plates.Keys;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.Field#init", this ); }

                this.Beaver = new UnityEngine.Vector2Int();
                this.plates = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector2Int,System.Boolean)).ctor();
                this.newIsland = new (System.Collections.Generic.HashSet$1(UnityEngine.Vector2Int)).ctor();
            },
            ctor: function (seed) {
if ( TRACE ) { TRACE( "Playable.Field#ctor", this ); }

                var $t, $t1;
                this.$initialize();
                this.rng = new System.Random.$ctor1(seed);
                var rim = (Bridge.Int.div(Playable.FieldConfig.IslandSize, 2)) | 0;
                var ring = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                $t = Bridge.getEnumerator(Playable.Field.Island(UnityEngine.Vector2Int.zero));
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current.$clone();
                        this.plates.setItem(cell, false);
                        if (Math.max(Math.abs(cell.x), Math.abs(cell.y)) === rim) {
                            ring.add(cell.$clone());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // Traps only on the outer ring, never next to each other (diagonals included): the beaver
                // starts in the centre, so the first hop is always safe.
                var traps = this.rng.Next$2(Playable.FieldConfig.TrapsMin, ((Playable.FieldConfig.TrapsMax + 1) | 0));
                for (var i = (ring.Count - 1) | 0; i > 0; i = (i - 1) | 0) {
                    var j = this.rng.Next$1(((i + 1) | 0));
                    var swap = ring.getItem(i).$clone();
                    ring.setItem(i, ring.getItem(j).$clone());
                    ring.setItem(j, swap.$clone());
                }
                $t1 = Bridge.getEnumerator(ring);
                try {
                    while ($t1.moveNext()) {
                        var cell1 = $t1.Current.$clone();
                        if (traps === 0) {
                            break;
                        }
                        if (this.TrapAround(cell1)) {
                            continue;
                        }
                        this.plates.setItem(cell1, true);
                        traps = (traps - 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            /*Playable.Field.OutcomeAt start.*/
            OutcomeAt: function (cell) {
if ( TRACE ) { TRACE( "Playable.Field#OutcomeAt", this ); }

                var trap = { };
                if (!this.plates.tryGetValue(cell.$clone(), trap)) {
                    return Playable.HopOutcome.Void;
                }
                return trap.v ? Playable.HopOutcome.Trap : Playable.HopOutcome.Safe;
            },
            /*Playable.Field.OutcomeAt end.*/

            /*Playable.Field.IsTrap start.*/
            IsTrap: function (cell) {
if ( TRACE ) { TRACE( "Playable.Field#IsTrap", this ); }

                return this.OutcomeAt(cell) === Playable.HopOutcome.Trap;
            },
            /*Playable.Field.IsTrap end.*/

            /*Playable.Field.PlatesAround start.*/
            /**
             * Plates, traps included, in the 8 cells around <b />.
             *
             * @instance
             * @public
             * @this Playable.Field
             * @memberof Playable.Field
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {number}
             */
            PlatesAround: function (cell) {
if ( TRACE ) { TRACE( "Playable.Field#PlatesAround", this ); }

                var $t;
                var count = 0;
                $t = Bridge.getEnumerator(Playable.Field.Around);
                try {
                    while ($t.moveNext()) {
                        var offset = $t.Current.$clone();
                        if (this.plates.containsKey(UnityEngine.Vector2Int.op_Addition(cell.$clone(), offset.$clone()))) {
                            count = (count + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return count;
            },
            /*Playable.Field.PlatesAround end.*/

            /*Playable.Field.Hop start.*/
            /**
             * One hop of one step. The plate left goes at once. A safe landing scores 1, then wins on the
             new island or may change the island; a trap or the void ends the game (the trap plate stays:
             the view drops it with the beaver).
             *
             * @instance
             * @public
             * @this Playable.Field
             * @memberof Playable.Field
             * @param   {UnityEngine.Vector2Int}    step
             * @return  {Playable.HopOutcome}
             */
            Hop: function (step) {
if ( TRACE ) { TRACE( "Playable.Field#Hop", this ); }

                if (this.Won || this.Lost) {
                    throw new System.InvalidOperationException.$ctor1("The game is over.");
                }
                if (((Math.abs(step.x) + Math.abs(step.y)) | 0) !== 1) {
                    throw new System.ArgumentException.$ctor3("A hop is one step in one of four directions.", "step");
                }

                this.plates.remove(this.Beaver.$clone());
                this.Beaver = UnityEngine.Vector2Int.op_Addition(this.Beaver.$clone(), step.$clone());
                var outcome = this.OutcomeAt(this.Beaver);
                if (outcome !== Playable.HopOutcome.Safe) {
                    this.Lost = true;
                    return outcome;
                }

                this.Score = (this.Score + 1) | 0;
                if (this.Change != null) {
                    this.Won = this.newIsland.contains(this.Beaver.$clone());
                    return outcome;
                }
                if (this.Score >= Playable.FieldConfig.ObjectiveHop) {
                    this.Objective = Playable.Objective.LeaveTwo;
                }
                // With no safe hop left the beaver could only fall, through no fault of the player's:
                // that changes the island too.
                if (this.PlatesAround(this.Beaver) <= Playable.FieldConfig.ChangeAtPlatesAround || this.Score >= Playable.FieldConfig.ChangeAtHop || !this.SafeHopLeft()) {
                    this.ChangeIsland();
                }
                return outcome;
            },
            /*Playable.Field.Hop end.*/

            /*Playable.Field.ChangeIsland start.*/
            ChangeIsland: function () {
if ( TRACE ) { TRACE( "Playable.Field#ChangeIsland", this ); }

                var $t, $t1, $t2;
                var ahead = Playable.FieldConfig.UpScreen[this.rng.Next$1(Playable.FieldConfig.UpScreen.length)].$clone();
                var side = new UnityEngine.Vector2Int.$ctor1(((-ahead.y) | 0), ahead.x);
                var change = new Playable.IslandChange(ahead.$clone(), UnityEngine.Vector2Int.op_Addition(this.Beaver.$clone(), UnityEngine.Vector2Int.op_Multiply(ahead.$clone(), Playable.FieldConfig.NewIslandDistance)));

                // Every old plate goes except the beaver's and its 4 neighbours [as in the original].
                $t = Bridge.getEnumerator(this.plates.Keys);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current.$clone();
                        var d = UnityEngine.Vector2Int.op_Subtraction(cell.$clone(), this.Beaver.$clone());
                        if (((Math.abs(d.x) + Math.abs(d.y)) | 0) > 1) {
                            change.Removed.add(cell.$clone());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(change.Removed);
                try {
                    while ($t1.moveNext()) {
                        var cell1 = $t1.Current.$clone();
                        this.plates.remove(cell1.$clone());
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                // The bridge fills the rows up to the new island and replaces the + plate in front [as in
                // the original]. Its first plate straight ahead is never a trap: with fewer traps than the
                // bridge is wide, a safe path then always runs across.
                var rows = (((Playable.FieldConfig.NewIslandDistance - ((Bridge.Int.div(Playable.FieldConfig.IslandSize, 2)) | 0)) | 0) - 1) | 0;
                var half = (Bridge.Int.div(Playable.FieldConfig.BridgeWidth, 2)) | 0;
                var traps = 0;
                for (var row = 1; row <= rows; row = (row + 1) | 0) {
                    var rowTraps = 0;
                    for (var col = (-half) | 0; col <= half; col = (col + 1) | 0) {
                        var cell2 = UnityEngine.Vector2Int.op_Addition(UnityEngine.Vector2Int.op_Addition(this.Beaver.$clone(), UnityEngine.Vector2Int.op_Multiply(ahead.$clone(), row)), UnityEngine.Vector2Int.op_Multiply(side.$clone(), col));
                        var entry = row === 1 && col === 0;
                        var trap = !entry && traps < Playable.FieldConfig.BridgeTrapsMax && rowTraps < ((Playable.FieldConfig.BridgeWidth - 1) | 0) && this.rng.NextDouble() < Playable.FieldConfig.BridgeTrapChance;
                        if (trap) {
                            traps = (traps + 1) | 0;
                            rowTraps = (rowTraps + 1) | 0;
                        }
                        if (this.plates.containsKey(cell2.$clone())) {
                            change.Removed.add(cell2.$clone());
                        }
                        this.plates.setItem(cell2, trap);
                        change.Bridge.add(cell2.$clone());
                    }
                }

                $t2 = Bridge.getEnumerator(Playable.Field.Island(change.NewCentre));
                try {
                    while ($t2.moveNext()) {
                        var cell3 = $t2.Current.$clone();
                        this.plates.setItem(cell3, false);
                        this.newIsland.add(cell3.$clone());
                        change.NewIsland.add(cell3.$clone());
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
                this.Objective = Playable.Objective.CrossBridge;
                this.Change = change;
            },
            /*Playable.Field.ChangeIsland end.*/

            /*Playable.Field.TrapAround start.*/
            TrapAround: function (cell) {
if ( TRACE ) { TRACE( "Playable.Field#TrapAround", this ); }

                var $t;
                $t = Bridge.getEnumerator(Playable.Field.Around);
                try {
                    while ($t.moveNext()) {
                        var offset = $t.Current.$clone();
                        if (this.IsTrap(UnityEngine.Vector2Int.op_Addition(cell.$clone(), offset.$clone()))) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*Playable.Field.TrapAround end.*/

            /*Playable.Field.SafeHopLeft start.*/
            SafeHopLeft: function () {
if ( TRACE ) { TRACE( "Playable.Field#SafeHopLeft", this ); }

                var $t;
                $t = Bridge.getEnumerator(Playable.Field.Steps);
                try {
                    while ($t.moveNext()) {
                        var step = $t.Current.$clone();
                        if (this.OutcomeAt(UnityEngine.Vector2Int.op_Addition(this.Beaver.$clone(), step.$clone())) === Playable.HopOutcome.Safe) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*Playable.Field.SafeHopLeft end.*/


        }
    });
    /*Playable.Field end.*/

    /*Playable.FieldConfig start.*/
    /**
     * The field's numbers, tuned for a 22-second ad; the original's values in brackets.
     Cell (x, y) sits at world (x · Spacing, 0, y · Spacing), as in the original.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.FieldConfig
     */
    Bridge.define("Playable.FieldConfig", {
        statics: {
            fields: {
                /**
                 * The playable's field: three traps on the rim, and two on the bridge, one each side of its
                 straight line across, for the ad's near miss (FieldTests pins the bridge traps).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 5
                 * @type number
                 */
                Seed: 0,
                /**
                 * An island is IslandSize × IslandSize plates [7].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 5
                 * @type number
                 */
                IslandSize: 0,
                /**
                 * World distance between neighbouring plates [1.1].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 1.1
                 * @type number
                 */
                Spacing: 0,
                /**
                 * The first island's traps: this many, on its outer ring, never next to each other
                 [0.25 chance per plate, up to 8, anywhere].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 2
                 * @type number
                 */
                TrapsMin: 0,
                TrapsMax: 0,
                /**
                 * The objective text appears after this hop.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 3
                 * @type number
                 */
                ObjectiveHop: 0,
                /**
                 * The island changes when at most this many plates, traps included, are left around the
                 beaver [3 counting its own but no traps, once 19 plates are gone] ...
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 2
                 * @type number
                 */
                ChangeAtPlatesAround: 0,
                /**
                 * ... or on this hop, whichever comes first [no cap].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 6
                 * @type number
                 */
                ChangeAtHop: 0,
                /**
                 * The new island's centre, in cells from the beaver [7].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 6
                 * @type number
                 */
                NewIslandDistance: 0,
                /**
                 * The grid directions that run up the screen under the original's camera (yaw −45°):
                 +y up and to the right, −x up and to the left. The new island goes one of them.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @type Array.<UnityEngine.Vector2Int>
                 */
                UpScreen: null,
                /**
                 * The bridge is this many plates wide [3]; its rows fill the gap to the new island.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 3
                 * @type number
                 */
                BridgeWidth: 0,
                /**
                 * Bridge traps: this chance per plate [0.125], at most BridgeTrapsMax, never a whole row.
                 BridgeTrapsMax below BridgeWidth is what keeps a safe path across.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FieldConfig
                 * @default 0.125
                 * @type number
                 */
                BridgeTrapChance: 0,
                BridgeTrapsMax: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.FieldConfig#init", this ); }

                    this.Seed = 5;
                    this.IslandSize = 5;
                    this.Spacing = 1.1;
                    this.TrapsMin = 2;
                    this.TrapsMax = 4;
                    this.ObjectiveHop = 3;
                    this.ChangeAtPlatesAround = 2;
                    this.ChangeAtHop = 6;
                    this.NewIslandDistance = 6;
                    this.UpScreen = System.Array.init([UnityEngine.Vector2Int.up.$clone(), UnityEngine.Vector2Int.left.$clone()], UnityEngine.Vector2Int);
                    this.BridgeWidth = 3;
                    this.BridgeTrapChance = 0.125;
                    this.BridgeTrapsMax = 2;
                }
            }
        }
    });
    /*Playable.FieldConfig end.*/

    /*Playable.FlowConfig start.*/
    /**
     * The game's flow: the objective banner, the island change and the end; the original's values in
     brackets. Layout in canvas units (1080×1920 reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either
     orientation.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.FlowConfig
     */
    Bridge.define("Playable.FlowConfig", {
        statics: {
            fields: {
                /**
                 * The objectives' texts [the original's NoMoves and CrossBridge tasks: "Leave only two tiles around you",
                 "Cross the bridge with traps"].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default "LEAVE ONLY 2 TILES AROUND YOU!"
                 * @type string
                 */
                LeaveTwoText: null,
                CrossBridgeText: null,
                /**
                 * The banner: Benzin in the original's darker orange on a white pill sized to the text, its centre at
                 BannerY of the screen's height — under INSTALL and the score in portrait, between them in landscape
                 [white text near the bottom of a portrait-only screen]. A line wraps past BannerWidth: the objective breaks
                 after "TILES".
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 0.82
                 * @type number
                 */
                BannerY: 0,
                BannerWidth: 0,
                BannerFontSize: 0,
                BannerPadding: null,
                BannerPanel: null,
                BannerText: null,
                /**
                 * Each objective scales in 0 → BannerOvershoot over BannerUpSeconds, then to 1 over BannerDownSeconds
                 [the original's TasksActivationAnimation].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 1.1
                 * @type number
                 */
                BannerOvershoot: 0,
                BannerUpSeconds: 0,
                BannerDownSeconds: 0,
                /**
                 * The old plates crumble in a wave: a plate starts this much later per cell of distance from the beaver
                 [all at once, with random durations].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 0.05
                 * @type number
                 */
                CrumbleStep: 0,
                /**
                 * The new island and the bridge pop in this long after the old plates start to crumble [0.5 s].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 0.5
                 * @type number
                 */
                NewIslandDelay: 0,
                /**
                 * From then until the win the camera frames the beaver and every plate left — the old island's, the
                 bridge, the whole new island — zooming out as far as they need, in this lower share of the screen's height:
                 above it is the banner's (its bottom edge at 0.77 of a landscape screen, 0.80 of a portrait one)
                 [UpdateCenter onto the new island, 7 cells off: CameraFollow kept the beaver in the middle and the new island
                 mostly off screen].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 0.74
                 * @type number
                 */
                CameraTop: 0,
                /**
                 * The win's end (GameFlow.Ended) comes this long after the landing on the new island: the landing's dip
                 and puff play before the end card [the original ended the match at once].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.FlowConfig
                 * @default 0.8
                 * @type number
                 */
                WinSeconds: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.FlowConfig#init", this ); }

                    this.BannerPadding = new UnityEngine.Vector2();
                    this.BannerPanel = new UnityEngine.Color();
                    this.BannerText = new UnityEngine.Color();
                    this.LeaveTwoText = "LEAVE ONLY 2 TILES AROUND YOU!";
                    this.CrossBridgeText = "CROSS THE BRIDGE!";
                    this.BannerY = 0.82;
                    this.BannerWidth = 860.0;
                    this.BannerFontSize = 48.0;
                    this.BannerPadding = new pc.Vec2( 40.0, 24.0 );
                    this.BannerPanel = new pc.Color( 1, 1, 1, 1 );
                    this.BannerText = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 151, 49, 255));
                    this.BannerOvershoot = 1.1;
                    this.BannerUpSeconds = 0.5;
                    this.BannerDownSeconds = 0.5;
                    this.CrumbleStep = 0.05;
                    this.NewIslandDelay = 0.5;
                    this.CameraTop = 0.74;
                    this.WinSeconds = 0.8;
                }
            }
        }
    });
    /*Playable.FlowConfig end.*/

    /*Playable.FlowState start.*/
    Bridge.define("Playable.FlowState", {
        $kind: 6,
        statics: {
            fields: {
                Hook: 0,
                Play: 1,
                Won: 2,
                Lost: 3
            }
        }
    });
    /*Playable.FlowState end.*/

    /*Playable.GameFlow start.*/
    /**
     * The game's flow: hook → play (the first hop) → won (a landing on the new island) or lost (a fall). It
     reads the field after every safe landing: the objective banner after the 3rd hop, the island change when the
     field has made one ({@link } plays it), the win.
     *
     * @public
     * @class Playable.GameFlow
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.GameFlow", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                /**
                 * The field changed the island at the landing just made; the transition starts.
                 *
                 * @static
                 * @public
                 * @this Playable.GameFlow
                 * @memberof Playable.GameFlow
                 * @function addIslandChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * The field changed the island at the landing just made; the transition starts.
                 *
                 * @static
                 * @public
                 * @this Playable.GameFlow
                 * @memberof Playable.GameFlow
                 * @function removeIslandChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                IslandChanged: null,
                /**
                 * The game is over, won or not, with the score: FlowConfig.WinSeconds after the winning landing, or once
                 a fall has played (PlateConfig.DropSeconds), so that what follows does not cover it.
                 *
                 * @static
                 * @public
                 * @this Playable.GameFlow
                 * @memberof Playable.GameFlow
                 * @function addEnded
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * The game is over, won or not, with the score: FlowConfig.WinSeconds after the winning landing, or once
                 a fall has played (PlateConfig.DropSeconds), so that what follows does not cover it.
                 *
                 * @static
                 * @public
                 * @this Playable.GameFlow
                 * @memberof Playable.GameFlow
                 * @function removeEnded
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Ended: null
            },
            methods: {
                /*Playable.GameFlow.End:static start.*/
                End: function (won, score) {
if ( TRACE ) { TRACE( "Playable.GameFlow#End", this ); }

                    if (!Bridge.staticEquals(Playable.GameFlow.Ended, null)) {
                        Playable.GameFlow.Ended(won, score);
                    }
                },
                /*Playable.GameFlow.End:static end.*/

                /*Playable.GameFlow.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.GameFlow#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.GameFlow.IslandChanged = null;
                    Playable.GameFlow.Ended = null;
                },
                /*Playable.GameFlow.ResetStatics:static end.*/


            }
        },
        fields: {
            plates: null,
            hop: null,
            transition: null,
            banner: null,
            State: 0
        },
        methods: {
            /*Playable.GameFlow.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.GameFlow#OnEnable", this ); }

                Playable.HopController.addHopStarted(Bridge.fn.cacheBind(this, this.OnHopStarted));
                Playable.HopController.addLanded(Bridge.fn.cacheBind(this, this.OnLanded));
                Playable.HopController.addFell(Bridge.fn.cacheBind(this, this.OnFell));
            },
            /*Playable.GameFlow.OnEnable end.*/

            /*Playable.GameFlow.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.GameFlow#OnDisable", this ); }

                Playable.HopController.removeHopStarted(Bridge.fn.cacheBind(this, this.OnHopStarted));
                Playable.HopController.removeLanded(Bridge.fn.cacheBind(this, this.OnLanded));
                Playable.HopController.removeFell(Bridge.fn.cacheBind(this, this.OnFell));
            },
            /*Playable.GameFlow.OnDisable end.*/

            /*Playable.GameFlow.OnHopStarted start.*/
            OnHopStarted: function () {
if ( TRACE ) { TRACE( "Playable.GameFlow#OnHopStarted", this ); }

                if (this.State === Playable.FlowState.Hook) {
                    this.State = Playable.FlowState.Play;
                }
            },
            /*Playable.GameFlow.OnHopStarted end.*/

            /*Playable.GameFlow.OnLanded start.*/
            /**
             * Before HopController opens input again, so a hold or a close here comes first.
             *
             * @instance
             * @private
             * @this Playable.GameFlow
             * @memberof Playable.GameFlow
             * @param   {UnityEngine.Vector2Int}    cell     
             * @param   {number}                    score
             * @return  {void}
             */
            OnLanded: function (cell, score) {
if ( TRACE ) { TRACE( "Playable.GameFlow#OnLanded", this ); }

                var field = this.plates.Field;
                if (field.Change == null) {
                    if (field.Objective === Playable.Objective.LeaveTwo) {
                        this.banner.Show(Playable.Objective.LeaveTwo);
                    }
                    return;
                }
                if (!this.transition.Started) {
                    this.transition.Play(field.Change, cell);
                    if (!Bridge.staticEquals(Playable.GameFlow.IslandChanged, null)) {
                        Playable.GameFlow.IslandChanged();
                    }
                    return;
                }
                this.transition.Landed(cell);
                if (!field.Won) {
                    return;
                }
                this.State = Playable.FlowState.Won;
                this.hop.CloseInput();
                Playable.Tween.Delay(this, Playable.FlowConfig.WinSeconds, function () {
                    Playable.GameFlow.End(true, score);
                });
            },
            /*Playable.GameFlow.OnLanded end.*/

            /*Playable.GameFlow.OnFell start.*/
            OnFell: function () {
if ( TRACE ) { TRACE( "Playable.GameFlow#OnFell", this ); }

                this.State = Playable.FlowState.Lost;
                var score = this.plates.Field.Score;
                Playable.Tween.Delay(this, Playable.PlateConfig.DropSeconds, function () {
                    Playable.GameFlow.End(false, score);
                });
            },
            /*Playable.GameFlow.OnFell end.*/


        }
    });
    /*Playable.GameFlow end.*/

    /*Playable.HopConfig start.*/
    /**
     * The beaver and the hop; the original's values in brackets. The landing dip and the fall are
     PlateConfig's Dip* and Drop*: the beaver moves with its plate.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.HopConfig
     */
    Bridge.define("Playable.HopConfig", {
        statics: {
            fields: {
                /**
                 * The beaver turns this fast, clockwise seen from above, while it stands on the island; the target
                 is the plate it faces, updated at once [90 °/s, the target changed only at each 90° boundary].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 120.0
                 * @type number
                 */
                TurnSpeed: 0,
                /**
                 * Its facing as it drops in: 0 faces grid +y, up the screen to the right [0].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 0.0
                 * @type number
                 */
                StartYaw: 0,
                /**
                 * It waits this high above the centre plate, over the top of the screen in either orientation,
                 and drops onto it over DropInSeconds, speeding up [it stood there from the start].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 14.0
                 * @type number
                 */
                DropInHeight: 0,
                DropInSeconds: 0,
                /**
                 * Its height over a plate's centre: feet on the plate [the original scene's beaver].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 0.159
                 * @type number
                 */
                StandHeight: 0,
                /**
                 * A hop: an arc this high over this long, eased out [DOJump(2, 0.4 s) with DOTween's default OutQuad].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 2.0
                 * @type number
                 */
                HopHeight: 0,
                HopSeconds: 0,
                /**
                 * The plate left behind starts to crumble this long after the take-off [0.5 s after the landing:
                 the `first-hop` frame, half a second after the tap, would show it whole].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 0.15
                 * @type number
                 */
                LeftPlateDelay: 0,
                /**
                 * Copies of SmokePuff.prefab the scene holds for the landings, used in turn: a puff lasts 1.5 s (0.5 s of
                 clouds, 1 s each) and landings come at least a hop apart, so each has finished before it plays again.
                 Scene objects, not instantiated: the Playworks build failed on the second Instantiate of the prefab
                 ("Don't know what should be instantiated", 2026-10-02).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HopConfig
                 * @default 4
                 * @type number
                 */
                Puffs: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.HopConfig#init", this ); }

                    this.TurnSpeed = 120.0;
                    this.StartYaw = 0.0;
                    this.DropInHeight = 14.0;
                    this.DropInSeconds = 0.45;
                    this.StandHeight = 0.159;
                    this.HopHeight = 2.0;
                    this.HopSeconds = 0.4;
                    this.LeftPlateDelay = 0.15;
                    this.Puffs = 4;
                }
            }
        }
    });
    /*Playable.HopConfig end.*/

    /*Playable.HopController start.*/
    /**
     * The game's one verb. Once the first island is in, the beaver drops onto the centre plate and turns;
     the cell it faces is the target ({@link }: the void glows nothing). A tap hops it there:
     the field resolves the hop at once and the beaver plays it. A safe landing opens input again; a trap drops
     away with the beaver after its dip, a hop into the void falls on its own, and the game is lost. Taps during
     a hop or a fall, and taps on INSTALL, are not hops.
     *
     * @public
     * @class Playable.HopController
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.HopController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                /**
                 * Input opened: the beaver stands on a plate, turning, and a tap hops. Raised after the drop-in and
                 after every safe landing, unless {@link } came first; during a {@link }, at its
                 release.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function addReady
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Input opened: the beaver stands on a plate, turning, and a tap hops. Raised after the drop-in and
                 after every safe landing, unless {@link } came first; during a {@link }, at its
                 release.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function removeReady
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Ready: null,
                /**
                 * A tap started a hop; input stays closed until it lands.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function addHopStarted
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * A tap started a hop; input stays closed until it lands.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function removeHopStarted
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                HopStarted: null,
                /**
                 * A hop landed safely on this cell; the int is the safe hops so far — the score. The drop-in is not a hop.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function addLanded
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * A hop landed safely on this cell; the int is the safe hops so far — the score. The drop-in is not a hop.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function removeLanded
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Landed: null,
                /**
                 * The beaver began to fall, off a trap or into the void; it sinks over PlateConfig.DropSeconds. The game is lost.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function addFell
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * The beaver began to fall, off a trap or into the void; it sinks over PlateConfig.DropSeconds. The game is lost.
                 *
                 * @static
                 * @public
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @function removeFell
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Fell: null
            },
            methods: {
                /*Playable.HopController.SpotOn:static start.*/
                /**
                 * Where the beaver stands on a cell (FieldConfig: cell (x, y) at world (x, 0, y) · Spacing).
                 *
                 * @static
                 * @private
                 * @this Playable.HopController
                 * @memberof Playable.HopController
                 * @param   {UnityEngine.Vector2Int}    cell
                 * @return  {UnityEngine.Vector3}
                 */
                SpotOn: function (cell) {
if ( TRACE ) { TRACE( "Playable.HopController#SpotOn", this ); }

                    return new pc.Vec3( cell.x * Playable.FieldConfig.Spacing, Playable.HopConfig.StandHeight, cell.y * Playable.FieldConfig.Spacing );
                },
                /*Playable.HopController.SpotOn:static end.*/

                /*Playable.HopController.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.HopController#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.HopController.Ready = null;
                    Playable.HopController.HopStarted = null;
                    Playable.HopController.Landed = null;
                    Playable.HopController.Fell = null;
                },
                /*Playable.HopController.ResetStatics:static end.*/


            }
        },
        fields: {
            plates: null,
            beaver: null,
            turning: false,
            open: false,
            closed: false,
            held: false,
            waiting: false
        },
        props: {
            /**
             * A gameplay tap now would hop.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Playable.HopController
             * @function InputOpen
             * @type boolean
             */
            InputOpen: {
                get: function () {
if ( TRACE ) { TRACE( "Playable.HopController#InputOpen#get", this ); }

                    return this.open;
                }
            }
        },
        methods: {
            /*Playable.HopController.CloseInput start.*/
            /**
             * No hop ever again (the win, the end card); a hop in the air still lands.
             *
             * @instance
             * @public
             * @this Playable.HopController
             * @memberof Playable.HopController
             * @return  {void}
             */
            CloseInput: function () {
if ( TRACE ) { TRACE( "Playable.HopController#CloseInput", this ); }

                this.closed = true;
                this.open = false;
            },
            /*Playable.HopController.CloseInput end.*/

            /*Playable.HopController.Hold start.*/
            /**
             * No hop until {@link } (the island change, while its plates come in): input that would
             open meanwhile opens at the release. A hop in the air still lands.
             *
             * @instance
             * @public
             * @this Playable.HopController
             * @memberof Playable.HopController
             * @return  {void}
             */
            Hold: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Hold", this ); }

                this.held = true;
                if (!this.open) {
                    return;
                }
                this.open = false;
                this.waiting = true;
                this.plates.Target = null;
            },
            /*Playable.HopController.Hold end.*/

            /*Playable.HopController.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Release", this ); }

                this.held = false;
                if (!this.waiting) {
                    return;
                }
                this.waiting = false;
                this.Open();
            },
            /*Playable.HopController.Release end.*/

            /*Playable.HopController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Awake", this ); }

                this.beaver = this.GetComponent(Playable.BeaverView);
            },
            /*Playable.HopController.Awake end.*/

            /*Playable.HopController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.HopController#OnEnable", this ); }

                Playable.PlatesView.addWaveFinished(Bridge.fn.cacheBind(this, this.DropIn));
                Playable.PlayableInput.addTapped(Bridge.fn.cacheBind(this, this.OnTap));
            },
            /*Playable.HopController.OnEnable end.*/

            /*Playable.HopController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.HopController#OnDisable", this ); }

                Playable.PlatesView.removeWaveFinished(Bridge.fn.cacheBind(this, this.DropIn));
                Playable.PlayableInput.removeTapped(Bridge.fn.cacheBind(this, this.OnTap));
            },
            /*Playable.HopController.OnDisable end.*/

            /*Playable.HopController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Update", this ); }

                if (!this.turning) {
                    return;
                }
                this.beaver.Turn(Playable.HopConfig.TurnSpeed * UnityEngine.Time.deltaTime);
                if (this.open) {
                    this.Aim();
                }
            },
            /*Playable.HopController.Update end.*/

            /*Playable.HopController.DropIn start.*/
            DropIn: function () {
if ( TRACE ) { TRACE( "Playable.HopController#DropIn", this ); }

                var centre = this.plates.Field.Beaver.$clone();
                this.beaver.DropIn(Playable.HopController.SpotOn(centre.$clone()), Bridge.fn.bind(this, function () {
                    this.turning = true;
                    this.Open();
                    this.Touchdown(centre);
                }));
            },
            /*Playable.HopController.DropIn end.*/

            /*Playable.HopController.OnTap start.*/
            OnTap: function (screen) {
if ( TRACE ) { TRACE( "Playable.HopController#OnTap", this ); }

                if (!this.open || Playable.InstallButton.Covers(screen.$clone())) {
                    return;
                }
                this.open = false;
                var from = this.plates.Field.Beaver.$clone();
                var step = Playable.Field.Facing(this.beaver.Yaw); // the same yaw Aim showed this frame
                var outcome = this.plates.Field.Hop(step);
                var to = UnityEngine.Vector2Int.op_Addition(from.$clone(), step.$clone());
                this.plates.Remove(from, Playable.HopConfig.LeftPlateDelay);
                if (!Bridge.staticEquals(Playable.HopController.HopStarted, null)) {
                    Playable.HopController.HopStarted();
                }
                this.beaver.Hop(Playable.HopController.SpotOn(to.$clone()), Bridge.fn.bind(this, function () {
                    this.Arrive(to, outcome);
                }));
            },
            /*Playable.HopController.OnTap end.*/

            /*Playable.HopController.Arrive start.*/
            Arrive: function (cell, outcome) {
if ( TRACE ) { TRACE( "Playable.HopController#Arrive", this ); }

                this.plates.Target = null;
                if (outcome === Playable.HopOutcome.Void) {
                    this.Fall();
                    return;
                }
                if (outcome === Playable.HopOutcome.Trap) {
                    // At the bottom of the dip, as in the original: the plate gives way under the beaver.
                    Playable.Tween.Delay(this, Playable.PlateConfig.DipDownSeconds, Bridge.fn.bind(this, function () {
                        this.Fall();
                        this.plates.Drop(cell);
                    }));
                } else {
                    if (!Bridge.staticEquals(Playable.HopController.Landed, null)) {
                        Playable.HopController.Landed(cell.$clone(), this.plates.Field.Score);
                    }
                    this.Open();
                }
                this.Touchdown(cell);
            },
            /*Playable.HopController.Arrive end.*/

            /*Playable.HopController.Touchdown start.*/
            /**
             * The look of a landing — plate and beaver dip, a smoke puff, Walk — after the game has moved on, so
             that nothing in it can hold the game up.
             *
             * @instance
             * @private
             * @this Playable.HopController
             * @memberof Playable.HopController
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {void}
             */
            Touchdown: function (cell) {
if ( TRACE ) { TRACE( "Playable.HopController#Touchdown", this ); }

                this.plates.Dip(cell);
                this.beaver.Land();
            },
            /*Playable.HopController.Touchdown end.*/

            /*Playable.HopController.Fall start.*/
            Fall: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Fall", this ); }

                this.turning = false;
                if (!Bridge.staticEquals(Playable.HopController.Fell, null)) {
                    Playable.HopController.Fell();
                }
                this.beaver.Fall();
            },
            /*Playable.HopController.Fall end.*/

            /*Playable.HopController.Open start.*/
            Open: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Open", this ); }

                if (this.closed) {
                    return;
                }
                if (this.held) {
                    this.waiting = true;
                    return;
                }
                this.open = true;
                this.Aim();
                if (!Bridge.staticEquals(Playable.HopController.Ready, null)) {
                    Playable.HopController.Ready();
                }
            },
            /*Playable.HopController.Open end.*/

            /*Playable.HopController.Aim start.*/
            /**
             * The faced cell glows; set only on a change, a glow fades in over PlateConfig.GlowSeconds.
             *
             * @instance
             * @private
             * @this Playable.HopController
             * @memberof Playable.HopController
             * @return  {void}
             */
            Aim: function () {
if ( TRACE ) { TRACE( "Playable.HopController#Aim", this ); }

                var faced = UnityEngine.Vector2Int.op_Addition(this.plates.Field.Beaver.$clone(), Playable.Field.Facing(this.beaver.Yaw));
                var target = System.Nullable.lift1("$clone", this.plates.Target);
                if (!System.Nullable.hasValue(target) || UnityEngine.Vector2Int.op_Inequality(System.Nullable.getValue(target).$clone(), faced.$clone())) {
                    this.plates.Target = faced.$clone();
                }
            },
            /*Playable.HopController.Aim end.*/


        }
    });
    /*Playable.HopController end.*/

    /*Playable.HopOutcome start.*/
    /**
     * What a hop lands on: a plate, a trap, or nothing.
     *
     * @public
     * @class Playable.HopOutcome
     */
    Bridge.define("Playable.HopOutcome", {
        $kind: 6,
        statics: {
            fields: {
                Safe: 0,
                Trap: 1,
                Void: 2
            }
        }
    });
    /*Playable.HopOutcome end.*/

    /*Playable.HudConfig start.*/
    /**
     * The score: the counter top-left and the "+1" over each landing; the original's values in brackets.
     Layout in canvas units (1080×1920 reference, match 0.5): a unit is 0.4 px of a 390×844 phone in either
     orientation, so the top-left 50×50 px corner is 125 units.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.HudConfig
     */
    Bridge.define("Playable.HudConfig", {
        statics: {
            fields: {
                /**
                 * The counter: a pill of the original's lighter orange with the number in white Benzin, its top-left
                 corner here from the screen's — INSTALL's mirror, clear of the corner by 15 units [a white number, 220 at
                 most, auto-sized: white on the cyan barely read].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @type UnityEngine.Vector2
                 */
                ScoreOffset: null,
                ScoreSize: null,
                ScoreFontSize: 0,
                ScorePanel: null,
                /**
                 * On every safe landing the number changes at once and punches: up to Punch over PunchUpSeconds, back
                 over PunchDownSeconds [it changed 0.7 s after the landing, with no punch: `first-hop`, 0.1 s after the
                 landing, would still read 0].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default 1.3
                 * @type number
                 */
                Punch: 0,
                PunchUpSeconds: 0,
                PunchDownSeconds: 0,
                /**
                 * The "+1": Benzin in the original's darker orange [#F3AB42, 50, world-space, turned to the camera by
                 BillboardText], drawn on the canvas over the landing plate, so it faces the camera exactly.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default "+1"
                 * @type string
                 */
                PopupText: null,
                PopupFontSize: 0,
                PopupColor: null,
                /**
                 * It starts this high over the landing plate's centre, just over the beaver's hat (2.1), and rises
                 PopupRise, slowing, over PopupSeconds; at 3.1 over a far-rim plate it stays inside a landscape screen
                 [from 1.68 to 2.1 over the beaver in 0.5 s, then back down].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default 2.5
                 * @type number
                 */
                PopupHeight: 0,
                PopupRise: 0,
                PopupSeconds: 0,
                /**
                 * It pops in — 0 → PopupOvershoot over PopupUpSeconds, back to 1 over PopupDownSeconds — and fades
                 out over the last PopupFadeSeconds [faded in over 0.3 s, out over 0.3 s from 0.7 s].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default 1.2
                 * @type number
                 */
                PopupOvershoot: 0,
                PopupUpSeconds: 0,
                PopupDownSeconds: 0,
                PopupFadeSeconds: 0,
                /**
                 * When the next "+1" pops in, the one still showing fades out over this instead: quick hops land 0.4 s
                 and a plate apart, and on the bridge, zoomed out, the two "+1"s sat on top of each other (the journey's `bridge` frame).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default 0.05
                 * @type number
                 */
                PopupMakeWaySeconds: 0,
                /**
                 * "+1"s the scene holds, used in turn: landings come at least a hop (HopConfig.HopSeconds) apart, so
                 with PopupSeconds under Popups hops each has finished before it plays again. Scene objects, not instantiated
                 (the Playworks build broke on Instantiate after a Destroy, 2026-10-02).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.HudConfig
                 * @default 3
                 * @type number
                 */
                Popups: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.HudConfig#init", this ); }

                    this.ScoreOffset = new UnityEngine.Vector2();
                    this.ScoreSize = new UnityEngine.Vector2();
                    this.ScorePanel = new UnityEngine.Color();
                    this.PopupColor = new UnityEngine.Color();
                    this.ScoreOffset = new pc.Vec2( 40.0, -140.0 );
                    this.ScoreSize = new pc.Vec2( 170.0, 110.0 );
                    this.ScoreFontSize = 80.0;
                    this.ScorePanel = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(243, 171, 66, 255));
                    this.Punch = 1.3;
                    this.PunchUpSeconds = 0.08;
                    this.PunchDownSeconds = 0.17;
                    this.PopupText = "+1";
                    this.PopupFontSize = 100.0;
                    this.PopupColor = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 151, 49, 255));
                    this.PopupHeight = 2.5;
                    this.PopupRise = 0.6;
                    this.PopupSeconds = 0.9;
                    this.PopupOvershoot = 1.2;
                    this.PopupUpSeconds = 0.12;
                    this.PopupDownSeconds = 0.1;
                    this.PopupFadeSeconds = 0.4;
                    this.PopupMakeWaySeconds = 0.05;
                    this.Popups = 3;
                }
            }
        }
    });
    /*Playable.HudConfig end.*/

    /*Playable.InstallButton start.*/
    /**
     * The INSTALL button top-right: a tap on it opens the store. The tap comes through
     {@link } like every other tap, so the PlayMode journey presses it with
     {@link } and the build the same way; no uGUI click is involved.
     A tap on it is not a gameplay tap: whoever plays on {@link } skips a tap
     where {@link } is true. A full-screen CTA that takes over (the end card) hides this
     object, or one tap there would open the store twice.
     *
     * @public
     * @class Playable.InstallButton
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.InstallButton", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                shown: null
            },
            methods: {
                /*Playable.InstallButton.Covers:static start.*/
                /**
                 * Whether a screen point (pixels, origin bottom-left) is on the button while it shows.
                 *
                 * @static
                 * @public
                 * @this Playable.InstallButton
                 * @memberof Playable.InstallButton
                 * @param   {UnityEngine.Vector2}    screen
                 * @return  {boolean}
                 */
                Covers: function (screen) {
if ( TRACE ) { TRACE( "Playable.InstallButton#Covers", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(Playable.InstallButton.shown, null) && UnityEngine.RectTransformUtility.RectangleContainsScreenPoint$1(Playable.InstallButton.shown.rect, screen, Playable.InstallButton.shown.canvasCamera);
                },
                /*Playable.InstallButton.Covers:static end.*/


            }
        },
        fields: {
            rect: null,
            canvasCamera: null
        },
        methods: {
            /*Playable.InstallButton.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.InstallButton#Awake", this ); }

                this.rect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                this.canvasCamera = this.GetComponentInParent(UnityEngine.Canvas).worldCamera;
            },
            /*Playable.InstallButton.Awake end.*/

            /*Playable.InstallButton.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.InstallButton#OnEnable", this ); }

                Playable.InstallButton.shown = this;
                Playable.PlayableInput.addTapped(Bridge.fn.cacheBind(this, this.OnTap));
            },
            /*Playable.InstallButton.OnEnable end.*/

            /*Playable.InstallButton.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.InstallButton#OnDisable", this ); }

                Playable.PlayableInput.removeTapped(Bridge.fn.cacheBind(this, this.OnTap));
                if (UnityEngine.MonoBehaviour.op_Equality(Playable.InstallButton.shown, this)) {
                    Playable.InstallButton.shown = null;
                }
            },
            /*Playable.InstallButton.OnDisable end.*/

            /*Playable.InstallButton.OnTap start.*/
            OnTap: function (screen) {
if ( TRACE ) { TRACE( "Playable.InstallButton#OnTap", this ); }

                if (Playable.InstallButton.Covers(screen.$clone())) {
                    Playable.PlayableAd.Install();
                }
            },
            /*Playable.InstallButton.OnTap end.*/


        }
    });
    /*Playable.InstallButton end.*/

    /*Playable.IslandChange start.*/
    /**
     * What the island change did, for the views to play it.
     *
     * @public
     * @class Playable.IslandChange
     */
    Bridge.define("Playable.IslandChange", {
        fields: {
            /**
             * From the beaver toward the new island: one of {@link }.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Playable.IslandChange
             * @type UnityEngine.Vector2Int
             */
            Direction: null,
            NewCentre: null,
            /**
             * The old plates that went. A cell that is also in {@link } got a new plate.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Playable.IslandChange
             * @type System.Collections.Generic.List$1
             */
            Removed: null,
            /**
             * The bridge's plates, row by row from the beaver.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Playable.IslandChange
             * @type System.Collections.Generic.List$1
             */
            Bridge: null,
            /**
             * The new island's plates; none is a trap.
             *
             * @instance
             * @public
             * @readonly
             * @memberof Playable.IslandChange
             * @type System.Collections.Generic.List$1
             */
            NewIsland: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.IslandChange#init", this ); }

                this.Direction = new UnityEngine.Vector2Int();
                this.NewCentre = new UnityEngine.Vector2Int();
                this.Removed = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                this.Bridge = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                this.NewIsland = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
            },
            ctor: function (direction, newCentre) {
if ( TRACE ) { TRACE( "Playable.IslandChange#ctor", this ); }

                this.$initialize();
                this.Direction = direction.$clone();
                this.NewCentre = newCentre.$clone();
            }
        }
    });
    /*Playable.IslandChange end.*/

    /*Playable.IslandTransition start.*/
    /**
     * The island change on screen, played as {@link } says once the field has made it: the old
     plates crumble in a quick wave from the beaver, all but its +; FlowConfig.NewIslandDelay later the new island pops
     in from its centre while the bridge comes plate by plate from the beaver, with "CROSS THE BRIDGE!", and the camera
     moves and zooms out to show the beaver, the bridge and the whole new island under the banner until the beaver is
     across. The field has the bridge before the screen shows it, so input is held until the bridge is in.
     *
     * @public
     * @class Playable.IslandTransition
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.IslandTransition", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Playable.IslandTransition.Framed:static start.*/
                /**
                 * What the camera keeps on screen while the beaver on <b /> crosses: the beaver up to
                 CameraConfig.ViewTop and every plate the field has — what stands of the old island, the bridge, the whole new
                 island. A plate behind the beaver is never cut by an edge, so the view holds still while it crosses.
                 *
                 * @static
                 * @public
                 * @this Playable.IslandTransition
                 * @memberof Playable.IslandTransition
                 * @param   {Playable.Field}                field    
                 * @param   {UnityEngine.Vector2Int}        cell
                 * @return  {Array.<UnityEngine.Bounds>}
                 */
                Framed: function (field, cell) {
if ( TRACE ) { TRACE( "Playable.IslandTransition#Framed", this ); }

                    var $t;
                    var height = Playable.CameraConfig.ViewTop - Playable.CameraConfig.ViewBottom;
                    var boxes = function (_o1) {
                            _o1.add(new pc.BoundingBox( Playable.IslandTransition.World(cell.$clone()).add( pc.Vec3.UP.clone().clone().scale( (Playable.CameraConfig.ViewTop + Playable.CameraConfig.ViewBottom) ).scale( 1.0 / ( 2.0 ) ) ), new pc.Vec3( Playable.PlateConfig.Size.$clone().x, height, Playable.PlateConfig.Size.$clone().z ).scale( 0.5 ) ));
                            return _o1;
                        }(new (System.Collections.Generic.List$1(UnityEngine.Bounds)).ctor());
                    $t = Bridge.getEnumerator(field.Plates, UnityEngine.Vector2Int);
                    try {
                        while ($t.moveNext()) {
                            var plate = $t.Current.$clone();
                            boxes.add(new pc.BoundingBox( Playable.IslandTransition.World(plate.$clone()), Playable.PlateConfig.Size.$clone().scale( 0.5 ) ));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return boxes.ToArray();
                },
                /*Playable.IslandTransition.Framed:static end.*/

                /*Playable.IslandTransition.World:static start.*/
                World: function (cell) {
if ( TRACE ) { TRACE( "Playable.IslandTransition#World", this ); }

                    return new pc.Vec3( cell.x * Playable.FieldConfig.Spacing, 0.0, cell.y * Playable.FieldConfig.Spacing );
                },
                /*Playable.IslandTransition.World:static end.*/

                /*Playable.IslandTransition.Distance:static start.*/
                Distance: function (a, b) {
if ( TRACE ) { TRACE( "Playable.IslandTransition#Distance", this ); }

                    return ((Math.abs(((a.x - b.x) | 0)) + Math.abs(((a.y - b.y) | 0))) | 0);
                },
                /*Playable.IslandTransition.Distance:static end.*/


            }
        },
        fields: {
            plates: null,
            hop: null,
            rig: null,
            banner: null,
            change: null
        },
        props: {
            Started: {
                get: function () {
if ( TRACE ) { TRACE( "Playable.IslandTransition#Started#get", this ); }

                    return this.change != null;
                }
            }
        },
        methods: {
            /*Playable.IslandTransition.Play start.*/
            /**
             * Plays <b />, made by the safe landing on <b />.
             *
             * @instance
             * @public
             * @this Playable.IslandTransition
             * @memberof Playable.IslandTransition
             * @param   {Playable.IslandChange}     island    
             * @param   {UnityEngine.Vector2Int}    beaver
             * @return  {void}
             */
            Play: function (island, beaver) {
if ( TRACE ) { TRACE( "Playable.IslandTransition#Play", this ); }

                var $t, $t1;
                this.change = island;
                this.hop.Hold();

                // The + plate in front is the bridge's first; a plate there stays (a trap there gives way to a plate).
                var front = UnityEngine.Vector2Int.op_Addition(beaver.$clone(), island.Direction.$clone());
                var entry = this.plates.Plate(front);
                var keep = UnityEngine.MonoBehaviour.op_Inequality(entry, null) && !entry.IsTrap;
                $t = Bridge.getEnumerator(island.Removed);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current.$clone();
                        if (!keep || UnityEngine.Vector2Int.op_Inequality(cell.$clone(), front.$clone())) {
                            this.plates.Remove(cell, Playable.IslandTransition.Distance(cell.$clone(), beaver.$clone()) * Playable.FlowConfig.CrumbleStep);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var bridge = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                $t1 = Bridge.getEnumerator(island.Bridge);
                try {
                    while ($t1.moveNext()) {
                        var cell1 = $t1.Current.$clone();
                        if (!keep || UnityEngine.Vector2Int.op_Inequality(cell1.$clone(), front.$clone())) {
                            bridge.add(cell1.$clone());
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                Playable.Tween.Delay(this, Playable.FlowConfig.NewIslandDelay, Bridge.fn.bind(this, function () {
                    this.plates.PopIn(island.NewIsland, island.NewCentre);
                    this.plates.PopIn(bridge, beaver, Bridge.fn.cacheBind(this.hop, this.hop.Release));
                    this.banner.Show(Playable.Objective.CrossBridge);
                    this.rig.Frame(Playable.IslandTransition.Framed(this.plates.Field, beaver), Playable.FlowConfig.CameraTop);
                }));
            },
            /*Playable.IslandTransition.Play end.*/

            /*Playable.IslandTransition.Landed start.*/
            /**
             * A safe landing after the change: the camera keeps the crossing framed, and once the beaver is on the
             new island (the win) rests on that island at the island's scale.
             *
             * @instance
             * @public
             * @this Playable.IslandTransition
             * @memberof Playable.IslandTransition
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {void}
             */
            Landed: function (cell) {
if ( TRACE ) { TRACE( "Playable.IslandTransition#Landed", this ); }

                if (!this.plates.Field.Won) {
                    this.rig.Frame(Playable.IslandTransition.Framed(this.plates.Field, cell), Playable.FlowConfig.CameraTop);
                    return;
                }
                this.rig.Centre = Playable.IslandTransition.World(this.change.NewCentre.$clone());
                this.rig.Follow();
            },
            /*Playable.IslandTransition.Landed end.*/


        }
    });
    /*Playable.IslandTransition end.*/

    /*Playable.Objective start.*/
    /**
     * The objective of the moment, as data; the banner that shows it owns the texts.
     *
     * @public
     * @class Playable.Objective
     */
    Bridge.define("Playable.Objective", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                LeaveTwo: 1,
                CrossBridge: 2
            }
        }
    });
    /*Playable.Objective end.*/

    /*Playable.ObjectiveBanner start.*/
    /**
     * The objective banner, the original's MatchTasks: one line per objective — its text in a pill, made by
     FlowScene from FlowConfig and hidden — of which {@link } brings one in with the original's scale-in.
     *
     * @public
     * @class Playable.ObjectiveBanner
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.ObjectiveBanner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leaveTwo: null,
            crossBridge: null,
            /**
             * The objective on screen; None until the first one.
             *
             * @instance
             * @public
             * @memberof Playable.ObjectiveBanner
             * @function Shown
             * @type Playable.Objective
             */
            Shown: 0
        },
        methods: {
            /*Playable.ObjectiveBanner.Show start.*/
            Show: function (objective) {
if ( TRACE ) { TRACE( "Playable.ObjectiveBanner#Show", this ); }

                if (objective === this.Shown) {
                    return;
                }
                this.Shown = objective;
                this.leaveTwo.SetActive(objective === Playable.Objective.LeaveTwo);
                this.crossBridge.SetActive(objective === Playable.Objective.CrossBridge);
                this.transform.localScale = pc.Vec3.ZERO.clone();
                Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.FlowConfig.BannerOvershoot ), Playable.FlowConfig.BannerUpSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ), Playable.FlowConfig.BannerDownSeconds, Playable.Ease.OutQuad);
                }));
            },
            /*Playable.ObjectiveBanner.Show end.*/


        }
    });
    /*Playable.ObjectiveBanner end.*/

    /*Playable.PlateConfig start.*/
    /**
     * The plates' look and motion; the original's values in brackets. Colours are the albedo of
     the pipeline's Lit material under CameraConfig's light, which shows a top face about 1.12× brighter
     (linear) than its albedo: the colour on screen is given where it differs.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.PlateConfig
     */
    Bridge.define("Playable.PlateConfig", {
        statics: {
            fields: {
                /**
                 * A slab, its centre at the cell's height 0 [the original's Tile.prefab: a cube 1 × 0.356 × 1].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @type UnityEngine.Vector3
                 */
                Size: null,
                /**
                 * A plate [white].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @type UnityEngine.Color
                 */
                Plate: null,
                /**
                 * A trap: reddish, its top shows about #FF7F73, with dark cracks [white: in the original a trap
                 looked like any plate].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @type UnityEngine.Color
                 */
                Trap: null,
                Crack: null,
                /**
                 * The target: its top shows #FFBD49 [the original's orange QuickOutline],
                 faded in and out over GlowSeconds.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @type UnityEngine.Color
                 */
                Glow: null,
                GlowSeconds: 0,
                /**
                 * The wave: a plate starts this long after the previous cell of distance from the wave's
                 origin [all at once, with random durations] ...
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @default 0.2
                 * @type number
                 */
                WaveStep: 0,
                /**
                 * ... and scales 0 → PopOvershoot over PopUpSeconds, then back to 1 over PopDownSeconds
                 [1.1; 0.4–0.8 s up, 0.1–0.4 s down].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @default 1.1
                 * @type number
                 */
                PopOvershoot: 0,
                PopUpSeconds: 0,
                PopDownSeconds: 0,
                /**
                 * A removed plate shrinks to nothing while it sinks CrumbleDrop [a 1.2× swell over 0.1–0.4 s,
                 then down to nothing over 0.4–0.8 s, in place].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @default 0.45
                 * @type number
                 */
                CrumbleSeconds: 0,
                CrumbleDrop: 0,
                /**
                 * The landing dip: down DipDepth, then back up three times slower [0.2; 0.1–0.3 s down, 3× up].
                 The beaver dips with the plate by the same numbers.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @default 0.2
                 * @type number
                 */
                DipDepth: 0,
                DipDownSeconds: 0,
                DipUpSeconds: 0,
                /**
                 * A trap plate drops away with the beaver: DropDistance down over DropSeconds, speeding up
                 [the trap plate vanished; the beaver sank 15 units in 2 s].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.PlateConfig
                 * @default 15.0
                 * @type number
                 */
                DropDistance: 0,
                DropSeconds: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.PlateConfig#init", this ); }

                    this.Size = new UnityEngine.Vector3();
                    this.Plate = new UnityEngine.Color();
                    this.Trap = new UnityEngine.Color();
                    this.Crack = new UnityEngine.Color();
                    this.Glow = new UnityEngine.Color();
                    this.Size = new pc.Vec3( 1.0, 0.356, 1.0 );
                    this.Plate = new pc.Color( 1, 1, 1, 1 );
                    this.Trap = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 115, 102, 255));
                    this.Crack = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(64, 18, 16, 255));
                    this.Glow = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(255, 176, 56, 255));
                    this.GlowSeconds = 0.1;
                    this.WaveStep = 0.2;
                    this.PopOvershoot = 1.1;
                    this.PopUpSeconds = 0.35;
                    this.PopDownSeconds = 0.15;
                    this.CrumbleSeconds = 0.45;
                    this.CrumbleDrop = 0.8;
                    this.DipDepth = 0.2;
                    this.DipDownSeconds = 0.12;
                    this.DipUpSeconds = 0.36;
                    this.DropDistance = 15.0;
                    this.DropSeconds = 1.2;
                }
            }
        }
    });
    /*Playable.PlateConfig end.*/

    /*Playable.PlatesView start.*/
    /**
     * The plates on screen, drawn from the field state, and the only owner of plate objects. It
     makes the playable's {@link } and pops its first island in as a wave from the beaver's cell;
     after that it only does what it is told: the hop points the glow with {@link }, dips,
     drops and removes plates; the island change removes the old plates and pops the bridge and the
     new island in. The plates are copies of two inactive templates the scene builder made (PlatesScene).
     *
     * @public
     * @class Playable.PlatesView
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.PlatesView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                /**
                 * The first island has popped in completely (raised once): the beaver may drop onto it.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function addWaveFinished
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * The first island has popped in completely (raised once): the beaver may drop onto it.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function removeWaveFinished
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                WaveFinished: null,
                /**
                 * A plate popped, at the top of its bounce, at its world position: one per plate.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function addPlateSpawned
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * A plate popped, at the top of its bounce, at its world position: one per plate.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function removePlateSpawned
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                PlateSpawned: null,
                /**
                 * A removed plate began to crumble, at its world position. Not raised for one that drops away.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function addPlateRemoved
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * A removed plate began to crumble, at its world position. Not raised for one that drops away.
                 *
                 * @static
                 * @public
                 * @this Playable.PlatesView
                 * @memberof Playable.PlatesView
                 * @function removePlateRemoved
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                PlateRemoved: null
            },
            methods: {
                /*Playable.PlatesView.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.PlatesView#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.PlatesView.WaveFinished = null;
                    Playable.PlatesView.PlateSpawned = null;
                    Playable.PlatesView.PlateRemoved = null;
                },
                /*Playable.PlatesView.ResetStatics:static end.*/


            }
        },
        fields: {
            plate: null,
            trap: null,
            plates: null,
            target: null,
            /**
             * The playable's field (FieldConfig.Seed): the game plays on it, this draws it.
             *
             * @instance
             * @public
             * @memberof Playable.PlatesView
             * @function Field
             * @type Playable.Field
             */
            Field: null
        },
        props: {
            /**
             * The cell whose plate glows, or none. A cell with no plate (the void) glows nothing; a plate
             popping in on the target cell glows at once.
             *
             * @instance
             * @public
             * @memberof Playable.PlatesView
             * @function Target
             * @type ?UnityEngine.Vector2Int
             */
            Target: {
                get: function () {
if ( TRACE ) { TRACE( "Playable.PlatesView#Target#get", this ); }

                    return System.Nullable.lift1("$clone", this.target);
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Target#set", this ); }

                    if (System.Nullable.hasValue(this.target)) {
                        this.SetGlow(System.Nullable.getValue(this.target), false);
                    }
                    this.target = System.Nullable.lift1("$clone", value);
                    if (System.Nullable.hasValue(this.target)) {
                        this.SetGlow(System.Nullable.getValue(this.target), true);
                    }
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.PlatesView#init", this ); }

                this.plates = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector2Int,Playable.PlateView)).ctor();
            }
        },
        methods: {
            /*Playable.PlatesView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.PlatesView#Awake", this ); }

                this.Field = new Playable.Field(Playable.FieldConfig.Seed);
                this.LogTraps();
                this.PopIn(this.Field.Plates, this.Field.Beaver, function () {
                    if (!Bridge.staticEquals(Playable.PlatesView.WaveFinished, null)) {
                        Playable.PlatesView.WaveFinished();
                    }
                });
            },
            /*Playable.PlatesView.Awake end.*/

            /*Playable.PlatesView.PopIn start.*/
            /**
             * Pops the field's plates on these cells in as a staggered wave: a cell starts WaveStep later per cell
             of distance (|dx| + |dy|) from <b />, whatever order the cells come in. A plate
             already on a cell crumbles to make way; a cell the field has no plate on is skipped.
             <b /> when the last one has settled.
             *
             * @instance
             * @public
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @param   {System.Collections.Generic.IEnumerable$1}    cells    
             * @param   {UnityEngine.Vector2Int}                      from     
             * @param   {System.Action}                               done
             * @return  {void}
             */
            PopIn: function (cells, from, done) {
if ( TRACE ) { TRACE( "Playable.PlatesView#PopIn", this ); }

                var $t;
                if (done === void 0) { done = null; }
                var farthest = 0;
                $t = Bridge.getEnumerator(cells, UnityEngine.Vector2Int);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current.$clone();
                        if (this.Field.OutcomeAt(cell) === Playable.HopOutcome.Void) {
                            continue;
                        }
                        this.Remove(cell);
                        var view = { v : this.Create(cell) };
                        var distance = (Math.abs(((cell.x - from.x) | 0)) + Math.abs(((cell.y - from.y) | 0))) | 0;
                        farthest = Math.max(farthest, distance);
                        view.v.PopIn(distance * Playable.PlateConfig.WaveStep, (function ($me, view) {
                            return function () {
                                if (!Bridge.staticEquals(Playable.PlatesView.PlateSpawned, null)) {
                                    Playable.PlatesView.PlateSpawned(view.v.transform.position.$clone());
                                }
                            };
                        })(this, view));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (!Bridge.staticEquals(done, null)) {
                    Playable.Tween.Delay(this, farthest * Playable.PlateConfig.WaveStep + Playable.PlateConfig.PopUpSeconds + Playable.PlateConfig.PopDownSeconds, done);
                }
            },
            /*Playable.PlatesView.PopIn end.*/

            /*Playable.PlatesView.Remove start.*/
            /**
             * The plate on <b /> crumbles after <b />. The cell is free
             at once: a PopIn there makes a new plate.
             *
             * @instance
             * @public
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @param   {UnityEngine.Vector2Int}    cell     
             * @param   {number}                    delay
             * @return  {void}
             */
            Remove: function (cell, delay) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Remove", this ); }

                if (delay === void 0) { delay = 0.0; }
                var view = this.Take(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                    view.Crumble(delay, function () {
                        if (!Bridge.staticEquals(Playable.PlatesView.PlateRemoved, null)) {
                            Playable.PlatesView.PlateRemoved(view.transform.position.$clone());
                        }
                    });
                }
            },
            /*Playable.PlatesView.Remove end.*/

            /*Playable.PlatesView.Dip start.*/
            /**
             * The landing dip: down PlateConfig.DipDepth and back.
             *
             * @instance
             * @public
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {void}
             */
            Dip: function (cell) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Dip", this ); }

                var view = this.Plate(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                    view.Dip();
                }
            },
            /*Playable.PlatesView.Dip end.*/

            /*Playable.PlatesView.Drop start.*/
            /**
             * A trap's plate falls away PlateConfig.DropDistance; the cell is free at once.
             *
             * @instance
             * @public
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {void}
             */
            Drop: function (cell) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Drop", this ); }

                var view = this.Take(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                    view.Drop();
                }
            },
            /*Playable.PlatesView.Drop end.*/

            /*Playable.PlatesView.Plate start.*/
            /**
             * The plate on <b />, or null.
             *
             * @instance
             * @public
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @param   {UnityEngine.Vector2Int}    cell
             * @return  {Playable.PlateView}
             */
            Plate: function (cell) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Plate", this ); }

                var view = { };
                return this.plates.tryGetValue(cell.$clone(), view) ? view.v : null;
            },
            /*Playable.PlatesView.Plate end.*/

            /*Playable.PlatesView.Create start.*/
            Create: function (cell) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Create", this ); }

                var isTrap = this.Field.IsTrap(cell.$clone());
                var view = UnityEngine.Object.Instantiate(Playable.PlateView, isTrap ? this.trap : this.plate, this.transform);
                view.name = System.String.format("Plate {0},{1}", Bridge.box(cell.x, System.Int32), Bridge.box(cell.y, System.Int32));
                view.transform.localPosition = new pc.Vec3( cell.x * Playable.FieldConfig.Spacing, 0.0, cell.y * Playable.FieldConfig.Spacing );
                view.Show(cell, isTrap);
                this.plates.setItem(cell, view);
                if (System.Nullable.hasValue(this.target) && UnityEngine.Vector2Int.op_Equality(System.Nullable.getValue(this.target).$clone(), cell.$clone())) {
                    view.Glow(true);
                }
                return view;
            },
            /*Playable.PlatesView.Create end.*/

            /*Playable.PlatesView.Take start.*/
            Take: function (cell) {
if ( TRACE ) { TRACE( "Playable.PlatesView#Take", this ); }

                var view = this.Plate(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                    this.plates.remove(cell.$clone());
                }
                return view;
            },
            /*Playable.PlatesView.Take end.*/

            /*Playable.PlatesView.SetGlow start.*/
            SetGlow: function (cell, on) {
if ( TRACE ) { TRACE( "Playable.PlatesView#SetGlow", this ); }

                var view = this.Plate(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                    view.Glow(on);
                }
            },
            /*Playable.PlatesView.SetGlow end.*/

            /*Playable.PlatesView.LogTraps start.*/
            /**
             * The layout in the log, row by row: the build's console.txt and the PlayMode log must agree
             (System.Random and Dictionary order are Playworks' own in the build).
             *
             * @instance
             * @private
             * @this Playable.PlatesView
             * @memberof Playable.PlatesView
             * @return  {void}
             */
            LogTraps: function () {
if ( TRACE ) { TRACE( "Playable.PlatesView#LogTraps", this ); }

                var traps = "";
                var rim = (Bridge.Int.div(Playable.FieldConfig.IslandSize, 2)) | 0;
                for (var y = rim; y >= ((-rim) | 0); y = (y - 1) | 0) {
                    for (var x = (-rim) | 0; x <= rim; x = (x + 1) | 0) {
                        if (this.Field.IsTrap(new UnityEngine.Vector2Int.$ctor1(x, y))) {
                            traps = (traps || "") + ((System.String.format(" {0},{1}", Bridge.box(x, System.Int32), Bridge.box(y, System.Int32))) || "");
                        }
                    }
                }
                UnityEngine.Debug.Log$1(System.String.format("[PlatesView] seed {0}, traps at{1}", Bridge.box(Playable.FieldConfig.Seed, System.Int32), traps));
            },
            /*Playable.PlatesView.LogTraps end.*/


        }
    });
    /*Playable.PlatesView end.*/

    /*Playable.PlateView start.*/
    /**
     * One plate on screen: the original's white slab, or a trap's reddish one with dark cracks on
     top, and its own copy of the slab's material for the glow. {@link } makes, moves and
     removes plates; everyone else only reads them.
     *
     * @public
     * @class Playable.PlateView
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.PlateView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BaseColor: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.PlateView#init", this ); }

                    this.BaseColor = "_BaseColor";
                }
            }
        },
        fields: {
            slab: null,
            cracks: null,
            tint: null,
            dark: null,
            rest: null,
            home: null,
            Cell: null,
            IsTrap: false,
            Glowing: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.PlateView#init", this ); }

                this.rest = new UnityEngine.Color();
                this.home = new UnityEngine.Vector3();
                this.Cell = new UnityEngine.Vector2Int();
            }
        },
        methods: {
            /*Playable.PlateView.Show start.*/
            /**
             * Makes a fresh copy of a template ready at its cell's position, at scale 0, and wakes it.
             *
             * @instance
             * @this Playable.PlateView
             * @memberof Playable.PlateView
             * @param   {UnityEngine.Vector2Int}    cell    
             * @param   {boolean}                   trap
             * @return  {void}
             */
            Show: function (cell, trap) {
if ( TRACE ) { TRACE( "Playable.PlateView#Show", this ); }

                var $t;
                this.Cell = cell.$clone();
                this.IsTrap = trap;
                this.rest = trap ? Playable.PlateConfig.Trap.$clone() : Playable.PlateConfig.Plate.$clone();
                // Copies of the scene's material: Playworks exports what the scene references.
                this.tint = new UnityEngine.Material.$ctor1(this.slab.sharedMaterial);
                this.tint.SetColor$1(Playable.PlateView.BaseColor, this.rest);
                this.slab.sharedMaterial = this.tint;
                if (this.cracks.length > 0) {
                    this.dark = new UnityEngine.Material.$ctor1(this.cracks[0].sharedMaterial);
                    this.dark.SetColor$1(Playable.PlateView.BaseColor, Playable.PlateConfig.Crack);
                    $t = Bridge.getEnumerator(this.cracks);
                    try {
                        while ($t.moveNext()) {
                            var crack = $t.Current;
                            crack.sharedMaterial = this.dark;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                this.home = this.transform.localPosition.$clone();
                this.transform.localScale = pc.Vec3.ZERO.clone();
                this.gameObject.SetActive(true);
            },
            /*Playable.PlateView.Show end.*/

            /*Playable.PlateView.PopIn start.*/
            /**
             * 0 → overshoot → 1 after <b />; <b /> at the top of the bounce.
             *
             * @instance
             * @this Playable.PlateView
             * @memberof Playable.PlateView
             * @param   {number}           delay     
             * @param   {System.Action}    popped
             * @return  {void}
             */
            PopIn: function (delay, popped) {
if ( TRACE ) { TRACE( "Playable.PlateView#PopIn", this ); }

                Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.PlateConfig.PopOvershoot ), Playable.PlateConfig.PopUpSeconds, Playable.Ease.OutQuad, delay, Bridge.fn.bind(this, function () {
                    popped();
                    Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ), Playable.PlateConfig.PopDownSeconds, Playable.Ease.InOutQuad);
                }));
            },
            /*Playable.PlateView.PopIn end.*/

            /*Playable.PlateView.Glow start.*/
            Glow: function (on) {
if ( TRACE ) { TRACE( "Playable.PlateView#Glow", this ); }

                this.Glowing = on;
                Playable.Tween.Tint(this.tint, on ? Playable.PlateConfig.Glow.$clone() : this.rest.$clone(), Playable.PlateConfig.GlowSeconds);
            },
            /*Playable.PlateView.Glow end.*/

            /*Playable.PlateView.Crumble start.*/
            /**
             * Shrinks and sinks away after <b />, then is switched off; <b /> as it starts.
             Switched off, never destroyed: in the Playworks build an Instantiate after a Destroy failed (2026-10-02), and the
             island change makes plates after others have gone.
             *
             * @instance
             * @this Playable.PlateView
             * @memberof Playable.PlateView
             * @param   {number}           delay      
             * @param   {System.Action}    started
             * @return  {void}
             */
            Crumble: function (delay, started) {
if ( TRACE ) { TRACE( "Playable.PlateView#Crumble", this ); }

                Playable.Tween.Delay(this, delay, Bridge.fn.bind(this, function () {
                    started();
                    Playable.Tween.Scale(this.transform, pc.Vec3.ZERO.clone(), Playable.PlateConfig.CrumbleSeconds, Playable.Ease.InQuad, 0.0, Bridge.fn.bind(this, function () {
                        this.gameObject.SetActive(false);
                    }));
                    Playable.Tween.Move(this.transform, this.home.$clone().add( pc.Vec3.DOWN.clone().clone().scale( Playable.PlateConfig.CrumbleDrop ) ), Playable.PlateConfig.CrumbleSeconds, Playable.Ease.InQuad);
                }));
            },
            /*Playable.PlateView.Crumble end.*/

            /*Playable.PlateView.Dip start.*/
            Dip: function () {
if ( TRACE ) { TRACE( "Playable.PlateView#Dip", this ); }

                Playable.Tween.Move(this.transform, this.home.$clone().add( pc.Vec3.DOWN.clone().clone().scale( Playable.PlateConfig.DipDepth ) ), Playable.PlateConfig.DipDownSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Move(this.transform, this.home, Playable.PlateConfig.DipUpSeconds, Playable.Ease.OutQuad);
                }));
            },
            /*Playable.PlateView.Dip end.*/

            /*Playable.PlateView.Drop start.*/
            /**
             * Falls away from wherever it is, then is switched off (see {@link }).
             *
             * @instance
             * @this Playable.PlateView
             * @memberof Playable.PlateView
             * @return  {void}
             */
            Drop: function () {
if ( TRACE ) { TRACE( "Playable.PlateView#Drop", this ); }

                Playable.Tween.Move(this.transform, this.home.$clone().add( pc.Vec3.DOWN.clone().clone().scale( Playable.PlateConfig.DropDistance ) ), Playable.PlateConfig.DropSeconds, Playable.Ease.InQuad, 0.0, Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));
            },
            /*Playable.PlateView.Drop end.*/

            /*Playable.PlateView.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Playable.PlateView#OnDestroy", this ); }

                if (this.tint != null) {
                    UnityEngine.Object.Destroy(this.tint);
                }
                if (this.dark != null) {
                    UnityEngine.Object.Destroy(this.dark);
                }
            },
            /*Playable.PlateView.OnDestroy end.*/


        }
    });
    /*Playable.PlateView end.*/

    /*Playable.PlayableAd start.*/
    /**
     * The only code that talks to the ad network, through Unity Playworks (Luna). The game calls
     {@link } from a deliberate tap (CTA button, end card) and {@link }
     when the end card shows (Mintegral and Vungle reject playables without it).
     Luna's API is referenced unconditionally so the editor compiler checks it, and called only
     outside the editor: in the editor InstallFullGame has no store to open, and a PlayMode run
     must not open a browser. Nothing else in the project references Luna.Unity.*.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.PlayableAd
     */
    Bridge.define("Playable.PlayableAd", {
        statics: {
            fields: {
                /**
                 * How many times the store was requested — the PlayMode journey asserts on it.
                 *
                 * @static
                 * @public
                 * @memberof Playable.PlayableAd
                 * @function InstallCalls
                 * @type number
                 */
                InstallCalls: 0,
                Ended: false,
                Paused: false
            },
            events: {
                /**
                 * Raised when the container hides or shows the ad.
                 *
                 * @static
                 * @public
                 * @this Playable.PlayableAd
                 * @memberof Playable.PlayableAd
                 * @function addPauseChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Raised when the container hides or shows the ad.
                 *
                 * @static
                 * @public
                 * @this Playable.PlayableAd
                 * @memberof Playable.PlayableAd
                 * @function removePauseChanged
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                PauseChanged: null
            },
            methods: {
                /*Playable.PlayableAd.Install:static start.*/
                Install: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#Install", this ); }

                    Playable.PlayableAd.InstallCalls = (Playable.PlayableAd.InstallCalls + 1) | 0;
                    if (UnityEngine.Application.isEditor) {
                        UnityEngine.Debug.Log$1("[PlayableAd] Install \u2014 in the build Luna.Unity.Playable.InstallFullGame() opens the store");
                        return;
                    }
                    Luna.Unity.Playable.InstallFullGame();
                },
                /*Playable.PlayableAd.Install:static end.*/

                /*Playable.PlayableAd.GameEnded:static start.*/
                GameEnded: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#GameEnded", this ); }

                    if (Playable.PlayableAd.Ended) {
                        return;
                    }
                    Playable.PlayableAd.Ended = true;
                    if (!UnityEngine.Application.isEditor) {
                        Luna.Unity.LifeCycle.GameEnded();
                    }
                },
                /*Playable.PlayableAd.GameEnded:static end.*/

                /*Playable.PlayableAd.SetPaused:static start.*/
                /**
                 * Pause or resume the whole playable: time, sound, and whoever listens.
                 *
                 * @static
                 * @public
                 * @this Playable.PlayableAd
                 * @memberof Playable.PlayableAd
                 * @param   {boolean}    paused
                 * @return  {void}
                 */
                SetPaused: function (paused) {
if ( TRACE ) { TRACE( "Playable.PlayableAd#SetPaused", this ); }

                    if (Playable.PlayableAd.Paused === paused) {
                        return;
                    }
                    Playable.PlayableAd.Paused = paused;
                    // Not AudioListener.pause: Luna's UnityEngine has no such member (CS0117 at the
                    // Playworks build, 2026-10-01). Volume exists on both sides.
                    UnityEngine.AudioListener.volume = paused ? 0.0 : 1.0;
                    UnityEngine.Time.timeScale = paused ? 0.0 : 1.0;
                    !Bridge.staticEquals(Playable.PlayableAd.PauseChanged, null) ? Playable.PlayableAd.PauseChanged(paused) : null;
                },
                /*Playable.PlayableAd.SetPaused:static end.*/

                /*Playable.PlayableAd.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.PlayableAd.InstallCalls = 0;
                    Playable.PlayableAd.Ended = false;
                    Playable.PlayableAd.Paused = false;
                    Playable.PlayableAd.PauseChanged = null;
                },
                /*Playable.PlayableAd.ResetStatics:static end.*/

                /*Playable.PlayableAd.SubscribeToContainer:static start.*/
                SubscribeToContainer: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#SubscribeToContainer", this ); }

                    if (UnityEngine.Application.isEditor) {
                        return;
                    }
                    Luna.Unity.LifeCycle.addOnPause(Playable.PlayableAd.OnContainerPause);
                    Luna.Unity.LifeCycle.addOnResume(Playable.PlayableAd.OnContainerResume);
                },
                /*Playable.PlayableAd.SubscribeToContainer:static end.*/

                /*Playable.PlayableAd.OnContainerPause:static start.*/
                OnContainerPause: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#OnContainerPause", this ); }

                    Playable.PlayableAd.SetPaused(true);
                },
                /*Playable.PlayableAd.OnContainerPause:static end.*/

                /*Playable.PlayableAd.OnContainerResume:static start.*/
                OnContainerResume: function () {
if ( TRACE ) { TRACE( "Playable.PlayableAd#OnContainerResume", this ); }

                    Playable.PlayableAd.SetPaused(false);
                },
                /*Playable.PlayableAd.OnContainerResume:static end.*/


            }
        }
    });
    /*Playable.PlayableAd end.*/

    /*Playable.PlayableInput start.*/
    /**
     * One tap = one event, from a finger, a mouse, or a PlayMode test. Legacy Input on purpose:
     it is what Unity Playworks converts (the Input System package is not supported there).
     The game listens to {@link } and never reads Input itself, so the journey
     test can play it with {@link }.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.PlayableInput
     */
    Bridge.define("Playable.PlayableInput", {
        statics: {
            fields: {
                TapCount: 0
            },
            events: {
                /**
                 * Screen position in pixels, origin bottom-left (Unity's screen space).
                 *
                 * @static
                 * @public
                 * @this Playable.PlayableInput
                 * @memberof Playable.PlayableInput
                 * @function addTapped
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Screen position in pixels, origin bottom-left (Unity's screen space).
                 *
                 * @static
                 * @public
                 * @this Playable.PlayableInput
                 * @memberof Playable.PlayableInput
                 * @function removeTapped
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Tapped: null
            },
            methods: {
                /*Playable.PlayableInput.Simulate:static start.*/
                Simulate: function (screenPosition) {
if ( TRACE ) { TRACE( "Playable.PlayableInput#Simulate", this ); }

                    Playable.PlayableInput.Raise(screenPosition);
                },
                /*Playable.PlayableInput.Simulate:static end.*/

                /*Playable.PlayableInput.Raise:static start.*/
                Raise: function (screenPosition) {
if ( TRACE ) { TRACE( "Playable.PlayableInput#Raise", this ); }

                    Playable.PlayableInput.TapCount = (Playable.PlayableInput.TapCount + 1) | 0;
                    !Bridge.staticEquals(Playable.PlayableInput.Tapped, null) ? Playable.PlayableInput.Tapped(screenPosition.$clone()) : null;
                },
                /*Playable.PlayableInput.Raise:static end.*/

                /*Playable.PlayableInput.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.PlayableInput#ResetStatics", this ); }

                    Playable.PlayableInput.Tapped = null;
                    Playable.PlayableInput.TapCount = 0;
                },
                /*Playable.PlayableInput.ResetStatics:static end.*/


            }
        }
    });
    /*Playable.PlayableInput end.*/

    /*Playable.PlayableInputSource start.*/
    /**
     * Put one in the scene: it turns the device's touch or click into {@link }.
     Its own file on purpose: Unity binds a serialized component to its script by FILE name. Kept
     inside PlayableInput.cs it worked in the editor and was silently dropped by the Playworks
     export — no input at all in the ad (found by the browser QA on 2026-10-01). One
     MonoBehaviour per file, named like the file.
     *
     * @public
     * @class Playable.PlayableInputSource
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.PlayableInputSource", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Playable.PlayableInputSource.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.PlayableInputSource#Update", this ); }

                for (var i = 0; i < UnityEngine.Input.touchCount; i = (i + 1) | 0) {
                    var touch = UnityEngine.Input.GetTouch(i);
                    if (touch.phase !== UnityEngine.TouchPhase.Began) {
                        continue;
                    }
                    Playable.PlayableInput.Raise(touch.position);
                    return;
                }
                // Touches are usually mirrored as mouse input too; take the mouse only when no finger
                // is down, or one tap would count twice.
                if (UnityEngine.Input.touchCount === 0 && UnityEngine.Input.GetMouseButtonDown(0)) {
                    Playable.PlayableInput.Raise(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }
            },
            /*Playable.PlayableInputSource.Update end.*/


        }
    });
    /*Playable.PlayableInputSource end.*/

    /*Playable.ScoreHud start.*/
    /**
     * The score: the counter top-left reads the safe hops so far and punches when it changes; a "+1" pops
     over the plate each one landed on. Both on {@link }, whose hops are the score. The
     counter, its number and the "+1"s are scene objects the scene builder made (HudScene).
     *
     * @public
     * @class Playable.ScoreHud
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.ScoreHud", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            score: null,
            popups: null,
            next: 0
        },
        methods: {
            /*Playable.ScoreHud.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.ScoreHud#OnEnable", this ); }

                Playable.HopController.addLanded(Bridge.fn.cacheBind(this, this.Show));
            },
            /*Playable.ScoreHud.OnEnable end.*/

            /*Playable.ScoreHud.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.ScoreHud#OnDisable", this ); }

                Playable.HopController.removeLanded(Bridge.fn.cacheBind(this, this.Show));
            },
            /*Playable.ScoreHud.OnDisable end.*/

            /*Playable.ScoreHud.Show start.*/
            Show: function (cell, hops) {
if ( TRACE ) { TRACE( "Playable.ScoreHud#Show", this ); }

                this.score.text = Bridge.toString(hops);
                Playable.Tween.Scale(this.score.transform$1, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.HudConfig.Punch ), Playable.HudConfig.PunchUpSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Scale(this.score.transform$1, new pc.Vec3( 1, 1, 1 ), Playable.HudConfig.PunchDownSeconds, Playable.Ease.InOutQuad);
                }));
                this.popups[this.next].Show(new pc.Vec3( cell.x * Playable.FieldConfig.Spacing, Playable.HudConfig.PopupHeight, cell.y * Playable.FieldConfig.Spacing ));
                this.next = (((this.next + 1) | 0)) % this.popups.length;
            },
            /*Playable.ScoreHud.Show end.*/


        }
    });
    /*Playable.ScoreHud end.*/

    /*Playable.ScorePopup start.*/
    /**
     * One "+1": a text on the canvas kept over a point of the world — the original's BillboardText turned
     to the camera, exactly — that pops in, rises and fades, then hides until {@link } shows it again.
     On the canvas rather than in the world: TextMeshProUGUI is what the Playworks build is known to draw.
     One at a time: the next "+1" makes the one still showing fade out at once (HudConfig.PopupMakeWaySeconds).
     *
     * @public
     * @class Playable.ScorePopup
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.ScorePopup", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                last: null
            }
        },
        fields: {
            text: null,
            view: null,
            plane: 0,
            anchor: null,
            rise: 0,
            kept: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.ScorePopup#init", this ); }

                this.anchor = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*Playable.ScorePopup.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.ScorePopup#Awake", this ); }

                this.text = this.GetComponent(TMPro.TextMeshProUGUI);
                var canvas = this.GetComponentInParent(UnityEngine.Canvas);
                this.view = canvas.worldCamera;
                this.plane = canvas.planeDistance;
            },
            /*Playable.ScorePopup.Awake end.*/

            /*Playable.ScorePopup.Show start.*/
            /**
             * Pops in over the world point <b />, rises HudConfig.PopupRise and fades out.
             *
             * @instance
             * @public
             * @this Playable.ScorePopup
             * @memberof Playable.ScorePopup
             * @param   {UnityEngine.Vector3}    spot
             * @return  {void}
             */
            Show: function (spot) {
if ( TRACE ) { TRACE( "Playable.ScorePopup#Show", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(Playable.ScorePopup.last, null) && UnityEngine.MonoBehaviour.op_Inequality(Playable.ScorePopup.last, this)) {
                    Playable.ScorePopup.last.MakeWay();
                }
                Playable.ScorePopup.last = this;
                this.gameObject.SetActive(true);
                this.anchor = spot.$clone();
                this.rise = 0.0;
                this.kept = 1.0;
                this.text.alpha = 1.0;
                this.transform.localScale = pc.Vec3.ZERO.clone();
                Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.HudConfig.PopupOvershoot ), Playable.HudConfig.PopupUpSeconds, Playable.Ease.OutQuad, 0.0, Bridge.fn.bind(this, function () {
                    Playable.Tween.Scale(this.transform, new pc.Vec3( 1, 1, 1 ), Playable.HudConfig.PopupDownSeconds, Playable.Ease.InOutQuad);
                }));
                Playable.Tween.Value(this, Playable.HudConfig.PopupSeconds, Bridge.fn.bind(this, function (t) {
                    this.rise = Playable.HudConfig.PopupRise * Playable.Tween.Eased(Playable.Ease.OutQuad, t);
                    this.text.alpha = this.kept * Math.max(0, Math.min(1, (1.0 - t) * Playable.HudConfig.PopupSeconds / Playable.HudConfig.PopupFadeSeconds));
                }), Playable.Ease.Linear, 0.0, Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));
            },
            /*Playable.ScorePopup.Show end.*/

            /*Playable.ScorePopup.MakeWay start.*/
            /**
             * A newer "+1" popped in a plate away: this one fades out over HudConfig.PopupMakeWaySeconds rather
             than sit under it.
             *
             * @instance
             * @private
             * @this Playable.ScorePopup
             * @memberof Playable.ScorePopup
             * @return  {void}
             */
            MakeWay: function () {
if ( TRACE ) { TRACE( "Playable.ScorePopup#MakeWay", this ); }

                if (this.gameObject.activeSelf) {
                    Playable.Tween.Value(this, Playable.HudConfig.PopupMakeWaySeconds, Bridge.fn.bind(this, function (t) {
                        this.kept = 1.0 - t;
                    }));
                }
            },
            /*Playable.ScorePopup.MakeWay end.*/

            /*Playable.ScorePopup.LateUpdate start.*/
            /**
             * Onto the canvas plane where the camera sees the risen point, every frame: the camera may move.
             *
             * @instance
             * @private
             * @this Playable.ScorePopup
             * @memberof Playable.ScorePopup
             * @return  {void}
             */
            LateUpdate: function () {
if ( TRACE ) { TRACE( "Playable.ScorePopup#LateUpdate", this ); }

                var screen = this.view.WorldToScreenPoint(this.anchor.$clone().add( pc.Vec3.UP.clone().clone().scale( this.rise ) ));
                screen.z = this.plane;
                this.transform.position = this.view.ScreenToWorldPoint(screen);
            },
            /*Playable.ScorePopup.LateUpdate end.*/


        }
    });
    /*Playable.ScorePopup end.*/

    /*Playable.Sfx start.*/
    /**
     * The original's sound effects, 2D one-shots at SfxConfig's volumes: TileSpawn as a plate pops in,
     TileDelete as one starts to crumble, jump at a take-off, step and ScoreAdd at a safe landing, Fall as a fall
     starts, MatchGoal at the island change and the win. Nothing before the first touch — the first island's wave is
     silent, as a browser keeps audio locked until a gesture anyway — and nothing while PlayableAd pauses: what is
     playing then stops (Luna's AudioListener has volume but no pause). Plates that pop or crumble at the same moment
     make one sound: one clip started N times at once is N times as loud. Each sound is logged as "[Sfx] clip", so
     the build's console shows them.
     The clips are this component's own references, not the AudioSources' clips: Unity 6 keeps an AudioSource's clip
     as an AudioResource, which no Playworks build here has exported yet.
     *
     * @public
     * @class Playable.Sfx
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.Sfx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                /**
                 * A sound started.
                 *
                 * @static
                 * @public
                 * @this Playable.Sfx
                 * @memberof Playable.Sfx
                 * @function addPlayed
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * A sound started.
                 *
                 * @static
                 * @public
                 * @this Playable.Sfx
                 * @memberof Playable.Sfx
                 * @function removePlayed
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                Played: null
            },
            methods: {
                /*Playable.Sfx.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.Sfx.Played = null;
                },
                /*Playable.Sfx.ResetStatics:static end.*/


            }
        },
        fields: {
            voice: null,
            crumbles: null,
            tileSpawn: null,
            tileDelete: null,
            jump: null,
            step: null,
            scoreAdd: null,
            fall: null,
            matchGoal: null,
            taps: 0,
            spawnedAt: 0,
            removedAt: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#init", this ); }

                this.spawnedAt = -1.0;
                this.removedAt = -1.0;
            }
        },
        methods: {
            /*Playable.Sfx.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#Awake", this ); }

                this.taps = Playable.PlayableInput.TapCount;
            },
            /*Playable.Sfx.Awake end.*/

            /*Playable.Sfx.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#OnEnable", this ); }

                Playable.PlatesView.addPlateSpawned(Bridge.fn.cacheBind(this, this.OnPlateSpawned));
                Playable.PlatesView.addPlateRemoved(Bridge.fn.cacheBind(this, this.OnPlateRemoved));
                Playable.HopController.addHopStarted(Bridge.fn.cacheBind(this, this.OnHopStarted));
                Playable.HopController.addLanded(Bridge.fn.cacheBind(this, this.OnLanded));
                Playable.HopController.addFell(Bridge.fn.cacheBind(this, this.OnFell));
                Playable.GameFlow.addIslandChanged(Bridge.fn.cacheBind(this, this.OnIslandChanged));
                Playable.GameFlow.addEnded(Bridge.fn.cacheBind(this, this.OnEnded));
                Playable.PlayableAd.addPauseChanged(Bridge.fn.cacheBind(this, this.OnPauseChanged));
            },
            /*Playable.Sfx.OnEnable end.*/

            /*Playable.Sfx.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#OnDisable", this ); }

                Playable.PlatesView.removePlateSpawned(Bridge.fn.cacheBind(this, this.OnPlateSpawned));
                Playable.PlatesView.removePlateRemoved(Bridge.fn.cacheBind(this, this.OnPlateRemoved));
                Playable.HopController.removeHopStarted(Bridge.fn.cacheBind(this, this.OnHopStarted));
                Playable.HopController.removeLanded(Bridge.fn.cacheBind(this, this.OnLanded));
                Playable.HopController.removeFell(Bridge.fn.cacheBind(this, this.OnFell));
                Playable.GameFlow.removeIslandChanged(Bridge.fn.cacheBind(this, this.OnIslandChanged));
                Playable.GameFlow.removeEnded(Bridge.fn.cacheBind(this, this.OnEnded));
                Playable.PlayableAd.removePauseChanged(Bridge.fn.cacheBind(this, this.OnPauseChanged));
            },
            /*Playable.Sfx.OnDisable end.*/

            /*Playable.Sfx.OnPlateSpawned start.*/
            OnPlateSpawned: function (at) {
if ( TRACE ) { TRACE( "Playable.Sfx#OnPlateSpawned", this ); }

                if (this.spawnedAt === UnityEngine.Time.time) {
                    return;
                }
                this.spawnedAt = UnityEngine.Time.time;
                this.Play(this.voice, this.tileSpawn, Playable.SfxConfig.TileSpawn);
            },
            /*Playable.Sfx.OnPlateSpawned end.*/

            /*Playable.Sfx.OnPlateRemoved start.*/
            OnPlateRemoved: function (at) {
if ( TRACE ) { TRACE( "Playable.Sfx#OnPlateRemoved", this ); }

                if (this.removedAt === UnityEngine.Time.time) {
                    return;
                }
                this.removedAt = UnityEngine.Time.time;
                this.Play(this.crumbles, this.tileDelete, Playable.SfxConfig.TileDelete);
            },
            /*Playable.Sfx.OnPlateRemoved end.*/

            /*Playable.Sfx.OnHopStarted start.*/
            OnHopStarted: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#OnHopStarted", this ); }

                this.Play(this.voice, this.jump, Playable.SfxConfig.Jump);
            },
            /*Playable.Sfx.OnHopStarted end.*/

            /*Playable.Sfx.OnLanded start.*/
            OnLanded: function (cell, score) {
if ( TRACE ) { TRACE( "Playable.Sfx#OnLanded", this ); }

                this.Play(this.voice, this.step, Playable.SfxConfig.Step);
                this.Play(this.voice, this.scoreAdd, Playable.SfxConfig.ScoreAdd);
            },
            /*Playable.Sfx.OnLanded end.*/

            /*Playable.Sfx.OnFell start.*/
            OnFell: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#OnFell", this ); }

                this.Play(this.voice, this.fall, Playable.SfxConfig.Fall);
            },
            /*Playable.Sfx.OnFell end.*/

            /*Playable.Sfx.OnIslandChanged start.*/
            OnIslandChanged: function () {
if ( TRACE ) { TRACE( "Playable.Sfx#OnIslandChanged", this ); }

                this.Play(this.voice, this.matchGoal, Playable.SfxConfig.MatchGoal);
            },
            /*Playable.Sfx.OnIslandChanged end.*/

            /*Playable.Sfx.OnEnded start.*/
            OnEnded: function (won, score) {
if ( TRACE ) { TRACE( "Playable.Sfx#OnEnded", this ); }

                if (won) {
                    this.Play(this.voice, this.matchGoal, Playable.SfxConfig.MatchGoal);
                }
            },
            /*Playable.Sfx.OnEnded end.*/

            /*Playable.Sfx.OnPauseChanged start.*/
            OnPauseChanged: function (paused) {
if ( TRACE ) { TRACE( "Playable.Sfx#OnPauseChanged", this ); }

                if (paused) {
                    this.voice.Stop();
                    this.crumbles.Stop();
                }
                UnityEngine.Debug.Log$1(paused ? "[Sfx] paused: stopped, silent" : "[Sfx] resumed");
            },
            /*Playable.Sfx.OnPauseChanged end.*/

            /*Playable.Sfx.Play start.*/
            /**
             * Once, over whatever the source still plays: the crumbles of a wave overlap.
             *
             * @instance
             * @private
             * @this Playable.Sfx
             * @memberof Playable.Sfx
             * @param   {UnityEngine.AudioSource}    source    
             * @param   {UnityEngine.AudioClip}      clip      
             * @param   {number}                     volume
             * @return  {void}
             */
            Play: function (source, clip, volume) {
if ( TRACE ) { TRACE( "Playable.Sfx#Play", this ); }

                if (Playable.PlayableAd.Paused || Playable.PlayableInput.TapCount === this.taps) {
                    return;
                }
                source.PlayOneShot$1(clip, volume);
                UnityEngine.Debug.Log$1(System.String.format("[Sfx] {0}", [clip.name]));
                if (!Bridge.staticEquals(Playable.Sfx.Played, null)) {
                    Playable.Sfx.Played(clip);
                }
            },
            /*Playable.Sfx.Play end.*/


        }
    });
    /*Playable.Sfx end.*/

    /*Playable.SfxConfig start.*/
    /**
     * The sounds: the volumes of the original's AudioSources (its MainScene and Tile.prefab), at which
     {@link } plays each clip as a 2D one-shot, at pitch 1 unless a pitch is given. The original's names in
     brackets.
     *
     * @static
     * @abstract
     * @public
     * @class Playable.SfxConfig
     */
    Bridge.define("Playable.SfxConfig", {
        statics: {
            fields: {
                /**
                 * A plate pops in, at the top of its bounce [Tile.prefab's TileSpawnSound].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.08
                 * @type number
                 */
                TileSpawn: 0,
                /**
                 * A plate starts to crumble [Tile.prefab's TileDeleteSound, at pitch 0.8].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.08
                 * @type number
                 */
                TileDelete: 0,
                TileDeletePitch: 0,
                /**
                 * A hop takes off [Jump].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.5
                 * @type number
                 */
                Jump: 0,
                /**
                 * A safe landing [Steps: step.ogg looped from the match's start at pitch 0, so never heard].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.5
                 * @type number
                 */
                Step: 0,
                /**
                 * The score's +1, with the landing [ScoreAdd: its Play() was commented out in ScoreUI].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.1
                 * @type number
                 */
                ScoreAdd: 0,
                /**
                 * A fall begins [Fall].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.1
                 * @type number
                 */
                Fall: 0,
                /**
                 * The island change and the win [MatchGoal, at every new goal but the first].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.SfxConfig
                 * @default 0.07
                 * @type number
                 */
                MatchGoal: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.SfxConfig#init", this ); }

                    this.TileSpawn = 0.08;
                    this.TileDelete = 0.08;
                    this.TileDeletePitch = 0.8;
                    this.Jump = 0.5;
                    this.Step = 0.5;
                    this.ScoreAdd = 0.1;
                    this.Fall = 0.1;
                    this.MatchGoal = 0.07;
                }
            }
        }
    });
    /*Playable.SfxConfig end.*/

    /*Playable.Tutorial start.*/
    /**
     * The tutorial. When input first opens ({@link }) the hand and "TAP TO JUMP!"
     scale in, the hand pulsing; the hop of a tap ({@link }) sends them away, and later
     Readys do not bring them back. With input open and no tap the hand alone returns after TutorialConfig.ReturnSeconds,
     and after IdleSeconds {@link } is raised, once. The clock runs only while a tap would hop: a hop
     in the air, a fall, closed input (the win, an end card) never count as idle. It counts from the last Ready — a tap
     closes input and only a Ready opens it again — not from an Update that saw input closed: one long frame can start
     and land a hop between two Updates.
     *
     * @public
     * @class Playable.Tutorial
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.Tutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                /**
                 * IdleSeconds with input open and no tap: the player is not playing, the end card takes over.
                 Raised once; the tutorial is gone by then.
                 *
                 * @static
                 * @public
                 * @this Playable.Tutorial
                 * @memberof Playable.Tutorial
                 * @function addIdleTimedOut
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * IdleSeconds with input open and no tap: the player is not playing, the end card takes over.
                 Raised once; the tutorial is gone by then.
                 *
                 * @static
                 * @public
                 * @this Playable.Tutorial
                 * @memberof Playable.Tutorial
                 * @function removeIdleTimedOut
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                IdleTimedOut: null
            },
            methods: {
                /*Playable.Tutorial.ScaleIn:static start.*/
                ScaleIn: function (target, done) {
if ( TRACE ) { TRACE( "Playable.Tutorial#ScaleIn", this ); }

                    target.localScale = pc.Vec3.ZERO.clone();
                    Playable.Tween.Scale(target, new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.TutorialConfig.Overshoot ), Playable.TutorialConfig.ScaleUpSeconds, Playable.Ease.OutQuad, 0.0, function () {
                        Playable.Tween.Scale(target, new pc.Vec3( 1, 1, 1 ), Playable.TutorialConfig.ScaleDownSeconds, Playable.Ease.OutQuad, 0.0, done);
                    });
                },
                /*Playable.Tutorial.ScaleIn:static end.*/

                /*Playable.Tutorial.Pulse:static start.*/
                /**
                 * 1 at the start of each beat, 1 − PulseDepth in its middle, smooth at both ends.
                 *
                 * @static
                 * @private
                 * @this Playable.Tutorial
                 * @memberof Playable.Tutorial
                 * @param   {number}    seconds
                 * @return  {number}
                 */
                Pulse: function (seconds) {
if ( TRACE ) { TRACE( "Playable.Tutorial#Pulse", this ); }

                    return 1.0 - Playable.TutorialConfig.PulseDepth * (1.0 - Math.cos(6.28318548 * seconds / Playable.TutorialConfig.PulseSeconds)) / 2.0;
                },
                /*Playable.Tutorial.Pulse:static end.*/

                /*Playable.Tutorial.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.Tutorial.IdleTimedOut = null;
                },
                /*Playable.Tutorial.ResetStatics:static end.*/


            }
        },
        fields: {
            hop: null,
            hand: null,
            hint: null,
            introduced: false,
            handShown: false,
            pulsing: false,
            pulseStart: 0,
            openedAt: 0,
            timedOut: false
        },
        methods: {
            /*Playable.Tutorial.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#OnEnable", this ); }

                Playable.HopController.addReady(Bridge.fn.cacheBind(this, this.OnReady));
                Playable.HopController.addHopStarted(Bridge.fn.cacheBind(this, this.Hide));
            },
            /*Playable.Tutorial.OnEnable end.*/

            /*Playable.Tutorial.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#OnDisable", this ); }

                Playable.HopController.removeReady(Bridge.fn.cacheBind(this, this.OnReady));
                Playable.HopController.removeHopStarted(Bridge.fn.cacheBind(this, this.Hide));
            },
            /*Playable.Tutorial.OnDisable end.*/

            /*Playable.Tutorial.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#Update", this ); }

                if (this.pulsing) {
                    this.hand.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( Playable.Tutorial.Pulse(UnityEngine.Time.time - this.pulseStart) );
                }
                if (this.timedOut || !this.hop.InputOpen) {
                    return;
                }
                var idle = UnityEngine.Time.time - this.openedAt;
                if (idle >= Playable.TutorialConfig.ReturnSeconds && !this.handShown) {
                    this.Show(false);
                }
                if (idle < Playable.TutorialConfig.IdleSeconds) {
                    return;
                }
                this.timedOut = true;
                this.Hide();
                if (!Bridge.staticEquals(Playable.Tutorial.IdleTimedOut, null)) {
                    Playable.Tutorial.IdleTimedOut();
                }
            },
            /*Playable.Tutorial.Update end.*/

            /*Playable.Tutorial.OnReady start.*/
            OnReady: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#OnReady", this ); }

                this.openedAt = UnityEngine.Time.time;
                if (this.introduced) {
                    return;
                }
                this.introduced = true;
                this.Show(true);
            },
            /*Playable.Tutorial.OnReady end.*/

            /*Playable.Tutorial.Show start.*/
            Show: function (withHint) {
if ( TRACE ) { TRACE( "Playable.Tutorial#Show", this ); }

                this.handShown = true;
                Playable.Tutorial.ScaleIn(this.hand, Bridge.fn.bind(this, function () {
                    this.pulsing = true;
                    this.pulseStart = UnityEngine.Time.time;
                }));
                if (withHint) {
                    Playable.Tutorial.ScaleIn(this.hint, null);
                }
            },
            /*Playable.Tutorial.Show end.*/

            /*Playable.Tutorial.Hide start.*/
            /**
             * Both out; a scale-in still running is replaced and never starts the pulse.
             *
             * @instance
             * @private
             * @this Playable.Tutorial
             * @memberof Playable.Tutorial
             * @return  {void}
             */
            Hide: function () {
if ( TRACE ) { TRACE( "Playable.Tutorial#Hide", this ); }

                this.handShown = false;
                this.pulsing = false;
                Playable.Tween.Scale(this.hand, pc.Vec3.ZERO.clone(), Playable.TutorialConfig.ScaleDownSeconds);
                Playable.Tween.Scale(this.hint, pc.Vec3.ZERO.clone(), Playable.TutorialConfig.ScaleDownSeconds);
            },
            /*Playable.Tutorial.Hide end.*/


        }
    });
    /*Playable.Tutorial end.*/

    /*Playable.TutorialConfig start.*/
    /**
     * The tutorial; the original's Tutorial values in brackets. Sizes are units of the main canvas
     (1080×1920 reference, match 0.5: about 0.4 px of a 390×844 phone in either orientation).
     *
     * @static
     * @abstract
     * @public
     * @class Playable.TutorialConfig
     */
    Bridge.define("Playable.TutorialConfig", {
        statics: {
            fields: {
                /**
                 * The hint, white in Benzin ["нажми на экран и не попади в ловушку", white, 60 on a canvas matching
                 height] ...
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @default "TAP TO JUMP!"
                 * @type string
                 */
                Hint: null,
                HintSize: 0,
                HintColor: null,
                /**
                 * ... over a copy of itself in a dark orange, ShadowOffset lower: white alone is lost on the cyan
                 [the original dimmed the whole screen to 86 % black behind it, which would hide the island].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @type UnityEngine.Color
                 */
                HintShadow: null,
                ShadowOffset: null,
                /**
                 * Where they stand, so the island, the beaver and the glowing target stay in view [both over the
                 island: the text 175 above the screen centre, the hand 149 below]. The hint this far above the screen centre:
                 a canvas unit spans about the same world distance in either orientation, so it sits just above the island in
                 both. The hand at this fraction of the screen from its bottom-left: below the island in portrait, right of it
                 in landscape, its fingertip clear of the rim trap at the island's right (FieldConfig.Seed's 2,1).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @default 300.0
                 * @type number
                 */
                HintAbove: 0,
                HandAt: null,
                /**
                 * HandPointer.png, its aspect kept [186 × 204].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @type UnityEngine.Vector2
                 */
                HandSize: null,
                /**
                 * Both scale in 0 → Overshoot over ScaleUpSeconds, then to 1 over ScaleDownSeconds, and out to 0 over
                 ScaleDownSeconds [1.1, 0.2 s, 0.1 s; the dim panel faded over 0.3 s].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @default 1.1
                 * @type number
                 */
                Overshoot: 0,
                ScaleUpSeconds: 0,
                ScaleDownSeconds: 0,
                /**
                 * Once in, the hand pulses down to 1 − PulseDepth and back every PulseSeconds [the GrowAndDown clip:
                 1 → 0.8 → 1 in 1.67 s].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @default 0.2
                 * @type number
                 */
                PulseDepth: 0,
                PulseSeconds: 0,
                /**
                 * With input open and no tap the hand comes back after ReturnSeconds, and after IdleSeconds the
                 tutorial gives up: Tutorial.IdleTimedOut, the end card follows [after 10 s without a tap the whole tutorial
                 came back].
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof Playable.TutorialConfig
                 * @default 3.0
                 * @type number
                 */
                ReturnSeconds: 0,
                IdleSeconds: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.TutorialConfig#init", this ); }

                    this.HintColor = new UnityEngine.Color();
                    this.HintShadow = new UnityEngine.Color();
                    this.ShadowOffset = new UnityEngine.Vector2();
                    this.HandAt = new UnityEngine.Vector2();
                    this.HandSize = new UnityEngine.Vector2();
                    this.Hint = "TAP TO JUMP!";
                    this.HintSize = 80.0;
                    this.HintColor = new pc.Color( 1, 1, 1, 1 );
                    this.HintShadow = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(184, 90, 18, 255));
                    this.ShadowOffset = new pc.Vec2( 0.0, -8.0 );
                    this.HintAbove = 300.0;
                    this.HandAt = new pc.Vec2( 0.8, 0.17 );
                    this.HandSize = new pc.Vec2( 200.0, 217.0 );
                    this.Overshoot = 1.1;
                    this.ScaleUpSeconds = 0.2;
                    this.ScaleDownSeconds = 0.1;
                    this.PulseDepth = 0.2;
                    this.PulseSeconds = 1.6667;
                    this.ReturnSeconds = 3.0;
                    this.IdleSeconds = 10.0;
                }
            }
        }
    });
    /*Playable.TutorialConfig end.*/

    /*Playable.Tween start.*/
    /**
     * The small tween helper the playable uses instead of the original's DOTween: a local position, a
     local scale or a material's colour driven to a value over time with an ease, after a delay, then a
     callback. Game time (Time.deltaTime), so a paused game (Time.timeScale 0) pauses its tweens.
     Move, Scale and Tint own their channel: a newer one on the same transform or material replaces the one
     running or waiting there, and the replaced one never calls back. Value and Delay run alongside anything.
     A destroyed target ends its tweens silently. A tween started from a callback steps from the next frame.
     The runner is made on first use in play mode; EditMode tests drive {@link } themselves.
     *
     * @public
     * @class Playable.Tween
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("Playable.Tween", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Free: 0,
                MoveChannel: 0,
                ScaleChannel: 0,
                TintChannel: 0,
                BaseColor: null,
                runs: null,
                runner: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Playable.Tween#init", this ); }

                    this.Free = -1;
                    this.MoveChannel = 0;
                    this.ScaleChannel = 1;
                    this.TintChannel = 2;
                    this.BaseColor = "_BaseColor";
                    this.runs = new (System.Collections.Generic.List$1(Playable.Tween.Run)).ctor();
                }
            },
            methods: {
                /*Playable.Tween.Move:static start.*/
                Move: function (target, to, seconds, ease, delay, done) {
if ( TRACE ) { TRACE( "Playable.Tween#Move", this ); }

                    if (ease === void 0) { ease = 2; }
                    if (delay === void 0) { delay = 0.0; }
                    if (done === void 0) { done = null; }
                    var from = pc.Vec3.ZERO.clone();
                    Playable.Tween.Add(target, Playable.Tween.MoveChannel, seconds, ease, delay, function () {
                        from = target.localPosition.$clone();
                    }, function (t) {
                        target.localPosition = new pc.Vec3().lerp( from, to, t );
                    }, done);
                },
                /*Playable.Tween.Move:static end.*/

                /*Playable.Tween.Scale:static start.*/
                Scale: function (target, to, seconds, ease, delay, done) {
if ( TRACE ) { TRACE( "Playable.Tween#Scale", this ); }

                    if (ease === void 0) { ease = 2; }
                    if (delay === void 0) { delay = 0.0; }
                    if (done === void 0) { done = null; }
                    var from = pc.Vec3.ZERO.clone();
                    Playable.Tween.Add(target, Playable.Tween.ScaleChannel, seconds, ease, delay, function () {
                        from = target.localScale.$clone();
                    }, function (t) {
                        target.localScale = new pc.Vec3().lerp( from, to, t );
                    }, done);
                },
                /*Playable.Tween.Scale:static end.*/

                /*Playable.Tween.Tint:static start.*/
                /**
                 * The material's _BaseColor.
                 *
                 * @static
                 * @public
                 * @this Playable.Tween
                 * @memberof Playable.Tween
                 * @param   {UnityEngine.Material}    target     
                 * @param   {UnityEngine.Color}       to         
                 * @param   {number}                  seconds    
                 * @param   {Playable.Ease}           ease       
                 * @param   {number}                  delay      
                 * @param   {System.Action}           done
                 * @return  {void}
                 */
                Tint: function (target, to, seconds, ease, delay, done) {
if ( TRACE ) { TRACE( "Playable.Tween#Tint", this ); }

                    if (ease === void 0) { ease = 2; }
                    if (delay === void 0) { delay = 0.0; }
                    if (done === void 0) { done = null; }
                    var from = new pc.Color( 1, 1, 1, 1 );
                    Playable.Tween.Add(target, Playable.Tween.TintChannel, seconds, ease, delay, function () {
                        from = target.GetColor$1(Playable.Tween.BaseColor);
                    }, function (t) {
                        target.SetColor$1(Playable.Tween.BaseColor, pc.Color.lerp( from, to, t ));
                    }, done);
                },
                /*Playable.Tween.Tint:static end.*/

                /*Playable.Tween.Value:static start.*/
                /**
                 * Anything else: <b /> gets the eased progress 0…1 every frame while
                 <b /> lives (a hop's arc, a text's alpha).
                 *
                 * @static
                 * @public
                 * @this Playable.Tween
                 * @memberof Playable.Tween
                 * @param   {UnityEngine.Object}    owner      
                 * @param   {number}                seconds    
                 * @param   {System.Action}         step       
                 * @param   {Playable.Ease}         ease       
                 * @param   {number}                delay      
                 * @param   {System.Action}         done
                 * @return  {void}
                 */
                Value: function (owner, seconds, step, ease, delay, done) {
if ( TRACE ) { TRACE( "Playable.Tween#Value", this ); }

                    if (ease === void 0) { ease = 0; }
                    if (delay === void 0) { delay = 0.0; }
                    if (done === void 0) { done = null; }
                    Playable.Tween.Add(owner, Playable.Tween.Free, seconds, ease, delay, null, step, done);
                },
                /*Playable.Tween.Value:static end.*/

                /*Playable.Tween.Delay:static start.*/
                /**
                 * <b /> after <b />, unless <b /> is
                 destroyed first.
                 *
                 * @static
                 * @public
                 * @this Playable.Tween
                 * @memberof Playable.Tween
                 * @param   {UnityEngine.Object}    owner      
                 * @param   {number}                seconds    
                 * @param   {System.Action}         then
                 * @return  {void}
                 */
                Delay: function (owner, seconds, then) {
if ( TRACE ) { TRACE( "Playable.Tween#Delay", this ); }

                    Playable.Tween.Add(owner, Playable.Tween.Free, 0.0, Playable.Ease.Linear, seconds, null, null, then);
                },
                /*Playable.Tween.Delay:static end.*/

                /*Playable.Tween.Eased:static start.*/
                Eased: function (ease, t) {
if ( TRACE ) { TRACE( "Playable.Tween#Eased", this ); }

                    switch (ease) {
                        case Playable.Ease.InQuad: 
                            return t * t;
                        case Playable.Ease.OutQuad: 
                            return 1.0 - (1.0 - t) * (1.0 - t);
                        case Playable.Ease.InOutQuad: 
                            return t < 0.5 ? 2.0 * t * t : 1.0 - 2.0 * (1.0 - t) * (1.0 - t);
                        default: 
                            return t;
                    }
                },
                /*Playable.Tween.Eased:static end.*/

                /*Playable.Tween.Advance:static start.*/
                /**
                 * Steps every tween by <b />: the runner's Update in play mode, a test's
                 hand otherwise.
                 *
                 * @static
                 * @public
                 * @this Playable.Tween
                 * @memberof Playable.Tween
                 * @param   {number}    deltaTime
                 * @return  {void}
                 */
                Advance: function (deltaTime) {
if ( TRACE ) { TRACE( "Playable.Tween#Advance", this ); }

                    var count = Playable.Tween.runs.Count; // tweens added by a callback below wait for the next frame
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        var run = Playable.Tween.runs.getItem(i);
                        if (run.Dead) {
                            continue;
                        }
                        if (run.Target == null) {
                            run.Dead = true;
                            continue;
                        }
                        run.Elapsed += deltaTime;
                        if (run.Elapsed < run.Delay) {
                            continue;
                        }
                        if (!run.Started) {
                            run.Started = true;
                            if (!Bridge.staticEquals(run.Begin, null)) {
                                run.Begin();
                            }
                        }
                        var t = run.Seconds > 0.0 ? Math.max(0, Math.min(1, (run.Elapsed - run.Delay) / run.Seconds)) : 1.0;
                        if (!Bridge.staticEquals(run.Step, null)) {
                            run.Step(Playable.Tween.Eased(run.Ease, t));
                        }
                        if (t < 1.0) {
                            continue;
                        }
                        run.Dead = true;
                        if (!Bridge.staticEquals(run.Done, null)) {
                            run.Done();
                        }
                    }
                    Playable.Tween.runs.RemoveAll(Playable.Tween.IsDead);
                },
                /*Playable.Tween.Advance:static end.*/

                /*Playable.Tween.Add:static start.*/
                Add: function (target, channel, seconds, ease, delay, begin, step, done) {
if ( TRACE ) { TRACE( "Playable.Tween#Add", this ); }

                    var $t, $t1;
                    if (channel !== Playable.Tween.Free) {
                        $t = Bridge.getEnumerator(Playable.Tween.runs);
                        try {
                            while ($t.moveNext()) {
                                var old = $t.Current;
                                if (old.Channel === channel && Bridge.referenceEquals(old.Target, target)) {
                                    old.Dead = true;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    Playable.Tween.runs.add(($t1 = new Playable.Tween.Run(), $t1.Target = target, $t1.Channel = channel, $t1.Seconds = seconds, $t1.Ease = ease, $t1.Delay = delay, $t1.Begin = begin, $t1.Step = step, $t1.Done = done, $t1));
                    if (UnityEngine.MonoBehaviour.op_Equality(Playable.Tween.runner, null) && UnityEngine.Application.isPlaying) {
                        Playable.Tween.runner = new UnityEngine.GameObject.$ctor2("Tween").AddComponent(Playable.Tween);
                    }
                },
                /*Playable.Tween.Add:static end.*/

                /*Playable.Tween.IsDead:static start.*/
                IsDead: function (run) {
if ( TRACE ) { TRACE( "Playable.Tween#IsDead", this ); }

                    return run.Dead;
                },
                /*Playable.Tween.IsDead:static end.*/

                /*Playable.Tween.ResetStatics:static start.*/
                ResetStatics: function () {
if ( TRACE ) { TRACE( "Playable.Tween#ResetStatics", this ); }

                    // Domain reload may be off in PlayMode runs: statics survive between tests otherwise.
                    Playable.Tween.runs.clear();
                    Playable.Tween.runner = null;
                },
                /*Playable.Tween.ResetStatics:static end.*/


            }
        },
        methods: {
            /*Playable.Tween.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Playable.Tween#Update", this ); }

                Playable.Tween.Advance(UnityEngine.Time.deltaTime);
            },
            /*Playable.Tween.Update end.*/

            /*Playable.Tween.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Playable.Tween#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(Playable.Tween.runner, this)) {
                    return;
                }
                Playable.Tween.runner = null;
                Playable.Tween.runs.clear(); // the scene went, and its tweens with it
            },
            /*Playable.Tween.OnDestroy end.*/


        }
    });
    /*Playable.Tween end.*/

    /*Playable.Tween+Run start.*/
    Bridge.define("Playable.Tween.Run", {
        $kind: 1002,
        fields: {
            Target: null,
            Channel: 0,
            Delay: 0,
            Seconds: 0,
            Elapsed: 0,
            Ease: 0,
            Begin: null,
            Step: null,
            Done: null,
            Started: false,
            Dead: false
        }
    });
    /*Playable.Tween+Run end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","Playable","System.Collections.Generic","UnityEngine.UI","TMPro"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Playable.CameraConfig start.*/
    $m("Playable.CameraConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Ambient","is":true,"t":4,"rt":$n[0].Color,"sn":"Ambient","ro":true},{"a":2,"n":"Background","is":true,"t":4,"rt":$n[0].Color,"sn":"Background","ro":true},{"a":2,"n":"DeadZone","is":true,"t":4,"rt":$n[1].Single,"sn":"DeadZone","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Distance","is":true,"t":4,"rt":$n[1].Single,"sn":"Distance","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FollowSpeed","is":true,"t":4,"rt":$n[1].Single,"sn":"FollowSpeed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"IslandHalf","is":true,"t":4,"rt":$n[1].Single,"sn":"IslandHalf","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LightIntensity","is":true,"t":4,"rt":$n[1].Single,"sn":"LightIntensity","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LightRotation","is":true,"t":4,"rt":$n[0].Quaternion,"sn":"LightRotation","ro":true},{"a":2,"n":"Margin","is":true,"t":4,"rt":$n[1].Single,"sn":"Margin","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ReturnSpeed","is":true,"t":4,"rt":$n[1].Single,"sn":"ReturnSpeed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Rotation","is":true,"t":4,"rt":$n[0].Quaternion,"sn":"Rotation","ro":true},{"a":2,"n":"ViewBottom","is":true,"t":4,"rt":$n[1].Single,"sn":"ViewBottom","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ViewTop","is":true,"t":4,"rt":$n[1].Single,"sn":"ViewTop","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.CameraConfig end.*/

    /*Playable.EndCardConfig start.*/
    $m("Playable.EndCardConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"FadeSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"FadeSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FellTitle","is":true,"t":4,"rt":$n[1].String,"sn":"FellTitle","ro":true},{"a":2,"n":"IdleTitle","is":true,"t":4,"rt":$n[1].String,"sn":"IdleTitle","ro":true},{"a":2,"n":"Ink","is":true,"t":4,"rt":$n[0].Color,"sn":"Ink","ro":true},{"a":2,"n":"Overlay","is":true,"t":4,"rt":$n[0].Color,"sn":"Overlay","ro":true},{"a":2,"n":"Overshoot","is":true,"t":4,"rt":$n[1].Single,"sn":"Overshoot","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PlayNow","is":true,"t":4,"rt":$n[1].String,"sn":"PlayNow","ro":true},{"a":2,"n":"PlayNowAt","is":true,"t":4,"rt":$n[0].Vector2,"sn":"PlayNowAt","ro":true},{"a":2,"n":"PlayNowFontSize","is":true,"t":4,"rt":$n[1].Single,"sn":"PlayNowFontSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PlayNowInk","is":true,"t":4,"rt":$n[0].Color,"sn":"PlayNowInk","ro":true},{"a":2,"n":"PlayNowPanel","is":true,"t":4,"rt":$n[0].Color,"sn":"PlayNowPanel","ro":true},{"a":2,"n":"PlayNowSize","is":true,"t":4,"rt":$n[0].Vector2,"sn":"PlayNowSize","ro":true},{"a":2,"n":"PulseScale","is":true,"t":4,"rt":$n[1].Single,"sn":"PulseScale","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PulseSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PulseSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScaleDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"ScaleDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScaleUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"ScaleUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScoreAt","is":true,"t":4,"rt":$n[0].Vector2,"sn":"ScoreAt","ro":true},{"a":2,"n":"ScoreBox","is":true,"t":4,"rt":$n[0].Vector2,"sn":"ScoreBox","ro":true},{"a":2,"n":"ScoreSize","is":true,"t":4,"rt":$n[1].Single,"sn":"ScoreSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TitleAt","is":true,"t":4,"rt":$n[0].Vector2,"sn":"TitleAt","ro":true},{"a":2,"n":"TitleBox","is":true,"t":4,"rt":$n[0].Vector2,"sn":"TitleBox","ro":true},{"a":2,"n":"TitleSize","is":true,"t":4,"rt":$n[1].Single,"sn":"TitleSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"WinTitle","is":true,"t":4,"rt":$n[1].String,"sn":"WinTitle","ro":true},{"a":2,"n":"Window","is":true,"t":4,"rt":$n[0].Color,"sn":"Window","ro":true},{"a":2,"n":"WindowSize","is":true,"t":4,"rt":$n[0].Vector2,"sn":"WindowSize","ro":true}]}; }, $n);
    /*Playable.EndCardConfig end.*/

    /*Playable.FieldConfig start.*/
    $m("Playable.FieldConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"BridgeTrapChance","is":true,"t":4,"rt":$n[1].Double,"sn":"BridgeTrapChance","ro":true,"box":function ($v) { return Bridge.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},{"a":2,"n":"BridgeTrapsMax","is":true,"t":4,"rt":$n[1].Int32,"sn":"BridgeTrapsMax","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"BridgeWidth","is":true,"t":4,"rt":$n[1].Int32,"sn":"BridgeWidth","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ChangeAtHop","is":true,"t":4,"rt":$n[1].Int32,"sn":"ChangeAtHop","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ChangeAtPlatesAround","is":true,"t":4,"rt":$n[1].Int32,"sn":"ChangeAtPlatesAround","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"IslandSize","is":true,"t":4,"rt":$n[1].Int32,"sn":"IslandSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"NewIslandDistance","is":true,"t":4,"rt":$n[1].Int32,"sn":"NewIslandDistance","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ObjectiveHop","is":true,"t":4,"rt":$n[1].Int32,"sn":"ObjectiveHop","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Seed","is":true,"t":4,"rt":$n[1].Int32,"sn":"Seed","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Spacing","is":true,"t":4,"rt":$n[1].Single,"sn":"Spacing","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TrapsMax","is":true,"t":4,"rt":$n[1].Int32,"sn":"TrapsMax","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TrapsMin","is":true,"t":4,"rt":$n[1].Int32,"sn":"TrapsMin","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"UpScreen","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector2Int),"sn":"UpScreen","ro":true}]}; }, $n);
    /*Playable.FieldConfig end.*/

    /*Playable.FlowConfig start.*/
    $m("Playable.FlowConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"BannerDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BannerFontSize","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerFontSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BannerOvershoot","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerOvershoot","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BannerPadding","is":true,"t":4,"rt":$n[0].Vector2,"sn":"BannerPadding","ro":true},{"a":2,"n":"BannerPanel","is":true,"t":4,"rt":$n[0].Color,"sn":"BannerPanel","ro":true},{"a":2,"n":"BannerText","is":true,"t":4,"rt":$n[0].Color,"sn":"BannerText","ro":true},{"a":2,"n":"BannerUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BannerWidth","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerWidth","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BannerY","is":true,"t":4,"rt":$n[1].Single,"sn":"BannerY","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"CameraTop","is":true,"t":4,"rt":$n[1].Single,"sn":"CameraTop","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"CrossBridgeText","is":true,"t":4,"rt":$n[1].String,"sn":"CrossBridgeText","ro":true},{"a":2,"n":"CrumbleStep","is":true,"t":4,"rt":$n[1].Single,"sn":"CrumbleStep","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LeaveTwoText","is":true,"t":4,"rt":$n[1].String,"sn":"LeaveTwoText","ro":true},{"a":2,"n":"NewIslandDelay","is":true,"t":4,"rt":$n[1].Single,"sn":"NewIslandDelay","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"WinSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"WinSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.FlowConfig end.*/

    /*Playable.HopConfig start.*/
    $m("Playable.HopConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DropInHeight","is":true,"t":4,"rt":$n[1].Single,"sn":"DropInHeight","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DropInSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"DropInSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"HopHeight","is":true,"t":4,"rt":$n[1].Single,"sn":"HopHeight","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"HopSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"HopSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LeftPlateDelay","is":true,"t":4,"rt":$n[1].Single,"sn":"LeftPlateDelay","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Puffs","is":true,"t":4,"rt":$n[1].Int32,"sn":"Puffs","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"StandHeight","is":true,"t":4,"rt":$n[1].Single,"sn":"StandHeight","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"StartYaw","is":true,"t":4,"rt":$n[1].Single,"sn":"StartYaw","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TurnSpeed","is":true,"t":4,"rt":$n[1].Single,"sn":"TurnSpeed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.HopConfig end.*/

    /*Playable.HudConfig start.*/
    $m("Playable.HudConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PopupColor","is":true,"t":4,"rt":$n[0].Color,"sn":"PopupColor","ro":true},{"a":2,"n":"PopupDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupFadeSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupFadeSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupFontSize","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupFontSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupHeight","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupHeight","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupMakeWaySeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupMakeWaySeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupOvershoot","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupOvershoot","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupRise","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupRise","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopupText","is":true,"t":4,"rt":$n[1].String,"sn":"PopupText","ro":true},{"a":2,"n":"PopupUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopupUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Popups","is":true,"t":4,"rt":$n[1].Int32,"sn":"Popups","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Punch","is":true,"t":4,"rt":$n[1].Single,"sn":"Punch","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PunchDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PunchDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PunchUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PunchUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScoreFontSize","is":true,"t":4,"rt":$n[1].Single,"sn":"ScoreFontSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScoreOffset","is":true,"t":4,"rt":$n[0].Vector2,"sn":"ScoreOffset","ro":true},{"a":2,"n":"ScorePanel","is":true,"t":4,"rt":$n[0].Color,"sn":"ScorePanel","ro":true},{"a":2,"n":"ScoreSize","is":true,"t":4,"rt":$n[0].Vector2,"sn":"ScoreSize","ro":true}]}; }, $n);
    /*Playable.HudConfig end.*/

    /*Playable.PlateConfig start.*/
    $m("Playable.PlateConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Crack","is":true,"t":4,"rt":$n[0].Color,"sn":"Crack","ro":true},{"a":2,"n":"CrumbleDrop","is":true,"t":4,"rt":$n[1].Single,"sn":"CrumbleDrop","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"CrumbleSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"CrumbleSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DipDepth","is":true,"t":4,"rt":$n[1].Single,"sn":"DipDepth","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DipDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"DipDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DipUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"DipUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DropDistance","is":true,"t":4,"rt":$n[1].Single,"sn":"DropDistance","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DropSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"DropSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Glow","is":true,"t":4,"rt":$n[0].Color,"sn":"Glow","ro":true},{"a":2,"n":"GlowSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"GlowSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Plate","is":true,"t":4,"rt":$n[0].Color,"sn":"Plate","ro":true},{"a":2,"n":"PopDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopOvershoot","is":true,"t":4,"rt":$n[1].Single,"sn":"PopOvershoot","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PopUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PopUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Size","is":true,"t":4,"rt":$n[0].Vector3,"sn":"Size","ro":true},{"a":2,"n":"Trap","is":true,"t":4,"rt":$n[0].Color,"sn":"Trap","ro":true},{"a":2,"n":"WaveStep","is":true,"t":4,"rt":$n[1].Single,"sn":"WaveStep","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.PlateConfig end.*/

    /*Playable.SfxConfig start.*/
    $m("Playable.SfxConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Fall","is":true,"t":4,"rt":$n[1].Single,"sn":"Fall","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Jump","is":true,"t":4,"rt":$n[1].Single,"sn":"Jump","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"MatchGoal","is":true,"t":4,"rt":$n[1].Single,"sn":"MatchGoal","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScoreAdd","is":true,"t":4,"rt":$n[1].Single,"sn":"ScoreAdd","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Step","is":true,"t":4,"rt":$n[1].Single,"sn":"Step","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TileDelete","is":true,"t":4,"rt":$n[1].Single,"sn":"TileDelete","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TileDeletePitch","is":true,"t":4,"rt":$n[1].Single,"sn":"TileDeletePitch","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TileSpawn","is":true,"t":4,"rt":$n[1].Single,"sn":"TileSpawn","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.SfxConfig end.*/

    /*Playable.TutorialConfig start.*/
    $m("Playable.TutorialConfig", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"HandAt","is":true,"t":4,"rt":$n[0].Vector2,"sn":"HandAt","ro":true},{"a":2,"n":"HandSize","is":true,"t":4,"rt":$n[0].Vector2,"sn":"HandSize","ro":true},{"a":2,"n":"Hint","is":true,"t":4,"rt":$n[1].String,"sn":"Hint","ro":true},{"a":2,"n":"HintAbove","is":true,"t":4,"rt":$n[1].Single,"sn":"HintAbove","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"HintColor","is":true,"t":4,"rt":$n[0].Color,"sn":"HintColor","ro":true},{"a":2,"n":"HintShadow","is":true,"t":4,"rt":$n[0].Color,"sn":"HintShadow","ro":true},{"a":2,"n":"HintSize","is":true,"t":4,"rt":$n[1].Single,"sn":"HintSize","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"IdleSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"IdleSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Overshoot","is":true,"t":4,"rt":$n[1].Single,"sn":"Overshoot","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PulseDepth","is":true,"t":4,"rt":$n[1].Single,"sn":"PulseDepth","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PulseSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"PulseSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ReturnSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"ReturnSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScaleDownSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"ScaleDownSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ScaleUpSeconds","is":true,"t":4,"rt":$n[1].Single,"sn":"ScaleUpSeconds","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ShadowOffset","is":true,"t":4,"rt":$n[0].Vector2,"sn":"ShadowOffset","ro":true}]}; }, $n);
    /*Playable.TutorialConfig end.*/

    /*Playable.HopOutcome start.*/
    $m("Playable.HopOutcome", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Safe","is":true,"t":4,"rt":$n[2].HopOutcome,"sn":"Safe","box":function ($v) { return Bridge.box($v, Playable.HopOutcome, System.Enum.toStringFn(Playable.HopOutcome));}},{"a":2,"n":"Trap","is":true,"t":4,"rt":$n[2].HopOutcome,"sn":"Trap","box":function ($v) { return Bridge.box($v, Playable.HopOutcome, System.Enum.toStringFn(Playable.HopOutcome));}},{"a":2,"n":"Void","is":true,"t":4,"rt":$n[2].HopOutcome,"sn":"Void","box":function ($v) { return Bridge.box($v, Playable.HopOutcome, System.Enum.toStringFn(Playable.HopOutcome));}}]}; }, $n);
    /*Playable.HopOutcome end.*/

    /*Playable.Objective start.*/
    $m("Playable.Objective", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CrossBridge","is":true,"t":4,"rt":$n[2].Objective,"sn":"CrossBridge","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}},{"a":2,"n":"LeaveTwo","is":true,"t":4,"rt":$n[2].Objective,"sn":"LeaveTwo","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[2].Objective,"sn":"None","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}}]}; }, $n);
    /*Playable.Objective end.*/

    /*Playable.IslandChange start.*/
    $m("Playable.IslandChange", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Vector2Int,$n[0].Vector2Int],"pi":[{"n":"direction","pt":$n[0].Vector2Int,"ps":0},{"n":"newCentre","pt":$n[0].Vector2Int,"ps":1}],"sn":"ctor"},{"a":2,"n":"Bridge","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"Bridge","ro":true},{"a":2,"n":"Direction","t":4,"rt":$n[0].Vector2Int,"sn":"Direction","ro":true},{"a":2,"n":"NewCentre","t":4,"rt":$n[0].Vector2Int,"sn":"NewCentre","ro":true},{"a":2,"n":"NewIsland","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"NewIsland","ro":true},{"a":2,"n":"Removed","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"Removed","ro":true}]}; }, $n);
    /*Playable.IslandChange end.*/

    /*Playable.Field start.*/
    $m("Playable.Field", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Int32],"pi":[{"n":"seed","pt":$n[1].Int32,"ps":0}],"sn":"ctor"},{"a":1,"n":"ChangeIsland","t":8,"sn":"ChangeIsland","rt":$n[1].Void},{"a":2,"n":"Facing","is":true,"t":8,"pi":[{"n":"yawDegrees","pt":$n[1].Single,"ps":0}],"sn":"Facing","rt":$n[0].Vector2Int,"p":[$n[1].Single]},{"a":2,"n":"Hop","t":8,"pi":[{"n":"step","pt":$n[0].Vector2Int,"ps":0}],"sn":"Hop","rt":$n[2].HopOutcome,"p":[$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, Playable.HopOutcome, System.Enum.toStringFn(Playable.HopOutcome));}},{"a":2,"n":"IsTrap","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"IsTrap","rt":$n[1].Boolean,"p":[$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Island","is":true,"t":8,"pi":[{"n":"centre","pt":$n[0].Vector2Int,"ps":0}],"sn":"Island","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[0].Vector2Int]},{"a":2,"n":"OutcomeAt","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"OutcomeAt","rt":$n[2].HopOutcome,"p":[$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, Playable.HopOutcome, System.Enum.toStringFn(Playable.HopOutcome));}},{"a":2,"n":"PlatesAround","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"PlatesAround","rt":$n[1].Int32,"p":[$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"SafeHopLeft","t":8,"sn":"SafeHopLeft","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TrapAround","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"TrapAround","rt":$n[1].Boolean,"p":[$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Beaver","t":16,"rt":$n[0].Vector2Int,"g":{"a":2,"n":"get_Beaver","t":8,"rt":$n[0].Vector2Int,"fg":"Beaver"},"s":{"a":1,"n":"set_Beaver","t":8,"p":[$n[0].Vector2Int],"rt":$n[1].Void,"fs":"Beaver"},"fn":"Beaver"},{"a":2,"n":"Change","t":16,"rt":$n[2].IslandChange,"g":{"a":2,"n":"get_Change","t":8,"rt":$n[2].IslandChange,"fg":"Change"},"s":{"a":1,"n":"set_Change","t":8,"p":[$n[2].IslandChange],"rt":$n[1].Void,"fs":"Change"},"fn":"Change"},{"a":2,"n":"Lost","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Lost","t":8,"rt":$n[1].Boolean,"fg":"Lost","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Lost","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Lost"},"fn":"Lost"},{"a":2,"n":"Objective","t":16,"rt":$n[2].Objective,"g":{"a":2,"n":"get_Objective","t":8,"rt":$n[2].Objective,"fg":"Objective","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}},"s":{"a":1,"n":"set_Objective","t":8,"p":[$n[2].Objective],"rt":$n[1].Void,"fs":"Objective"},"fn":"Objective"},{"a":2,"n":"Plates","t":16,"rt":$n[3].IEnumerable$1(UnityEngine.Vector2Int),"g":{"a":2,"n":"get_Plates","t":8,"rt":$n[3].IEnumerable$1(UnityEngine.Vector2Int),"fg":"Plates"},"fn":"Plates"},{"a":2,"n":"Score","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Score","t":8,"rt":$n[1].Int32,"fg":"Score","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Score","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Score"},"fn":"Score"},{"a":2,"n":"Won","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Won","t":8,"rt":$n[1].Boolean,"fg":"Won","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Won","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Won"},"fn":"Won"},{"a":1,"n":"Around","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector2Int),"sn":"Around","ro":true},{"a":1,"n":"Steps","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector2Int),"sn":"Steps","ro":true},{"a":1,"n":"newIsland","t":4,"rt":$n[3].HashSet$1(UnityEngine.Vector2Int),"sn":"newIsland","ro":true},{"a":1,"n":"plates","t":4,"rt":$n[3].Dictionary$2(UnityEngine.Vector2Int,System.Boolean),"sn":"plates","ro":true},{"a":1,"n":"rng","t":4,"rt":$n[1].Random,"sn":"rng","ro":true},{"a":1,"backing":true,"n":"<Beaver>k__BackingField","t":4,"rt":$n[0].Vector2Int,"sn":"Beaver"},{"a":1,"backing":true,"n":"<Change>k__BackingField","t":4,"rt":$n[2].IslandChange,"sn":"Change"},{"a":1,"backing":true,"n":"<Lost>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"Lost","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Objective>k__BackingField","t":4,"rt":$n[2].Objective,"sn":"Objective","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}},{"a":1,"backing":true,"n":"<Score>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"Score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Won>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"Won","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Playable.Field end.*/

    /*Playable.CameraRig start.*/
    $m("Playable.CameraRig", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Camera)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Fit","is":true,"t":8,"pi":[{"n":"boxes","pt":System.Array.type(UnityEngine.Bounds),"ps":0},{"n":"top","pt":$n[1].Single,"ps":1},{"n":"aspect","pt":$n[1].Single,"ps":2},{"n":"size","out":true,"pt":$n[1].Single,"ps":3}],"sn":"Fit","rt":$n[0].Vector3,"p":[System.Array.type(UnityEngine.Bounds),$n[1].Single,$n[1].Single,$n[1].Single]},{"a":2,"n":"FitSize","is":true,"t":8,"pi":[{"n":"aspect","pt":$n[1].Single,"ps":0}],"sn":"FitSize","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Follow","t":8,"sn":"Follow","rt":$n[1].Void},{"a":2,"n":"Frame","t":8,"pi":[{"n":"boxes","pt":System.Array.type(UnityEngine.Bounds),"ps":0},{"n":"top","pt":$n[1].Single,"ps":1}],"sn":"Frame","rt":$n[1].Void,"p":[System.Array.type(UnityEngine.Bounds),$n[1].Single]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"PositionFor","is":true,"t":8,"pi":[{"n":"focus","pt":$n[0].Vector3,"ps":0}],"sn":"PositionFor","rt":$n[0].Vector3,"p":[$n[0].Vector3]},{"a":1,"n":"Reach","is":true,"t":8,"pi":[{"n":"axis","pt":$n[0].Vector3,"ps":0},{"n":"half","pt":$n[0].Vector3,"ps":1}],"sn":"Reach","rt":$n[1].Single,"p":[$n[0].Vector3,$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Centre","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_Centre","t":8,"rt":$n[0].Vector3,"fg":"Centre"},"s":{"a":2,"n":"set_Centre","t":8,"p":[$n[0].Vector3],"rt":$n[1].Void,"fs":"Centre"},"fn":"Centre"},{"a":2,"n":"Target","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[0].Transform,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[0].Transform],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"n":"framed","t":4,"rt":System.Array.type(UnityEngine.Bounds),"sn":"framed"},{"a":1,"n":"framedSize","t":4,"rt":$n[1].Single,"sn":"framedSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"framedTop","t":4,"rt":$n[1].Single,"sn":"framedTop","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[0].Transform,"sn":"target"},{"a":1,"n":"view","t":4,"rt":$n[0].Camera,"sn":"view"},{"a":1,"n":"zoom","t":4,"rt":$n[1].Single,"sn":"zoom","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Centre>k__BackingField","t":4,"rt":$n[0].Vector3,"sn":"Centre"}]}; }, $n);
    /*Playable.CameraRig end.*/

    /*Playable.FlowState start.*/
    $m("Playable.FlowState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hook","is":true,"t":4,"rt":$n[2].FlowState,"sn":"Hook","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}},{"a":2,"n":"Lost","is":true,"t":4,"rt":$n[2].FlowState,"sn":"Lost","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}},{"a":2,"n":"Play","is":true,"t":4,"rt":$n[2].FlowState,"sn":"Play","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}},{"a":2,"n":"Won","is":true,"t":4,"rt":$n[2].FlowState,"sn":"Won","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}}]}; }, $n);
    /*Playable.FlowState end.*/

    /*Playable.GameFlow start.*/
    $m("Playable.GameFlow", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"End","is":true,"t":8,"pi":[{"n":"won","pt":$n[1].Boolean,"ps":0},{"n":"score","pt":$n[1].Int32,"ps":1}],"sn":"End","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].Int32]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnFell","t":8,"sn":"OnFell","rt":$n[1].Void},{"a":1,"n":"OnHopStarted","t":8,"sn":"OnHopStarted","rt":$n[1].Void},{"a":1,"n":"OnLanded","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"score","pt":$n[1].Int32,"ps":1}],"sn":"OnLanded","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Int32]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":2,"n":"State","t":16,"rt":$n[2].FlowState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[2].FlowState,"fg":"State","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}},"s":{"a":1,"n":"set_State","t":8,"p":[$n[2].FlowState],"rt":$n[1].Void,"fs":"State"},"fn":"State"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"banner","t":4,"rt":$n[2].ObjectiveBanner,"sn":"banner"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hop","t":4,"rt":$n[2].HopController,"sn":"hop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plates","t":4,"rt":$n[2].PlatesView,"sn":"plates"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transition","t":4,"rt":$n[2].IslandTransition,"sn":"transition"},{"a":2,"n":"Ended","is":true,"t":2,"ad":{"a":2,"n":"add_Ended","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEnded","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Ended","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEnded","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"IslandChanged","is":true,"t":2,"ad":{"a":2,"n":"add_IslandChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addIslandChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_IslandChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeIslandChanged","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":$n[2].FlowState,"sn":"State","box":function ($v) { return Bridge.box($v, Playable.FlowState, System.Enum.toStringFn(Playable.FlowState));}}]}; }, $n);
    /*Playable.GameFlow end.*/

    /*Playable.HopController start.*/
    $m("Playable.HopController", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.RequireComponent.ctor(Playable.BeaverView)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Aim","t":8,"sn":"Aim","rt":$n[1].Void},{"a":1,"n":"Arrive","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"outcome","pt":$n[2].HopOutcome,"ps":1}],"sn":"Arrive","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[2].HopOutcome]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"CloseInput","t":8,"sn":"CloseInput","rt":$n[1].Void},{"a":1,"n":"DropIn","t":8,"sn":"DropIn","rt":$n[1].Void},{"a":1,"n":"Fall","t":8,"sn":"Fall","rt":$n[1].Void},{"a":2,"n":"Hold","t":8,"sn":"Hold","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnTap","t":8,"pi":[{"n":"screen","pt":$n[0].Vector2,"ps":0}],"sn":"OnTap","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"Open","t":8,"sn":"Open","rt":$n[1].Void},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[1].Void},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":1,"n":"SpotOn","is":true,"t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"SpotOn","rt":$n[0].Vector3,"p":[$n[0].Vector2Int]},{"a":1,"n":"Touchdown","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Touchdown","rt":$n[1].Void,"p":[$n[0].Vector2Int]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"InputOpen","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_InputOpen","t":8,"rt":$n[1].Boolean,"fg":"InputOpen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"InputOpen"},{"a":1,"n":"beaver","t":4,"rt":$n[2].BeaverView,"sn":"beaver"},{"a":1,"n":"closed","t":4,"rt":$n[1].Boolean,"sn":"closed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"held","t":4,"rt":$n[1].Boolean,"sn":"held","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"open","t":4,"rt":$n[1].Boolean,"sn":"open","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plates","t":4,"rt":$n[2].PlatesView,"sn":"plates"},{"a":1,"n":"turning","t":4,"rt":$n[1].Boolean,"sn":"turning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"waiting","t":4,"rt":$n[1].Boolean,"sn":"waiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Fell","is":true,"t":2,"ad":{"a":2,"n":"add_Fell","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFell","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Fell","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFell","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"HopStarted","is":true,"t":2,"ad":{"a":2,"n":"add_HopStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addHopStarted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_HopStarted","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeHopStarted","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"Landed","is":true,"t":2,"ad":{"a":2,"n":"add_Landed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addLanded","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Landed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeLanded","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"Ready","is":true,"t":2,"ad":{"a":2,"n":"add_Ready","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addReady","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Ready","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeReady","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Playable.HopController end.*/

    /*Playable.IslandTransition start.*/
    $m("Playable.IslandTransition", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Distance","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Vector2Int,"ps":0},{"n":"b","pt":$n[0].Vector2Int,"ps":1}],"sn":"Distance","rt":$n[1].Int32,"p":[$n[0].Vector2Int,$n[0].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Framed","is":true,"t":8,"pi":[{"n":"field","pt":$n[2].Field,"ps":0},{"n":"cell","pt":$n[0].Vector2Int,"ps":1}],"sn":"Framed","rt":System.Array.type(UnityEngine.Bounds),"p":[$n[2].Field,$n[0].Vector2Int]},{"a":2,"n":"Landed","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Landed","rt":$n[1].Void,"p":[$n[0].Vector2Int]},{"a":2,"n":"Play","t":8,"pi":[{"n":"island","pt":$n[2].IslandChange,"ps":0},{"n":"beaver","pt":$n[0].Vector2Int,"ps":1}],"sn":"Play","rt":$n[1].Void,"p":[$n[2].IslandChange,$n[0].Vector2Int]},{"a":1,"n":"World","is":true,"t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"World","rt":$n[0].Vector3,"p":[$n[0].Vector2Int]},{"a":2,"n":"Started","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Started","t":8,"rt":$n[1].Boolean,"fg":"Started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Started"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"banner","t":4,"rt":$n[2].ObjectiveBanner,"sn":"banner"},{"a":1,"n":"change","t":4,"rt":$n[2].IslandChange,"sn":"change"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hop","t":4,"rt":$n[2].HopController,"sn":"hop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plates","t":4,"rt":$n[2].PlatesView,"sn":"plates"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rig","t":4,"rt":$n[2].CameraRig,"sn":"rig"}]}; }, $n);
    /*Playable.IslandTransition end.*/

    /*Playable.Sfx start.*/
    $m("Playable.Sfx", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnEnded","t":8,"pi":[{"n":"won","pt":$n[1].Boolean,"ps":0},{"n":"score","pt":$n[1].Int32,"ps":1}],"sn":"OnEnded","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].Int32]},{"a":1,"n":"OnFell","t":8,"sn":"OnFell","rt":$n[1].Void},{"a":1,"n":"OnHopStarted","t":8,"sn":"OnHopStarted","rt":$n[1].Void},{"a":1,"n":"OnIslandChanged","t":8,"sn":"OnIslandChanged","rt":$n[1].Void},{"a":1,"n":"OnLanded","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"score","pt":$n[1].Int32,"ps":1}],"sn":"OnLanded","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Int32]},{"a":1,"n":"OnPauseChanged","t":8,"pi":[{"n":"paused","pt":$n[1].Boolean,"ps":0}],"sn":"OnPauseChanged","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"OnPlateRemoved","t":8,"pi":[{"n":"at","pt":$n[0].Vector3,"ps":0}],"sn":"OnPlateRemoved","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"OnPlateSpawned","t":8,"pi":[{"n":"at","pt":$n[0].Vector3,"ps":0}],"sn":"OnPlateSpawned","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"Play","t":8,"pi":[{"n":"source","pt":$n[0].AudioSource,"ps":0},{"n":"clip","pt":$n[0].AudioClip,"ps":1},{"n":"volume","pt":$n[1].Single,"ps":2}],"sn":"Play","rt":$n[1].Void,"p":[$n[0].AudioSource,$n[0].AudioClip,$n[1].Single]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"crumbles","t":4,"rt":$n[0].AudioSource,"sn":"crumbles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fall","t":4,"rt":$n[0].AudioClip,"sn":"fall"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jump","t":4,"rt":$n[0].AudioClip,"sn":"jump"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"matchGoal","t":4,"rt":$n[0].AudioClip,"sn":"matchGoal"},{"a":1,"n":"removedAt","t":4,"rt":$n[1].Single,"sn":"removedAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreAdd","t":4,"rt":$n[0].AudioClip,"sn":"scoreAdd"},{"a":1,"n":"spawnedAt","t":4,"rt":$n[1].Single,"sn":"spawnedAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"step","t":4,"rt":$n[0].AudioClip,"sn":"step"},{"a":1,"n":"taps","t":4,"rt":$n[1].Int32,"sn":"taps","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileDelete","t":4,"rt":$n[0].AudioClip,"sn":"tileDelete"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tileSpawn","t":4,"rt":$n[0].AudioClip,"sn":"tileSpawn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"voice","t":4,"rt":$n[0].AudioSource,"sn":"voice"},{"a":2,"n":"Played","is":true,"t":2,"ad":{"a":2,"n":"add_Played","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPlayed","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Played","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePlayed","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Playable.Sfx end.*/

    /*Playable.Ease start.*/
    $m("Playable.Ease", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InOutQuad","is":true,"t":4,"rt":$n[2].Ease,"sn":"InOutQuad","box":function ($v) { return Bridge.box($v, Playable.Ease, System.Enum.toStringFn(Playable.Ease));}},{"a":2,"n":"InQuad","is":true,"t":4,"rt":$n[2].Ease,"sn":"InQuad","box":function ($v) { return Bridge.box($v, Playable.Ease, System.Enum.toStringFn(Playable.Ease));}},{"a":2,"n":"Linear","is":true,"t":4,"rt":$n[2].Ease,"sn":"Linear","box":function ($v) { return Bridge.box($v, Playable.Ease, System.Enum.toStringFn(Playable.Ease));}},{"a":2,"n":"OutQuad","is":true,"t":4,"rt":$n[2].Ease,"sn":"OutQuad","box":function ($v) { return Bridge.box($v, Playable.Ease, System.Enum.toStringFn(Playable.Ease));}}]}; }, $n);
    /*Playable.Ease end.*/

    /*Playable.Tween start.*/
    $m("Playable.Tween", function () { return {"nested":[$n[2].Tween.Run],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Add","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Object,"ps":0},{"n":"channel","pt":$n[1].Int32,"ps":1},{"n":"seconds","pt":$n[1].Single,"ps":2},{"n":"ease","pt":$n[2].Ease,"ps":3},{"n":"delay","pt":$n[1].Single,"ps":4},{"n":"begin","pt":Function,"ps":5},{"n":"step","pt":Function,"ps":6},{"n":"done","pt":Function,"ps":7}],"sn":"Add","rt":$n[1].Void,"p":[$n[0].Object,$n[1].Int32,$n[1].Single,$n[2].Ease,$n[1].Single,Function,Function,Function]},{"a":2,"n":"Advance","is":true,"t":8,"pi":[{"n":"deltaTime","pt":$n[1].Single,"ps":0}],"sn":"Advance","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"Delay","is":true,"t":8,"pi":[{"n":"owner","pt":$n[0].Object,"ps":0},{"n":"seconds","pt":$n[1].Single,"ps":1},{"n":"then","pt":Function,"ps":2}],"sn":"Delay","rt":$n[1].Void,"p":[$n[0].Object,$n[1].Single,Function]},{"a":2,"n":"Eased","is":true,"t":8,"pi":[{"n":"ease","pt":$n[2].Ease,"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"Eased","rt":$n[1].Single,"p":[$n[2].Ease,$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"IsDead","is":true,"t":8,"pi":[{"n":"run","pt":$n[2].Tween.Run,"ps":0}],"sn":"IsDead","rt":$n[1].Boolean,"p":[$n[2].Tween.Run],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Move","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Transform,"ps":0},{"n":"to","pt":$n[0].Vector3,"ps":1},{"n":"seconds","pt":$n[1].Single,"ps":2},{"n":"ease","dv":2,"o":true,"pt":$n[2].Ease,"ps":3},{"n":"delay","dv":0.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"done","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"Move","rt":$n[1].Void,"p":[$n[0].Transform,$n[0].Vector3,$n[1].Single,$n[2].Ease,$n[1].Single,Function]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":2,"n":"Scale","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Transform,"ps":0},{"n":"to","pt":$n[0].Vector3,"ps":1},{"n":"seconds","pt":$n[1].Single,"ps":2},{"n":"ease","dv":2,"o":true,"pt":$n[2].Ease,"ps":3},{"n":"delay","dv":0.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"done","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"Scale","rt":$n[1].Void,"p":[$n[0].Transform,$n[0].Vector3,$n[1].Single,$n[2].Ease,$n[1].Single,Function]},{"a":2,"n":"Tint","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"to","pt":$n[0].Color,"ps":1},{"n":"seconds","pt":$n[1].Single,"ps":2},{"n":"ease","dv":2,"o":true,"pt":$n[2].Ease,"ps":3},{"n":"delay","dv":0.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"done","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"Tint","rt":$n[1].Void,"p":[$n[0].Material,$n[0].Color,$n[1].Single,$n[2].Ease,$n[1].Single,Function]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Value","is":true,"t":8,"pi":[{"n":"owner","pt":$n[0].Object,"ps":0},{"n":"seconds","pt":$n[1].Single,"ps":1},{"n":"step","pt":Function,"ps":2},{"n":"ease","dv":0,"o":true,"pt":$n[2].Ease,"ps":3},{"n":"delay","dv":0.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"done","dv":null,"o":true,"pt":Function,"ps":5}],"sn":"Value","rt":$n[1].Void,"p":[$n[0].Object,$n[1].Single,Function,$n[2].Ease,$n[1].Single,Function]},{"a":1,"n":"BaseColor","is":true,"t":4,"rt":$n[1].String,"sn":"BaseColor"},{"a":1,"n":"Free","is":true,"t":4,"rt":$n[1].Int32,"sn":"Free","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"MoveChannel","is":true,"t":4,"rt":$n[1].Int32,"sn":"MoveChannel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ScaleChannel","is":true,"t":4,"rt":$n[1].Int32,"sn":"ScaleChannel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"TintChannel","is":true,"t":4,"rt":$n[1].Int32,"sn":"TintChannel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"runner","is":true,"t":4,"rt":$n[2].Tween,"sn":"runner"},{"a":1,"n":"runs","is":true,"t":4,"rt":$n[3].List$1(Playable.Tween.Run),"sn":"runs","ro":true}]}; }, $n);
    /*Playable.Tween end.*/

    /*Playable.Tween+Run start.*/
    $m("Playable.Tween.Run", function () { return {"td":$n[2].Tween,"att":1048835,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Begin","t":4,"rt":Function,"sn":"Begin"},{"a":2,"n":"Channel","t":4,"rt":$n[1].Int32,"sn":"Channel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Dead","t":4,"rt":$n[1].Boolean,"sn":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Delay","t":4,"rt":$n[1].Single,"sn":"Delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Done","t":4,"rt":Function,"sn":"Done"},{"a":2,"n":"Ease","t":4,"rt":$n[2].Ease,"sn":"Ease","box":function ($v) { return Bridge.box($v, Playable.Ease, System.Enum.toStringFn(Playable.Ease));}},{"a":2,"n":"Elapsed","t":4,"rt":$n[1].Single,"sn":"Elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Seconds","t":4,"rt":$n[1].Single,"sn":"Seconds","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Started","t":4,"rt":$n[1].Boolean,"sn":"Started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Step","t":4,"rt":Function,"sn":"Step"},{"a":2,"n":"Target","t":4,"rt":$n[0].Object,"sn":"Target"}]}; }, $n);
    /*Playable.Tween+Run end.*/

    /*Playable.PlayableAd start.*/
    $m("Playable.PlayableAd", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GameEnded","is":true,"t":8,"sn":"GameEnded","rt":$n[1].Void},{"a":2,"n":"Install","is":true,"t":8,"sn":"Install","rt":$n[1].Void},{"a":1,"n":"OnContainerPause","is":true,"t":8,"sn":"OnContainerPause","rt":$n[1].Void},{"a":1,"n":"OnContainerResume","is":true,"t":8,"sn":"OnContainerResume","rt":$n[1].Void},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":2,"n":"SetPaused","is":true,"t":8,"pi":[{"n":"paused","pt":$n[1].Boolean,"ps":0}],"sn":"SetPaused","rt":$n[1].Void,"p":[$n[1].Boolean]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(1)],"a":1,"n":"SubscribeToContainer","is":true,"t":8,"sn":"SubscribeToContainer","rt":$n[1].Void},{"a":2,"n":"Ended","is":true,"t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Ended","t":8,"rt":$n[1].Boolean,"fg":"Ended","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Ended","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Ended","is":true},"fn":"Ended"},{"a":2,"n":"InstallCalls","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_InstallCalls","t":8,"rt":$n[1].Int32,"fg":"InstallCalls","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_InstallCalls","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"InstallCalls","is":true},"fn":"InstallCalls"},{"a":2,"n":"Paused","is":true,"t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Paused","t":8,"rt":$n[1].Boolean,"fg":"Paused","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Paused","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Paused","is":true},"fn":"Paused"},{"a":2,"n":"PauseChanged","is":true,"t":2,"ad":{"a":2,"n":"add_PauseChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPauseChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_PauseChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePauseChanged","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Ended>k__BackingField","is":true,"t":4,"rt":$n[1].Boolean,"sn":"Ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<InstallCalls>k__BackingField","is":true,"t":4,"rt":$n[1].Int32,"sn":"InstallCalls","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Paused>k__BackingField","is":true,"t":4,"rt":$n[1].Boolean,"sn":"Paused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Playable.PlayableAd end.*/

    /*Playable.PlayableInput start.*/
    $m("Playable.PlayableInput", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":4,"n":"Raise","is":true,"t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0}],"sn":"Raise","rt":$n[1].Void,"p":[$n[0].Vector2]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":2,"n":"Simulate","is":true,"t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector2,"ps":0}],"sn":"Simulate","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":2,"n":"TapCount","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_TapCount","t":8,"rt":$n[1].Int32,"fg":"TapCount","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_TapCount","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"TapCount","is":true},"fn":"TapCount"},{"a":2,"n":"Tapped","is":true,"t":2,"ad":{"a":2,"n":"add_Tapped","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTapped","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Tapped","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTapped","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<TapCount>k__BackingField","is":true,"t":4,"rt":$n[1].Int32,"sn":"TapCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Playable.PlayableInput end.*/

    /*Playable.PlayableInputSource start.*/
    $m("Playable.PlayableInputSource", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void}]}; }, $n);
    /*Playable.PlayableInputSource end.*/

    /*Playable.EndCard start.*/
    $m("Playable.EndCard", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnEnded","t":8,"pi":[{"n":"won","pt":$n[1].Boolean,"ps":0},{"n":"points","pt":$n[1].Int32,"ps":1}],"sn":"OnEnded","rt":$n[1].Void,"p":[$n[1].Boolean,$n[1].Int32]},{"a":1,"n":"OnIdle","t":8,"sn":"OnIdle","rt":$n[1].Void},{"a":1,"n":"OnTap","t":8,"pi":[{"n":"screen","pt":$n[0].Vector2,"ps":0}],"sn":"OnTap","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"Pulse","is":true,"t":8,"pi":[{"n":"seconds","pt":$n[1].Single,"ps":0}],"sn":"Pulse","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Show","t":8,"pi":[{"n":"heading","pt":$n[1].String,"ps":0},{"n":"points","pt":$n[1].Int32,"ps":1}],"sn":"Show","rt":$n[1].Void,"p":[$n[1].String,$n[1].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Shown","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Shown","t":8,"rt":$n[1].Boolean,"fg":"Shown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Shown","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Shown"},"fn":"Shown"},{"a":2,"n":"Tappable","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Tappable","t":8,"rt":$n[1].Boolean,"fg":"Tappable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Tappable","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Tappable"},"fn":"Tappable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"covered","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"covered"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hop","t":4,"rt":$n[2].HopController,"sn":"hop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"overlay","t":4,"rt":$n[4].Image,"sn":"overlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plates","t":4,"rt":$n[2].PlatesView,"sn":"plates"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNow","t":4,"rt":$n[0].Transform,"sn":"playNow"},{"a":1,"n":"pulseStart","t":4,"rt":$n[1].Single,"sn":"pulseStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"score","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"score"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"title","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"title"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"window","t":4,"rt":$n[0].Transform,"sn":"window"},{"a":1,"backing":true,"n":"<Shown>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"Shown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Tappable>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"Tappable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Playable.EndCard end.*/

    /*Playable.InstallButton start.*/
    $m("Playable.InstallButton", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Covers","is":true,"t":8,"pi":[{"n":"screen","pt":$n[0].Vector2,"ps":0}],"sn":"Covers","rt":$n[1].Boolean,"p":[$n[0].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnTap","t":8,"pi":[{"n":"screen","pt":$n[0].Vector2,"ps":0}],"sn":"OnTap","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"canvasCamera","t":4,"rt":$n[0].Camera,"sn":"canvasCamera"},{"a":1,"n":"rect","t":4,"rt":$n[0].RectTransform,"sn":"rect"},{"a":1,"n":"shown","is":true,"t":4,"rt":$n[2].InstallButton,"sn":"shown"}]}; }, $n);
    /*Playable.InstallButton end.*/

    /*Playable.ObjectiveBanner start.*/
    $m("Playable.ObjectiveBanner", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Show","t":8,"pi":[{"n":"objective","pt":$n[2].Objective,"ps":0}],"sn":"Show","rt":$n[1].Void,"p":[$n[2].Objective]},{"a":2,"n":"Shown","t":16,"rt":$n[2].Objective,"g":{"a":2,"n":"get_Shown","t":8,"rt":$n[2].Objective,"fg":"Shown","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}},"s":{"a":1,"n":"set_Shown","t":8,"p":[$n[2].Objective],"rt":$n[1].Void,"fs":"Shown"},"fn":"Shown"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"crossBridge","t":4,"rt":$n[0].GameObject,"sn":"crossBridge"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leaveTwo","t":4,"rt":$n[0].GameObject,"sn":"leaveTwo"},{"a":1,"backing":true,"n":"<Shown>k__BackingField","t":4,"rt":$n[2].Objective,"sn":"Shown","box":function ($v) { return Bridge.box($v, Playable.Objective, System.Enum.toStringFn(Playable.Objective));}}]}; }, $n);
    /*Playable.ObjectiveBanner end.*/

    /*Playable.ScoreHud start.*/
    $m("Playable.ScoreHud", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Show","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"hops","pt":$n[1].Int32,"ps":1}],"sn":"Show","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Int32]},{"a":1,"n":"next","t":4,"rt":$n[1].Int32,"sn":"next","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popups","t":4,"rt":System.Array.type(Playable.ScorePopup),"sn":"popups"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"score","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"score"}]}; }, $n);
    /*Playable.ScoreHud end.*/

    /*Playable.Tutorial start.*/
    $m("Playable.Tutorial", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Hide","t":8,"sn":"Hide","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnReady","t":8,"sn":"OnReady","rt":$n[1].Void},{"a":1,"n":"Pulse","is":true,"t":8,"pi":[{"n":"seconds","pt":$n[1].Single,"ps":0}],"sn":"Pulse","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":1,"n":"ScaleIn","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Transform,"ps":0},{"n":"done","pt":Function,"ps":1}],"sn":"ScaleIn","rt":$n[1].Void,"p":[$n[0].Transform,Function]},{"a":1,"n":"Show","t":8,"pi":[{"n":"withHint","pt":$n[1].Boolean,"ps":0}],"sn":"Show","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hand","t":4,"rt":$n[0].Transform,"sn":"hand"},{"a":1,"n":"handShown","t":4,"rt":$n[1].Boolean,"sn":"handShown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hint","t":4,"rt":$n[0].Transform,"sn":"hint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hop","t":4,"rt":$n[2].HopController,"sn":"hop"},{"a":1,"n":"introduced","t":4,"rt":$n[1].Boolean,"sn":"introduced","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"openedAt","t":4,"rt":$n[1].Single,"sn":"openedAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pulseStart","t":4,"rt":$n[1].Single,"sn":"pulseStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pulsing","t":4,"rt":$n[1].Boolean,"sn":"pulsing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"timedOut","t":4,"rt":$n[1].Boolean,"sn":"timedOut","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IdleTimedOut","is":true,"t":2,"ad":{"a":2,"n":"add_IdleTimedOut","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addIdleTimedOut","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_IdleTimedOut","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeIdleTimedOut","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Playable.Tutorial end.*/

    /*Playable.BeaverView start.*/
    $m("Playable.BeaverView", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Animator)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"DropIn","t":8,"pi":[{"n":"spot","pt":$n[0].Vector3,"ps":0},{"n":"arrived","pt":Function,"ps":1}],"sn":"DropIn","rt":$n[1].Void,"p":[$n[0].Vector3,Function]},{"a":2,"n":"Fall","t":8,"sn":"Fall","rt":$n[1].Void},{"a":2,"n":"Hop","t":8,"pi":[{"n":"spot","pt":$n[0].Vector3,"ps":0},{"n":"arrived","pt":Function,"ps":1}],"sn":"Hop","rt":$n[1].Void,"p":[$n[0].Vector3,Function]},{"a":2,"n":"Land","t":8,"sn":"Land","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"Turn","t":8,"pi":[{"n":"degrees","pt":$n[1].Single,"ps":0}],"sn":"Turn","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"Yaw","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Yaw","t":8,"rt":$n[1].Single,"fg":"Yaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Yaw","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Yaw"},"fn":"Yaw"},{"a":1,"n":"animator","t":4,"rt":$n[0].Animator,"sn":"animator"},{"a":1,"n":"home","t":4,"rt":$n[0].Vector3,"sn":"home"},{"a":1,"n":"nextPuff","t":4,"rt":$n[1].Int32,"sn":"nextPuff","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"puffs","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem),"sn":"puffs"},{"a":1,"backing":true,"n":"<Yaw>k__BackingField","t":4,"rt":$n[1].Single,"sn":"Yaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Playable.BeaverView end.*/

    /*Playable.PlatesView start.*/
    $m("Playable.PlatesView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Create","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Create","rt":$n[2].PlateView,"p":[$n[0].Vector2Int]},{"a":2,"n":"Dip","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Dip","rt":$n[1].Void,"p":[$n[0].Vector2Int]},{"a":2,"n":"Drop","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Drop","rt":$n[1].Void,"p":[$n[0].Vector2Int]},{"a":1,"n":"LogTraps","t":8,"sn":"LogTraps","rt":$n[1].Void},{"a":2,"n":"Plate","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Plate","rt":$n[2].PlateView,"p":[$n[0].Vector2Int]},{"a":2,"n":"PopIn","t":8,"pi":[{"n":"cells","pt":$n[3].IEnumerable$1(UnityEngine.Vector2Int),"ps":0},{"n":"from","pt":$n[0].Vector2Int,"ps":1},{"n":"done","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"PopIn","rt":$n[1].Void,"p":[$n[3].IEnumerable$1(UnityEngine.Vector2Int),$n[0].Vector2Int,Function]},{"a":2,"n":"Remove","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"delay","dv":0.0,"o":true,"pt":$n[1].Single,"ps":1}],"sn":"Remove","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Single]},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(4)],"a":1,"n":"ResetStatics","is":true,"t":8,"sn":"ResetStatics","rt":$n[1].Void},{"a":1,"n":"SetGlow","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"on","pt":$n[1].Boolean,"ps":1}],"sn":"SetGlow","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Boolean]},{"a":1,"n":"Take","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0}],"sn":"Take","rt":$n[2].PlateView,"p":[$n[0].Vector2Int]},{"a":2,"n":"Field","t":16,"rt":$n[2].Field,"g":{"a":2,"n":"get_Field","t":8,"rt":$n[2].Field,"fg":"Field"},"s":{"a":1,"n":"set_Field","t":8,"p":[$n[2].Field],"rt":$n[1].Void,"fs":"Field"},"fn":"Field"},{"a":2,"n":"Target","t":16,"rt":$n[1].Nullable$1(UnityEngine.Vector2Int),"g":{"a":2,"n":"get_Target","t":8,"rt":$n[1].Nullable$1(UnityEngine.Vector2Int),"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[1].Nullable$1(UnityEngine.Vector2Int)],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"plate","t":4,"rt":$n[2].PlateView,"sn":"plate"},{"a":1,"n":"plates","t":4,"rt":$n[3].Dictionary$2(UnityEngine.Vector2Int,Playable.PlateView),"sn":"plates","ro":true},{"a":1,"n":"target","t":4,"rt":$n[1].Nullable$1(UnityEngine.Vector2Int),"sn":"target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trap","t":4,"rt":$n[2].PlateView,"sn":"trap"},{"a":2,"n":"PlateRemoved","is":true,"t":2,"ad":{"a":2,"n":"add_PlateRemoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPlateRemoved","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_PlateRemoved","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePlateRemoved","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"PlateSpawned","is":true,"t":2,"ad":{"a":2,"n":"add_PlateSpawned","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addPlateSpawned","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_PlateSpawned","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removePlateSpawned","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"WaveFinished","is":true,"t":2,"ad":{"a":2,"n":"add_WaveFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addWaveFinished","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_WaveFinished","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeWaveFinished","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Field>k__BackingField","t":4,"rt":$n[2].Field,"sn":"Field"}]}; }, $n);
    /*Playable.PlatesView end.*/

    /*Playable.PlateView start.*/
    $m("Playable.PlateView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":"Crumble","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0},{"n":"started","pt":Function,"ps":1}],"sn":"Crumble","rt":$n[1].Void,"p":[$n[1].Single,Function]},{"a":4,"n":"Dip","t":8,"sn":"Dip","rt":$n[1].Void},{"a":4,"n":"Drop","t":8,"sn":"Drop","rt":$n[1].Void},{"a":4,"n":"Glow","t":8,"pi":[{"n":"on","pt":$n[1].Boolean,"ps":0}],"sn":"Glow","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":4,"n":"PopIn","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0},{"n":"popped","pt":Function,"ps":1}],"sn":"PopIn","rt":$n[1].Void,"p":[$n[1].Single,Function]},{"a":4,"n":"Show","t":8,"pi":[{"n":"cell","pt":$n[0].Vector2Int,"ps":0},{"n":"trap","pt":$n[1].Boolean,"ps":1}],"sn":"Show","rt":$n[1].Void,"p":[$n[0].Vector2Int,$n[1].Boolean]},{"a":2,"n":"Cell","t":16,"rt":$n[0].Vector2Int,"g":{"a":2,"n":"get_Cell","t":8,"rt":$n[0].Vector2Int,"fg":"Cell"},"s":{"a":1,"n":"set_Cell","t":8,"p":[$n[0].Vector2Int],"rt":$n[1].Void,"fs":"Cell"},"fn":"Cell"},{"a":2,"n":"Glowing","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Glowing","t":8,"rt":$n[1].Boolean,"fg":"Glowing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Glowing","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"Glowing"},"fn":"Glowing"},{"a":2,"n":"IsTrap","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsTrap","t":8,"rt":$n[1].Boolean,"fg":"IsTrap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsTrap","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsTrap"},"fn":"IsTrap"},{"a":1,"n":"BaseColor","is":true,"t":4,"rt":$n[1].String,"sn":"BaseColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cracks","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"cracks"},{"a":1,"n":"dark","t":4,"rt":$n[0].Material,"sn":"dark"},{"a":1,"n":"home","t":4,"rt":$n[0].Vector3,"sn":"home"},{"a":1,"n":"rest","t":4,"rt":$n[0].Color,"sn":"rest"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slab","t":4,"rt":$n[0].Renderer,"sn":"slab"},{"a":1,"n":"tint","t":4,"rt":$n[0].Material,"sn":"tint"},{"a":1,"backing":true,"n":"<Cell>k__BackingField","t":4,"rt":$n[0].Vector2Int,"sn":"Cell"},{"a":1,"backing":true,"n":"<Glowing>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"Glowing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsTrap>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"IsTrap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Playable.PlateView end.*/

    /*Playable.ScorePopup start.*/
    $m("Playable.ScorePopup", function () { return {"att":1048833,"a":2,"at":[new UnityEngine.RequireComponent.ctor(TMPro.TextMeshProUGUI)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"MakeWay","t":8,"sn":"MakeWay","rt":$n[1].Void},{"a":2,"n":"Show","t":8,"pi":[{"n":"spot","pt":$n[0].Vector3,"ps":0}],"sn":"Show","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"anchor","t":4,"rt":$n[0].Vector3,"sn":"anchor"},{"a":1,"n":"kept","t":4,"rt":$n[1].Single,"sn":"kept","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"last","is":true,"t":4,"rt":$n[2].ScorePopup,"sn":"last"},{"a":1,"n":"plane","t":4,"rt":$n[1].Single,"sn":"plane","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rise","t":4,"rt":$n[1].Single,"sn":"rise","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"text","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"text"},{"a":1,"n":"view","t":4,"rt":$n[0].Camera,"sn":"view"}]}; }, $n);
    /*Playable.ScorePopup end.*/

    }});
