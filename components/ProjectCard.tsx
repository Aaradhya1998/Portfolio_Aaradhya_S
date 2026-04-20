'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  typeLabel: string;
  featured?: boolean;
  projectUrl: string;
  demoUrl: string;
}

export function ProjectCard({ title, description, tech, typeLabel, featured, projectUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-soft transition duration-300 hover:border-sky-400/20 hover:bg-slate-900/80"
    >
      <div className="flex items-center justify-between gap-4">
        {featured ? (
          <span className="rounded-full bg-slate-800/90 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-sky-300">
            Featured
          </span>
        ) : (
          <span className="h-[30px]" />
        )}
        <div className="text-right text-xs uppercase tracking-[0.26em] text-slate-500">{typeLabel}</div>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((label) => (
          <span key={label} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
            {label}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={projectUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
          View Project
        </Link>
        <Link href={demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10">
          Live Demo
        </Link>
      </div>
    </motion.article>
  );
}
