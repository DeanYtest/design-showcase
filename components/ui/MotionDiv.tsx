'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

type Props = HTMLMotionProps<'div'>

const MotionDiv = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <motion.div ref={ref} {...props} />
})

export default MotionDiv
