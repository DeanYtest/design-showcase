'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <section className="relative h-screen overflow-hidden bg-transparent">
      {/* 背景漸層 */}
      <div className="absolute inset-0 animated-gradient z-0" />

      {/* 主要文字內容 */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {text}
          <Cursor />
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          I'm a creative developer passionate about design and code.
        </p>
      </div>

      {/* 波浪與下方黑底銜接 */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  )
}
