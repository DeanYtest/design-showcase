'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import clsx from 'clsx'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={clsx(
        'bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl shadow-lg p-4 cursor-pointer transform-gpu transition-transform duration-300',
        className
      )}
      // 明確告訴 motion.div 這是 div 屬性，避免 TS 錯誤
      {...({} as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </motion.div>
  )
}
