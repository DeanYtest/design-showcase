// components/MeteorRain.tsx
'use client';

import { useEffect, useState } from 'react';

type Meteor = {
  id: number;
  top: number;      // 百分比
  left: number;     // 百分比
  delay: number;    // 秒
  duration: number; // 秒
  hue: number;      // 色相 0-360
};

export default function MeteorRain({ count = 30 }: { count?: number }) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const arr: Meteor[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100 - 20,            // -20% ~ 80%
      left: Math.random() * 100,                // 0% ~ 100%
      delay: Math.random() * 5,                 // 0~5s
      duration: Math.random() * 5 + 3,          // 3~8s
      hue: Math.floor(Math.random() * 360),     // 色相
    }));
    setMeteors(arr);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {meteors.map(({ id, top, left, delay, duration, hue }) => (
        <div
          key={id}
          className="meteorRain"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            backgroundImage: `linear-gradient(to right, hsl(${hue},80%,80%), transparent)`,
          }}
        />
      ))}
    </div>
  );
}
