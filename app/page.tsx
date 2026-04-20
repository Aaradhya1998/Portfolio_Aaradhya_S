'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
import { ProjectCard } from '@components/ProjectCard';
import { ReviewCard } from '@components/ReviewCard';
import { ContactForm } from '@components/ContactForm';
import { projects } from '@lib/projects';
import { initialReviews, type ReviewItem } from '@lib/reviews';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [reviewStatus, setReviewStatus] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadReviews = async () => {
      try {
        const response = await fetch('/api/reviews', { cache: 'no-store' });

        if (!response.ok) {
          return;
        }

        const nextReviews = (await response.json()) as ReviewItem[];

        if (active) {
          setReviews(nextReviews);
        }
      } catch {
        // Keep the static fallback reviews if the API request fails.
      }
    };

    void loadReviews();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReviewStatus(params.get('review'));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Navbar />
      <Hero />

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Selected work</span>
          <h2 className="text-4xl font-semibold text-white">Projects that blend polish with performance.</h2>
          <p className="max-w-2xl leading-7 text-slate-400">
            Recent engagements where design systems, motion, and product clarity helped teams ship confidently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Testimonials</span>
          <h2 className="text-4xl font-semibold text-white">Trusted by product leaders and founders.</h2>
        </div>

        <div className="no-scrollbar flex gap-5 overflow-x-auto pb-4">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${review.role}-${index}`} {...review} />
          ))}
        </div>
        {reviews.length === 0 && (
          <p className="rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-slate-300">
            No reviews added yet.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft"
        >
          <h3 className="text-2xl font-semibold text-white">Share a review</h3>
          <p className="mt-2 text-slate-400">Submit your experience and I&apos;ll add it to the portfolio review wall.</p>
          {reviewStatus === 'thanks' && (
            <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Thanks. Your review was submitted and now appears in the testimonial list.
            </p>
          )}
          {reviewStatus === 'invalid' && (
            <p className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
              Please complete every review field before submitting.
            </p>
          )}
          <form action="/api/reviews" method="post" className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Name" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none" />
            <input required name="role" placeholder="Role" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none" />
            <input required name="profileUrl" placeholder="LinkedIn URL" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none sm:col-span-2" />
            <textarea required name="message" rows={4} placeholder="Message" className="sm:col-span-2 rounded-[1.5rem] border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none" />
            <button type="submit" className="sm:col-span-2 inline-flex justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
              Submit Review
            </button>
          </form>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-soft">
            <span className="text-sm uppercase tracking-[0.28em] text-sky-300">Connect</span>
            <h2 className="mt-4 text-4xl font-semibold text-white">Ready to ship your next digital product?</h2>
            <p className="mt-4 leading-7 text-slate-400">
              I help startups and established teams craft refined web experiences with fast delivery and polished interaction design.
            </p>
            <div className="mt-8 space-y-4 text-slate-300">
              <p className="flex items-center gap-3">&bull; Frontend architecture, component systems, and motion.</p>
              <p className="flex items-center gap-3">&bull; Launch-ready websites, apps, and marketing experiences.</p>
              <p className="flex items-center gap-3">&bull; Accessible, maintainable, and high-performance code.</p>
            </div>
            <Link href="/blog" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore my writing
            </Link>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>&copy; 2026 Aaradhya Shekdar - AI and ML projects, built with intention.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/marcusbriggs" target="_blank">GitHub</Link>
            <Link href="https://linkedin.com/in/marcusbriggs" target="_blank">LinkedIn</Link>
            <Link href="https://twitter.com/marcusbriggs" target="_blank">Twitter</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
