import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  content: string;
}

const readingTime = (text: string) => {
  const wordsPerMinute = 220;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        readingTime: readingTime(content),
        content: await marked.parse(content)
      };
    })
  );

  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    readingTime: readingTime(content),
    content: await marked.parse(content)
  };
}
