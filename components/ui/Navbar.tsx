// components/ui/Navbar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 桌機才用頂端 10% 顯示/隱藏，手機永遠顯示
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setVisible(e.clientY <= window.innerHeight * 0.1);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    onMouseMove({ clientY: 0 } as MouseEvent);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    if (!visible && !hovering) setOpen(false);
  }, [visible, hovering]);

  const onEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(true);
    setOpen(true);
  };
  const onLeave = () => {
    setHovering(false);
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  };

  return (
    <header
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`
        fixed top-0 w-full z-50 transform transition-transform duration-500 ease-out
        bg-white bg-opacity-60 backdrop-blur-md shadow
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </a>
        </Link>

        {/* 大於 md 顯示水平選單 */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ name, href }) => (
            <Link key={href} href={href}>
              <a className="hover:text-primary transition">{name}</a>
            </Link>
          ))}
          <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <button
              className="flex items-center hover:text-primary transition"
              onClick={() => setOpen(v => !v)}
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

        {/* 小於 md 顯示漢堡按鈕 */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 手機選單：垂直全寬顯示 */}
      {mobileOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map(({ name, href }) => (
              <Link key={href} href={href}>
                <a className="block text-lg font-medium py-2">{name}</a>
              </Link>
            ))}
            <div className="border-t my-2" />
            {portfolioLinks.map(({ name, href }) => (
              <Link key={href} href={href}>
                <a className="block text-lg font-medium py-2">{name}</a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
