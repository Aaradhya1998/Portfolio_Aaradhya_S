import Link from 'next/link';
import { projects } from '@lib/projects';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-3xl font-semibold text-white">Project not found</h1>
          <p className="mt-4 text-slate-400">The requested project does not exist.</p>
          <Link href="/" className="mt-6 inline-flex rounded-full bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-200 hover:bg-sky-400/20">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Project detail</span>
            <h1 className="mt-4 text-5xl font-semibold text-white">{project.title}</h1>
          </div>
          <Link href="/" className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Back to home
          </Link>
        </div>

        <p className="mt-6 text-slate-300 leading-8">{project.description}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.details.map((point) => (
            <div key={point} className="rounded-[1.5rem] bg-slate-950/70 p-6 text-slate-200 ring-1 ring-white/10">
              {point}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href={project.demoUrl} target="_blank" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
            View Live Demo
          </Link>
          <Link href={project.projectUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/10">
            View Project Repo
          </Link>
        </div>
      </div>
    </main>
  );
}
