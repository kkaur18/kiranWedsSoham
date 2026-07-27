import { cookies } from 'next/headers';
import Link from 'next/link';
import { ArrowRight, Bed, Car } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import StoryTimeline from '@/components/StoryTimeline';
import { getGuestByEmail } from '@/lib/guests';
import { getEventsForGuest } from '@/lib/events';
import { config } from '@/lib/config';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

function Mandala({ className }: { className?: string }) {
  const petals8 = [0, 45, 90, 135, 180, 225, 270, 315];
  const petals8b = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true" fill="currentColor">
      {[140, 120, 100, 80, 60].map((r) => (
        <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      ))}
      {petals8.map((a) => (
        <ellipse key={a} cx="150" cy="28" rx="9" ry="24" opacity="0.18" transform={`rotate(${a} 150 150)`} />
      ))}
      {petals8b.map((a) => (
        <ellipse key={a} cx="150" cy="62" rx="6" ry="16" opacity="0.12" transform={`rotate(${a} 150 150)`} />
      ))}
      {petals8.map((a) => (
        <ellipse key={`inner-${a}`} cx="150" cy="90" rx="4" ry="10" opacity="0.1" transform={`rotate(${a} 150 150)`} />
      ))}
      <circle cx="150" cy="150" r="8" opacity="0.2" />
      <circle cx="150" cy="150" r="4" opacity="0.35" />
    </svg>
  );
}

async function getCountdownDate(): Promise<string> {
  try {
    const email = cookies().get('guest_email')?.value;
    if (email) {
      const guest = await getGuestByEmail(email);
      if (guest) {
        const events = getEventsForGuest(guest.events);
        if (events.length > 0) return events[0].isoDate;
      }
    }
  } catch {
    // Sheets not configured — fall through to default
  }
  return config.weddingStartDate;
}

export default async function HomePage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const countdownDate = await getCountdownDate();

  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #160A0A 0%, #2D0F0F 35%, #1A0B2E 70%, #0D1536 100%)',
        }}
      >
        <Mandala className="absolute -top-10 -left-10 w-72 md:w-96 text-gold opacity-60 pointer-events-none" />
        <Mandala className="absolute -bottom-16 -right-10 w-80 md:w-[28rem] text-saffron opacity-50 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 brocade-border" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6 pt-20 pb-12">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold/70">
            {t.home.tagline}
          </p>

          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gold/25" />
            <span className="text-gold text-xl">◆</span>
            <div className="flex-1 h-px bg-gold/25" />
          </div>

          <h1
            className="font-serif font-light text-gold leading-none hero-text-shadow"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            {config.couple.partner1}
            <span className="block text-cream/70 text-[0.45em] tracking-[0.3em] uppercase my-3">
              &amp;
            </span>
            {config.couple.partner2}
          </h1>

          <div className="font-sans text-sm md:text-base tracking-widest text-cream/60 uppercase space-y-1">
            <p>{config.weddingDateDisplay}</p>
            <p>{config.location}</p>
          </div>

          <div className="mt-4">
            <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-4">
              {t.countdown.label}
            </p>
            <CountdownTimer target={countdownDate} />
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 brocade-border" />
      </section>

      <StoryTimeline t={t} />

      {/* ── Info preview ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-3">
              {t.home.weHaveTakenCare}
            </p>
            <h2 className="section-heading">{t.home.joinUsTitle}</h2>
            <div className="gold-divider mt-6 max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-maroon-50 to-saffron-50 border border-maroon/10 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
                  <Bed size={22} className="text-maroon" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-maroon mb-2">{t.home.stayTitle}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">
                    {t.home.stayDesc}
                  </p>
                  <Link
                    href="/info#stay"
                    className="inline-flex items-center gap-1.5 font-sans text-sm text-maroon font-semibold hover:gap-3 transition-all"
                  >
                    {t.home.stayLink} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-saffron-50 to-gold/10 border border-saffron/20 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
                  <Car size={22} className="text-saffron-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-saffron-dark mb-2">{t.home.transportTitle}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">
                    {t.home.transportDesc}
                  </p>
                  <Link
                    href="/info#transport"
                    className="inline-flex items-center gap-1.5 font-sans text-sm text-saffron-dark font-semibold hover:gap-3 transition-all"
                  >
                    {t.home.transportLink} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
