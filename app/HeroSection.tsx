'use client'

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const backgrounds = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

export default function HeroSection() {
  const [idx, setIdx] = useState(0)

  // 自動輪播
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx((i) => (i + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(iv)
  }, [])

  const prev = () => setIdx((i) => (i - 1 + backgrounds.length) % backgrounds.length)
  const next = () => setIdx((i) => (i + 1) % backgrounds.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 1. 背景圖片輪播 (z-0) */}
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${i === idx ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}

      {/* 2. 深灰→淺灰 漸層覆蓋 (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-500 opacity-80 z-10" />

      {/* 3. 左右無縫滑動海浪 (z-20) */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-20">
        <svg
          viewBox="0 0 1800 120"
          preserveAspectRatio="none"
          className="block w-[200%] h-full animate-wave"
        >
          <path
            d="
              M0,40
              C300,80 600,0 900,40
              C1200,80 1500,0 1800,40
              L1800,120
              L0,120
              Z
            "
            fill="#000"
          />
        </svg>
      </div>

      {/* 4. 文字 & 箭號 (z-30) */}
      <div className="relative z-30 container mx-auto px-4 max-w-2xl h-full flex items-center">
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            Hi<br />
            This is Chu
          </h1>
          <p className="text-lg text-white/90">
            專注故事感視覺設計
          </p>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-30"
        aria-label="上一張"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-30"
        aria-label="下一張"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
