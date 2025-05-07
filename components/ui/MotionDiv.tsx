'use client';

import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes, forwardRef } from 'react';

export type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>((props, ref) => (
  <motion.div {...props} ref={ref} />
));

export default MotionDiv;
