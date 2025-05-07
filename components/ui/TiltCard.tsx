'use client'

import { useRef } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

const TiltCard = ({ children, className }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={clsx(
        'bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl shadow-lg p-4 cursor-pointer transform-gpu transition-transform duration-300',
        className
      )}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
