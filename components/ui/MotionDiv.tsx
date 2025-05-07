'use client'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const MotionDiv = (props: HTMLMotionProps<'div'>) => {
  return <motion.div {...props} />
}

export default MotionDiv
