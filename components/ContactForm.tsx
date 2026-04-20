'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft"
    >
      <h2 className="text-3xl font-semibold text-white">Let&apos;s build something together</h2>
      <p className="mt-3 text-slate-400">Send a quick message and I&apos;ll follow up within one business day.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none transition focus:border-sky-400/50"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none transition focus:border-sky-400/50"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm text-slate-300">
        Message
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="min-h-[160px] rounded-[1.5rem] border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none transition focus:border-sky-400/50"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="mt-4 text-sm text-emerald-300">Message sent successfully. I&apos;ll be in touch soon.</p>}
      {status === 'error' && <p className="mt-4 text-sm text-rose-300">Something went wrong. Try again later.</p>}
    </motion.form>
  );
}
