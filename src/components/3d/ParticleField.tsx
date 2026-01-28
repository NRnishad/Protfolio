'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null)
    const particleCount = 3000

    const [positions, colors, sizes] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)
        const sizes = new Float32Array(particleCount)

        const primaryColor = new THREE.Color('#00d4ff')
        const accentColor = new THREE.Color('#ff007f')
        const whiteColor = new THREE.Color('#ffffff')

        for (let i = 0; i < particleCount; i++) {
            // Distribute particles in a sphere
            const radius = 15 + Math.random() * 25
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = radius * Math.cos(phi) - 10 // Push back

            // Random color between primary, accent, and white
            const colorChoice = Math.random()
            let color
            if (colorChoice < 0.4) {
                color = primaryColor
            } else if (colorChoice < 0.6) {
                color = accentColor
            } else {
                color = whiteColor
            }

            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b

            // Random sizes
            sizes[i] = Math.random() * 2 + 0.5
        }

        return [positions, colors, sizes]
    }, [])

    useFrame((state) => {
        if (pointsRef.current) {
            // Slow rotation
            pointsRef.current.rotation.y += 0.0003
            pointsRef.current.rotation.x += 0.0001

            // Gentle floating motion
            const time = state.clock.getElapsedTime()
            pointsRef.current.position.y = Math.sin(time * 0.2) * 0.3
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particleCount}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}
