'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const fullName = 'Aaradhya Shekdar';

export function Hero() {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));
      if (index >= fullName.length) {
        window.clearInterval(intervalId);
      }
    }, 85);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_35%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-glow backdrop-blur-xl"
        >
          <p className="inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            AI and ML student portfolio
          </p>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Hi, I&apos;m {typedName}
              <span aria-hidden className="type-caret">|</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              AI and ML student focused on building real-world intelligent systems. I turn ideas into working solutions using data, code, and problem-solving.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/resume" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]">
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:bg-white/10">
              Read My Thoughts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
