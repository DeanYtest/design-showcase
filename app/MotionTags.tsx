// app/MotionTags.tsx
'use client';

import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement>;

export const MotionH1 = ({ children, ...rest }: Props) => (
  <motion.h1 {...rest}>{children}</motion.h1>
);

export const MotionP = ({ children, ...rest }: Props) => (
  <motion.p {...rest}>{children}</motion.p>
);
