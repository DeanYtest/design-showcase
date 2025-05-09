'use client';

import Image from 'next/image';

export default function AnimatedAvatar() {
  return (
    <div className="avatar-float w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-200 mx-auto">
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
