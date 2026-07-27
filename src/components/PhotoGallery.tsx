import Image from 'next/image';
import type { T } from '@/lib/translations';

// ── Add your photos here ─────────────────────────────────────────────────────
// 1. Drop your image files into  public/photos/
// 2. Add an entry per photo below, e.g.:
//    { src: '/photos/engagement-1.jpg', alt: 'Kiran and Soham at the park' }
// ─────────────────────────────────────────────────────────────────────────────
const PHOTOS: { src: string; alt: string }[] = [
  // { src: '/photos/1.jpg', alt: 'Kiran and Soham' },
  // { src: '/photos/2.jpg', alt: 'Kiran and Soham' },
  // { src: '/photos/3.jpg', alt: 'Kiran and Soham' },
  // { src: '/photos/4.jpg', alt: 'Kiran and Soham' },
  // { src: '/photos/5.jpg', alt: 'Kiran and Soham' },
  // { src: '/photos/6.jpg', alt: 'Kiran and Soham' },
];

interface Props {
  t: T;
}

export default function PhotoGallery({ t }: Props) {
  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(160deg, #2D0F0F 0%, #160A0A 50%, #1A0B2E 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-3">
            {t.gallery.tagline}
          </p>
          <h2
            className="font-serif font-light text-gold"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}
          >
            {t.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PHOTOS.length > 0
            ? PHOTOS.map((photo, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(139,0,0,0.12) 100%)',
                    border: '1px solid rgba(212,175,55,0.12)',
                  }}
                >
                  <span className="font-sans text-[9px] text-gold/25 tracking-widest uppercase text-center px-4">
                    {t.gallery.comingSoon}
                  </span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
