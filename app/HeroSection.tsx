// app/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const backgrounds = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

export default function HeroSection() {
  const [idx, setIdx] = useState(0)

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
      {/* 背景圖片輪播，淡入淡出 */}
      <motion.div<HTMLDivElement>
        key={idx}
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${backgrounds[idx]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* 深灰→淺灰 漸層覆蓋 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-500 opacity-80" />

      {/* 文字區塊 */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl h-full flex items-center">
        <div>
          <motion.h1
            className="text-5xl font-bold text-white leading-tight mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi<br />
            This is Chu
          </motion.h1>
          <motion.p
            className="text-lg text-white/90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            專注故事感視覺設計
          </motion.p>
        </div>
      </div>

      {/* 左右箭號 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-10"
        aria-label="上一張"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white animate-pulse" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition z-10"
        aria-label="下一張"
      >
        <ChevronRightIcon className="w-6 h-6 text-white animate-pulse" />
      </button>

      {/* 波浪 SVG：純黑填充，幅度較大 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-32"
        >
          <path
            d="M0,0 C300,200 900,-100 1200,120 L1200,120 L0,120 Z"
            fill="#000000"
          />
        </svg>
      </motion.div>
    </section>
  )
}
