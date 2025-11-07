'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Star, BookOpen } from 'lucide-react';

export default function SpaceNavigation() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: Star, href: '/star', label: 'Star' },
    { icon: BookOpen, href: '/shelf', label: 'Shelf' },
  ];

  return (
    <nav 
      className="fixed top-6 right-6 flex items-center gap-6 px-6 py-3 rounded-full z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(138, 149, 165, 0.2)',
        border: '1px solid var(--digital-cyan)',
        boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
      }}
    >
      {navItems.map(({ icon: Icon, href, label }) => (
        <Link
          key={href}
          href={href}
          className="nav-icon-button group relative transition-all duration-300 hover:scale-110"
          aria-label={label}
        >
          <Icon 
            className="w-6 h-6"
            style={{ 
              color: pathname === href ? 'var(--digital-cyan)' : 'var(--starlight)',
              filter: pathname === href ? 'drop-shadow(0 0 8px var(--digital-cyan))' : 'none',
            }}
          />
        </Link>
      ))}
    </nav>
  );
}