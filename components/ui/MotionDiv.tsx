'use client'

import { motion } from 'framer-motion'
import {
  HTMLMotionProps,
  MotionStyle,
  MotionValue,
} from 'framer-motion'
import {
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
} from 'react'

// 這裡你只要用 framer-motion 提供的 HTMLMotionProps 即可，不需自己組合
type Props = HTMLMotionProps<'div'>

const MotionDiv = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <motion.div ref={ref} {...rest}>
        {children}
      </motion.div>
    )
  }
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv
