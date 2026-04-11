import { useState } from 'react'

export default function ContactForm({ email }) {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Portfolio message from ${name || 'visitor'}`
    const body = [
      name && `Name: ${name}`,
      from && `Reply-to: ${from}`,
      '',
      message || '(no message)',
    ]
      .filter(Boolean)
      .join('\n')

    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  return (
    <form
      className="rounded-3xl border border-zinc-200 bg-white p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-zinc-900">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-zinc-900 outline-none ring-indigo-500/30 placeholder:text-zinc-400 focus:ring-2"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-semibold text-zinc-900">Your email</span>
          <input
            required
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-zinc-900 outline-none ring-indigo-500/30 placeholder:text-zinc-400 focus:ring-2"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-semibold text-zinc-900">Message</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-28 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none ring-indigo-500/30 placeholder:text-zinc-400 focus:ring-2"
            placeholder="Tell me about your project..."
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-zinc-500">
          Opens your email app with this message pre-filled (no server required).
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-indigo-600/40 transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Send via email
        </button>
      </div>
    </form>
  )
}
