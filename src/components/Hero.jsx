import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Elevate Every Step',
    subtitle: 'Premium footwear engineered for comfort and style.',
    cta: 'Shop New Arrivals',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Run The City',
    subtitle: 'Lightweight performance for your fastest miles.',
    cta: 'Explore Athletic',
    image:
      'https://images.unsplash.com/photo-1542291020-2685e91e9c4e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Dress To Impress',
    subtitle: 'Handcrafted leather that means business.',
    cta: 'Shop Formal',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const current = slides[index]

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-b-[2rem]">
      <img
        src={current.image}
        alt={current.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <div className="text-white max-w-xl animate-in slide-in-from-bottom-4 fade-in">
          <p className="inline-block text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur px-3 py-1 rounded-full mb-3">New Season</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">{current.title}</h1>
          <p className="mt-4 text-neutral-100 text-sm sm:text-base md:text-lg">{current.subtitle}</p>
          <div className="mt-6">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition px-6 py-3 text-sm font-semibold"
            >
              {current.cta}
            </a>
          </div>
        </div>
      </div>
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-3 bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
