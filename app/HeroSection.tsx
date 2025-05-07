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
      {/* 背景彩色漸層 */}
      <div className="absolute inset-0 animated-gradient z-0" />

      {/* 文字內容 */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{text}<Cursor /></h1>
        <p className="text-lg md:text-xl max-w-xl">
          I'm a creative developer passionate about design and code.
        </p>
      </div>

      {/* 貼地的波浪過渡 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0V46.29
               c47.37,22.22,103.52,34.09,158,28
               c70.29-7.81,136.68-50.31,207-56
               c63.42-5.09,126.87,28.89,190,37
               c59.23,7.5,113.9-8.05,168-26
               c59.49-19.88,113.35-47.11,172-51
               c35.6-2.18,70.88,6.27,105,18V0
               L1200,0 L0,0 Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  )
}
