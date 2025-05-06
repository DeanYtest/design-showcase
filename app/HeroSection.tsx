// app/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

// 把你的波浪 SVG 定义成字符串，后面会重复两次拼接
const WAVE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="#000" fill-opacity="1"
    d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,197.3C672,213,768,267,864,256C960,245,1056,171,1152,154.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
  />
</svg>`

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

  const prev = () =>
    setIdx((i) => {
      return i - 1 < 0 ? backgrounds.length - 1 : i - 1
    })
  const next = () => setIdx((i) => (i + 1) % backgrounds.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 1. 背景圖片輪播 (z-0) */}
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === idx ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}

      {/* 2. 深灰→淺灰 漸層覆蓋 (z-10) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-500 opacity-80 z-10" />

      {/* 3. 無縫左右滑動海浪背景 (z-20) */}
      <div className="absolute bottom-0 left-0 w-full h-[320px] overflow-hidden z-20">
        <div
          className="flex w-[200%] h-full animate-wave"
          dangerouslySetInnerHTML={{ __html: WAVE_SVG + WAVE_SVG }}
        />
      </div>

      {/* 4. 文字 & 箭號 (z-30) */}
      <div className="relative z-30 container mx-auto px-4 max-w-2xl h-full flex items-center">
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            Hi<br />
            This is Chu
          </h1>
          <p className="text-lg text-white/90">專注故事感視覺設計</p>
        </div>
      </div>

      {/* 左右控制箭頭 */}
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
