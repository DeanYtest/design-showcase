// app/page.tsx
'use client';

import HeroSection from './HeroSection'
import HomeCarousel from '../components/HomeCarousel'

export default function HomePage() {
  return (
    <>
      {/* HeroSection 保留原有效果 */}
      <HeroSection />

      {/* 首页走马灯：3 张卡＋左右箭头＋自动轮播 */}
      <HomeCarousel />
    </>
  )
}
