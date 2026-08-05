import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import { parseLocale } from '@/lib/i18n';
import { LocaleProvider } from '@/components/LocaleProvider';
import { config } from '@/lib/config';
import './globals.css';

export const dynamic = 'force-dynamic';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${config.couple.combined} — Wedding in Goa`,
  description: `${config.weddingDateDisplay} · ${config.location}`,
  openGraph: {
    title: `${config.couple.combined} — Wedding in Goa`,
    description: `${config.weddingDateDisplay} · ${config.location}`,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = parseLocale(cookies().get('lang')?.value);

  const fontClasses = [cormorant.variable, dmSans.variable].join(' ');

  return (
    <html lang={locale} data-locale={locale} className={fontClasses}>
      <body>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
