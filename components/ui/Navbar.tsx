// components/ui/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const portfolioLinks = [
  { name: 'UI', href: '/ui' },
  { name: 'Logo', href: '/logo' },
  { name: 'Graphic', href: '/graphic' },
  { name: 'Packaging', href: '/packaging' },
  { name: 'Illustration', href: '/illustration' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* 左邊 Logo */}
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={40} priority />
          </a>
        </Link>

        {/* 右邊導覽 */}
        <nav className="flex items-center space-x-6 text-gray-800 font-medium relative">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} passHref>
              <a className="hover:text-primary transition-colors duration-200">
                {link.name}
              </a>
            </Link>
          ))}

          {/* Portfolio 下拉選單 */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center hover:text-primary transition-colors duration-200 focus:outline-none"
              onClick={() => setOpen(v => !v)}
            >
              Portfolio
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
                {portfolioLinks.map(item => (
                  <Link key={item.href} href={item.href} passHref>
                    <a className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
