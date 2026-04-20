import { getBlogPost, getBlogPosts } from '@lib/blog';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return (await getBlogPosts()).map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-slate-300 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-soft">
          <h1 className="text-3xl font-semibold text-white">Post not found</h1>
          <p className="mt-4">Sorry, I couldn&apos;t locate the article you requested.</p>
          <Link href="/blog" className="mt-6 inline-flex rounded-full bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-200 hover:bg-sky-400/20">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-soft">
        <div className="mb-8 text-slate-400">
          <Link href="/blog" className="text-sm font-semibold text-sky-300 hover:text-white">
            &larr; Back to blog
          </Link>
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.26em] text-sky-300">Article</p>
          <h1 className="text-5xl font-semibold text-white">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <div className="mt-10 max-w-none text-slate-200">
          <div className="space-y-6 text-base leading-8" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </main>
  );
}
