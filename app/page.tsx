// app/page.tsx
'use client';

import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';
import WorkCarousel from '../components/ui/WorkCarousel';
import FooterLight from './FooterLight';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. 三張卡片走馬燈 */}
      <HomeCarousel />

      {/* 3. 所有作品 Carousel */}
      <WorkCarousel />

      {/* 白底黑字 Footer */}
      <FooterLight />
    </>
  );
}
