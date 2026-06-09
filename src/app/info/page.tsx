import { cookies } from 'next/headers';
import { Bed, Car, MapPin, Phone, MessageCircle } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import { parseLocale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

export const dynamic = 'force-dynamic';

export default function InfoPage() {
  const locale = parseLocale(cookies().get('lang')?.value);
  const t = translations[locale];
  const { stay, transport, contact } = config;

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
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div>
                    <span className="font-sans text-xs tracking-widest uppercase text-maroon/60 font-semibold">
                      {t.info.accommodationBadge}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mt-1">
                      {stay.primary.name}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-gray-600 leading-relaxed mb-6">
                  {stay.primary.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                        Address
                      </p>
                      <p className="font-sans text-sm text-gray-700">{stay.primary.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                        Contact
                      </p>
                      <p className="font-sans text-sm text-gray-700">{stay.primary.contactName}</p>
                      <p className="font-sans text-sm text-maroon font-medium">{stay.primary.contactPhone}</p>
                    </div>
                  </div>
                </div>
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
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-1">{t.info.airportTitle}</h3>
                <p className="font-sans text-xs text-gray-400 mb-4">{transport.airport.name}</p>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  {transport.airport.note}
                </p>
                <div className="bg-saffron-50 border border-saffron/20 rounded-xl p-4">
                  <p className="font-sans text-sm text-saffron-dark leading-relaxed">
                    <strong>{t.info.howToBook}:</strong> {transport.airport.howToBook}
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
                <a
                  href={contact.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-full font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-md"
                >
                  <MessageCircle size={15} />
                  {t.info.whatsapp}
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
