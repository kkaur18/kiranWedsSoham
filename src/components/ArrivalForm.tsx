'use client';

import { useState } from 'react';

interface Props {
  email: string;
}

type State = 'idle' | 'loading' | 'success' | 'error';

const MAX_PARTY_SIZE = 10;

export default function ArrivalForm({ email }: Props) {
  const [arrival, setArrival] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departure, setDeparture] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!arrival || !arrivalTime || !departure || !departureTime) return;
    setState('loading');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, arrival, arrivalTime, departure, departureTime, partySize }),
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
      <div className="text-center py-12 px-6">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-serif text-2xl text-maroon mb-2">We've got you down!</h3>
        <p className="font-sans text-gray-500 text-sm">
          Arriving <span className="font-medium text-gray-700">{arrival} at {arrivalTime}</span> · Departing{' '}
          <span className="font-medium text-gray-700">{departure} at {departureTime}</span>
        </p>
        <p className="font-sans text-gray-500 text-sm mt-1">
          Party size: <span className="font-medium text-gray-700">{partySize}</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="arrival" className="block font-serif text-lg text-gray-800 mb-2">
            Arrival date
          </label>
          <input
            id="arrival"
            type="date"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
          />
        </div>
        <div>
          <label htmlFor="arrivalTime" className="block font-serif text-lg text-gray-800 mb-2">
            Arrival time
          </label>
          <input
            id="arrivalTime"
            type="time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
          />
        </div>
        <div>
          <label htmlFor="departure" className="block font-serif text-lg text-gray-800 mb-2">
            Departure date
          </label>
          <input
            id="departure"
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
          />
        </div>
        <div>
          <label htmlFor="departureTime" className="block font-serif text-lg text-gray-800 mb-2">
            Departure time
          </label>
          <input
            id="departureTime"
            type="time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
          />
        </div>
      </div>

      <div>
        <label className="block font-serif text-lg text-gray-800 mb-3">Number of people</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPartySize((n) => Math.max(1, n - 1))}
            className="w-10 h-10 rounded-full border-2 border-maroon/30 text-maroon font-bold text-lg hover:bg-maroon/10 transition-colors"
          >
            −
          </button>
          <span className="font-serif text-3xl text-maroon w-8 text-center">{partySize}</span>
          <button
            type="button"
            onClick={() => setPartySize((n) => Math.min(MAX_PARTY_SIZE, n + 1))}
            className="w-10 h-10 rounded-full border-2 border-maroon/30 text-maroon font-bold text-lg hover:bg-maroon/10 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 font-sans bg-red-50 px-4 py-3 rounded-xl">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading' || !arrival || !arrivalTime || !departure || !departureTime}
        className="w-full py-4 rounded-xl font-sans text-sm font-bold tracking-widest uppercase transition-all bg-gradient-to-r from-maroon to-maroon-light text-white hover:shadow-lg hover:scale-[1.01] disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
      >
        {state === 'loading' ? 'Saving…' : 'Confirm Dates'}
      </button>
    </form>
  );
}
