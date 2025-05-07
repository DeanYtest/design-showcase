'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
  // 打字機效果
  const [text] = useTypewriter({
    words: ['Hello, I am a Designer.', 'Welcome to my Portfolio.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 纯色渐变背景 */}
      <div className="absolute inset-0 animated-gradient" />

      {/* 打字机文字层 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {text}
          <Cursor cursorColor="#FFFFFF" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90">
          Design / Illustration / Branding
        </p>
      </div>

      {/* 底部半圆弧过渡 */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <div className="relative h-20 w-full bg-white rounded-t-full" />
      </div>
    </section>
  );
}
