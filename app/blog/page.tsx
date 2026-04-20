import Link from 'next/link';
import { getBlogPosts } from '@lib/blog';

export default async function BlogPage() {
  const posts = (await getBlogPosts()).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-soft">
          <span className="text-sm uppercase tracking-[0.26em] text-sky-300">Thoughts</span>
          <h1 className="mt-4 text-5xl font-semibold text-white">Writing about product design, launch strategy, and modern web craft.</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Fresh, actionable essays and case-study notes from a product-first engineering perspective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8 transition hover:-translate-y-2 hover:border-sky-400/20 hover:bg-slate-900/90">
              <div className="flex items-center justify-between gap-4 text-slate-400">
                <span>{post.date}</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-300">{post.readingTime}</span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{post.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-sky-300 transition group-hover:text-white">Read article -&gt;</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
