// components/HomeCarousel.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'UI',
    href: '/ui',
    images: ['/images/ui1.jpg', '/images/ui2.jpg', '/images/ui3.jpg'],
  },
  {
    title: 'Logo',
    href: '/logo',
    images: ['/images/logo1.jpg', '/images/logo2.jpg', '/images/logo3.jpg'],
  },
  {
    title: 'Graphic',
    href: '/graphic',
    images: ['/images/graphic1.jpg', '/images/graphic2.jpg', '/images/graphic3.jpg'],
  },
  {
    title: 'Packaging',
    href: '/packaging',
    images: ['/images/packaging1.jpg', '/images/packaging2.jpg', '/images/packaging3.jpg'],
  },
  {
    title: 'Illustration',
    href: '/illustration',
    images: ['/images/ill1.jpg', '/images/ill2.jpg', '/images/ill3.jpg'],
  },
]

export default function HomeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [idxs, setIdxs] = useState<number[]>(categories.map(() => 0))

  // 每 3 秒自動切換各卡片內部圖片
  useEffect(() => {
    const timers = categories.map((_, i) =>
      window.setInterval(() => {
        setIdxs(prev => {
          const next = [...prev]
          next[i] = (next[i] + 1) % categories[i].images.length
          return next
        })
      }, 3000)
    )
    return () => timers.forEach(clearInterval)
  }, [])

  // 單張卡片寬度 320px + gap 16px = 336px
  const SCROLL_BY = 336
  const handleScroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === 'right' ? SCROLL_BY : -SCROLL_BY,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative py-12 container mx-auto">
      <h2 className="sr-only">作品分類走馬燈</h2>

      {/* 左箭頭 */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ‹
      </button>

      {/* 卡片橫向滾動區 */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-8"
      >
        {categories.map((cat, i) => (
          <Link key={cat.title} href={cat.href}>
            <a className="group flex-shrink-0 w-80 relative">
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={cat.images[idxs[i]]}
                  alt={`${cat.title} ${idxs[i] + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-lg">{cat.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* 右箭頭 */}
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ›
      </button>
    </section>
  )
}
