// app/HeroSection.tsx
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const backgrounds = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

export default function HeroSection() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => {
    setIdx((i) => (i - 1 + backgrounds.length) % backgrounds.length)
  }
  const next = () => {
    setIdx((i) => (i + 1) % backgrounds.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <Image
            src={bg}
            alt={`英雄背景 ${i + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority={i === 0}
          />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full z-30"
        aria-label="上一張"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full z-30"
        aria-label="下一張"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
