'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MotionDiv } from '../components/ui/MotionDiv' // ← 重點是用花括號

const works = [
  { title: '平面設計', href: '/graphic', img: '/images/graphic2.jpg' },
  { title: '插畫', href: '/illustration', img: '/images/ill2.jpg' },
  { title: 'LOGO', href: '/logo', img: '/images/logo2.jpg' },
  { title: 'UI 設計', href: '/ui', img: '/images/ui.jpg' },
  { title: '包裝設計', href: '/packaging', img: '/images/pack.jpg' },
]

export default function WorkSection({ category }: { category: string }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="relative py-16 bg-black text-white z-20 w-full">
      <div className="mx-auto px-4 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {works.map((work, index) => (
          <MotionDiv
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <Image
              src={work.img}
              alt={work.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Link
                href={work.href}
                className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-500 ease-in-out"
              >
                {work.title}
              </Link>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
