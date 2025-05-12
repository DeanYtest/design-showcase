'use client';

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';

export default function FooterDark() {
  return (
    <footer className="bg-black text-white border-t border-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* 左側 LOGO & 品牌 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 border border-white flex items-center justify-center">
            LOGO
          </div>
          <span className="font-medium">小設計</span>
        </div>
        {/* 中間 版權 */}
        <div className="mb-4 md:mb-0">
          <span className="text-sm">© 2025 小設計。All rights reserved.</span>
        </div>
        {/* 右側 三圖示 */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="LINE" target="_blank" rel="noreferrer">
            <Image src="/icons/line.svg" alt="LINE" width={24} height={24} />
          </a>
          <a href="#" aria-label="Gmail">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
