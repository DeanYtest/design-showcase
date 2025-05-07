# components/ui/Modal.tsx
'use client';

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-lg p-6 max-w-md mx-auto"
          >
            {children}
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
              onClick={onClose}
            >
              關閉
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}