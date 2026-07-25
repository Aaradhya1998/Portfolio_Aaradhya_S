'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const fullName = 'Aaradhya Shekdar';
const resumeUrl = 'https://drive.google.com/drive/folders/1JHN6ZvkKbv-jxXlQpmHAe3MW5KUIOPnq?usp=drive_link';

export function Hero() {
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 700], [0, 95]);
  const contentY = useTransform(scrollY, [0, 700], [0, 48]);
  const fade = useTransform(scrollY, [0, 520], [1, 0.46]);

  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12">
      <motion.div
        aria-hidden
        style={{ y: skyY, opacity: fade }}
        className="absolute inset-0 -z-10 bg-[url('/images/sunset-portfolio-hero.png')] bg-cover bg-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,185,93,0.08)_0%,rgba(115,55,120,0.18)_55%,rgba(4,7,22,0.94)_100%)]" />
      <div aria-hidden className="absolute left-[8%] top-[20%] -z-10 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl sm:h-96 sm:w-96" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-[#060817]" />

      <motion.div style={{ y: contentY }} className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          
          <div className="mt-8 max-w-3xl text-white drop-shadow-[0_10px_35px_rgba(61,28,14,0.35)]">
            <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m {fullName}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              B.Tech Computer Science &amp; Engineering student focused on ML and full-stack development, building practical products with data, APIs, and intelligent workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/85">
              <span className="rounded-full border border-white/20 bg-slate-950/20 px-4 py-2 backdrop-blur-md">JSPM, Pune • CGPA 9.01</span>
              <span className="rounded-full border border-white/20 bg-slate-950/20 px-4 py-2 backdrop-blur-md">2nd Year • 3rd Semester</span>
              <span className="rounded-full border border-white/20 bg-slate-950/20 px-4 py-2 backdrop-blur-md">Pune, India</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-white/70">
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Link>
            <Link href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="grid max-w-3xl gap-3 sm:grid-cols-3"
        >
          {['Machine Learning', 'Full-Stack Development', 'Quality Assurance'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/20 bg-slate-950/20 px-4 py-3 text-sm font-medium text-white shadow-soft backdrop-blur-md">
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
