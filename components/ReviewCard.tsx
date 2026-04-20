import { Linkedin } from 'lucide-react';

export interface ReviewCardProps {
  name: string;
  role: string;
  message: string;
  profileUrl: string;
}

export function ReviewCard({ name, role, message, profileUrl }: ReviewCardProps) {
  return (
    <div className="group min-w-[320px] rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-sky-400/25 hover:bg-slate-900/80">
      <p className="text-slate-300 leading-7">&ldquo;{message}&rdquo;</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
        <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-sky-300 transition hover:bg-sky-500/15">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
}
