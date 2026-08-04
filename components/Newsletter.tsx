'use client'

import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitted')
  }

  return (
    <section id="newsletter" className="rounded-2xl bg-brand-900 px-6 py-10 text-center text-white">
      <h2 className="text-2xl font-bold">Get the best AI tools in your inbox</h2>
      <p className="mx-auto mt-2 max-w-md text-brand-100">
        One email a week. New reviews, deals, and workflows for solopreneurs.
      </p>
      {status === 'submitted' ? (
        <p className="mt-6 font-semibold">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-sm gap-2">
          <input
            type="email"
            required
            placeholder="you@business.com"
            className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
