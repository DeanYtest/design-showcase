// components/FooterDark.tsx
'use client';

import { Instagram, Mail } from 'lucide-react';
import React from 'react';

function LineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="1" width="22" height="22" rx="4" ry="4" />
      <path d="M6 9h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10l-3 3v-3H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function FooterDark() {
  return (
    <footer className="bg-black text-white border-t border-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* 左側 LOGO + 品牌 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 border border-white flex items-center justify-center">
            Chu Designs
          </div>
        </div>

        {/* 中間 版權 */}
        <div className="mb-4 md:mb-0">
          <span className="text-sm">© 2025 Chu Designs。All rights reserved.</span>
        </div>

        {/* 右側 Contact 三圖示 */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="LINE" target="_blank" rel="noreferrer">
            <LineIcon width={24} height={24} />
          </a>
          <a href="#" aria-label="Gmail">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
