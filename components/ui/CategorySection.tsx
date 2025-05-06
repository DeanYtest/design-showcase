'use client'

import CategoryCard from './CategoryCard'

const categories = [
  {
    slug: 'ui',
    label: 'UI 設計',
    images: ['/images/ui1.jpg', '/images/ui2.jpg', '/images/ui3.jpg'],
  },
  {
    slug: 'graphic',
    label: '平面設計',
    images: ['/images/graphic1.jpg', '/images/graphic2.jpg', '/images/graphic3.jpg'],
  },
  {
    slug: 'packaging',
    label: '包裝設計',
    images: ['/images/pack1.jpg', '/images/pack2.jpg', '/images/pack3.jpg'],
  },
  {
    slug: 'logo',
    label: 'LOGO 設計',
    images: ['/images/logo1.jpg', '/images/logo2.jpg', '/images/logo3.jpg'],
  },
  {
    slug: 'illustration',
    label: '手繪',
    images: ['/images/ill1.jpg', '/images/ill2.jpg', '/images/ill3.jpg'],
  },
]

export default function CategorySection() {
  return (
    <section className="py-16" id="categories">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((c) => (
            <CategoryCard
              key={c.slug}
              slug={c.slug}
              label={c.label}
              images={c.images}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
