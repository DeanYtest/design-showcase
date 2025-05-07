'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'

const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return <motion.div ref={ref} {...props} />
  }
)

MotionDiv.displayName = 'MotionDiv'
export default MotionDiv
