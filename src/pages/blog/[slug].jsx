import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function Post({ html, meta }) {
  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <h1 className='text-3xl mb-4 neon-subtle'>{meta.title}</h1>
      <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(postsDir);
  const paths = files.map(f => ({ params: { slug: f.replace('.md','') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }){
  const p = path.join(process.cwd(), 'src', 'content', 'blog', params.slug + '.md');
  const raw = fs.readFileSync(p, 'utf-8');
  const parsed = matter(raw);
  const html = marked(parsed.content);
  return { props: { html, meta: parsed.data } };
}
