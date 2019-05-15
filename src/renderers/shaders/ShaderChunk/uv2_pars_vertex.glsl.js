export default /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP ) || defined( USE_TEXTURE_SWITCH )  

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`;
