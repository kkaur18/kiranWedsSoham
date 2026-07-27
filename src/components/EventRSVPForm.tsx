'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { EventId } from '@/lib/events';

interface Props {
  email: string;
  eventId: EventId;
  eventName: string;
  accentColor: string;
  accentText: string;
}

type State = 'idle' | 'loading' | 'success' | 'error';

export default function EventRSVPForm({ email, eventId, eventName, accentColor, accentText }: Props) {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (attending === null) return;
    setState('loading');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, eventId, eventName, attending }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (state === 'success') {
    return (
      <div className={cn('px-5 py-4 text-sm font-sans font-semibold flex items-center gap-2 border-t border-gray-100', accentColor, accentText)}>
        <span>✓</span>
        <span>{attending ? "You're on the list!" : "Response recorded — we'll miss you."}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-5 pb-5 pt-4 border-t border-gray-100 space-y-3">
      <p className="font-sans text-xs tracking-widest uppercase text-gray-400">Will you attend?</p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setAttending(true)}
          className={cn(
            'flex-1 py-2.5 rounded-xl border-2 font-sans text-xs font-bold tracking-wide uppercase transition-all',
            attending === true
              ? 'border-maroon bg-maroon text-white'
              : 'border-gray-200 text-gray-500 hover:border-maroon/40'
          )}
        >
          Attending
        </button>
        <button
          type="button"
          onClick={() => setAttending(false)}
          className={cn(
            'flex-1 py-2.5 rounded-xl border-2 font-sans text-xs font-bold tracking-wide uppercase transition-all',
            attending === false
              ? 'border-gray-400 bg-gray-400 text-white'
              : 'border-gray-200 text-gray-500 hover:border-gray-400'
          )}
        >
          Can't make it
        </button>
      </div>

      {state === 'error' && (
        <p className="text-xs text-red-600 font-sans bg-red-50 px-3 py-2 rounded-lg">{errorMsg}</p>
      )}

      {attending !== null && (
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full py-2.5 rounded-xl font-sans text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-maroon to-maroon-light text-white hover:shadow-md transition-all disabled:opacity-50"
        >
          {state === 'loading' ? 'Saving…' : 'Confirm RSVP'}
        </button>
      )}
    </form>
  );
}
