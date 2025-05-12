// components/HomeCarousel.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { title: 'UI',           href: '/ui',           img: '/images/ui1.jpg' },
  { title: 'Logo',         href: '/logo',         img: '/images/logo1.jpg' },
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic1.jpg' },
  { title: 'Packaging',    href: '/packaging',    img: '/images/pack1.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg' },
];

export default function HomeCarousel() {
  return (
    <section className="py-12 bg-transparent md:bg-black md:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 橫向滑動 + scroll-snap：手機手指滑動、桌機滑鼠拖曳 */}
        <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} passHref>
              <a className="snap-start flex-shrink-0 w-[80vw] sm:w-[320px] h-[50vw] sm:h-[200px] relative rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.title}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
