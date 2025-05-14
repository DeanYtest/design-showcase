'use client';

import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import React from 'react';

// 使用 framer-motion 提供的 HTMLMotionProps 自動正確類型
export type MotionDivProps = HTMLMotionProps<'div'>;

// 直接導出 motion.div 作為 MotionDiv，無需手動 wrapper
export const MotionDiv = motion.div as React.FC<MotionDivProps>;

// 重新導出 AnimatePresence 與 motion 以供其他組件使用
export { AnimatePresence, motion };
