#ifdef USE_MUL

	vec4 texelColorMul = texture2D( mulMap, vUv / mul );

	texelColorMul = mapTexelToLinear( texelColorMul );
	diffuseColor *= texelColorMul;

#endif
