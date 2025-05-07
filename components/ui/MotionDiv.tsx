'use client'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const MotionDiv: React.FC<HTMLMotionProps<'div'>> = (props) => {
  return <motion.div {...props} />
}

export default MotionDiv
