import { cookies } from 'next/headers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import ArrivalForm from '@/components/ArrivalForm';
import EmailLookupForm from '@/components/EmailLookupForm';
import { getGuestByEmail } from '@/lib/guests';
import { getEventsForGuest } from '@/lib/events';
import { config } from '@/lib/config';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

function Mandala({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true" fill="currentColor">
      {[120, 100, 80, 60].map((r) => (
        <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse key={a} cx="150" cy="38" rx="8" ry="22" opacity="0.15" transform={`rotate(${a} 150 150)`} />
      ))}
      <circle cx="150" cy="150" r="6" opacity="0.2" />
    </svg>
  );
}

export default async function InvitePage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const email = cookies().get('guest_email')?.value;

  if (!email) {
    return (
      <>
        <Nav />
        <main
          className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16"
          style={{ background: 'linear-gradient(160deg, #160A0A 0%, #2D0F0F 40%, #1A0B2E 100%)' }}
        >
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
              {t.invite.tagline}
            </p>
            <h1
              className="font-serif font-light text-gold mb-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              {config.couple.combined}
            </h1>
            <p className="font-serif italic text-cream/70 text-lg mb-8">{t.invite.subtitle}</p>
            <div className="flex items-center gap-4 justify-center">
              <div className="h-px w-16 bg-gold/30" />
              <span className="text-gold">◆</span>
              <div className="h-px w-16 bg-gold/30" />
            </div>
          </div>
          <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
            <EmailLookupForm />
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
                Copy <code className="bg-gray-100 px-1 rounded">.env.local.example</code> to{' '}
                <code className="bg-gray-100 px-1 rounded">.env.local</code> and fill in your Google
                Sheet ID and service account credentials.
              </p>
            </div>
          </main>
          <Footer />
        </>
      );
    }
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
          <div className="max-w-md w-full text-center">
            <p className="font-serif text-2xl text-maroon mb-6">Something went wrong</p>
            <EmailLookupForm />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!guest) {
    return (
      <>
        <Nav />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF2] pt-20">
          <div className="max-w-md w-full text-center">
            <p className="font-serif text-2xl text-maroon mb-2">Invitation not found</p>
            <p className="font-sans text-gray-500 text-sm mb-8">
              Please try a different email address.
            </p>
            <EmailLookupForm />
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

      {/* ── Hero banner ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 px-4 text-center"
        style={{ background: 'linear-gradient(160deg, #160A0A 0%, #2D0F0F 40%, #1A0B2E 100%)' }}
      >
        <Mandala className="absolute -top-8 -left-8 w-64 text-gold opacity-50 pointer-events-none" />
        <Mandala className="absolute -bottom-8 -right-8 w-64 text-saffron opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
            {t.invite.tagline}
          </p>
          <h1
            className="font-serif font-light text-gold mb-2"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            {t.invite.dear} {guest.name},
          </h1>
          <p className="font-serif italic text-cream/70 text-xl md:text-2xl mb-6">
            {t.invite.subtitle}
          </p>
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px w-16 bg-gold/30" />
            <p className="font-sans text-sm text-cream/50 tracking-widest uppercase">
              {config.couple.combined}
            </p>
            <div className="h-px w-16 bg-gold/30" />
          </div>
          <p className="mt-3 font-sans text-xs text-cream/40 tracking-widest uppercase">
            {config.weddingDateDisplay} · {config.location}
          </p>
        </div>
      </section>

      {/* ── Your events ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-2">
              {t.invite.invitationIncludes}
            </p>
            <h2 className="font-serif text-4xl text-maroon font-light">
              {t.invite.celebrationsTitle}
            </h2>
            <div className="mt-4 flex items-center gap-3 justify-center">
              <div className="h-px w-12 bg-gold/30" />
              <span className="text-gold text-lg">◆</span>
              <div className="h-px w-12 bg-gold/30" />
            </div>
          </div>

          {guestEvents.length === 0 ? (
            <p className="text-center font-sans text-gray-500">{t.invite.noEvents}</p>
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

      {/* ── Quick info links ──────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-[#FFFBF2]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm text-gray-500 mb-4">{t.invite.infoDesc}</p>
          <a
            href="/info"
            className="inline-flex items-center gap-2 px-6 py-3 border border-maroon/30 text-maroon rounded-full font-sans text-sm tracking-widest uppercase hover:bg-maroon hover:text-white transition-all"
          >
            {t.invite.infoLink}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
