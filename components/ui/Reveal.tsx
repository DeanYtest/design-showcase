// app/components/Reveal.tsx
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
