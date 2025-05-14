'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';

// 自訂 MotionDiv 組件，包裝 framer-motion 的 motion.div
// 接收 className, initial, animate, variants, whileHover, onClick, style 等屬性
export const MotionDiv: React.FC<MotionProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  initial,
  animate,
  variants,
  whileHover,
  onClick,
  className,
  style,
  ...rest
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      whileHover={whileHover}
      onClick={onClick}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
