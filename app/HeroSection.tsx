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

  useEffect(() => {
    const iv = setInterval(() => {
      setIdx((i) => (i + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(iv)
  }, [])

  const prev = () =>
    setIdx((i) => (i - 1 + backgrounds.length) % backgrounds.length)
  const next = () => setIdx((i) => (i + 1) % backgrounds.length)

// app/HeroSection.tsx
// …（上面保持不变）…

return (
  <section className="relative h-screen overflow-hidden">
    {/* …背景 & 文字 & 箭号… */}

    {/* 波浪左右無限滑動 */}
    <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
      {/* wave-animation 容器宽度 200% */}
      <div className="wave-animation relative w-[200%] h-full flex">
        {/* 第一段波浪，宽度占一半 */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-1/2 h-full flex-none"
        >
          <path
            d="M0,0 C300,200 900,-100 1200,120 L1200,120 L0,120 Z"
            fill="#000"
          />
        </svg>
        {/* 第二段波浪，复制一份 */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-1/2 h-full flex-none"
        >
          <path
            d="M0,0 C300,200 900,-100 1200,120 L1200,120 L0,120 Z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  </section>
)
}
