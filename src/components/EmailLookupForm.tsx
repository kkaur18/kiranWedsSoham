'use client';

import { useState } from 'react';

export default function EmailLookupForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/guest-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      window.location.reload();
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="guest-email" className="block font-serif text-xl text-gray-800 mb-3">
          Enter your email address
        </label>
        <input
          id="guest-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50"
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 font-sans bg-red-50 px-4 py-3 rounded-xl">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading' || !email}
        className="w-full py-4 rounded-xl font-sans text-sm font-bold tracking-widest uppercase transition-all bg-gradient-to-r from-maroon to-maroon-light text-white hover:shadow-lg hover:scale-[1.01] disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
      >
        {state === 'loading' ? 'Finding your invitation…' : 'View My Invitation'}
      </button>
    </form>
  );
}
