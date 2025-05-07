'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import MotionDiv from '../components/ui/MotionDiv'

const works = [
  { title: 'Project A', href: '/graphic', img: '/images/graphic2.jpg' },
  { title: 'Project B', href: '/illustration', img: '/images/ill2.jpg' },
  { title: 'Project C', href: '/logo', img: '/images/logo2.jpg' },
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
    <section
      ref={ref}
      className="relative py-16 bg-black z-20 text-white"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <MotionDiv
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <Image
              src={work.img}
              alt={work.title}
              width={400}
              height={300}
              className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Link
                href={work.href}
                className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-all duration-500 ease-in-out"
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
