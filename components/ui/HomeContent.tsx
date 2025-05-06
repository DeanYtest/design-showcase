// components/ui/HomeContent.tsx
'use client'

import CategoryTabs from './CategoryTabs'
import Carousel from './Carousel'
import WorkSection from '../../app/WorkSection'

interface HomeContentProps {
  cat: string
  images: string[]
}

export default function HomeContent({ cat, images }: HomeContentProps) {
  return (
    <>
      {/* 分類標籤 */}
      <CategoryTabs />

      {/* 上方輪播 */}
      <Carousel images={images} />

      {/* 作品展示 */}
      <WorkSection category={cat} />
    </>
  )
}
