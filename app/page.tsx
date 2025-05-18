import Link from 'next/link'
import PreloadModels from './components/PreloadModels'

export default function Landing() {
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <PreloadModels />
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest">
          Liber Mineralum
        </h1>
        <Link
          href="/catalog"
          className="inline-block border border-white text-white px-6 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300"
        >
          Enter
        </Link>
      </div>
    </main>
  )
}
