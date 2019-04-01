export default /* glsl */`
#ifdef USE_MUL_NORMAL

	#ifdef OBJECTSPACE_NORMALMAP

		vec3 normal2 = texture2D( mulNormalMap, vUv / mul ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

		#ifdef FLIP_SIDED

			normal2 = - normal2;

		#endif

		#ifdef DOUBLE_SIDED

			normal2 = normal2 * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		normal2 = normalize( normalMatrix * normal2 );

	#else // tangent-space normal map

		vec3 normal2 = perturbNormal2Arb( -vViewPosition, normal, mulNormalMap, vUv / mul );

	#endif
	
	normal=(normal+normal2) / 2.0;

#endif
`;