// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkCarousel from '../components/ui/WorkCarousel';
import FooterLight from './FooterLight';
import FooterDark from './FooterDark';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否为手机宽度 (<768px)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* 手机端：全页动画渐变背景 */}
      {isMobile && (
        <div className="absolute inset-0 animated-gradient z-0" />
      )}

      {/* 内容容器：位于背景之上 */}
      <div className={`relative flex-1 flex flex-col ${isMobile ? 'text-white' : 'bg-white text-black'}`}>
        <main className="flex-1">
          {/* HeroSection：手机隐藏波浪，桌机显示 */}
          <HeroSection disableWave={isMobile} />

          {/* HomeCarousel：横向滚动 */}
          <HomeCarousel />

          {/* 作品区：手机透明底白字，桌机黑底白字 */}
          <div className={`${isMobile ? 'bg-transparent text-white' : 'bg-black text-white'} py-16`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <WorkCarousel />
            </div>
          </div>
        </main>

        {/* Footer：手机深色，桌机浅色 */}
        {isMobile ? <FooterDark /> : <FooterLight />}
      </div>
    </div>
  );
}
