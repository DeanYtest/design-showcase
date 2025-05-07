'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { HTMLMotionProps } from 'framer-motion'

type Props = HTMLMotionProps<'div'>

const MotionDiv = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <motion.div ref={ref} {...props} />
})

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
