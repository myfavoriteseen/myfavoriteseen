import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import posts from '../../data/posts.json'
export default function Blog(){ return (<div><Header /><main className='container'><h1 className='text-3xl neon mb-4'>Blog</h1><div className='grid md:grid-cols-3 gap-6'>{posts.map(p=> <a key={p.id} href={'/blog/'+p.id}><Card title={p.title} subtitle={p.date} image={p.image}><div dangerouslySetInnerHTML={{__html:p.excerpt}} /></Card></a>)}</div></main><Footer /></div>) }
