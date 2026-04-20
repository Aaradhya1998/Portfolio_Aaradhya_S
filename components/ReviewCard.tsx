import { Linkedin } from 'lucide-react';

export interface ReviewCardProps {
  name: string;
  role: string;
  message: string;
  profileUrl?: string;
  organization?: string;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function ReviewCard({ name, role, message, profileUrl, organization }: ReviewCardProps) {
  return (
    <div className="group min-w-[320px] rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-slate-900/80 hover:shadow-[0_16px_36px_rgba(56,189,248,0.14)]">
      <p className="text-slate-300 leading-7">&ldquo;{message}&rdquo;</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-sm font-semibold text-sky-200">
            {getInitials(name)}
          </span>
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sm text-slate-400">{role}</p>
            {organization && <p className="text-xs text-slate-500">{organization}</p>}
          </div>
        </div>
        {profileUrl && (
          <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-sky-300 transition hover:bg-sky-500/15">
            <Linkedin size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
