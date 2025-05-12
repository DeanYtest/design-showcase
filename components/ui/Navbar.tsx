// components/ui/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 只有桌機才隱藏/顯示，行動裝置（<768px）永遠 visible
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setVisible(e.clientY <= window.innerHeight * 0.1);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    handleMouseMove({ clientY: 0 } as MouseEvent);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 不是在頂端也不在 hover 時關閉下拉
  useEffect(() => {
    if (!visible && !hovering) setOpen(false);
  }, [visible, hovering]);

  const onEnterDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(true);
    setOpen(true);
  };
  const onLeaveDropdown = () => {
    setHovering(false);
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  };

  return (
    <header
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`fixed top-0 w-full z-50 transform transition-transform duration-500 ease-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        bg-white bg-opacity-60 backdrop-blur-md shadow`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </a>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-800 font-medium">
          {navLinks.map(({ name, href }) => (
            <Link key={href} href={href}>
              <a className="hover:text-primary transition">{name}</a>
            </Link>
          ))}

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={onEnterDropdown}
            onMouseLeave={onLeaveDropdown}
          >
            <button
              className="flex items-center hover:text-primary transition focus:outline-none"
              onClick={() => setOpen((v) => !v)}
            >
              Portfolio <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                {portfolioLinks.map(({ name, href }) => (
                  <Link key={href} href={href}>
                    <a className="block px-4 py-2 hover:bg-gray-100">{name}</a>
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
