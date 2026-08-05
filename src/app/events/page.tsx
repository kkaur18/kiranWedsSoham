import { cookies } from 'next/headers';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import ArrivalForm from '@/components/ArrivalForm';
import { getGuestByEmail } from '@/lib/guests';
import { getEventsForGuest } from '@/lib/events';
import { config } from '@/lib/config';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const email = cookies().get('guest_email')?.value;

  // ── No email cookie — prompt to log in ───────────────────────────────────
  if (!email) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
          <div className="max-w-md text-center">
            <p className="text-5xl mb-5">💌</p>
            <h1 className="font-serif text-4xl text-maroon mb-3">{t.events.noInviteTitle}</h1>
            <p className="font-sans text-gray-500 leading-relaxed mb-8">
              Enter your email address to view your personalised invitation and events.
            </p>
            <Link
              href="/invite"
              className="inline-flex items-center gap-2 px-8 py-4 bg-maroon text-white rounded-full font-sans text-sm font-bold tracking-widest uppercase hover:shadow-lg transition-all"
            >
              View My Invitation
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Fetch guest ────────────────────────────────────────────────────────────
  let guest;
  try {
    guest = await getGuestByEmail(email);
  } catch {
    if (process.env.NODE_ENV !== 'production') {
      return (
        <>
          <Nav />
          <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
            <div className="max-w-md text-center">
              <p className="text-4xl mb-4">🔧</p>
              <h1 className="font-serif text-3xl text-maroon mb-3">Google Sheets not connected</h1>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">
                Fill in <code className="bg-gray-100 px-1 rounded">.env.local</code> with your
                Sheet ID and service account credentials.
              </p>
            </div>
          </main>
          <Footer />
        </>
      );
    }
    guest = null;
  }

  if (!guest) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
          <div className="max-w-md text-center">
            <p className="text-5xl mb-5">💌</p>
            <h1 className="font-serif text-4xl text-maroon mb-3">{t.events.noInviteTitle}</h1>
            <p className="font-sans text-gray-500 leading-relaxed mb-8">
              We couldn't find your invitation. Please try again with a different email address.
            </p>
            <Link
              href="/invite"
              className="inline-flex items-center gap-2 px-8 py-4 bg-maroon text-white rounded-full font-sans text-sm font-bold tracking-widest uppercase hover:shadow-lg transition-all"
            >
              Try Again
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const guestEvents = getEventsForGuest(guest.events);

  return (
    <>
      <Nav />

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-16 px-4 text-center"
        style={{
          background: 'linear-gradient(160deg, #160A0A 0%, #2D0F0F 40%, #1A0B2E 100%)',
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-3">
            {t.events.tagline}
          </p>
          <h1 className="font-serif font-light text-gold mb-3" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            {t.events.welcomePrefix} {guest.name}
          </h1>
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px w-16 bg-gold/30" />
            <span className="font-sans text-sm text-cream/50 tracking-widest uppercase">
              {config.couple.combined}
            </span>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="mt-2 font-sans text-xs text-cream/40 tracking-widest uppercase">
            {config.weddingDateDisplay} · {config.location}
          </p>
        </div>
      </section>

      {/* ── Events grid ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#FFFBF2]">
        <div className="max-w-4xl mx-auto">
          {guestEvents.length === 0 ? (
            <p className="text-center font-sans text-gray-500 py-12">{t.events.noEvents}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {guestEvents.map((event) => (
                <EventCard key={event.id} event={event} detailed t={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="brocade-border" />

      {/* ── Arrival & Departure ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" id="rsvp">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-2">
              Help us plan
            </p>
            <h2 className="font-serif text-4xl text-maroon font-light">Your Travel Dates</h2>
            <p className="font-sans text-sm text-gray-500 mt-4 leading-relaxed">
              Let us know when you're arriving and departing so we can arrange transfers and accommodation accordingly.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <div className="h-px w-12 bg-gold/30" />
              <span className="text-gold text-lg">◆</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
          </div>
          <ArrivalForm email={guest.email} />
        </div>
      </section>

      <Footer />
    </>
  );
}
