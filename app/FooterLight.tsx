// components/FooterLight.tsx
'use client';

import { Instagram, Mail } from 'lucide-react';
import React from 'react';

function LineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x={1} y={1} width={22} height={22} rx={4} ry={4} />
      <circle cx={12} cy={12} r={6} />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="6"
        fontFamily="sans-serif"
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
        {/* LOGO + 品牌 */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 border border-black flex items-center justify-center">
            LOGO
          </div>
          <span className="font-medium">Chu Designs</span>
        </div>

        {/* 版權 */}
        <div className="mb-4 md:mb-0">
          <span className="text-sm">©All rights reserved.</span>
        </div>

        {/* Contact 三圖示 */}
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
