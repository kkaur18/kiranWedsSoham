'use client';

import { useEffect, useState } from 'react';
import { useT } from './LocaleProvider';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculate(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function CountdownTimer({ target }: { target: string }) {
  const t = useT();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calculate(target));
    const id = setInterval(() => setTime(calculate(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) return null;

  const units = [
    { label: t.countdown.days, value: time.days },
    { label: t.countdown.hours, value: time.hours },
    { label: t.countdown.mins, value: time.minutes },
    { label: t.countdown.secs, value: time.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/5 border border-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="font-serif text-3xl sm:text-4xl text-gold font-light tabular-nums">
              {pad(value)}
            </span>
          </div>
          <span className="mt-1.5 text-[10px] sm:text-xs tracking-widest uppercase text-cream/50 font-sans">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
