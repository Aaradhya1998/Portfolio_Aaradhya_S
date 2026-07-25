'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4"
    >
      <div className="backdrop-blur-2xl border border-white/15 bg-slate-950/35 shadow-soft rounded-full px-5 py-3 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-[0.18em] text-slate-100">
          AS
        </Link>

        <nav className="hidden gap-5 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200 transition hover:text-white">
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
