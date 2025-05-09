// components/ui/Navbar.tsx
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact',  href: '/contact' },
];

const portfolioLinks = [
  { name: 'UI',           href: '/ui' },
  { name: 'Logo',         href: '/logo' },
  { name: 'Graphic',      href: '/graphic' },
  { name: 'Packaging',    href: '/packaging' },
  { name: 'Illustration', href: '/illustration' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // 用來存關閉的定時器
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // 滑鼠離開後 300ms 再關閉
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={40} priority />
          </a>
        </Link>

        {/* 導覽 */}
        <nav className="flex items-center space-x-6 text-gray-800 font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} passHref>
              <a className="hover:text-primary transition-colors duration-200">
                {link.name}
              </a>
            </Link>
          ))}

          {/* Portfolio 下拉 */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center hover:text-primary transition-colors duration-200 focus:outline-none"
              onClick={() => setOpen(v => !v)}
            >
              Portfolio
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
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
