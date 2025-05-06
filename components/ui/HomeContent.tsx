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
      <CategoryTabs />
      <Carousel images={images} />
      <WorkSection category={cat} />
    </>
  )
}
