export type Locale = 'en' | 'hi' | 'pa' | 'mr';

export const LOCALES: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  pa: 'ਪੰਜਾਬੀ',
  mr: 'मराठी',
};

export const DEFAULT_LOCALE: Locale = 'en';

export function parseLocale(raw: string | undefined): Locale {
  if (raw === 'hi' || raw === 'pa' || raw === 'mr') return raw;
  return DEFAULT_LOCALE;
}
