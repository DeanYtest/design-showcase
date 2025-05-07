'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react'
import TypingText from '../components/ui/TypingText'

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          src="/images/hero1.jpg"
          alt="英雄背景"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <TypingText
          words={[
            'Hello, I am a Designer.',
            'Welcome to my Portfolio.',
          ]}
        />
        <p className="mt-4 text-lg md:text-2xl">
          Design / Illustration / Branding
        </p>
      </div>
    </section>
  )
}