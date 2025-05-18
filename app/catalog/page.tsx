'use client';
import { useState } from 'react'
import rocks from '../data/rocks.json'
import Viewer from '../components/Viewer'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Page() {
  const [index, setIndex] = useState(0)
  const currentRock = rocks[index]

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? rocks.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === rocks.length - 1 ? 0 : prev + 1))
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Book of gems</h1>

      <div className="relative w-full max-w-xl">
        {/* Flecha Izquierda */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full p-2 shadow"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Card con piedra - estilo glassmorphism */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 shadow-2xl">
          <h2 className="text-xl font-semibold text-center text-lime-300 mb-4">
            {currentRock.name}
          </h2>
          <Viewer modelPath={currentRock.model} />
          <div className="mt-4 text-sm text-gray-200 space-y-1 text-center">
            <p><strong>Color:</strong> {currentRock.color}</p>
            <p><strong>Uses:</strong> {currentRock.uses.join(', ')}</p>
            <p><strong>Chakra:</strong> {currentRock.chakra}</p>
            <p><strong>Origin:</strong> {currentRock.origin.join(', ')}</p>
          </div>
        </div>

        {/* Flecha Derecha */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full p-2 shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  )
}
