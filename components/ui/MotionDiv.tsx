'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { HTMLMotionProps } from 'framer-motion'

// ✅ 關鍵：使用 HTMLMotionProps<'div'> 組合 className + motion 屬性
const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  )
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
