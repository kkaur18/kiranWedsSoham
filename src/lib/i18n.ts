export type Locale = 'en';

export const DEFAULT_LOCALE: Locale = 'en';

export function parseLocale(_raw: string | undefined): Locale {
  return DEFAULT_LOCALE;
}
