'use client';

import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes, forwardRef } from 'react';

// 組合 framer-motion 的 MotionProps 與 HTMLDivElement 的屬性 (包含 className, onMouseMove 等)
export type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => (
  <motion.div {...props} ref={ref} />
));

export default MotionDiv;
