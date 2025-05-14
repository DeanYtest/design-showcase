// app/MotionTags.tsx
'use client';

import React from 'react';
import { motion as _motion, AnimatePresence as _AnimatePresence, MotionProps } from 'framer-motion';

// 重新導出 motion 及 AnimatePresence
export const motion = _motion;
export const AnimatePresence = _AnimatePresence;

// 通用 Motion 元件，支援 className/style 等所有 HTML 屬性
export const MotionDiv: React.FC<React.HTMLAttributes<HTMLDivElement> & MotionProps> = (props) => (
  <_motion.div {...props} />
);
export const MotionH1: React.FC<React.HTMLAttributes<HTMLHeadingElement> & MotionProps> = (props) => (
  <_motion.h1 {...props} />
);
export const MotionP: React.FC<React.HTMLAttributes<HTMLParagraphElement> & MotionProps> = (props) => (
  <_motion.p {...props} />
);
export const MotionSpan: React.FC<React.HTMLAttributes<HTMLSpanElement> & MotionProps> = (props) => (
  <_motion.span {...props} />
);
export const MotionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps> = (props) => (
  <_motion.button {...props} />
);
