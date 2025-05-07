'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

export const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  (props, ref) => <motion.div ref={ref} {...props} />
)

MotionDiv.displayName = 'MotionDiv'
