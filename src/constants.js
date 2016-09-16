export var REVISION = '81';
export var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };
export var CullFaceNone = 0;
export var CullFaceBack = 1;
export var CullFaceFront = 2;
export var CullFaceFrontBack = 3;
export var FrontFaceDirectionCW = 0;
export var FrontFaceDirectionCCW = 1;
export var BasicShadowMap = 0;
export var PCFShadowMap = 1;
export var PCFSoftShadowMap = 2;
export var FrontSide = 0;
export var BackSide = 1;
export var DoubleSide = 2;
export var FlatShading = 1;
export var SmoothShading = 2;
export var NoColors = 0;
export var FaceColors = 1;
export var VertexColors = 2;
export var NoBlending = 0;
export var NormalBlending = 1;
export var AdditiveBlending = 2;
export var SubtractiveBlending = 3;
export var MultiplyBlending = 4;
export var CustomBlending = 5;
export var BlendingMode = {
    NoBlending: NoBlending,
    NormalBlending: NormalBlending,
    AdditiveBlending: AdditiveBlending,
    SubtractiveBlending: SubtractiveBlending,
    MultiplyBlending: MultiplyBlending,
    CustomBlending: CustomBlending
};
export var AddEquation = 100;
export var SubtractEquation = 101;
export var ReverseSubtractEquation = 102;
export var MinEquation = 103;
export var MaxEquation = 104;
export var ZeroFactor = 200;
export var OneFactor = 201;
export var SrcColorFactor = 202;
export var OneMinusSrcColorFactor = 203;
export var SrcAlphaFactor = 204;
export var OneMinusSrcAlphaFactor = 205;
export var DstAlphaFactor = 206;
export var OneMinusDstAlphaFactor = 207;
export var DstColorFactor = 208;
export var OneMinusDstColorFactor = 209;
export var SrcAlphaSaturateFactor = 210;
export var NeverDepth = 0;
export var AlwaysDepth = 1;
export var LessDepth = 2;
export var LessEqualDepth = 3;
export var EqualDepth = 4;
export var GreaterEqualDepth = 5;
export var GreaterDepth = 6;
export var NotEqualDepth = 7;
export var MultiplyOperation = 0;
export var MixOperation = 1;
export var AddOperation = 2;
export var NoToneMapping = 0;
export var LinearToneMapping = 1;
export var ReinhardToneMapping = 2;
export var Uncharted2ToneMapping = 3;
export var CineonToneMapping = 4;
export var UVMapping = 300;
export var CubeReflectionMapping = 301;
export var CubeRefractionMapping = 302;
export var EquirectangularReflectionMapping = 303;
export var EquirectangularRefractionMapping = 304;
export var SphericalReflectionMapping = 305;
export var CubeUVReflectionMapping = 306;
export var CubeUVRefractionMapping = 307;
export var TextureMapping = {
    UVMapping: UVMapping,
    CubeReflectionMapping: CubeReflectionMapping,
    CubeRefractionMapping: CubeRefractionMapping,
    EquirectangularReflectionMapping: EquirectangularReflectionMapping,
    EquirectangularRefractionMapping: EquirectangularRefractionMapping,
    SphericalReflectionMapping: SphericalReflectionMapping,
    CubeUVReflectionMapping: CubeUVReflectionMapping,
    CubeUVRefractionMapping: CubeUVRefractionMapping
};
export var RepeatWrapping = 1000;
export var ClampToEdgeWrapping = 1001;
export var MirroredRepeatWrapping = 1002;
export var TextureWrapping = {
    RepeatWrapping: RepeatWrapping,
    ClampToEdgeWrapping: ClampToEdgeWrapping,
    MirroredRepeatWrapping: MirroredRepeatWrapping
};
export var NearestFilter = 1003;
export var NearestMipMapNearestFilter = 1004;
export var NearestMipMapLinearFilter = 1005;
export var LinearFilter = 1006;
export var LinearMipMapNearestFilter = 1007;
export var LinearMipMapLinearFilter = 1008;
export var TextureFilter = {
    NearestFilter: NearestFilter,
    NearestMipMapNearestFilter: NearestMipMapNearestFilter,
    NearestMipMapLinearFilter: NearestMipMapLinearFilter,
    LinearFilter: LinearFilter,
    LinearMipMapNearestFilter: LinearMipMapNearestFilter,
    LinearMipMapLinearFilter: LinearMipMapLinearFilter
};
export var UnsignedByteType = 1009;
export var ByteType = 1010;
export var ShortType = 1011;
export var UnsignedShortType = 1012;
export var IntType = 1013;
export var UnsignedIntType = 1014;
export var FloatType = 1015;
export var HalfFloatType = 1016;
export var UnsignedShort4444Type = 1017;
export var UnsignedShort5551Type = 1018;
export var UnsignedShort565Type = 1019;
export var UnsignedInt248Type = 1020;
export var AlphaFormat = 1021;
export var RGBFormat = 1022;
export var RGBAFormat = 1023;
export var LuminanceFormat = 1024;
export var LuminanceAlphaFormat = 1025;
export var RGBEFormat = RGBAFormat;
export var DepthFormat = 1026;
export var DepthStencilFormat = 1027;
export var RGB_S3TC_DXT1_Format = 2001;
export var RGBA_S3TC_DXT1_Format = 2002;
export var RGBA_S3TC_DXT3_Format = 2003;
export var RGBA_S3TC_DXT5_Format = 2004;
export var RGB_PVRTC_4BPPV1_Format = 2100;
export var RGB_PVRTC_2BPPV1_Format = 2101;
export var RGBA_PVRTC_4BPPV1_Format = 2102;
export var RGBA_PVRTC_2BPPV1_Format = 2103;
export var RGB_ETC1_Format = 2151;
export var LoopOnce = 2200;
export var LoopRepeat = 2201;
export var LoopPingPong = 2202;
export var InterpolateDiscrete = 2300;
export var InterpolateLinear = 2301;
export var InterpolateSmooth = 2302;
export var ZeroCurvatureEnding = 2400;
export var ZeroSlopeEnding = 2401;
export var WrapAroundEnding = 2402;
export var TrianglesDrawMode = 0;
export var TriangleStripDrawMode = 1;
export var TriangleFanDrawMode = 2;
export var LinearEncoding = 3000;
export var sRGBEncoding = 3001;
export var GammaEncoding = 3007;
export var RGBEEncoding = 3002;
export var LogLuvEncoding = 3003;
export var RGBM7Encoding = 3004;
export var RGBM16Encoding = 3005;
export var RGBDEncoding = 3006;
export var BasicDepthPacking = 3200;
export var RGBADepthPacking = 3201;
