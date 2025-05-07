// components/ui/CategoryCard.tsx
'use client';

import Link from 'next/link'
import Carousel from './Carousel'

interface CategoryCardProps {
  slug: string
  label: string
  images: string[]
}

export default function CategoryCard({ slug, label, images }: CategoryCardProps) {
  return (
    <Link href={`/${slug}`}>
      <a className="block overflow-hidden rounded-lg shadow-lg relative group">
        {/* 1. 圖片跑馬燈 */}
        <div className="h-64 w-full">
          <Carousel images={images} />
        </div>

        {/* 2. 底部半透明白底遮罩條 */}
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-sm py-2">
          <span className="block text-center text-black font-semibold transition group-hover:text-accent">
            {label}
          </span>
        </div>
      </a>
    </Link>
  )
}
