'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { HTMLMotionProps } from 'framer-motion'

// ✅ 定義 MotionDiv 支援所有 motion.div + HTMLDiv 屬性
const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    )
  }
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
