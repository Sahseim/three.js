export default /* glsl */`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	
	#if defined(USE_MAP2) && defined(USE_TEXTURE_SWITCH)
		vec4 texelColor2 = texture2D( map2, vUv * 3.0 );
		texelColor2 = mapTexelToLinear( texelColor2 );
		diffuseColor *= vec4(mix(texelColor.rgb, texelColor2.rgb, texture2D( textureSwitchMap, vUv2 ).b ), 1.0);
	#else
		diffuseColor *= texelColor;
	#endif

#endif
`;
