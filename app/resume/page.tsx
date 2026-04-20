import Link from 'next/link';

const skills = ['Python', 'MySQL', 'Python Libraries', 'Machine Learning Projects', 'AI Architecture'];
const experiences = [
  {
    role: 'B.Tech CSE Student',
    company: 'JSPM University',
    period: 'Current',
    detail: 'Learning computer science fundamentals while building practical AI and ML projects focused on real-world problem solving.'
  }
];

export default function ResumePage() {
  return (
    <main className='min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12'>
      <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
        <section className='rounded-[2rem] border border-white/10 bg-slate-900/75 p-10 shadow-soft'>
          <span className='text-sm uppercase tracking-[0.26em] text-sky-300'>Resume</span>
          <h1 className='mt-4 text-5xl font-semibold text-white'>Building practical AI and ML solutions with code and data.</h1>
          <p className='mt-6 leading-7 text-slate-300'>
            I am doing B.Tech CSE from JSPM University and focusing on AI architecture while learning through hands-on machine learning projects.
          </p>

          <div className='mt-10 space-y-8'>
            <div>
              <h2 className='text-2xl font-semibold text-white'>Education</h2>
              <div className='mt-6 space-y-6'>
                {experiences.map((item) => (
                  <div key={item.role} className='rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6'>
                    <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                      <div>
                        <p className='text-xl font-semibold text-white'>{item.role}</p>
                        <p className='text-slate-400'>{item.company}</p>
                      </div>
                      <span className='text-sm uppercase tracking-[0.24em] text-slate-500'>{item.period}</span>
                    </div>
                    <p className='mt-4 leading-7 text-slate-300'>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-white'>Skills</h2>
              <div className='mt-5 flex flex-wrap gap-3'>
                {skills.map((skill) => (
                  <span key={skill} className='rounded-full bg-slate-950/70 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className='rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft'>
          <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-glow'>
            <p className='text-sm uppercase tracking-[0.28em] text-sky-300'>Summary</p>
            <h2 className='mt-4 text-3xl font-semibold text-white'>Aaradhya Shekdar</h2>
            <p className='mt-4 leading-7 text-slate-300'>
              AI and ML student focused on building real-world intelligent systems. I turn ideas into working solutions using data, code, and problem-solving.
            </p>
            <div className='mt-8 space-y-3 text-slate-300'>
              <p><span className='font-semibold text-white'>Program:</span> B.Tech CSE</p>
              <p><span className='font-semibold text-white'>University:</span> JSPM University</p>
              <p><span className='font-semibold text-white'>Focus:</span> AI architecture and machine learning projects</p>
            </div>
            <Link
              href='/api/resume'
              className='mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]'
            >
              Download Resume
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
