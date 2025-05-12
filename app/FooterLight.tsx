// components/FooterLight.tsx
'use client';

import React from 'react';

// Instagram Icon
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={17} cy={7} r={1} />
    </svg>
  );
}

// LINE Icon
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
      {/* 外框圓角方形 */}
      <rect x={2} y={2} width={20} height={20} rx={4} ry={4} />
      {/* 內部對話氣泡 */}
      <path d="M6 9h12a2 2 0 012 2v4a2 2 0 01-2 2H10l-3 3v-3H6a2 2 0 01-2-2v-4a2 2 0 012-2z" />
    </svg>
  );
}

// Mail Icon
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      {/* 信封外框 */}
      <rect x={2} y={4} width={20} height={16} rx={2} ry={2} />
      {/* 信封摺線 */}
      <path d="M2 4l10 8 10-8" />
    </svg>
  );
}

export default function FooterLight() {
  return (
    <footer className="bg-white text-black border-t border-black py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* LOGO + 品牌 */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-xl font-semibold">Chu Designs</div>
        </div>

        {/* 版權 */}
        <div className="mb-4 md:mb-0">
          <span className="text-sm">© 2025 Chu Designs。All rights reserved.</span>
        </div>

        {/* Contact 三圖示 */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
            <InstagramIcon width={24} height={24} />
          </a>
          <a href="#" aria-label="LINE" target="_blank" rel="noreferrer">
            <LineIcon width={24} height={24} />
          </a>
          <a href="#" aria-label="Email">
            <MailIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
