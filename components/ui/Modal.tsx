// components/ui/Modal.tsx
'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        // ── 最外層普通 div：放置所有 className、onClick
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          {/*
            motion.div 只用來做動畫，**不帶** className
            動畫關閉時遮罩透明度同時變回 0
          */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/*
              內容容器也是普通 div：放置 className、onClick stopPropagation
            */}
            <div
              className="bg-white rounded-xl p-6 max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
              <div className="mb-4">{children}</div>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                關閉
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
