// app/HeroSection.tsx
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
      {/* 底圖輪播 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${backgrounds[idx]})` }}
      />

      {/* 深灰→淺灰 漸層覆蓋 (50% 透明度) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-500 opacity-80" />

      {/* 內容區 */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl h-full flex items-center">
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

      {/* 左右箭號 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-10"
        aria-label="上一張"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-10"
        aria-label="下一張"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* 底部波浪，用淺灰色填充 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-24"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="#f0f0f0"
          />
        </svg>
      </div>
    </section>
  )
}
