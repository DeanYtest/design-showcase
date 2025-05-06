// app/page.tsx

import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import WorkSection from './WorkSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const categories = [
  { slug: 'ui', label: 'UI 設計' },
  { slug: 'graphic', label: '平面設計' },
  { slug: 'packaging', label: '包裝設計' },
  { slug: 'logo', label: 'LOGO 設計' },
  { slug: 'illustration', label: '手繪' },
]

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
}

export default function Page() {
  return (
    <main>
      {/* 英雄區 */}
      <HeroSection />

      {/* 關於我 */}
      <AboutSection />

      {/* 依序顯示各分類的作品區塊 */}
      {categories.map((c) => (
        <WorkSection key={c.slug} category={c.slug} />
      ))}

      {/* 聯絡我 */}
      <ContactSection />

      {/* 頁尾 */}
      <Footer />
    </main>
  )
}
