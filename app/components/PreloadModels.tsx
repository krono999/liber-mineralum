'use client'

import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import rocks from '../data/rocks.json'

export default function PreloadModels() {
  useEffect(() => {
    rocks.forEach((rock) => {
      useGLTF.preload(rock.model)
    })
  }, [])

  return null
}
