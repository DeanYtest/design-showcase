// app/page.tsx
'use client';

import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkCarousel from '../components/ui/WorkCarousel';
import FooterLight from './FooterLight';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. 三張卡片走馬燈 */}
        <HomeCarousel />

        {/* 3. 所有作品 Carousel（黑底） */}
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <WorkCarousel />
          </div>
        </div>
      </main>

      {/* 白底黑字 Footer */}
      <FooterLight />
    </div>
  );
}
