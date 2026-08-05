'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { config } from '@/lib/config';
import { useT } from './LocaleProvider';
import { cn } from '@/lib/utils';

export default function Nav() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '/events', label: t.nav.events },
    { href: '/info', label: t.nav.stayTransport },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-[#160A0A]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl text-gold tracking-widest font-light hover:opacity-80 transition-opacity"
        >
          {config.couple.partner1.charAt(0)} &amp; {config.couple.partner2.charAt(0)}
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-cream/80 hover:text-gold transition-colors font-sans"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-cream/80 hover:text-gold transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#160A0A] border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base tracking-widest uppercase text-cream/80 hover:text-gold transition-colors font-sans"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
