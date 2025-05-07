'use client'

import Image from 'next/image'
import Link from 'next/link'
import TiltCard from './TiltCard'

const categories = [
  { name: 'Graphic', href: '/graphic', image: '/images/graphic1.jpg' },
  { name: 'Illustration', href: '/illustration', image: '/images/ill1.jpg' },
  { name: 'Logo', href: '/logo', image: '/images/logo1.jpg' },
  { name: 'UI', href: '/ui', image: '/images/ui1.jpg' },
  { name: 'Packaging', href: '/packaging', image: '/images/pack1.jpg' },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <TiltCard key={cat.name}>
            <Link href={cat.href} className="block">
              <div className="relative h-48">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                {cat.name}
              </h3>
            </Link>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}