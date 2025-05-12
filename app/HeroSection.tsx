// app/HeroSection.tsx
'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

interface HeroSectionProps {
  disableWave?: boolean
}

export default function HeroSection({ disableWave = false }: HeroSectionProps) {
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-transparent">
      {/* 背景漸層 */}
      <div className="absolute inset-0 animated-gradient z-0" />

      {/* 主要文字內容 */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {text}
          <Cursor />
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-200">
          I'm a creative developer passionate about design and code.
        </p>
      </div>

      {/* 波浪與下方黑底銜接（手機 disableWave=true 時隱藏） */}
      {!disableWave && (
        <div className="absolute bottom-0 left-0 w-full leading-none z-10">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-16 sm:h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path fill="#000" d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>
      )}
    </section>
  )
}
