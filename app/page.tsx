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

  // 手机端：只显示 HeroSection（隐藏波浪）和深色 Footer
  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <HeroSection disableWave={true} />
        </div>
        <FooterDark />
      </div>
    );
  }

  // 桌机端：正常多区块布局
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        {/* Hero：不隐藏波浪 */}
        <HeroSection disableWave={false} />

        {/* HomeCarousel：纯 horizontal scroll */}
        <HomeCarousel />

        {/* WorkCarousel 区块：黑底白字 */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WorkCarousel />
          </div>
        </div>
      </main>

      {/* 桌机浅色 Footer */}
      <FooterLight />
    </div>
  );
}
