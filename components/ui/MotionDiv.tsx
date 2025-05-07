'use client'

import { motion } from 'framer-motion'
import type { MotionProps, HTMLMotionProps } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

type Props = HTMLMotionProps<'div'>

const MotionDiv = forwardRef<HTMLDivElement, Props>(function MotionDiv(
  props,
  ref
) {
  return <motion.div ref={ref} {...props} />
})

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
