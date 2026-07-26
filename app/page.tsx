'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, BriefcaseBusiness, Code2, Globe2, MessageSquareQuote, Rocket, Trophy, Wrench } from 'lucide-react';

import { Hero } from '@components/Hero';
import { Navbar } from '@components/Navbar';
import { ProjectCard } from '@components/ProjectCard';
import { ReviewCard } from '@components/ReviewCard';
import { ContactForm } from '@components/ContactForm';
import { certifications, experiences, hackathons } from '@data/portfolio';
import { projects } from '@lib/projects';
import { initialReviews, type ReviewItem } from '@lib/reviews';

const aboutHighlights = [
  {
    title: 'ML & full-stack focus',
    body: 'I enjoy building practical systems that combine data, APIs, machine learning, and usable interfaces.'
  },
  {
    title: 'Strong academic base',
    body: 'I am currently in B.Tech Computer Science & Engineering, 2nd Year (3rd Semester) at JSPM, Pune with a CGPA of 9.01.'
  },
  {
    title: 'Builder with momentum',
    body: 'From hackathons to internships, I like taking ideas beyond prototypes and turning them into reliable working products.'
  }
];

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Data Science & ML',
    icon: Brain,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'EDA', 'Predictive Modeling', 'Feature Engineering']
  },
  {
    title: 'Web Development',
    icon: Globe2,
    skills: ['Flask', 'REST APIs', 'SQLite', 'PostgreSQL', 'Full-Stack Development']
  },
  {
    title: 'AI & LLM Tools',
    icon: Rocket,
    skills: ['Google Gemini API', 'RAG', 'Prompt Engineering', 'LLM Integration']
  },
  {
    title: 'Other',
    icon: Wrench,
    skills: ['Git/GitHub', 'Figma (basic)', 'API Integration', 'Debugging & Optimization']
  }
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function hasCertificateLink(link?: string | null) {
  return Boolean(link && link.trim().length > 0 && !link.includes('[PASTE DRIVE LINK]'));
}

function CertificateButton({ href, accentClassName }: { href?: string | null; accentClassName: string }) {
  if (!hasCertificateLink(href)) {
    return null;
  }

  return (
    <Link
      href={href!}
      target="_blank"
      rel="noreferrer"
      className={`mt-4 inline-flex rounded-full border border-white/12 bg-transparent px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 transition hover:text-white ${accentClassName}`}
    >
      View Certificate
    </Link>
  );
}

function CurrentStatusBadge() {
  return (
    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-rose-200">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_14px_rgba(251,113,133,0.95)]" />
      Currently working
    </div>
  );
}

export default function Home() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [reviewStatus, setReviewStatus] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadReviews = async () => {
      try {
        const response = await fetch('/api/reviews', { cache: 'no-store' });

        if (!response.ok) {
          return;
        }

        const nextReviews = (await response.json()) as ReviewItem[];

        if (active) {
          setReviews(nextReviews);
        }
      } catch {
        // Keep static fallback reviews if the API request fails.
      }
    };

    void loadReviews();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReviewStatus(params.get('review'));
  }, []);

  return (
    <main className="story-shell relative min-h-screen overflow-hidden pb-24">
      <Navbar />
      <Hero />

      <section id="about" className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 max-w-4xl"
        >
          <span className="text-sm uppercase tracking-[0.26em] text-amber-200">About me</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Aaradhya Shekdar - ML and full-stack focused, with a practical builder mindset.</h2>
          <p className="mt-5 leading-8 text-slate-300">
            I&apos;m Aaradhya Shekdar, a B.Tech Computer Science &amp; Engineering student at JSPM, Pune. I&apos;m currently in my 2nd Year (3rd Semester) with a CGPA of 9.01, focused on ML and full-stack development. I enjoy building useful systems that combine machine learning, APIs, clean interfaces, and real-world problem solving.
          </p>
          <div className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="font-semibold text-white">Location:</span> Pune, India</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="font-semibold text-white">Email:</span> aaradhya.shek@gmail.com</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:col-span-2"><span className="font-semibold text-white">GitHub:</span> github.com/Aaradhya1998</p>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {aboutHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="reveal-card rounded-3xl p-7"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200 ring-1 ring-amber-200/20">
                {index === 0 ? <Brain className="h-5 w-5" /> : index === 1 ? <Rocket className="h-5 w-5" /> : <Globe2 className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 flex flex-col gap-3"
        >
          <span className="text-sm uppercase tracking-[0.26em] text-fuchsia-200">Skills</span>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Core skills across software, machine learning, and AI-assisted systems.</h2>
          <p className="max-w-3xl leading-7 text-slate-400">
            Structured to match the exact stack areas I&apos;m actively using across internships, hackathons, and portfolio projects.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: groupIndex * 0.08, ease: 'easeOut' }}
                className="reveal-card rounded-3xl p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-200/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: skillIndex * 0.035 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-amber-200/35 hover:bg-amber-200/10 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.26em] text-cyan-200">Experience</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Recent internships across QA, Python, data analysis, and web development.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            Ordered with the most recent role first. The current internship is the QA Engineering Intern role running from July 2026 to October 2026.
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="reveal-card rounded-3xl p-6 sm:p-8"
        >
          <div className="relative mx-auto max-w-4xl py-4">
            <div className="timeline-line absolute bottom-10 left-6 top-10 w-px md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={`${item.label}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
                  className="relative grid gap-5 pl-16 md:grid-cols-[1fr_4rem_1fr] md:gap-0 md:pl-0"
                >
                  <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-cyan-100 ring-1 ring-cyan-200/45 shadow-[0_0_28px_rgba(34,211,238,0.22)] md:left-1/2 md:-translate-x-1/2">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div className={index % 2 === 0 ? 'md:col-start-1 md:mr-8' : 'md:col-start-3 md:ml-8'}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.08]">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">{item.label}</p>
                          <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                          <p className="text-slate-300">{item.company}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-sm font-medium text-white">{item.period}</p>
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.type}</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                        {item.detail.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 text-cyan-200">&bull;</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {item.currentlyWorking ? (
                        <CurrentStatusBadge />
                      ) : (
                        <CertificateButton href={item.certificateLink} accentClassName="hover:border-cyan-200/35" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="hackathons" className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.26em] text-violet-200">Hackathons</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Hackathon work that shaped my strongest project ideas.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            These competitions helped drive practical builds in civic tech, generative AI, government data, and financial inclusion.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {hackathons.map((item, index) => (
            <motion.article
              key={item.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="reveal-card rounded-3xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-violet-200">{item.subtitle}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-200 ring-1 ring-violet-200/20">
                  <Trophy className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-400">{item.detail}</p>
              <CertificateButton href={item.certificateLink} accentClassName="hover:border-violet-200/35" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Certifications</span>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Standalone workshops, courses, and credentialed learning.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            This section is driven by a simple array so you can add more certificate entries without touching the UI.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {certifications.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.issuer}`}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="reveal-card rounded-3xl p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-2 text-slate-300">Issued by {item.issuer}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-sky-300">{item.date}</p>
              </div>
              <CertificateButton href={item.certificateLink} accentClassName="hover:border-sky-300/35" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Selected work</span>
          <h2 className="text-4xl font-semibold text-white">Real projects in civic tech, AI automation, machine learning, and student platforms.</h2>
          <p className="max-w-3xl leading-7 text-slate-400">
            These are the portfolio projects I&apos;ve actually built and shipped as part of hackathons, internships, and independent exploration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Feedback &amp; Recommendations</span>
          <h2 className="text-4xl font-semibold text-white">Feedback from peers, mentors, and collaborators.</h2>
        </div>

        {reviews.length === 0 && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-slate-300">
            <MessageSquareQuote className="h-5 w-5 text-sky-300" />
            <p>Be the first to share your experience working with me.</p>
          </div>
        )}

        {reviews.length > 0 && (
          <div className="no-scrollbar flex gap-5 overflow-x-auto pb-4">
            {reviews.map((review, index) => (
              <ReviewCard key={`${review.name}-${review.role}-${index}`} {...review} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft"
        >
          <h3 className="text-2xl font-semibold text-white">Share your feedback</h3>
          <p className="mt-2 text-slate-400">If we&apos;ve worked together on a project, hackathon, or academic work, I&apos;d really appreciate your feedback.</p>
          {reviewStatus === 'thanks' && (
            <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Thanks. Your review was submitted and now appears in the testimonial list.
            </p>
          )}
          {reviewStatus === 'invalid' && (
            <p className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
              Please complete name, role, and message before submitting.
            </p>
          )}
          <form action="/api/reviews" method="post" className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Name" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none" />
            <input required name="role" placeholder="Role (e.g., teammate, mentor)" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none" />
            <input name="organization" placeholder="Organization / College (optional)" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none sm:col-span-2" />
            <input type="url" name="profileUrl" placeholder="LinkedIn URL (optional)" className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none sm:col-span-2" />
            <textarea required name="message" rows={4} placeholder="Message" className="sm:col-span-2 rounded-[1.5rem] border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none" />
            <button type="submit" className="sm:col-span-2 inline-flex justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
              Submit Review
            </button>
          </form>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-soft">
            <span className="text-sm uppercase tracking-[0.28em] text-sky-300">Connect</span>
            <h2 className="mt-4 text-4xl font-semibold text-white">Let&apos;s build something meaningful.</h2>
            <p className="mt-4 leading-7 text-slate-400">
              I&apos;m open to internships, collaborations, hackathons, and opportunities where machine learning, full-stack development, and practical product thinking can create real impact.
            </p>
            <div className="mt-8 space-y-4 text-slate-300">
              <p className="flex items-center gap-3">&bull; ML, data analysis, and predictive modeling work.</p>
              <p className="flex items-center gap-3">&bull; Full-stack development with APIs and databases.</p>
              <p className="flex items-center gap-3">&bull; AI-assisted applications and workflow automation.</p>
            </div>
            <Link href="#projects" className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View My Projects
            </Link>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>&copy; 2026 Aaradhya Shekdar - ML, full-stack development, and practical AI builds.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Aaradhya1998" target="_blank">GitHub</Link>
            <Link href="https://www.linkedin.com/in/aaradhya-shekdar-724844383/" target="_blank">LinkedIn</Link>
            <Link href="https://www.instagram.com/aaradhyashekdar/" target="_blank">Instagram</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
