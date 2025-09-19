import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl mb-6 neon-subtle">Blog</h1>
      {posts.map((p) => (
        <article key={p.slug} className="p-6 rounded-xl bg-gradient-to-br from-[#0b0c10] to-[#0b0b0d] mb-6">
          <h2 className="text-xl font-bold">{p.meta.title}</h2>
          <p className="text-gray-400 mt-2">{p.excerpt}</p>
          <Link href={'/blog/' + p.slug} className="neon-subtle mt-4 inline-block">Read →</Link>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(postsDir);
  const posts = files.map((fn) => {
    const raw = fs.readFileSync(path.join(postsDir, fn), 'utf-8');
    const parsed = matter(raw);
    const slug = fn.replace('.md', '');
    const excerpt = parsed.content.split('\n').slice(0,4).join(' ');
    return { slug, meta: parsed.data, excerpt };
  }).sort((a,b)=> (new Date(b.meta.date) - new Date(a.meta.date)));
  return { props: { posts } };
}
