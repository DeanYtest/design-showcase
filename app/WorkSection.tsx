'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const works = [
  { title: 'Project A', href: '/graphic', image: '/images/graphic2.jpg' },
  { title: 'Project B', href: '/illustration', image: '/images/ill2.jpg' },
  { title: 'Project C', href: '/logo', image: '/images/logo2.jpg' },
]

export default function WorkSection() {
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
    <section ref={ref} className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Work Showcase</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work) => (
          <motion.div
            key={work.title}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="overflow-hidden rounded-lg"
          >
            {/* …內容省略 */}
          </motion.div>
        ))}
      </div>
    </section>
  );  // ← 這行一定要有
}      // ← 然後才是 function 結尾
