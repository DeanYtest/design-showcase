'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
  // 1. 打字机效果
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen overflow-hidden bg-transparent">
      {/* 2. 纯色多彩渐变背景 */}
      <div className="absolute inset-0 animated-gradient z-0" />

      {/* 3. 底部波浪圆弧，过渡到下一节黑底 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0V46.29c47.37,22.22,103.52,34.09,158,28,70.29-7.81,136.68-50.31,207-56,
               63.42-5.09,126.87,28.89,190,37,59.23,7.5,113.9-8.05,168-26,
               59.49-19.88,113.35-47.11,172-51,
               35.6-2.53,70.79,5.76,106,12,59.24,10.92,114.87,23.67,172,37V0Z"
            fill="#000"
          />
        </svg>
      </div>

      {/* 4. 文本层 (打字机 + 副标题) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {text}
          <Cursor cursorColor="#FFFFFF" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90">
          Design / Illustration / Branding
        </p>
      </div>
    </section>
  );
}
