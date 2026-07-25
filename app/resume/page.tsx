import Link from 'next/link';

const resumeHighlights = [
  {
    label: 'Degree',
    value: 'B.Tech Computer Science & Engineering — 2nd Year (3rd Semester)'
  },
  {
    label: 'College',
    value: 'JSPM, Pune | CGPA: 9.01'
  },
  {
    label: 'Focus',
    value: 'ML & Full-Stack Development'
  },
  {
    label: 'Email',
    value: 'aaradhya.shek@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'github.com/Aaradhya1998'
  }
];

const resumePath = '/resume/Aaradhya_Shekdar_Resume.pdf';

export default function ResumePage() {
  return (
    <main className='min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12'>
      <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
        <section className='rounded-[2rem] border border-white/10 bg-slate-900/75 p-10 shadow-soft'>
          <span className='text-sm uppercase tracking-[0.26em] text-sky-300'>Resume</span>
          <h1 className='mt-4 text-5xl font-semibold text-white'>Resume and profile snapshot for recruiters, mentors, and collaborators.</h1>
          <p className='mt-6 leading-7 text-slate-300'>
            This page now points to the updated resume file path. Once the PDF is uploaded to the repository, both the embedded preview and direct download link will use it automatically.
          </p>

          <div className='mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70'>
            <iframe
              title='Aaradhya Shekdar Resume'
              src={resumePath}
              className='h-[70vh] w-full'
            />
          </div>
        </section>

        <aside className='rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft'>
          <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-glow'>
            <p className='text-sm uppercase tracking-[0.28em] text-sky-300'>Summary</p>
            <h2 className='mt-4 text-3xl font-semibold text-white'>Aaradhya Shekdar</h2>
            <p className='mt-4 leading-7 text-slate-300'>
              ML and full-stack focused computer science student building practical software, data workflows, and AI-powered experiences.
            </p>
            <div className='mt-8 space-y-4 text-slate-300'>
              {resumeHighlights.map((item) => (
                <p key={item.label}>
                  <span className='font-semibold text-white'>{item.label}:</span> {item.value}
                </p>
              ))}
            </div>
            <div className='mt-8 flex flex-col gap-3'>
              <Link
                href={resumePath}
                target='_blank'
                className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]'
              >
                Open Resume PDF
              </Link>
              <Link
                href={resumePath}
                download
                className='inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
              >
                Download Resume
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
