// components/ui/Navbar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [visible, setVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevY = useRef<number>(0);

  // show/hide on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < prevY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevY.current = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 300);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-white bg-opacity-80 backdrop-blur-md
        transform transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
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
