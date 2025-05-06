// app/page.tsx
import HeroSection from './HeroSection'
import CategorySection from '../components/ui/CategorySection'
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

      {/* 分類卡片區塊 */}
      <CategorySection />

      {/* 頁尾 */}
      <Footer />
    </>
  )
}
