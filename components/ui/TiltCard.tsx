# components/ui/TiltCard.tsx
tsx
'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
}

export default function TiltCard({ children }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  function handleMouse(e: React.MouseEvent) {
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
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, x, y }}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

