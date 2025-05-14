'use client';

import { motion, AnimatePresence } from 'framer-motion';

// 直接導出 framer-motion 的 motion.div，保留所有原生及動畫屬性
export const MotionDiv = motion.div;

// 重新導出 AnimatePresence 以供其他組件使用
export { AnimatePresence, motion };
