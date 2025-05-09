'use client';

import Image from 'next/image';

export default function AnimatedAvatar() {
  return (
    <div className="avatar-float w-72 h-72 overflow-hidden mx-auto">
      <Image
        src="/images/about-me.jpg"
        alt="Chu 設計師"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
