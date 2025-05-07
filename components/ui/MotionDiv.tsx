'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

type DivProps = HTMLMotionProps<'div'> & HTMLAttributes<HTMLDivElement>

const MotionDiv = forwardRef<HTMLDivElement, DivProps>(({ children, ...props }, ref) => (
  <motion.div ref={ref} {...props}>
    {children}
  </motion.div>
))

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
