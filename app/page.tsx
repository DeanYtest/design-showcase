'use client'

import dynamic from 'next/dynamic'
import Footer from './Footer'
import WaveTransition from '../components/ui/WaveTransition'
import WorkSection from './WorkSection'

export const metadata = {
  title: '小設 設計作品集',
  description: '個人品牌視覺設計作品集',
}

const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center">載入中…</div>
  ),
})
const CategorySection = dynamic(
  () => import('../components/ui/CategorySection'),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 flex items-center justify-center">載入中…</div>
    ),
  }
)

export default function Page() {
  return (
    <>
      <HeroSection />
      <WaveTransition />
      <WorkSection category="all" />
      <CategorySection />
      <Footer />
    </>
  )
}
