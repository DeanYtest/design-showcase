// app/page.tsx
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CategorySection from '../components/ui/CategorySection'
import ContactSection from './ContactSection'
import Footer from './Footer'

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
}

export default function Page() {
  return (
    <>
      {/* 英雄區 */}
      <HeroSection />

      {/* 關於我區塊 */}
      <AboutSection />

      {/* 分類卡片區塊：上方輪播＋下方連結各自的子頁 */}
      <CategorySection />

      {/* 聯絡我區塊 */}
      <ContactSection />

      {/* 頁尾 */}
      <Footer />
    </>
  )
}
