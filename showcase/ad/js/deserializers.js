var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointSpring' )
  var i637 = data
  i636.spring = i637[0]
  i636.damper = i637[1]
  i636.targetPosition = i637[2]
  return i636
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointMotor' )
  var i639 = data
  i638.m_TargetVelocity = i639[0]
  i638.m_Force = i639[1]
  i638.m_FreeSpin = i639[2]
  return i638
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointLimits' )
  var i641 = data
  i640.m_Min = i641[0]
  i640.m_Max = i641[1]
  i640.m_Bounciness = i641[2]
  i640.m_BounceMinVelocity = i641[3]
  i640.m_ContactDistance = i641[4]
  i640.minBounce = i641[5]
  i640.maxBounce = i641[6]
  return i640
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointDrive' )
  var i643 = data
  i642.m_PositionSpring = i643[0]
  i642.m_PositionDamper = i643[1]
  i642.m_MaximumForce = i643[2]
  i642.m_UseAcceleration = i643[3]
  return i642
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i645 = data
  i644.m_Spring = i645[0]
  i644.m_Damper = i645[1]
  return i644
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i647 = data
  i646.m_Limit = i647[0]
  i646.m_Bounciness = i647[1]
  i646.m_ContactDistance = i647[2]
  return i646
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i649 = data
  i648.m_ExtremumSlip = i649[0]
  i648.m_ExtremumValue = i649[1]
  i648.m_AsymptoteSlip = i649[2]
  i648.m_AsymptoteValue = i649[3]
  i648.m_Stiffness = i649[4]
  return i648
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i651 = data
  i650.m_LowerAngle = i651[0]
  i650.m_UpperAngle = i651[1]
  return i650
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i653 = data
  i652.m_MotorSpeed = i653[0]
  i652.m_MaximumMotorTorque = i653[1]
  return i652
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i655 = data
  i654.m_DampingRatio = i655[0]
  i654.m_Frequency = i655[1]
  i654.m_Angle = i655[2]
  return i654
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i657 = data
  i656.m_LowerTranslation = i657[0]
  i656.m_UpperTranslation = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i658 = root || new pc.UnityMaterial()
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'shader')
  i658.renderQueue = i659[3]
  i658.enableInstancing = !!i659[4]
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i661[i + 0]) );
  }
  i658.floatParameters = i660
  var i663 = i659[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i663[i + 0]) );
  }
  i658.colorParameters = i662
  var i665 = i659[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i665[i + 0]) );
  }
  i658.vectorParameters = i664
  var i667 = i659[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i667[i + 0]) );
  }
  i658.textureParameters = i666
  var i669 = i659[9]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i669[i + 0]) );
  }
  i658.materialFlags = i668
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i677 = data
  i676.name = i677[0]
  i676.value = new pc.Color(i677[1], i677[2], i677[3], i677[4])
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i681 = data
  i680.name = i681[0]
  i680.value = new pc.Vec4( i681[1], i681[2], i681[3], i681[4] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'value')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i689 = data
  i688.name = i689[0]
  i688.enabled = !!i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i691 = data
  i690.name = i691[0]
  i690.width = i691[1]
  i690.height = i691[2]
  i690.mipmapCount = i691[3]
  i690.anisoLevel = i691[4]
  i690.filterMode = i691[5]
  i690.hdr = !!i691[6]
  i690.format = i691[7]
  i690.wrapMode = i691[8]
  i690.alphaIsTransparency = !!i691[9]
  i690.alphaSource = i691[10]
  i690.graphicsFormat = i691[11]
  i690.sRGBTexture = !!i691[12]
  i690.desiredColorSpace = i691[13]
  i690.wrapU = i691[14]
  i690.wrapV = i691[15]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i693 = data
  i692.name = i693[0]
  i692.halfPrecision = !!i693[1]
  i692.useSimplification = !!i693[2]
  i692.useUInt32IndexFormat = !!i693[3]
  i692.vertexCount = i693[4]
  i692.aabb = i693[5]
  var i695 = i693[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( !!i695[i + 0] );
  }
  i692.streams = i694
  i692.vertices = i693[7]
  var i697 = i693[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i697[i + 0]) );
  }
  i692.subMeshes = i696
  var i699 = i693[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 16) {
    i698.push( new pc.Mat4().setData(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3],  i699[i + 4], i699[i + 5], i699[i + 6], i699[i + 7],  i699[i + 8], i699[i + 9], i699[i + 10], i699[i + 11],  i699[i + 12], i699[i + 13], i699[i + 14], i699[i + 15]) );
  }
  i692.bindposes = i698
  var i701 = i693[10]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i701[i + 0]) );
  }
  i692.blendShapes = i700
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i707 = data
  i706.triangles = i707[0]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i713 = data
  i712.name = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i715[i + 0]) );
  }
  i712.frames = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i717 = data
  i716.name = i717[0]
  i716.atlasId = i717[1]
  i716.mipmapCount = i717[2]
  i716.hdr = !!i717[3]
  i716.size = i717[4]
  i716.anisoLevel = i717[5]
  i716.filterMode = i717[6]
  var i719 = i717[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 4) {
    i718.push( UnityEngine.Rect.MinMaxRect(i719[i + 0], i719[i + 1], i719[i + 2], i719[i + 3]) );
  }
  i716.rects = i718
  i716.wrapU = i717[8]
  i716.wrapV = i717[9]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i723 = data
  i722.name = i723[0]
  i722.index = i723[1]
  i722.startup = !!i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i725 = data
  i724.aspect = i725[0]
  i724.orthographic = !!i725[1]
  i724.orthographicSize = i725[2]
  i724.backgroundColor = new pc.Color(i725[3], i725[4], i725[5], i725[6])
  i724.nearClipPlane = i725[7]
  i724.farClipPlane = i725[8]
  i724.fieldOfView = i725[9]
  i724.depth = i725[10]
  i724.clearFlags = i725[11]
  i724.cullingMask = i725[12]
  i724.rect = i725[13]
  request.r(i725[14], i725[15], 0, i724, 'targetTexture')
  i724.usePhysicalProperties = !!i725[16]
  i724.focalLength = i725[17]
  i724.sensorSize = new pc.Vec2( i725[18], i725[19] )
  i724.lensShift = new pc.Vec2( i725[20], i725[21] )
  i724.gateFit = i725[22]
  i724.commandBufferCount = i725[23]
  i724.cameraType = i725[24]
  i724.enabled = !!i725[25]
  return i724
}

Deserializers["Playable.CameraRig"] = function (request, data, root) {
  var i726 = root || request.c( 'Playable.CameraRig' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'target')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i729 = data
  i728.name = i729[0]
  i728.tagId = i729[1]
  i728.enabled = !!i729[2]
  i728.isStatic = !!i729[3]
  i728.layer = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i731 = data
  i730.type = i731[0]
  i730.color = new pc.Color(i731[1], i731[2], i731[3], i731[4])
  i730.cullingMask = i731[5]
  i730.intensity = i731[6]
  i730.range = i731[7]
  i730.spotAngle = i731[8]
  i730.shadows = i731[9]
  i730.shadowNormalBias = i731[10]
  i730.shadowBias = i731[11]
  i730.shadowStrength = i731[12]
  i730.shadowResolution = i731[13]
  i730.lightmapBakeType = i731[14]
  i730.renderMode = i731[15]
  request.r(i731[16], i731[17], 0, i730, 'cookie')
  i730.cookieSize = i731[18]
  i730.shadowNearPlane = i731[19]
  i730.occlusionMaskChannel = i731[20]
  i730.isBaked = !!i731[21]
  i730.mixedLightingMode = i731[22]
  i730.enabled = !!i731[23]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i733 = data
  i732.pivot = new pc.Vec2( i733[0], i733[1] )
  i732.anchorMin = new pc.Vec2( i733[2], i733[3] )
  i732.anchorMax = new pc.Vec2( i733[4], i733[5] )
  i732.sizeDelta = new pc.Vec2( i733[6], i733[7] )
  i732.anchoredPosition3D = new pc.Vec3( i733[8], i733[9], i733[10] )
  i732.rotation = new pc.Quat(i733[11], i733[12], i733[13], i733[14])
  i732.scale = new pc.Vec3( i733[15], i733[16], i733[17] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i735 = data
  i734.planeDistance = i735[0]
  i734.referencePixelsPerUnit = i735[1]
  i734.isFallbackOverlay = !!i735[2]
  i734.renderMode = i735[3]
  i734.renderOrder = i735[4]
  i734.sortingLayerName = i735[5]
  i734.sortingOrder = i735[6]
  i734.scaleFactor = i735[7]
  request.r(i735[8], i735[9], 0, i734, 'worldCamera')
  i734.overrideSorting = !!i735[10]
  i734.pixelPerfect = !!i735[11]
  i734.targetDisplay = i735[12]
  i734.overridePixelPerfect = !!i735[13]
  i734.enabled = !!i735[14]
  return i734
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i737 = data
  i736.m_UiScaleMode = i737[0]
  i736.m_ReferencePixelsPerUnit = i737[1]
  i736.m_ScaleFactor = i737[2]
  i736.m_ReferenceResolution = new pc.Vec2( i737[3], i737[4] )
  i736.m_ScreenMatchMode = i737[5]
  i736.m_MatchWidthOrHeight = i737[6]
  i736.m_PhysicalUnit = i737[7]
  i736.m_FallbackScreenDPI = i737[8]
  i736.m_DefaultSpriteDPI = i737[9]
  i736.m_DynamicPixelsPerUnit = i737[10]
  i736.m_PresetInfoIsWorld = !!i737[11]
  return i736
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i739 = data
  i738.m_IgnoreReversedGraphics = !!i739[0]
  i738.m_BlockingObjects = i739[1]
  i738.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i739[2] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i741 = data
  i740.cullTransparentMesh = !!i741[0]
  return i740
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Image' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_Sprite')
  i742.m_Type = i743[2]
  i742.m_PreserveAspect = !!i743[3]
  i742.m_FillCenter = !!i743[4]
  i742.m_FillMethod = i743[5]
  i742.m_FillAmount = i743[6]
  i742.m_FillClockwise = !!i743[7]
  i742.m_FillOrigin = i743[8]
  i742.m_UseSpriteMesh = !!i743[9]
  i742.m_PixelsPerUnitMultiplier = i743[10]
  request.r(i743[11], i743[12], 0, i742, 'm_Material')
  i742.m_Maskable = !!i743[13]
  i742.m_Color = new pc.Color(i743[14], i743[15], i743[16], i743[17])
  i742.m_RaycastTarget = !!i743[18]
  i742.m_RaycastPadding = new pc.Vec4( i743[19], i743[20], i743[21], i743[22] )
  return i742
}

Deserializers["Playable.InstallButton"] = function (request, data, root) {
  var i744 = root || request.c( 'Playable.InstallButton' )
  var i745 = data
  return i744
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i747 = data
  i746.m_hasFontAssetChanged = !!i747[0]
  request.r(i747[1], i747[2], 0, i746, 'm_baseMaterial')
  i746.m_maskOffset = new pc.Vec4( i747[3], i747[4], i747[5], i747[6] )
  i746.m_text = i747[7]
  i746.m_isRightToLeft = !!i747[8]
  request.r(i747[9], i747[10], 0, i746, 'm_fontAsset')
  request.r(i747[11], i747[12], 0, i746, 'm_sharedMaterial')
  var i749 = i747[13]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.m_fontSharedMaterials = i748
  request.r(i747[14], i747[15], 0, i746, 'm_fontMaterial')
  var i751 = i747[16]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i746.m_fontMaterials = i750
  i746.m_fontColor32 = UnityEngine.Color32.ConstructColor(i747[17], i747[18], i747[19], i747[20])
  i746.m_fontColor = new pc.Color(i747[21], i747[22], i747[23], i747[24])
  i746.m_enableVertexGradient = !!i747[25]
  i746.m_colorMode = i747[26]
  i746.m_fontColorGradient = request.d('TMPro.VertexGradient', i747[27], i746.m_fontColorGradient)
  request.r(i747[28], i747[29], 0, i746, 'm_fontColorGradientPreset')
  request.r(i747[30], i747[31], 0, i746, 'm_spriteAsset')
  i746.m_tintAllSprites = !!i747[32]
  request.r(i747[33], i747[34], 0, i746, 'm_StyleSheet')
  i746.m_TextStyleHashCode = i747[35]
  i746.m_overrideHtmlColors = !!i747[36]
  i746.m_faceColor = UnityEngine.Color32.ConstructColor(i747[37], i747[38], i747[39], i747[40])
  i746.m_fontSize = i747[41]
  i746.m_fontSizeBase = i747[42]
  i746.m_fontWeight = i747[43]
  i746.m_enableAutoSizing = !!i747[44]
  i746.m_fontSizeMin = i747[45]
  i746.m_fontSizeMax = i747[46]
  i746.m_fontStyle = i747[47]
  i746.m_HorizontalAlignment = i747[48]
  i746.m_VerticalAlignment = i747[49]
  i746.m_textAlignment = i747[50]
  i746.m_characterSpacing = i747[51]
  i746.m_characterHorizontalScale = i747[52]
  i746.m_wordSpacing = i747[53]
  i746.m_lineSpacing = i747[54]
  i746.m_lineSpacingMax = i747[55]
  i746.m_paragraphSpacing = i747[56]
  i746.m_charWidthMaxAdj = i747[57]
  i746.m_TextWrappingMode = i747[58]
  i746.m_wordWrappingRatios = i747[59]
  i746.m_overflowMode = i747[60]
  request.r(i747[61], i747[62], 0, i746, 'm_linkedTextComponent')
  request.r(i747[63], i747[64], 0, i746, 'parentLinkedComponent')
  i746.m_enableKerning = !!i747[65]
  var i753 = i747[66]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(i753[i + 0]);
  }
  i746.m_ActiveFontFeatures = i752
  i746.m_enableExtraPadding = !!i747[67]
  i746.checkPaddingRequired = !!i747[68]
  i746.m_isRichText = !!i747[69]
  i746.m_parseCtrlCharacters = !!i747[70]
  i746.m_isOrthographic = !!i747[71]
  i746.m_isCullingEnabled = !!i747[72]
  i746.m_horizontalMapping = i747[73]
  i746.m_verticalMapping = i747[74]
  i746.m_uvLineOffset = i747[75]
  i746.m_geometrySortingOrder = i747[76]
  i746.m_IsTextObjectScaleStatic = !!i747[77]
  i746.m_VertexBufferAutoSizeReduction = !!i747[78]
  i746.m_useMaxVisibleDescender = !!i747[79]
  i746.m_pageToDisplay = i747[80]
  i746.m_margin = new pc.Vec4( i747[81], i747[82], i747[83], i747[84] )
  i746.m_isUsingLegacyAnimationComponent = !!i747[85]
  i746.m_isVolumetricText = !!i747[86]
  request.r(i747[87], i747[88], 0, i746, 'm_Material')
  i746.m_EmojiFallbackSupport = !!i747[89]
  i746.m_Maskable = !!i747[90]
  i746.m_Color = new pc.Color(i747[91], i747[92], i747[93], i747[94])
  i746.m_RaycastTarget = !!i747[95]
  i746.m_RaycastPadding = new pc.Vec4( i747[96], i747[97], i747[98], i747[99] )
  return i746
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.VertexGradient' )
  var i757 = data
  i756.topLeft = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.topRight = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.bottomLeft = new pc.Color(i757[8], i757[9], i757[10], i757[11])
  i756.bottomRight = new pc.Color(i757[12], i757[13], i757[14], i757[15])
  return i756
}

Deserializers["Playable.ObjectiveBanner"] = function (request, data, root) {
  var i760 = root || request.c( 'Playable.ObjectiveBanner' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'leaveTwo')
  request.r(i761[2], i761[3], 0, i760, 'crossBridge')
  return i760
}

Deserializers["Playable.ScoreHud"] = function (request, data, root) {
  var i762 = root || request.c( 'Playable.ScoreHud' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'score')
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.popups = i764
  return i762
}

Deserializers["Playable.ScorePopup"] = function (request, data, root) {
  var i768 = root || request.c( 'Playable.ScorePopup' )
  var i769 = data
  return i768
}

Deserializers["Playable.Tutorial"] = function (request, data, root) {
  var i770 = root || request.c( 'Playable.Tutorial' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'hop')
  request.r(i771[2], i771[3], 0, i770, 'hand')
  request.r(i771[4], i771[5], 0, i770, 'hint')
  return i770
}

Deserializers["Playable.EndCard"] = function (request, data, root) {
  var i772 = root || request.c( 'Playable.EndCard' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'hop')
  request.r(i773[2], i773[3], 0, i772, 'plates')
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.covered = i774
  request.r(i773[5], i773[6], 0, i772, 'overlay')
  request.r(i773[7], i773[8], 0, i772, 'window')
  request.r(i773[9], i773[10], 0, i772, 'title')
  request.r(i773[11], i773[12], 0, i772, 'score')
  request.r(i773[13], i773[14], 0, i772, 'playNow')
  return i772
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_FirstSelected')
  i778.m_sendNavigationEvents = !!i779[2]
  i778.m_DragThreshold = i779[3]
  return i778
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i781 = data
  i780.m_HorizontalAxis = i781[0]
  i780.m_VerticalAxis = i781[1]
  i780.m_SubmitButton = i781[2]
  i780.m_CancelButton = i781[3]
  i780.m_InputActionsPerSecond = i781[4]
  i780.m_RepeatDelay = i781[5]
  i780.m_ForceModuleActive = !!i781[6]
  i780.m_SendPointerHoverToParent = !!i781[7]
  return i780
}

Deserializers["Playable.PlayableInputSource"] = function (request, data, root) {
  var i782 = root || request.c( 'Playable.PlayableInputSource' )
  var i783 = data
  return i782
}

Deserializers["Playable.PlatesView"] = function (request, data, root) {
  var i784 = root || request.c( 'Playable.PlatesView' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'plate')
  request.r(i785[2], i785[3], 0, i784, 'trap')
  return i784
}

Deserializers["Playable.PlateView"] = function (request, data, root) {
  var i786 = root || request.c( 'Playable.PlateView' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'slab')
  var i789 = i787[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.cracks = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'sharedMesh')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'additionalVertexStreams')
  i794.enabled = !!i795[2]
  request.r(i795[3], i795[4], 0, i794, 'sharedMaterial')
  var i797 = i795[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sharedMaterials = i796
  i794.receiveShadows = !!i795[6]
  i794.shadowCastingMode = i795[7]
  i794.sortingLayerID = i795[8]
  i794.sortingOrder = i795[9]
  i794.lightmapIndex = i795[10]
  i794.lightmapSceneIndex = i795[11]
  i794.lightmapScaleOffset = new pc.Vec4( i795[12], i795[13], i795[14], i795[15] )
  i794.lightProbeUsage = i795[16]
  i794.reflectionProbeUsage = i795[17]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'animatorController')
  request.r(i799[2], i799[3], 0, i798, 'avatar')
  i798.updateMode = i799[4]
  i798.hasTransformHierarchy = !!i799[5]
  i798.applyRootMotion = !!i799[6]
  var i801 = i799[7]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.humanBones = i800
  i798.enabled = !!i799[8]
  return i798
}

Deserializers["Playable.BeaverView"] = function (request, data, root) {
  var i804 = root || request.c( 'Playable.BeaverView' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.puffs = i806
  return i804
}

Deserializers["Playable.HopController"] = function (request, data, root) {
  var i810 = root || request.c( 'Playable.HopController' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'plates')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'sharedMesh')
  var i815 = i813[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.bones = i814
  i812.updateWhenOffscreen = !!i813[3]
  i812.localBounds = i813[4]
  request.r(i813[5], i813[6], 0, i812, 'rootBone')
  var i817 = i813[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i817[i + 0]) );
  }
  i812.blendShapesWeights = i816
  i812.enabled = !!i813[8]
  request.r(i813[9], i813[10], 0, i812, 'sharedMaterial')
  var i819 = i813[11]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i812.sharedMaterials = i818
  i812.receiveShadows = !!i813[12]
  i812.shadowCastingMode = i813[13]
  i812.sortingLayerID = i813[14]
  i812.sortingOrder = i813[15]
  i812.lightmapIndex = i813[16]
  i812.lightmapSceneIndex = i813[17]
  i812.lightmapScaleOffset = new pc.Vec4( i813[18], i813[19], i813[20], i813[21] )
  i812.lightProbeUsage = i813[22]
  i812.reflectionProbeUsage = i813[23]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i823 = data
  i822.weight = i823[0]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i825 = data
  i824.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i825[0], i824.main)
  i824.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i825[1], i824.colorBySpeed)
  i824.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i825[2], i824.colorOverLifetime)
  i824.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i825[3], i824.emission)
  i824.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i825[4], i824.rotationBySpeed)
  i824.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i825[5], i824.rotationOverLifetime)
  i824.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i825[6], i824.shape)
  i824.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i825[7], i824.sizeBySpeed)
  i824.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i825[8], i824.sizeOverLifetime)
  i824.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i825[9], i824.textureSheetAnimation)
  i824.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i825[10], i824.velocityOverLifetime)
  i824.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i825[11], i824.noise)
  i824.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i825[12], i824.inheritVelocity)
  i824.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i825[13], i824.forceOverLifetime)
  i824.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i825[14], i824.limitVelocityOverLifetime)
  i824.useAutoRandomSeed = !!i825[15]
  i824.randomSeed = i825[16]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemMain()
  var i827 = data
  i826.duration = i827[0]
  i826.loop = !!i827[1]
  i826.prewarm = !!i827[2]
  i826.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.startDelay)
  i826.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.startLifetime)
  i826.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[5], i826.startSpeed)
  i826.startSize3D = !!i827[6]
  i826.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.startSizeX)
  i826.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.startSizeY)
  i826.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.startSizeZ)
  i826.startRotation3D = !!i827[10]
  i826.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.startRotationX)
  i826.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[12], i826.startRotationY)
  i826.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[13], i826.startRotationZ)
  i826.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i827[14], i826.startColor)
  i826.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[15], i826.gravityModifier)
  i826.simulationSpace = i827[16]
  request.r(i827[17], i827[18], 0, i826, 'customSimulationSpace')
  i826.simulationSpeed = i827[19]
  i826.useUnscaledTime = !!i827[20]
  i826.scalingMode = i827[21]
  i826.playOnAwake = !!i827[22]
  i826.maxParticles = i827[23]
  i826.emitterVelocityMode = i827[24]
  i826.stopAction = i827[25]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i828 = root || new pc.MinMaxCurve()
  var i829 = data
  i828.mode = i829[0]
  i828.curveMin = new pc.AnimationCurve( { keys_flow: i829[1] } )
  i828.curveMax = new pc.AnimationCurve( { keys_flow: i829[2] } )
  i828.curveMultiplier = i829[3]
  i828.constantMin = i829[4]
  i828.constantMax = i829[5]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i830 = root || new pc.MinMaxGradient()
  var i831 = data
  i830.mode = i831[0]
  i830.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i831[1], i830.gradientMin)
  i830.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i831[2], i830.gradientMax)
  i830.colorMin = new pc.Color(i831[3], i831[4], i831[5], i831[6])
  i830.colorMax = new pc.Color(i831[7], i831[8], i831[9], i831[10])
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i833 = data
  i832.mode = i833[0]
  var i835 = i833[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i835[i + 0]) );
  }
  i832.colorKeys = i834
  var i837 = i833[2]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i837[i + 0]) );
  }
  i832.alphaKeys = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemColorBySpeed()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i839[1], i838.color)
  i838.range = new pc.Vec2( i839[2], i839[3] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i843 = data
  i842.color = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  i842.time = i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i847 = data
  i846.alpha = i847[0]
  i846.time = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemColorOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i849[1], i848.color)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemEmitter()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[1], i850.rateOverTime)
  i850.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[2], i850.rateOverDistance)
  var i853 = i851[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i853[i + 0]) );
  }
  i850.bursts = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemBurst()
  var i857 = data
  i856.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[0], i856.count)
  i856.cycleCount = i857[1]
  i856.minCount = i857[2]
  i856.maxCount = i857[3]
  i856.repeatInterval = i857[4]
  i856.time = i857[5]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemRotationBySpeed()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.x)
  i858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.y)
  i858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.z)
  i858.separateAxes = !!i859[4]
  i858.range = new pc.Vec2( i859[5], i859[6] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemRotationOverLifetime()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.x)
  i860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.y)
  i860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.z)
  i860.separateAxes = !!i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemShape()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.shapeType = i863[1]
  i862.randomDirectionAmount = i863[2]
  i862.sphericalDirectionAmount = i863[3]
  i862.randomPositionAmount = i863[4]
  i862.alignToDirection = !!i863[5]
  i862.radius = i863[6]
  i862.radiusMode = i863[7]
  i862.radiusSpread = i863[8]
  i862.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[9], i862.radiusSpeed)
  i862.radiusThickness = i863[10]
  i862.angle = i863[11]
  i862.length = i863[12]
  i862.boxThickness = new pc.Vec3( i863[13], i863[14], i863[15] )
  i862.meshShapeType = i863[16]
  request.r(i863[17], i863[18], 0, i862, 'mesh')
  request.r(i863[19], i863[20], 0, i862, 'meshRenderer')
  request.r(i863[21], i863[22], 0, i862, 'skinnedMeshRenderer')
  i862.useMeshMaterialIndex = !!i863[23]
  i862.meshMaterialIndex = i863[24]
  i862.useMeshColors = !!i863[25]
  i862.normalOffset = i863[26]
  i862.arc = i863[27]
  i862.arcMode = i863[28]
  i862.arcSpread = i863[29]
  i862.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[30], i862.arcSpeed)
  i862.donutRadius = i863[31]
  i862.position = new pc.Vec3( i863[32], i863[33], i863[34] )
  i862.rotation = new pc.Vec3( i863[35], i863[36], i863[37] )
  i862.scale = new pc.Vec3( i863[38], i863[39], i863[40] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemSizeBySpeed()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.x)
  i864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.y)
  i864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[3], i864.z)
  i864.separateAxes = !!i865[4]
  i864.range = new pc.Vec2( i865[5], i865[6] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i866 = root || new pc.ParticleSystemSizeOverLifetime()
  var i867 = data
  i866.enabled = !!i867[0]
  i866.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[1], i866.x)
  i866.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[2], i866.y)
  i866.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i867[3], i866.z)
  i866.separateAxes = !!i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.mode = i869[1]
  i868.animation = i869[2]
  i868.numTilesX = i869[3]
  i868.numTilesY = i869[4]
  i868.useRandomRow = !!i869[5]
  i868.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[6], i868.frameOverTime)
  i868.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[7], i868.startFrame)
  i868.cycleCount = i869[8]
  i868.rowIndex = i869[9]
  i868.flipU = i869[10]
  i868.flipV = i869[11]
  i868.spriteCount = i869[12]
  var i871 = i869[13]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.sprites = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[4], i874.radial)
  i874.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[5], i874.speedModifier)
  i874.space = i875[6]
  i874.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[7], i874.orbitalX)
  i874.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[8], i874.orbitalY)
  i874.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[9], i874.orbitalZ)
  i874.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[10], i874.orbitalOffsetX)
  i874.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[11], i874.orbitalOffsetY)
  i874.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[12], i874.orbitalOffsetZ)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemNoise()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.separateAxes = !!i877[1]
  i876.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.strengthX)
  i876.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.strengthY)
  i876.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[4], i876.strengthZ)
  i876.frequency = i877[5]
  i876.damping = !!i877[6]
  i876.octaveCount = i877[7]
  i876.octaveMultiplier = i877[8]
  i876.octaveScale = i877[9]
  i876.quality = i877[10]
  i876.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[11], i876.scrollSpeed)
  i876.scrollSpeedMultiplier = i877[12]
  i876.remapEnabled = !!i877[13]
  i876.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[14], i876.remapX)
  i876.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[15], i876.remapY)
  i876.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[16], i876.remapZ)
  i876.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[17], i876.positionAmount)
  i876.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[18], i876.rotationAmount)
  i876.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[19], i876.sizeAmount)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemInheritVelocity()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.mode = i879[1]
  i878.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.curve)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemForceOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.space = i881[4]
  i880.randomized = !!i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.limit)
  i882.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.limitX)
  i882.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.limitY)
  i882.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[4], i882.limitZ)
  i882.dampen = i883[5]
  i882.separateAxes = !!i883[6]
  i882.space = i883[7]
  i882.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[8], i882.drag)
  i882.multiplyDragByParticleSize = !!i883[9]
  i882.multiplyDragByParticleVelocity = !!i883[10]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'mesh')
  i884.meshCount = i885[2]
  i884.activeVertexStreamsCount = i885[3]
  i884.alignment = i885[4]
  i884.renderMode = i885[5]
  i884.sortMode = i885[6]
  i884.lengthScale = i885[7]
  i884.velocityScale = i885[8]
  i884.cameraVelocityScale = i885[9]
  i884.normalDirection = i885[10]
  i884.sortingFudge = i885[11]
  i884.minParticleSize = i885[12]
  i884.maxParticleSize = i885[13]
  i884.pivot = new pc.Vec3( i885[14], i885[15], i885[16] )
  request.r(i885[17], i885[18], 0, i884, 'trailMaterial')
  i884.applyActiveColorSpace = !!i885[19]
  i884.enabled = !!i885[20]
  request.r(i885[21], i885[22], 0, i884, 'sharedMaterial')
  var i887 = i885[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.sharedMaterials = i886
  i884.receiveShadows = !!i885[24]
  i884.shadowCastingMode = i885[25]
  i884.sortingLayerID = i885[26]
  i884.sortingOrder = i885[27]
  i884.lightmapIndex = i885[28]
  i884.lightmapSceneIndex = i885[29]
  i884.lightmapScaleOffset = new pc.Vec4( i885[30], i885[31], i885[32], i885[33] )
  i884.lightProbeUsage = i885[34]
  i884.reflectionProbeUsage = i885[35]
  return i884
}

Deserializers["Playable.IslandTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Playable.IslandTransition' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'plates')
  request.r(i889[2], i889[3], 0, i888, 'hop')
  request.r(i889[4], i889[5], 0, i888, 'rig')
  request.r(i889[6], i889[7], 0, i888, 'banner')
  return i888
}

Deserializers["Playable.GameFlow"] = function (request, data, root) {
  var i890 = root || request.c( 'Playable.GameFlow' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'plates')
  request.r(i891[2], i891[3], 0, i890, 'hop')
  request.r(i891[4], i891[5], 0, i890, 'transition')
  request.r(i891[6], i891[7], 0, i890, 'banner')
  return i890
}

Deserializers["Playable.Sfx"] = function (request, data, root) {
  var i892 = root || request.c( 'Playable.Sfx' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'voice')
  request.r(i893[2], i893[3], 0, i892, 'crumbles')
  request.r(i893[4], i893[5], 0, i892, 'tileSpawn')
  request.r(i893[6], i893[7], 0, i892, 'tileDelete')
  request.r(i893[8], i893[9], 0, i892, 'jump')
  request.r(i893[10], i893[11], 0, i892, 'step')
  request.r(i893[12], i893[13], 0, i892, 'scoreAdd')
  request.r(i893[14], i893[15], 0, i892, 'fall')
  request.r(i893[16], i893[17], 0, i892, 'matchGoal')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'clip')
  request.r(i895[2], i895[3], 0, i894, 'outputAudioMixerGroup')
  i894.playOnAwake = !!i895[4]
  i894.loop = !!i895[5]
  i894.time = i895[6]
  i894.volume = i895[7]
  i894.pitch = i895[8]
  i894.enabled = !!i895[9]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i897 = data
  i896.ambientIntensity = i897[0]
  i896.reflectionIntensity = i897[1]
  i896.ambientMode = i897[2]
  i896.ambientLight = new pc.Color(i897[3], i897[4], i897[5], i897[6])
  i896.ambientSkyColor = new pc.Color(i897[7], i897[8], i897[9], i897[10])
  i896.ambientGroundColor = new pc.Color(i897[11], i897[12], i897[13], i897[14])
  i896.ambientEquatorColor = new pc.Color(i897[15], i897[16], i897[17], i897[18])
  i896.fogColor = new pc.Color(i897[19], i897[20], i897[21], i897[22])
  i896.fogEndDistance = i897[23]
  i896.fogStartDistance = i897[24]
  i896.fogDensity = i897[25]
  i896.fog = !!i897[26]
  request.r(i897[27], i897[28], 0, i896, 'skybox')
  i896.fogMode = i897[29]
  var i899 = i897[30]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i899[i + 0]) );
  }
  i896.lightmaps = i898
  i896.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i897[31], i896.lightProbes)
  i896.lightmapsMode = i897[32]
  i896.mixedBakeMode = i897[33]
  i896.environmentLightingMode = i897[34]
  i896.ambientProbe = new pc.SphericalHarmonicsL2(i897[35])
  request.r(i897[36], i897[37], 0, i896, 'customReflection')
  request.r(i897[38], i897[39], 0, i896, 'defaultReflection')
  i896.defaultReflectionMode = i897[40]
  i896.defaultReflectionResolution = i897[41]
  i896.sunLightObjectId = i897[42]
  i896.pixelLightCount = i897[43]
  i896.defaultReflectionHDR = !!i897[44]
  i896.hasLightDataAsset = !!i897[45]
  i896.hasManualGenerate = !!i897[46]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'lightmapColor')
  request.r(i903[2], i903[3], 0, i902, 'lightmapDirection')
  request.r(i903[4], i903[5], 0, i902, 'shadowMask')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i904 = root || new UnityEngine.LightProbes()
  var i905 = data
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i913 = data
  i912.AdditionalLightsRenderingMode = i913[0]
  i912.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i913[1], i912.LightRenderingMode)
  i912.MainLightRenderingModeValue = i913[2]
  i912.SupportsMainLightShadows = !!i913[3]
  i912.MixedLightingSupported = !!i913[4]
  i912.MainLightShadowmapResolutionValue = i913[5]
  i912.SupportsSoftShadows = !!i913[6]
  i912.SoftShadowQualityValue = i913[7]
  i912.ShadowDistance = i913[8]
  i912.ShadowCascadeCount = i913[9]
  i912.Cascade2Split = i913[10]
  i912.Cascade3Split = new pc.Vec2( i913[11], i913[12] )
  i912.Cascade4Split = new pc.Vec3( i913[13], i913[14], i913[15] )
  i912.CascadeBorder = i913[16]
  i912.ShadowDepthBias = i913[17]
  i912.ShadowNormalBias = i913[18]
  i912.RequireDepthTexture = !!i913[19]
  i912.RequireOpaqueTexture = !!i913[20]
  i912.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i913[21], i912.scriptableRendererData)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i915 = data
  i914.Disabled = i915[0]
  i914.PerVertex = i915[1]
  i914.PerPixel = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i917 = data
  i916.opaqueLayerMask = i917[0]
  i916.transparentLayerMask = i917[1]
  var i919 = i917[2]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i919[i + 0]) );
  }
  i916.RenderObjectsFeatures = i918
  i916.name = i917[3]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i923 = data
  i922.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i923[0], i922.settings)
  i922.name = i923[1]
  i922.typeName = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i927[i + 0]));
  }
  i924.ShaderCompilationErrors = i926
  i924.name = i925[1]
  i924.guid = i925[2]
  var i929 = i925[3]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i924.shaderDefinedKeywords = i928
  var i931 = i925[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i931[i + 0]) );
  }
  i924.passes = i930
  var i933 = i925[5]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i933[i + 0]) );
  }
  i924.usePasses = i932
  var i935 = i925[6]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i935[i + 0]) );
  }
  i924.defaultParameterValues = i934
  request.r(i925[7], i925[8], 0, i924, 'unityFallbackShader')
  i924.readDepth = !!i925[9]
  i924.hasDepthOnlyPass = !!i925[10]
  i924.isCreatedByShaderGraph = !!i925[11]
  i924.disableBatching = !!i925[12]
  i924.compiled = !!i925[13]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i939 = data
  i938.shaderName = i939[0]
  i938.errorMessage = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i944 = root || new pc.UnityShaderPass()
  var i945 = data
  i944.id = i945[0]
  i944.subShaderIndex = i945[1]
  i944.name = i945[2]
  i944.passType = i945[3]
  i944.grabPassTextureName = i945[4]
  i944.usePass = !!i945[5]
  i944.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[6], i944.zTest)
  i944.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[7], i944.zWrite)
  i944.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[8], i944.culling)
  i944.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i945[9], i944.blending)
  i944.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i945[10], i944.alphaBlending)
  i944.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[11], i944.colorWriteMask)
  i944.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[12], i944.offsetUnits)
  i944.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[13], i944.offsetFactor)
  i944.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[14], i944.stencilRef)
  i944.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[15], i944.stencilReadMask)
  i944.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i945[16], i944.stencilWriteMask)
  i944.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[17], i944.stencilOp)
  i944.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[18], i944.stencilOpFront)
  i944.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i945[19], i944.stencilOpBack)
  var i947 = i945[20]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i947[i + 0]) );
  }
  i944.tags = i946
  var i949 = i945[21]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i944.passDefinedKeywords = i948
  var i951 = i945[22]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i951[i + 0]) );
  }
  i944.passDefinedKeywordGroups = i950
  var i953 = i945[23]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i953[i + 0]) );
  }
  i944.variants = i952
  var i955 = i945[24]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i955[i + 0]) );
  }
  i944.excludedVariants = i954
  i944.hasDepthReader = !!i945[25]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i957 = data
  i956.val = i957[0]
  i956.name = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i959 = data
  i958.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[0], i958.src)
  i958.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[1], i958.dst)
  i958.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[2], i958.op)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i961 = data
  i960.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[0], i960.pass)
  i960.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[1], i960.fail)
  i960.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[2], i960.zFail)
  i960.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[3], i960.comp)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i965 = data
  i964.name = i965[0]
  i964.value = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i968.keywords = i970
  i968.hasDiscard = !!i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i975 = data
  i974.passId = i975[0]
  i974.subShaderIndex = i975[1]
  var i977 = i975[2]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i974.keywords = i976
  i974.vertexProgram = i975[3]
  i974.fragmentProgram = i975[4]
  i974.exportedForWebGl2 = !!i975[5]
  i974.readDepth = !!i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'shader')
  i980.pass = i981[2]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i985 = data
  i984.name = i985[0]
  i984.type = i985[1]
  i984.value = new pc.Vec4( i985[2], i985[3], i985[4], i985[5] )
  i984.textureValue = i985[6]
  i984.shaderPropertyFlag = i985[7]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i987 = data
  i986.name = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'texture')
  i986.aabb = i987[3]
  i986.vertices = i987[4]
  i986.triangles = i987[5]
  i986.textureRect = UnityEngine.Rect.MinMaxRect(i987[6], i987[7], i987[8], i987[9])
  i986.packedRect = UnityEngine.Rect.MinMaxRect(i987[10], i987[11], i987[12], i987[13])
  i986.border = new pc.Vec4( i987[14], i987[15], i987[16], i987[17] )
  i986.transparency = i987[18]
  i986.bounds = i987[19]
  i986.pixelsPerUnit = i987[20]
  i986.textureWidth = i987[21]
  i986.textureHeight = i987[22]
  i986.nativeSize = new pc.Vec2( i987[23], i987[24] )
  i986.pivot = new pc.Vec2( i987[25], i987[26] )
  i986.textureRectOffset = new pc.Vec2( i987[27], i987[28] )
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i989 = data
  i988.name = i989[0]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i991 = data
  i990.name = i991[0]
  i990.wrapMode = i991[1]
  i990.isLooping = !!i991[2]
  i990.length = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i993[i + 0]) );
  }
  i990.curves = i992
  var i995 = i991[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i995[i + 0]) );
  }
  i990.events = i994
  i990.halfPrecision = !!i991[6]
  i990._frameRate = i991[7]
  i990.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i991[8], i990.localBounds)
  i990.hasMuscleCurves = !!i991[9]
  var i997 = i991[10]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i990.clipMuscleConstant = i996
  i990.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i991[11], i990.clipBindingConstant)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1001 = data
  i1000.path = i1001[0]
  i1000.hash = i1001[1]
  i1000.componentType = i1001[2]
  i1000.property = i1001[3]
  i1000.keys = i1001[4]
  var i1003 = i1001[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1003[i + 0]) );
  }
  i1000.objectReferenceKeys = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1007 = data
  i1006.time = i1007[0]
  request.r(i1007[1], i1007[2], 0, i1006, 'value')
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1011 = data
  i1010.functionName = i1011[0]
  i1010.floatParameter = i1011[1]
  i1010.intParameter = i1011[2]
  i1010.stringParameter = i1011[3]
  request.r(i1011[4], i1011[5], 0, i1010, 'objectReferenceParameter')
  i1010.time = i1011[6]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1013 = data
  i1012.center = new pc.Vec3( i1013[0], i1013[1], i1013[2] )
  i1012.extends = new pc.Vec3( i1013[3], i1013[4], i1013[5] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.genericBindings = i1018
  var i1021 = i1017[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1016.pptrCurveMapping = i1020
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1023 = data
  i1022.name = i1023[0]
  var i1025 = i1023[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1025[i + 0]) );
  }
  i1022.layers = i1024
  var i1027 = i1023[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1027[i + 0]) );
  }
  i1022.parameters = i1026
  i1022.animationClips = i1023[3]
  i1022.avatarUnsupported = i1023[4]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.defaultWeight = i1031[1]
  i1030.blendingMode = i1031[2]
  i1030.avatarMask = i1031[3]
  i1030.syncedLayerIndex = i1031[4]
  i1030.syncedLayerAffectsTiming = !!i1031[5]
  i1030.syncedLayers = i1031[6]
  i1030.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1031[7], i1030.stateMachine)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  i1032.path = i1033[2]
  var i1035 = i1033[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1035[i + 0]) );
  }
  i1032.states = i1034
  var i1037 = i1033[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1037[i + 0]) );
  }
  i1032.machines = i1036
  var i1039 = i1033[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1039[i + 0]) );
  }
  i1032.entryStateTransitions = i1038
  var i1041 = i1033[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1041[i + 0]) );
  }
  i1032.exitStateTransitions = i1040
  var i1043 = i1033[7]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1043[i + 0]) );
  }
  i1032.anyStateTransitions = i1042
  i1032.defaultStateId = i1033[8]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  i1046.cycleOffset = i1047[2]
  i1046.cycleOffsetParameter = i1047[3]
  i1046.cycleOffsetParameterActive = !!i1047[4]
  i1046.mirror = !!i1047[5]
  i1046.mirrorParameter = i1047[6]
  i1046.mirrorParameterActive = !!i1047[7]
  i1046.motionId = i1047[8]
  i1046.nameHash = i1047[9]
  i1046.fullPathHash = i1047[10]
  i1046.speed = i1047[11]
  i1046.speedParameter = i1047[12]
  i1046.speedParameterActive = !!i1047[13]
  i1046.tag = i1047[14]
  i1046.tagHash = i1047[15]
  i1046.writeDefaultValues = !!i1047[16]
  var i1049 = i1047[17]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 2, i1048, '')
  }
  i1046.behaviours = i1048
  var i1051 = i1047[18]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1051[i + 0]) );
  }
  i1046.transitions = i1050
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1057 = data
  i1056.fullPath = i1057[0]
  i1056.canTransitionToSelf = !!i1057[1]
  i1056.duration = i1057[2]
  i1056.exitTime = i1057[3]
  i1056.hasExitTime = !!i1057[4]
  i1056.hasFixedDuration = !!i1057[5]
  i1056.interruptionSource = i1057[6]
  i1056.offset = i1057[7]
  i1056.orderedInterruption = !!i1057[8]
  i1056.destinationStateId = i1057[9]
  i1056.isExit = !!i1057[10]
  i1056.mute = !!i1057[11]
  i1056.solo = !!i1057[12]
  var i1059 = i1057[13]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1059[i + 0]) );
  }
  i1056.conditions = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1063 = data
  i1062.mode = i1063[0]
  i1062.parameter = i1063[1]
  i1062.threshold = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1069 = data
  i1068.destinationStateId = i1069[0]
  i1068.isExit = !!i1069[1]
  i1068.mute = !!i1069[2]
  i1068.solo = !!i1069[3]
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1071[i + 0]) );
  }
  i1068.conditions = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1075 = data
  i1074.defaultBool = !!i1075[0]
  i1074.defaultFloat = i1075[1]
  i1074.defaultInt = i1075[2]
  i1074.name = i1075[3]
  i1074.nameHash = i1075[4]
  i1074.type = i1075[5]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.bytes64 = i1077[1]
  i1076.data = i1077[2]
  return i1076
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1079 = data
  i1078.normalStyle = i1079[0]
  i1078.normalSpacingOffset = i1079[1]
  i1078.boldStyle = i1079[2]
  i1078.boldSpacing = i1079[3]
  i1078.italicStyle = i1079[4]
  i1078.tabSize = i1079[5]
  request.r(i1079[6], i1079[7], 0, i1078, 'atlas')
  i1078.m_SourceFontFileGUID = i1079[8]
  i1078.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1079[9], i1078.m_CreationSettings)
  request.r(i1079[10], i1079[11], 0, i1078, 'm_SourceFontFile')
  i1078.m_SourceFontFilePath = i1079[12]
  i1078.m_AtlasPopulationMode = i1079[13]
  i1078.InternalDynamicOS = !!i1079[14]
  var i1081 = i1079[15]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('UnityEngine.TextCore.Glyph', i1081[i + 0]));
  }
  i1078.m_GlyphTable = i1080
  var i1083 = i1079[16]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.TMP_Character', i1083[i + 0]));
  }
  i1078.m_CharacterTable = i1082
  var i1085 = i1079[17]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1078.m_AtlasTextures = i1084
  i1078.m_AtlasTextureIndex = i1079[18]
  i1078.m_IsMultiAtlasTexturesEnabled = !!i1079[19]
  i1078.m_GetFontFeatures = !!i1079[20]
  i1078.m_ClearDynamicDataOnBuild = !!i1079[21]
  i1078.m_AtlasWidth = i1079[22]
  i1078.m_AtlasHeight = i1079[23]
  i1078.m_AtlasPadding = i1079[24]
  i1078.m_AtlasRenderMode = i1079[25]
  var i1087 = i1079[26]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('UnityEngine.TextCore.GlyphRect', i1087[i + 0]));
  }
  i1078.m_UsedGlyphRects = i1086
  var i1089 = i1079[27]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('UnityEngine.TextCore.GlyphRect', i1089[i + 0]));
  }
  i1078.m_FreeGlyphRects = i1088
  i1078.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1079[28], i1078.m_FontFeatureTable)
  i1078.m_ShouldReimportFontFeatures = !!i1079[29]
  var i1091 = i1079[30]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1078.m_FallbackFontAssetTable = i1090
  var i1093 = i1079[31]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('TMPro.TMP_FontWeightPair', i1093[i + 0]) );
  }
  i1078.m_FontWeightTable = i1092
  var i1095 = i1079[32]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('TMPro.TMP_FontWeightPair', i1095[i + 0]) );
  }
  i1078.fontWeights = i1094
  i1078.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1079[33], i1078.m_fontInfo)
  var i1097 = i1079[34]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.TMP_Glyph', i1097[i + 0]));
  }
  i1078.m_glyphInfoList = i1096
  i1078.m_KerningTable = request.d('TMPro.KerningTable', i1079[35], i1078.m_KerningTable)
  var i1099 = i1079[36]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 1, i1098, '')
  }
  i1078.fallbackFontAssets = i1098
  i1078.m_Version = i1079[37]
  i1078.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1079[38], i1078.m_FaceInfo)
  request.r(i1079[39], i1079[40], 0, i1078, 'm_Material')
  return i1078
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1101 = data
  i1100.sourceFontFileName = i1101[0]
  i1100.sourceFontFileGUID = i1101[1]
  i1100.faceIndex = i1101[2]
  i1100.pointSizeSamplingMode = i1101[3]
  i1100.pointSize = i1101[4]
  i1100.padding = i1101[5]
  i1100.paddingMode = i1101[6]
  i1100.packingMode = i1101[7]
  i1100.atlasWidth = i1101[8]
  i1100.atlasHeight = i1101[9]
  i1100.characterSetSelectionMode = i1101[10]
  i1100.characterSequence = i1101[11]
  i1100.referencedFontAssetGUID = i1101[12]
  i1100.referencedTextAssetGUID = i1101[13]
  i1100.fontStyle = i1101[14]
  i1100.fontStyleModifier = i1101[15]
  i1100.renderMode = i1101[16]
  i1100.includeFontFeatures = !!i1101[17]
  return i1100
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1105 = data
  i1104.m_Index = i1105[0]
  i1104.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1105[1], i1104.m_Metrics)
  i1104.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1105[2], i1104.m_GlyphRect)
  i1104.m_Scale = i1105[3]
  i1104.m_AtlasIndex = i1105[4]
  i1104.m_ClassDefinitionType = i1105[5]
  return i1104
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1107 = data
  i1106.m_Width = i1107[0]
  i1106.m_Height = i1107[1]
  i1106.m_HorizontalBearingX = i1107[2]
  i1106.m_HorizontalBearingY = i1107[3]
  i1106.m_HorizontalAdvance = i1107[4]
  return i1106
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1109 = data
  i1108.m_X = i1109[0]
  i1108.m_Y = i1109[1]
  i1108.m_Width = i1109[2]
  i1108.m_Height = i1109[3]
  return i1108
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_Character' )
  var i1113 = data
  i1112.m_ElementType = i1113[0]
  i1112.m_Unicode = i1113[1]
  i1112.m_GlyphIndex = i1113[2]
  i1112.m_Scale = i1113[3]
  return i1112
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.MultipleSubstitutionRecord', i1121[i + 0]));
  }
  i1118.m_MultipleSubstitutionRecords = i1120
  var i1123 = i1119[1]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.LigatureSubstitutionRecord', i1123[i + 0]));
  }
  i1118.m_LigatureSubstitutionRecords = i1122
  var i1125 = i1119[2]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1125[i + 0]));
  }
  i1118.m_GlyphPairAdjustmentRecords = i1124
  var i1127 = i1119[3]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1127[i + 0]));
  }
  i1118.m_MarkToBaseAdjustmentRecords = i1126
  var i1129 = i1119[4]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1129[i + 0]));
  }
  i1118.m_MarkToMarkAdjustmentRecords = i1128
  return i1118
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1133 = data
  i1132.m_TargetGlyphID = i1133[0]
  i1132.m_SubstituteGlyphIDs = i1133[1]
  return i1132
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1137 = data
  i1136.m_ComponentGlyphIDs = i1137[0]
  i1136.m_LigatureGlyphID = i1137[1]
  return i1136
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1141 = data
  i1140.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1141[0], i1140.m_FirstAdjustmentRecord)
  i1140.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1141[1], i1140.m_SecondAdjustmentRecord)
  i1140.m_FeatureLookupFlags = i1141[2]
  return i1140
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1145 = data
  i1144.m_BaseGlyphID = i1145[0]
  i1144.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1145[1], i1144.m_BaseGlyphAnchorPoint)
  i1144.m_MarkGlyphID = i1145[2]
  i1144.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1145[3], i1144.m_MarkPositionAdjustment)
  return i1144
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1149 = data
  i1148.m_BaseMarkGlyphID = i1149[0]
  i1148.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1149[1], i1148.m_BaseMarkGlyphAnchorPoint)
  i1148.m_CombiningMarkGlyphID = i1149[2]
  i1148.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1149[3], i1148.m_CombiningMarkPositionAdjustment)
  return i1148
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'regularTypeface')
  request.r(i1155[2], i1155[3], 0, i1154, 'italicTypeface')
  return i1154
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1157 = data
  i1156.Name = i1157[0]
  i1156.PointSize = i1157[1]
  i1156.Scale = i1157[2]
  i1156.CharacterCount = i1157[3]
  i1156.LineHeight = i1157[4]
  i1156.Baseline = i1157[5]
  i1156.Ascender = i1157[6]
  i1156.CapHeight = i1157[7]
  i1156.Descender = i1157[8]
  i1156.CenterLine = i1157[9]
  i1156.SuperscriptOffset = i1157[10]
  i1156.SubscriptOffset = i1157[11]
  i1156.SubSize = i1157[12]
  i1156.Underline = i1157[13]
  i1156.UnderlineThickness = i1157[14]
  i1156.strikethrough = i1157[15]
  i1156.strikethroughThickness = i1157[16]
  i1156.TabWidth = i1157[17]
  i1156.Padding = i1157[18]
  i1156.AtlasWidth = i1157[19]
  i1156.AtlasHeight = i1157[20]
  return i1156
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1161 = data
  i1160.id = i1161[0]
  i1160.x = i1161[1]
  i1160.y = i1161[2]
  i1160.width = i1161[3]
  i1160.height = i1161[4]
  i1160.xOffset = i1161[5]
  i1160.yOffset = i1161[6]
  i1160.xAdvance = i1161[7]
  i1160.scale = i1161[8]
  return i1160
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.KerningTable' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.KerningPair', i1165[i + 0]));
  }
  i1162.kerningPairs = i1164
  return i1162
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.KerningPair' )
  var i1169 = data
  i1168.xOffset = i1169[0]
  i1168.m_FirstGlyph = i1169[1]
  i1168.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1169[2], i1168.m_FirstGlyphAdjustments)
  i1168.m_SecondGlyph = i1169[3]
  i1168.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1169[4], i1168.m_SecondGlyphAdjustments)
  i1168.m_IgnoreSpacingAdjustments = !!i1169[5]
  return i1168
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1171 = data
  i1170.m_FaceIndex = i1171[0]
  i1170.m_FamilyName = i1171[1]
  i1170.m_StyleName = i1171[2]
  i1170.m_PointSize = i1171[3]
  i1170.m_Scale = i1171[4]
  i1170.m_UnitsPerEM = i1171[5]
  i1170.m_LineHeight = i1171[6]
  i1170.m_AscentLine = i1171[7]
  i1170.m_CapLine = i1171[8]
  i1170.m_MeanLine = i1171[9]
  i1170.m_Baseline = i1171[10]
  i1170.m_DescentLine = i1171[11]
  i1170.m_SuperscriptOffset = i1171[12]
  i1170.m_SuperscriptSize = i1171[13]
  i1170.m_SubscriptOffset = i1171[14]
  i1170.m_SubscriptSize = i1171[15]
  i1170.m_UnderlineOffset = i1171[16]
  i1170.m_UnderlineThickness = i1171[17]
  i1170.m_StrikethroughOffset = i1171[18]
  i1170.m_StrikethroughThickness = i1171[19]
  i1170.m_TabWidth = i1171[20]
  return i1170
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_Settings' )
  var i1173 = data
  i1172.assetVersion = i1173[0]
  i1172.m_TextWrappingMode = i1173[1]
  i1172.m_enableKerning = !!i1173[2]
  var i1175 = i1173[3]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(i1175[i + 0]);
  }
  i1172.m_ActiveFontFeatures = i1174
  i1172.m_enableExtraPadding = !!i1173[4]
  i1172.m_enableTintAllSprites = !!i1173[5]
  i1172.m_enableParseEscapeCharacters = !!i1173[6]
  i1172.m_EnableRaycastTarget = !!i1173[7]
  i1172.m_GetFontFeaturesAtRuntime = !!i1173[8]
  i1172.m_missingGlyphCharacter = i1173[9]
  i1172.m_ClearDynamicDataOnBuild = !!i1173[10]
  i1172.m_warningsDisabled = !!i1173[11]
  request.r(i1173[12], i1173[13], 0, i1172, 'm_defaultFontAsset')
  i1172.m_defaultFontAssetPath = i1173[14]
  i1172.m_defaultFontSize = i1173[15]
  i1172.m_defaultAutoSizeMinRatio = i1173[16]
  i1172.m_defaultAutoSizeMaxRatio = i1173[17]
  i1172.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1173[18], i1173[19] )
  i1172.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1173[20], i1173[21] )
  i1172.m_autoSizeTextContainer = !!i1173[22]
  i1172.m_IsTextObjectScaleStatic = !!i1173[23]
  var i1177 = i1173[24]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 1, i1176, '')
  }
  i1172.m_fallbackFontAssets = i1176
  i1172.m_matchMaterialPreset = !!i1173[25]
  i1172.m_HideSubTextObjects = !!i1173[26]
  request.r(i1173[27], i1173[28], 0, i1172, 'm_defaultSpriteAsset')
  i1172.m_defaultSpriteAssetPath = i1173[29]
  i1172.m_enableEmojiSupport = !!i1173[30]
  i1172.m_MissingCharacterSpriteUnicode = i1173[31]
  var i1179 = i1173[32]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1172.m_EmojiFallbackTextAssets = i1178
  i1172.m_defaultColorGradientPresetsPath = i1173[33]
  request.r(i1173[34], i1173[35], 0, i1172, 'm_defaultStyleSheet')
  i1172.m_StyleSheetsResourcePath = i1173[36]
  request.r(i1173[37], i1173[38], 0, i1172, 'm_leadingCharacters')
  request.r(i1173[39], i1173[40], 0, i1172, 'm_followingCharacters')
  i1172.m_UseModernHangulLineBreakingRules = !!i1173[41]
  return i1172
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Style', i1185[i + 0]));
  }
  i1182.m_StyleList = i1184
  return i1182
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_Style' )
  var i1189 = data
  i1188.m_Name = i1189[0]
  i1188.m_HashCode = i1189[1]
  i1188.m_OpeningDefinition = i1189[2]
  i1188.m_ClosingDefinition = i1189[3]
  i1188.m_OpeningTagArray = i1189[4]
  i1188.m_ClosingTagArray = i1189[5]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1193[i + 0]) );
  }
  i1190.files = i1192
  i1190.componentToPrefabIds = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1197 = data
  i1196.path = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'unityObject')
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1201[i + 0]) );
  }
  i1198.scriptsExecutionOrder = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1203[i + 0]) );
  }
  i1198.sortingLayers = i1202
  var i1205 = i1199[2]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1205[i + 0]) );
  }
  i1198.cullingLayers = i1204
  i1198.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1199[3], i1198.timeSettings)
  i1198.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1199[4], i1198.physicsSettings)
  i1198.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1199[5], i1198.physics2DSettings)
  i1198.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1199[6], i1198.qualitySettings)
  i1198.enableRealtimeShadows = !!i1199[7]
  i1198.enableAutoInstancing = !!i1199[8]
  i1198.enableStaticBatching = !!i1199[9]
  i1198.enableDynamicBatching = !!i1199[10]
  i1198.usePreservativeDynamicBatching = !!i1199[11]
  i1198.lightmapEncodingQuality = i1199[12]
  i1198.desiredColorSpace = i1199[13]
  var i1207 = i1199[14]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1198.allTags = i1206
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.value = i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.name = i1215[1]
  i1214.value = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.name = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1221 = data
  i1220.fixedDeltaTime = i1221[0]
  i1220.maximumDeltaTime = i1221[1]
  i1220.timeScale = i1221[2]
  i1220.maximumParticleTimestep = i1221[3]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1223 = data
  i1222.gravity = new pc.Vec3( i1223[0], i1223[1], i1223[2] )
  i1222.defaultSolverIterations = i1223[3]
  i1222.bounceThreshold = i1223[4]
  i1222.autoSyncTransforms = !!i1223[5]
  i1222.autoSimulation = !!i1223[6]
  var i1225 = i1223[7]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1225[i + 0]) );
  }
  i1222.collisionMatrix = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1229 = data
  i1228.enabled = !!i1229[0]
  i1228.layerId = i1229[1]
  i1228.otherLayerId = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'material')
  i1230.gravity = new pc.Vec2( i1231[2], i1231[3] )
  i1230.positionIterations = i1231[4]
  i1230.velocityIterations = i1231[5]
  i1230.velocityThreshold = i1231[6]
  i1230.maxLinearCorrection = i1231[7]
  i1230.maxAngularCorrection = i1231[8]
  i1230.maxTranslationSpeed = i1231[9]
  i1230.maxRotationSpeed = i1231[10]
  i1230.baumgarteScale = i1231[11]
  i1230.baumgarteTOIScale = i1231[12]
  i1230.timeToSleep = i1231[13]
  i1230.linearSleepTolerance = i1231[14]
  i1230.angularSleepTolerance = i1231[15]
  i1230.defaultContactOffset = i1231[16]
  i1230.autoSimulation = !!i1231[17]
  i1230.queriesHitTriggers = !!i1231[18]
  i1230.queriesStartInColliders = !!i1231[19]
  i1230.callbacksOnDisable = !!i1231[20]
  i1230.reuseCollisionCallbacks = !!i1231[21]
  i1230.autoSyncTransforms = !!i1231[22]
  var i1233 = i1231[23]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1233[i + 0]) );
  }
  i1230.collisionMatrix = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1237 = data
  i1236.enabled = !!i1237[0]
  i1236.layerId = i1237[1]
  i1236.otherLayerId = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1241[i + 0]) );
  }
  i1238.qualityLevels = i1240
  var i1243 = i1239[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.names = i1242
  i1238.shadows = i1239[2]
  i1238.anisotropicFiltering = i1239[3]
  i1238.antiAliasing = i1239[4]
  i1238.lodBias = i1239[5]
  i1238.shadowCascades = i1239[6]
  i1238.shadowDistance = i1239[7]
  i1238.shadowmaskMode = i1239[8]
  i1238.shadowProjection = i1239[9]
  i1238.shadowResolution = i1239[10]
  i1238.softParticles = !!i1239[11]
  i1238.softVegetation = !!i1239[12]
  i1238.activeColorSpace = i1239[13]
  i1238.desiredColorSpace = i1239[14]
  i1238.masterTextureLimit = i1239[15]
  i1238.maxQueuedFrames = i1239[16]
  i1238.particleRaycastBudget = i1239[17]
  i1238.pixelLightCount = i1239[18]
  i1238.realtimeReflectionProbes = !!i1239[19]
  i1238.shadowCascade2Split = i1239[20]
  i1238.shadowCascade4Split = new pc.Vec3( i1239[21], i1239[22], i1239[23] )
  i1238.streamingMipmapsActive = !!i1239[24]
  i1238.vSyncCount = i1239[25]
  i1238.asyncUploadBufferSize = i1239[26]
  i1238.asyncUploadTimeSlice = i1239[27]
  i1238.billboardsFaceCameraPosition = !!i1239[28]
  i1238.shadowNearPlaneOffset = i1239[29]
  i1238.streamingMipmapsMemoryBudget = i1239[30]
  i1238.maximumLODLevel = i1239[31]
  i1238.streamingMipmapsAddAllCameras = !!i1239[32]
  i1238.streamingMipmapsMaxLevelReduction = i1239[33]
  i1238.streamingMipmapsRenderersPerFrame = i1239[34]
  i1238.resolutionScalingFixedDPIFactor = i1239[35]
  i1238.streamingMipmapsMaxFileIORequests = i1239[36]
  i1238.currentQualityLevel = i1239[37]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1249 = data
  i1248.weight = i1249[0]
  i1248.vertices = i1249[1]
  i1248.normals = i1249[2]
  i1248.tangents = i1249[3]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1251 = data
  i1250.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1251[0], i1250.Event)
  i1250.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1251[1], i1250.filterSettings)
  i1250.overrideMaterialId = i1251[2]
  i1250.overrideMaterialPassIndex = i1251[3]
  i1250.overrideShaderId = i1251[4]
  i1250.overrideShaderPassIndex = i1251[5]
  i1250.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1251[6], i1250.overrideMode)
  i1250.overrideDepthState = !!i1251[7]
  i1250.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1251[8], i1250.depthCompareFunction)
  i1250.enableWrite = !!i1251[9]
  i1250.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1251[10], i1250.stencilSettings)
  i1250.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1251[11], i1250.cameraSettings)
  return i1250
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1253 = data
  i1252.m_GlyphIndex = i1253[0]
  i1252.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1253[1], i1252.m_GlyphValueRecord)
  return i1252
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1255 = data
  i1254.m_XCoordinate = i1255[0]
  i1254.m_YCoordinate = i1255[1]
  return i1254
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1257 = data
  i1256.m_XPositionAdjustment = i1257[0]
  i1256.m_YPositionAdjustment = i1257[1]
  return i1256
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1259 = data
  i1258.xPlacement = i1259[0]
  i1258.yPlacement = i1259[1]
  i1258.xAdvance = i1259[2]
  i1258.yAdvance = i1259[3]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1261 = data
  i1260.Value = i1261[0]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1263 = data
  i1262.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1263[0], i1262.RenderQueueType)
  i1262.LayerMask = i1263[1]
  var i1265 = i1263[2]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1262.PassNames = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1267 = data
  i1266.overrideStencilState = !!i1267[0]
  i1266.stencilReference = i1267[1]
  i1266.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[2], i1266.stencilCompareFunctionValue)
  i1266.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[3], i1266.passOperationValue)
  i1266.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[4], i1266.failOperationValue)
  i1266.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1267[5], i1266.zFailOperationValue)
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1269 = data
  i1268.overrideCamera = !!i1269[0]
  i1268.restoreCamera = !!i1269[1]
  i1268.offset = new pc.Vec4( i1269[2], i1269[3], i1269[4], i1269[5] )
  i1268.cameraFieldOfView = i1269[6]
  return i1268
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1271 = data
  i1270.m_XPlacement = i1271[0]
  i1270.m_YPlacement = i1271[1]
  i1270.m_XAdvance = i1271[2]
  i1270.m_YAdvance = i1271[3]
  return i1270
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[39],"58":[2],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[2],"81":[32],"82":[83],"84":[83],"9":[8],"4":[2],"25":[37],"37":[35],"23":[17],"85":[8],"86":[2],"87":[2],"88":[7],"89":[8],"90":[13,8],"91":[32],"92":[13,8],"93":[8],"94":[8],"95":[32,8],"17":[8,13],"96":[8],"97":[8],"12":[9],"14":[13,8],"98":[8],"11":[9],"99":[8],"100":[8],"101":[8],"102":[8],"103":[8],"104":[8],"105":[8],"106":[8],"107":[8],"108":[13,8],"109":[8],"110":[8],"111":[8],"112":[8],"113":[13,8],"114":[8],"115":[28],"116":[28],"29":[28],"117":[28],"118":[2],"119":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.MonoBehaviour","Playable.CameraRig","UnityEngine.Transform","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","Playable.InstallButton","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","Playable.ObjectiveBanner","UnityEngine.GameObject","Playable.ScoreHud","Playable.ScorePopup","Playable.Tutorial","Playable.HopController","Playable.EndCard","Playable.PlatesView","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Playable.PlayableInputSource","Playable.PlateView","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Playable.BeaverView","UnityEngine.ParticleSystem","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystemRenderer","Playable.IslandTransition","Playable.GameFlow","Playable.Sfx","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.84f1";

Deserializers.productName = "DeadlyPlatesPlayable";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "1.5";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "43162";

Deserializers.projectId = "ea6e3f0ac9b57bb418771e1e2aa5dce7";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d122a22d-dc2a-47bd-8c82-301c0ce4f597";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Playable","Tests","HeadlessScreenResolution","Apply"],["Playable","PlayableAd","SubscribeToContainer"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Playable","PlatesView","ResetStatics"],["Playable","PlayableAd","ResetStatics"],["Playable","PlayableInput","ResetStatics"],["Playable","Tutorial","ResetStatics"],["Playable","Sfx","ResetStatics"],["Playable","GameFlow","ResetStatics"],["Playable","Tween","ResetStatics"],["Playable","HopController","ResetStatics"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

