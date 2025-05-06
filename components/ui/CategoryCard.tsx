'use client'

import Link from 'next/link'
import Carousel from './Carousel'

interface CategoryCardProps {
  slug: string
  label: string
  images: string[]
}

export default function CategoryCard({ slug, label, images }: CategoryCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* 上方輪播 */}
      <Carousel images={images} />
      {/* 下方按鈕 */}
      <Link href={`/${slug}`}>
        <a className="block text-center mt-2 px-4 py-2 border border-white rounded-lg hover:bg-accent hover:text-accent-foreground transition">
          {label}
        </a>
      </Link>
    </div>
  )
}
