#ifdef USE_MUL

	vec4 texelColorMul = texture2D( mulMap, vUv );

	texelColorMul = mapTexelToLinear( texelColorMul );
	diffuseColor *= texelColorMul;

#endif
