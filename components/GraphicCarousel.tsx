'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GraphicItem from './GraphicItem';

const images = ['/images/graphic/image1.jpg', '/images/graphic/image2.jpg'];

export default function GraphicCarousel({ onSelect }) {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] overflow-visible">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          className="absolute cursor-pointer"
          style={{ transformOrigin: 'center' }}
          initial={{ rotate: (360 / images.length) * idx, translateY: -200 }}
          animate={{ rotate: 360 + (360 / images.length) * idx }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          whileHover={{ scale: 1.2 }}
          onClick={() => onSelect(img)}
        >
          <GraphicItem src={img} />
        </motion.div>
      ))}
    </div>
  );
}
