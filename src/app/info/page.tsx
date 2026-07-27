import { cookies } from 'next/headers';
import { Bed, Car, MapPin, Phone, Hash } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import { getGuestStay } from '@/lib/guests';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

export default async function InfoPage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const { transport, contact } = config;

  const email = cookies().get('guest_email')?.value;
  let stay: Awaited<ReturnType<typeof getGuestStay>> = null;
  if (email) {
    try {
      stay = await getGuestStay(email);
    } catch {
      // Sheets error — show fallback
    }
  }

  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #160A0A 0%, #2D0F0F 40%, #1A0B2E 100%)',
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
            {t.info.heroTagline}
          </p>
          <h1 className="font-serif font-light text-gold mb-4" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            {t.info.heroTitle}
          </h1>
          <p className="font-sans text-cream/60 max-w-md mx-auto leading-relaxed">
            {t.info.heroDesc}
          </p>
        </div>
      </section>

      <main className="py-16 px-4 bg-[#FFFBF2]">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* ── Stay ───────────────────────────────────────────────────────────── */}
          <section id="stay">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
                <Bed size={20} className="text-maroon" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-maroon font-light">{t.info.stayTitle}</h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
              <div className="h-1.5 bg-gradient-to-r from-maroon to-saffron" />
              <div className="p-6 md:p-8">
                <p className="font-sans text-gray-600 leading-relaxed mb-6">
                  We are taking care of accommodation for all our outstation guests - details are below. If anything looks incorrect or you have specific requirements, please reach out to us directly. Additionally, if you would like to organize your own stay, please let us know so we can plan accordingly.
                </p>

                {stay ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {stay.accommodationName && (
                      <div className="flex items-start gap-3">
                        <Bed size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                            Accommodation
                          </p>
                          <p className="font-sans text-sm font-medium text-gray-800">{stay.accommodationName}</p>
                        </div>
                      </div>
                    )}
                    {stay.accommodationAddress && (
                      <div className="flex items-start gap-3">
                        <MapPin size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                            Address
                          </p>
                          <p className="font-sans text-sm text-gray-700">{stay.accommodationAddress}</p>
                        </div>
                      </div>
                    )}
                    {stay.roomNumber && (
                      <div className="flex items-start gap-3">
                        <Hash size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                            Room
                          </p>
                          <p className="font-sans text-sm text-gray-700">{stay.roomNumber}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-maroon/5 border border-maroon/10 rounded-xl px-5 py-4">
                    <p className="font-sans text-sm text-maroon/80 leading-relaxed">
                      Your accommodation details are being finalised and will appear here soon. Check back closer to the date, or reach out to us if you have any questions. 
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="brocade-border" />

          {/* ── Transport ──────────────────────────────────────────────────────── */}
          <section id="transport">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
                <Car size={20} className="text-saffron-dark" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-saffron-dark font-light">{t.info.transportTitle}</h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-saffron to-gold" />
              <div className="p-6 md:p-8 space-y-6">

                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">Airport Transfers</h3>
                  <p className="font-sans text-xs text-gray-400 mb-3">{transport.airport.name}</p>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    We are arranging complimentary airport pickups and drop-offs for all guests. Transportation details will be collected closer to the date so we can coordinate timing — please keep an eye out for a message from us.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">Getting Around</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    We will also organize any transport required for the celebrations, so you won't need to worry about getting where needed.
                  </p>
                </div>

                <div className="bg-saffron-50 border border-saffron/20 rounded-xl p-5">
                  <p className="font-sans text-sm text-saffron-dark leading-relaxed">
                    <strong>Prefer to arrange your own transport?</strong> That's completely fine — just let us know in advance so we can plan accordingly. Drop us a message on WhatsApp or contact us directly.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <div className="brocade-border" />

          {/* ── Contact ────────────────────────────────────────────────────────── */}
          <section id="contact">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-maroon font-light mb-3">
                {t.info.contactTitle}
              </h2>
              <p className="font-sans text-gray-500 mb-8">{t.info.contactDesc}</p>

              <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 px-6 py-4 bg-maroon text-white rounded-full font-sans text-sm tracking-widest uppercase hover:bg-maroon-dark transition-colors shadow-md"
                >
                  <Phone size={15} />
                  {contact.phone}
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
