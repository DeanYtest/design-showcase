// components/ui/Navbar.tsx
'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* 左邊 Logo */}
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

        {/* 右邊導覽 */}
        <nav className="space-x-6 text-gray-800 font-medium">
          <Link href="/" passHref>
            <a className="hover:text-primary transition-colors duration-200">
              Home
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className="hover:text-primary transition-colors duration-200">
              About Me
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className="hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
