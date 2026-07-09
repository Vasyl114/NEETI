"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: Math.random() * 60 + "%",
            left: Math.random() * 120 + "%",
            animationDelay: `${i * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
