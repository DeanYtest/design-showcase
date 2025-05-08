// app/WorkSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WorkSectionProps {
  category: 'ui' | 'logo' | 'graphic' | 'packaging' | 'illustration' | 'all';
}

const allWorks = [
  { title: 'UI',           href: '/ui',           img: '/images/ui1.jpg',           category: 'ui' },
  { title: 'Logo',         href: '/logo',         img: '/images/logo1.jpg',         category: 'logo' },
  { title: 'Graphic',      href: '/graphic',      img: '/images/graphic1.jpg',      category: 'graphic' },
  { title: 'Packaging',    href: '/packaging',    img: '/images/pack1.jpg',         category: 'packaging' },
  { title: 'Illustration', href: '/illustration', img: '/images/ill1.jpg',          category: 'illustration' },
];

export default function WorkSection({ category }: WorkSectionProps) {
  // 依 category 篩選，如果傳 "all" 就不篩
  const works = category === 'all'
    ? allWorks
    : allWorks.filter((w) => w.category === category);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      works.forEach((_, i) =>
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * 150)
      );
    }
  }, [inView, works]);

  return (
    <section ref={ref} className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {category === 'all' ? '所有作品' : category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => {
          const isVisible = visibleItems.includes(index);
          return (
            <Link key={index} href={work.href}>
              <a
                className={`group relative overflow-hidden rounded-xl shadow-lg ${
                  isVisible ? `fade-up delay-${index}` : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h
