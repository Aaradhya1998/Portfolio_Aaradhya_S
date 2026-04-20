'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4"
    >
      <div className="backdrop-blur-2xl border border-white/10 bg-white/5 shadow-soft rounded-full px-5 py-3 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-[0.18em] text-slate-100">
          AS
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-slate-400">
          <Link href="https://github.com/Aaradhya1998" target="_blank" aria-label="GitHub" className="hover:text-white transition">
            <Github size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/aaradhya-shekdar-724844383/" target="_blank" aria-label="LinkedIn" className="hover:text-white transition">
            <Linkedin size={18} />
          </Link>
          <Link href="https://www.instagram.com/aaradhyashekdar/" target="_blank" aria-label="Instagram" className="hover:text-white transition">
            <Instagram size={18} />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
