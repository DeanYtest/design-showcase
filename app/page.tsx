// app/page.tsx

import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CategoryTabs   from '../components/ui/CategoryTabs'
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

export default function Page() {
  return (
    <main className="pt-20">  {/* pt-20 頂部留給 Navbar */}
      {/* 英雄區 */}
      <HeroSection />

      {/* 關於我 */}
      <AboutSection />

      {/* 分類 Tabs */}
      <CategoryTabs />

      {/* 各分類的作品區塊 */}
      {categories.map(c => (
        <WorkSection key={c.slug} category={c.slug} />
      ))}

      {/* 聯絡我 */}
      <ContactSection />

      {/* 頁尾 */}
      <Footer />
    </main>
  )
}
