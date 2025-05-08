// app/WorkSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WorkSectionProps {
  category: string;
}

const works = [
  { title: 'UI', href: '/ui', img: '/images/ui1.jpg' },
  { title: 'Logo', href: '/logo', img: '/images/logo1.jpg' },
  { title: 'Graphic', href: '/graphic', img: '/images/graphic1.jpg' },
  { title: 'Packaging', href: '/packaging', img: '/images/pack1.jpg' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg' },
];

export default function WorkSection({ category }: WorkSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      works.forEach((_, i) =>
        setTimeout(() => {
          setVisible((v) => [...v, i]);
        }, i * 150)
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="container mx-auto py-12">
      <h2 className="sr-only">{category} 作品集</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((w, i) => (
          <Link key={i} href={w.href}>
            <a
              className={`group relative overflow-hidden rounded-xl shadow-lg ${
                visible.includes(i)
                  ? `fade-up delay-${i}`
                  : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-64">
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl">{w.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
