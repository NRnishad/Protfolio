'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense } from 'react'
import ParticleField from './ParticleField'

export default function Scene3D() {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
            >
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.3} />

                    {/* Primary directional light */}
                    <directionalLight
                        position={[10, 10, 5]}
                        intensity={0.5}
                        color="#00d4ff"
                    />

                    {/* Accent light */}
                    <pointLight
                        position={[-10, -10, -5]}
                        intensity={0.3}
                        color="#ff007f"
                    />

                    {/* Particle field background */}
                    <ParticleField />

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
