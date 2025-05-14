// app/MotionTags.tsx
'use client';

import React from 'react';
import {
  motion as _motion,
  AnimatePresence as _AnimatePresence,
  HTMLMotionProps,
  MotionProps,
} from 'framer-motion';

// 重新導出 motion 及 AnimatePresence
export const motion = _motion;
export const AnimatePresence = _AnimatePresence;

// 通用 Motion 元件，支援 className/style 等 HTML 屬性
export const MotionDiv: React.FC<HTMLMotionProps<'div'>> = (props) => <_motion.div {...props} />;
export const MotionH1: React.FC<HTMLMotionProps<'h1'>> = (props) => <_motion.h1 {...props} />;
export const MotionP: React.FC<HTMLMotionProps<'p'>> = (props) => <_motion.p {...props} />;
export const MotionSpan: React.FC<HTMLMotionProps<'span'>> = (props) => <_motion.span {...props} />;
export const MotionButton: React.FC<HTMLMotionProps<'button'>> = (props) => <_motion.button {...props} />;
