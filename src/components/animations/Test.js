
import React, { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { Icosahedron, GizmoHelper, GizmoViewport, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { vertexShader, fragmentShader, shadowFragmentShader } from './shader'
import { useControls } from 'leva'

export const Test = () => {
	return (
		<div style={{ width: '50vw', height: '50vh' }}>
			<Canvas
				camera={{
					position: [0, 0, 3],
					fov: 50,
					aspect: window.innerWidth / window.innerHeight,
					near: 0.1,
					far: 2000
				}}
				dpr={window.devicePixelRatio}
				shadows>
				{/* canvas color */}
				{/* camera controller */}
				 <OrbitControls attach="orbitControls" /> 
				{/* objects */}
				<Objects />
				{/* helper */}
				{/* <Helpers /> */}
			</Canvas>
		</div>
	)
}

// ========================================================
const Objects = () => {
	const datas = {
		scale: 0.7
	}

	const shaderMaterial = useMemo(() => {
		const mat = new THREE.ShaderMaterial({
			uniforms: {
				u_time: { value: 0 },
				u_scale: { value: 0.7 }
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader
		})
		mat.transparent = true
		mat.side = THREE.DoubleSide
		return mat
	}, [])

	const shaderMaterial2 = useMemo(() => {
		const mat = shaderMaterial.clone()
		mat.fragmentShader = shadowFragmentShader
		mat.transparent = false
		mat.side = THREE.FrontSide
		return mat
	}, [shaderMaterial])

	useEffect(() => {
		shaderMaterial.uniforms.u_scale.value = datas.scale
		shaderMaterial2.uniforms.u_scale.value = datas.scale
	}, [shaderMaterial, shaderMaterial2, datas.scale])

	useFrame(() => {
		shaderMaterial.uniforms.u_time.value += 0.005
		shaderMaterial2.uniforms.u_time.value += 0.005
	})

	return (
		<group>
			<Icosahedron args={[1, 20]} material={shaderMaterial} />
			<Icosahedron args={[1, 20]} scale={0.95} material={shaderMaterial2} />
		</group>
	)
}

// ========================================================
const Helpers = () => {
	return (
		<>
			<Stats />
			<GizmoHelper alignment="bottom-left" margin={[100, 100]} onUpdate={() => {}}>
				<GizmoViewport axisColors={['#f00', '#398400', '#00f']} labelColor="#fff" />
			</GizmoHelper>
		</>
	)
}
