'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function StoneCanvas({ path }: { path: string }) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(path)

  useEffect(() => {
    if (!group.current) return

    const model = scene.clone()
    model.position.set(0, 0, 0)
    model.rotation.set(0, 0, 0)
    model.scale.set(1, 1, 1)

    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const center = box.getCenter(new THREE.Vector3())

    const targetSize = 4.5
    const scale = targetSize / maxDim
    model.scale.set(scale, scale, scale)
    model.position.sub(center.multiplyScalar(scale))

    group.current.clear()
    group.current.add(model)
    
    model.updateMatrixWorld(true)
    
  }, [scene])

  return <group ref={group} position={[0, 0, 0]} />
}