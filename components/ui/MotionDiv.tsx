'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  )
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
