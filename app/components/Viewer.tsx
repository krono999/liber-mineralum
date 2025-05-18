'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { StoneCanvas } from './StoneCanvas'

export default function Viewer({ modelPath }: { modelPath: string }) {
  const controlsRef = useRef<OrbitControlsType | null>(null)

  return (
    <div className="w-full h-[300px] relative">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 50
        }}
        gl={{ antialias: true }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0)
          camera.updateProjectionMatrix()
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <Suspense fallback={<group />}>
          <StoneCanvas path={modelPath} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enablePan={false}
          minDistance={2.5}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}
