import { cookies } from 'next/headers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import RSVPForm from '@/components/RSVPForm';
import { getGuestByCode } from '@/lib/guests';
import { getEventsForGuest } from '@/lib/events';
import { config } from '@/lib/config';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const code = cookies().get('guest_code')?.value;

  // ── No invite cookie ──────────────────────────────────────────────────────
  if (!code) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
          <div className="max-w-md text-center">
            <p className="text-5xl mb-5">💌</p>
            <h1 className="font-serif text-4xl text-maroon mb-3">{t.events.noInviteTitle}</h1>
            <p className="font-sans text-gray-500 leading-relaxed mb-6">{t.events.noInviteDesc}</p>
            <p className="font-sans text-sm text-gray-400">
              {t.events.noInviteContact}{' '}
              <span className="text-maroon font-medium">{config.contact.phone}</span>
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ── Fetch guest ────────────────────────────────────────────────────────────
  let guest;
  try {
    guest = await getGuestByCode(code);
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
            <p className="font-sans text-gray-500 leading-relaxed mb-6">{t.events.noInviteDesc}</p>
            <p className="font-sans text-sm text-gray-400">
              {t.events.noInviteContact}{' '}
              <span className="text-maroon font-medium">{config.contact.phone}</span>
            </p>
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
            {guest.name}{t.events.celebrationsSuffix}
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

      {/* ── RSVP ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" id="rsvp">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-2">
              {t.events.rsvpTagline}
            </p>
            <h2 className="font-serif text-4xl text-maroon font-light">{t.events.rsvpTitle}</h2>
            <div className="mt-4 flex items-center gap-3 justify-center">
              <div className="h-px w-12 bg-gold/30" />
              <span className="text-gold text-lg">◆</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
          </div>
          <RSVPForm guest={guest} />
        </div>
      </section>

      <Footer />
    </>
  );
}
