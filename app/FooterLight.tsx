// components/FooterLight.tsx
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
      {/* 聊天氣泡主體 */}
      <path d="M2 4h20v14H6l-4 4V4z" />
      {/* 中間 LINE 文字 */}
      <text
        x="12"
        y="13"
        textAnchor="middle"
        fontSize="4"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        LINE
      </text>
    </svg>
  );
}

export default function FooterLight() {
  return (
    <footer className="bg-white text-black border-t border-black py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* 左側 LOGO + 品牌 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 border border-black flex items-center justify-center">
            LOGO
          </div>
          <span className="font-medium">Chu Designs</span>
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
            {/* inline LINE */}
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
