'use client';

import { useRouter } from 'next/navigation';
import { LOCALES, type Locale } from '@/lib/i18n';
import { useLocale } from './LocaleProvider';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const current = useLocale();
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value as Locale;
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="relative">
      <select
        value={current}
        onChange={handleChange}
        aria-label="Select language"
        className={cn(
          'appearance-none cursor-pointer bg-transparent border border-gold/30 rounded-full',
          'text-gold text-xs font-sans tracking-wide pl-3 pr-7 py-1.5',
          'hover:border-gold/60 focus:outline-none focus:border-gold/80 transition-colors',
        )}
      >
        {(Object.entries(LOCALES) as [Locale, string][]).map(([code, label]) => (
          <option key={code} value={code} className="bg-[#160A0A] text-cream">
            {label}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow */}
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gold/60 text-[10px]">
        ▾
      </span>
    </div>
  );
}
