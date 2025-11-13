'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Users, BookOpen, X, Home } from 'lucide-react';
import { useState } from 'react';

export default function SpaceNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: Users, href: '/team', label: 'Team' },
    { icon: BookOpen, href: '/shelf', label: 'Shelf' },
  ];

  return (
    <>
      {/* Menu Button - Only visible when menu is closed */}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-6 right-6 flex items-center gap-3 px-6 py-3 rounded-full z-50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          style={{ 
            backgroundColor: 'rgba(138, 149, 165, 0.2)',
            border: '1px solid var(--digital-cyan)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
            color: 'var(--starlight)',
          }}
        >
          <span className="font-mono text-sm tracking-wider">MENU</span>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </div>
        </button>
      )}

      {/* Lateral Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 z-40 backdrop-blur-md transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: 'rgba(11, 12, 34, 0.95)',
          borderLeft: '1px solid var(--digital-cyan)',
          boxShadow: '-10px 0 30px rgba(0, 240, 255, 0.2)',
        }}
      >
        {/* Close Button - Only visible when menu is open */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 transition-all duration-300 hover:scale-110 hover:rotate-90"
          style={{ color: 'var(--starlight)' }}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 mt-24 px-8">
          {menuItems.map(({ icon: Icon, href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: pathname === href ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                border: `1px solid ${pathname === href ? 'var(--digital-cyan)' : 'transparent'}`,
                color: pathname === href ? 'var(--digital-cyan)' : 'var(--starlight)',
                boxShadow: pathname === href ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
              }}
            >
              <Icon className="w-6 h-6" />
              <span className="font-mono text-lg tracking-wider">{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}