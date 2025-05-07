'use client';

import Image from 'next/image';
import Link from 'next/link';
import TiltCard from './TiltCard';

const categories = [
  { name: '平面設計', href: '/graphic', image: '/images/graphic1.jpg' },
  { name: '插畫', href: '/illustration', image: '/images/ill1.jpg' },
  { name: 'LOGO', href: '/logo', image: '/images/logo1.jpg' },
  { name: 'UI 設計', href: '/ui', image: '/images/ui1.jpg' },
  { name: '包裝設計', href: '/packaging', image: '/images/pack1.jpg' },
];

export default function CategorySection() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">
                  {cat.name}
                </h3>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
