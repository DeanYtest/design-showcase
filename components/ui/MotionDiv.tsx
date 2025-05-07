'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(function MotionDiv(props, ref) {
  return <motion.div ref={ref} {...props} />
})

export default MotionDiv
