'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useT } from './LocaleProvider';
import type { Guest } from '@/lib/guests';

interface Props {
  guest: Guest;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

const MAX_PARTY_SIZE = 10;

export default function RSVPForm({ guest }: Props) {
  const t = useT();
  const [attending, setAttending] = useState<boolean | null>(null);
  const [partySize, setPartySize] = useState(1);
  const [dietary, setDietary] = useState('');
  const [songRequest, setSongRequest] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (attending === null) return;
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: guest.email,
          attending,
          partySize: attending ? partySize : 0,
          dietary,
          songRequest,
          message,
        }),
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
      <div className="text-center py-16 px-6">
        <div className="text-5xl mb-4">{attending ? '🎉' : '💌'}</div>
        <h3 className="font-serif text-3xl text-maroon mb-3">
          {attending ? t.rsvp.successAttendingTitle : t.rsvp.successDeclineTitle}
        </h3>
        <p className="font-sans text-gray-600 max-w-md mx-auto">
          {attending ? t.rsvp.successAttendingBody : t.rsvp.successDeclineBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Attending? */}
      <fieldset>
        <legend className="font-serif text-xl text-gray-800 mb-4">{t.rsvp.attendingQ}</legend>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setAttending(true)}
            className={cn(
              'flex-1 py-4 rounded-xl border-2 font-sans text-sm font-semibold tracking-wide transition-all',
              attending === true
                ? 'border-maroon bg-maroon text-white shadow-sm'
                : 'border-gray-200 text-gray-600 hover:border-maroon/50'
            )}
          >
            {t.rsvp.accepts}
          </button>
          <button
            type="button"
            onClick={() => { setAttending(false); setPartySize(0); }}
            className={cn(
              'flex-1 py-4 rounded-xl border-2 font-sans text-sm font-semibold tracking-wide transition-all',
              attending === false
                ? 'border-gray-500 bg-gray-500 text-white shadow-sm'
                : 'border-gray-200 text-gray-600 hover:border-gray-400'
            )}
          >
            {t.rsvp.declines}
          </button>
        </div>
      </fieldset>

      {attending === true && (
        <>
          {/* Party size */}
          <div>
            <label className="block font-serif text-xl text-gray-800 mb-4">{t.rsvp.partySizeQ}</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPartySize((n) => Math.max(1, n - 1))}
                className="w-10 h-10 rounded-full border-2 border-maroon/30 text-maroon font-bold text-lg hover:bg-maroon/10 transition-colors"
              >
                −
              </button>
              <span className="font-serif text-4xl text-maroon w-10 text-center">{partySize}</span>
              <button
                type="button"
                onClick={() => setPartySize((n) => Math.min(MAX_PARTY_SIZE, n + 1))}
                className="w-10 h-10 rounded-full border-2 border-maroon/30 text-maroon font-bold text-lg hover:bg-maroon/10 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Dietary */}
          <div>
            <label className="block font-serif text-xl text-gray-800 mb-2">{t.rsvp.dietaryQ}</label>
            <p className="text-sm text-gray-400 font-sans mb-3">{t.rsvp.dietaryHint}</p>
            <textarea
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              placeholder={t.rsvp.dietaryPlaceholder}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 resize-none"
            />
          </div>

          {/* Song */}
          <div>
            <label className="block font-serif text-xl text-gray-800 mb-2">{t.rsvp.songQ}</label>
            <input
              type="text"
              value={songRequest}
              onChange={(e) => setSongRequest(e.target.value)}
              placeholder={t.rsvp.songPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
            />
          </div>
        </>
      )}

      {/* Message */}
      {attending !== null && (
        <div>
          <label className="block font-serif text-xl text-gray-800 mb-2">{t.rsvp.messageQ}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.rsvp.messagePlaceholder}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 resize-none"
          />
        </div>
      )}

      {state === 'error' && (
        <p className="text-sm text-red-600 font-sans bg-red-50 px-4 py-3 rounded-xl">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={attending === null || state === 'loading'}
        className={cn(
          'w-full py-4 rounded-xl font-sans text-sm font-bold tracking-widest uppercase transition-all',
          attending === null || state === 'loading'
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-maroon to-maroon-light text-white hover:shadow-lg hover:scale-[1.01]'
        )}
      >
        {state === 'loading' ? t.rsvp.submitting : t.rsvp.submit}
      </button>
    </form>
  );
}
