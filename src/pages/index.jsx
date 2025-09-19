import Header from '../components/Header';
import SceneCard from '../components/SceneCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import scenes from '../data/scenes.json';
import Link from 'next/link';

export default function Home(){
  return (
    <>
    <Header />
    <main className='max-w-6xl mx-auto px-6 py-12'>
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold neon-subtle mb-6'>Featured Scenes</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {scenes.map(s => <SceneCard key={s.id} scene={s} />)}
        </div>
      </section>
      <Newsletter />
      <section className='mt-12'>
        <h2 className='text-2xl font-semibold neon-subtle mb-6'>From the Blog</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <article className='p-6 rounded-xl bg-gradient-to-br from-[#0b0c10] to-[#0b0b0d]'><h3 className='text-xl font-semibold'>10 Halloween Movie Looks You Can Copy</h3><p className='text-gray-400 mt-2'>Sample article to show layout and styling.</p><Link href='/blog/2025-09-19-10-halloween-movie-looks' className='mt-4 inline-block neon-subtle'>Read →</Link></article>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
