// app/page.tsx
'use client'

import HeroSection from './HeroSection'
import HomeCarousel from '../components/HomeCarousel'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero（保持原有打字機、按鈕、文案等） */}
      <HeroSection />

      {/* 2. 首頁走馬燈：3 張卡＋左右箭頭＋自動輪播 */}
      <HomeCarousel />
    </>
  )
}
