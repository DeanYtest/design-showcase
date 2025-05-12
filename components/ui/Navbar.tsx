// components/ui/Navbar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [visible, setVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 根據滑鼠位置顯示/隱藏 Navbar
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const threshold = window.innerHeight * 0.1;
      setVisible(e.clientY <= threshold);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // 當 Navbar 隱藏時自動收起下拉選單
  useEffect(() => {
    if (!visible && open) {
      setOpen(false);
    }
  }, [visible, open]);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      closeTimeout.current = null;
    }, 500);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transform transition-transform ease-out
        ${visible
          ? 'translate-y-0 bg-white bg-opacity-60 backdrop-blur-md shadow-md duration-500'
          : '-translate-y-full duration-700'}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </a>
        </Link>

        {/* 導覽 */}
        <nav className="flex items-center space-x-6 text-gray-800 font-medium">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} passHref>
              <a className="hover:text-primary transition-colors duration-200">
                {l.name}
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
              className="flex items-center hover:text-primary transition-colors focus:outline-none"
              onClick={() => setOpen(v => !v)}
            >
              Portfolio <ChevronDown className="ml-1 w-4 h-4" />
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
