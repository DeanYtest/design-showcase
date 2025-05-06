// app/page.tsx

import Navbar from '../components/ui/Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CategorySection from '../components/ui/CategorySection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function Page() {
  return (
    <>
      {/* 1. Navbar (會固定在頂部) */}
      <Navbar />

      <main className="pt-16">
        {/* 2. 英雄區 */}
        <HeroSection />

        {/* 3. About 區 (加上 id="about" 以供錨點) */}
        <AboutSection />

        {/* 4. 分類區塊 */}
        <CategorySection />

        {/* 5. 聯絡區 (加上 id="contact") */}
        <ContactSection />

        {/* 6. 頁尾 */}
        <Footer />
      </main>
    </>
  )
}
