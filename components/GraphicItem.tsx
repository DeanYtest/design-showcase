'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GraphicItem({ src }) {
  return (
    <motion.div
      className="relative w-40 h-56 overflow-hidden rounded-xl shadow-xl"
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={src}
        alt="Graphic Work"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
