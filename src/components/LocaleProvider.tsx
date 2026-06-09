'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n';
import { translations, type T } from '@/lib/translations';

const LocaleContext = createContext<Locale>('en');

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useT(): T {
  return translations[useContext(LocaleContext)];
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
