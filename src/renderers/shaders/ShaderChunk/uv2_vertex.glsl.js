export default /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP ) || defined( USE_TEXTURE_SWITCH )  

	vUv2 = uv2;

#endif
`;
