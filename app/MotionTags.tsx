'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

// 讓這些元件既承襲 MotionProps，也能正確接收 className、style…等 HTML 屬性
export const MotionDiv: React.FC<HTMLMotionProps<'div'>> = (props) => <motion.div {...props} />;
export const MotionH1: React.FC<HTMLMotionProps<'h1'>> = (props) => <motion.h1 {...props} />;
export const MotionP:  React.FC<HTMLMotionProps<'p'>>  = (props) => <motion.p  {...props} />;
