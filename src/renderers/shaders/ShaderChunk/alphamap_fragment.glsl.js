export default /* glsl */`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif

#ifdef USE_TEXTURE_SWITCH
	diffuseColor.a = texture2D( textureSwitchMap, vUv2 ).r;
#endif
`;
