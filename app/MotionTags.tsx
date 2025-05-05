'use client';

import { motion } from 'framer-motion';
import { HTMLMotionProps, motion as fmMotion } from 'framer-motion';

export const MotionH1 = (props: HTMLMotionProps<'h1'>) => {
  return <fmMotion.h1 {...props} />;
};

export const MotionP = (props: HTMLMotionProps<'p'>) => {
  return <fmMotion.p {...props} />;
};
