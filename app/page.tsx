// app/page.tsx
'use client';

import HeroSection from './HeroSection';
import HomeCarousel from '../components/HomeCarousel';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. 三張卡片走馬燈 */}
      <HomeCarousel />
    </>
  );
}
