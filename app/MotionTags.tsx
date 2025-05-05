'use client'

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

export const MotionH1 = (props: JSX.IntrinsicElements['h1'] & MotionProps) => {
  return <motion.h1 {...props} />;
};

export const MotionP = (props: JSX.IntrinsicElements['p'] & MotionProps) => {
  return <motion.p {...props} />;
};
