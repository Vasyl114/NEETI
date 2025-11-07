'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SpaceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--cosmic-void)' }}
    >
      {/* Earth curvature at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[60vh]"
        style={{
          background: 'radial-gradient(ellipse 150% 100% at 50% -20%, #2a5a8a 0%, #1a3a5a 30%, transparent 60%)',
          opacity: 0.7,
        }}
      />

      {/* Stars background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 90%, white, transparent)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          opacity: 0.8,
        }}
      />

      {/* Shooting stars */}
      {mounted && (
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                top: Math.random() * 50 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: `${i * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Fade to bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--cosmic-void))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className={`text-7xl md:text-9xl font-bold mb-6 tracking-wider ${mounted ? 'fade-in' : 'opacity-0'}`}
          style={{ 
            color: 'var(--starlight)',
            textShadow: '0 0 30px var(--digital-cyan), 0 0 60px var(--plasma-magenta)',
            animationDelay: '0.2s',
          }}
        >
          NEETI
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-8 ${mounted ? 'fade-in' : 'opacity-0'}`}
          style={{ 
            color: 'var(--starlight)',
            animationDelay: '0.6s',
          }}
        >
          From students to students
        </p>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer"
        style={{ color: 'var(--digital-cyan)' }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <ChevronDown 
          className="w-8 h-8"
          style={{ 
            filter: 'drop-shadow(0 0 10px var(--digital-cyan))',
          }}
        />
      </div>
    </section>
  );
}