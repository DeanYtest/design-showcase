// app/page.tsx
'use client'

import HeroSection from './HeroSection'
import HomeCarousel from '../components/HomeCarousel'
import Footer from './Footer'

export default function Page() {
  return (
    <main className="container mx-auto pt-8">
      {/* Hero（保留原本漸層與動畫） */}
      <HeroSection />

      {/* 首頁走馬燈 */}
      <HomeCarousel />

      {/* Footer */}
      <Footer />
    </main>
  )
}
