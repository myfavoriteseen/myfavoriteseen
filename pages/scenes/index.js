import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import scenes from '../../data/scenes.json'
export default function Scenes(){ return (
  <div><Header /><main className='container'><h1 className='text-3xl neon mb-4'>Scenes</h1><div className='grid md:grid-cols-3 gap-6'>{scenes.map(s=> <a key={s.id} href={'/scenes/'+s.id}><Card title={s.title} subtitle={s.category} image={s.poster}>{s.blurb}</Card></a>)}</div></main><Footer /></div>
) }