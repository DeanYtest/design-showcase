'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

const MotionDiv = forwardRef(function MotionDiv(
  props: HTMLMotionProps<'div'>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <motion.div ref={ref} {...props} />
})

export default MotionDiv
