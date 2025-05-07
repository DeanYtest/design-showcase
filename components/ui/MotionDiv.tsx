'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { HTMLMotionProps } from 'framer-motion'

// ✅ 正確型別：HTMLMotionProps<'div'>，同時支援 className 和 motion 屬性
const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  )
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
