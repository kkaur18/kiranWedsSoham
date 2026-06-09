'use client';

import Link from 'next/link';
import { config } from '@/lib/config';
import { useT } from './LocaleProvider';

export default function Footer() {
  const t = useT();
  return (
    <footer className="bg-[#160A0A] text-cream/60 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="w-24 h-px bg-gold/30" />
        <p className="font-serif text-2xl text-gold/80 tracking-wide">
          {config.couple.combined}
        </p>
        <p className="font-sans text-sm tracking-widest text-cream/40 uppercase">
          {config.weddingDateDisplay} · {config.location}
        </p>
        <p className="font-sans text-sm text-cream/40">{config.couple.hashtag}</p>
        <nav className="flex gap-6 text-xs font-sans tracking-widest uppercase text-cream/40">
          <Link href="/" className="hover:text-gold transition-colors">{t.footer.home}</Link>
          <Link href="/events" className="hover:text-gold transition-colors">{t.footer.events}</Link>
          <Link href="/info" className="hover:text-gold transition-colors">{t.footer.stayTransport}</Link>
        </nav>
        <p className="text-xs font-sans text-cream/25">{t.footer.madeWithLove}</p>
      </div>
    </footer>
  );
}
