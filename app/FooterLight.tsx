// components/FooterLight.tsx
'use client';

import Image from 'next/image';

export default function FooterLight() {
  return (
    <footer className="bg-white text-black border-t border-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {/* LOGO + 品牌 */}
        <div className="flex items-center">
          <div className="text-xl font-semibold">Chu Designs</div>
        </div>

        {/* 版權 */}
        <div>
          <span className="text-sm">© 2025 Chu Designs。All rights reserved.</span>
        </div>

        {/* Contact 三圖示 */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="LINE" target="_blank" rel="noreferrer">
            <Image
              src="/icons/line.svg"
              alt="LINE"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Email">
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
