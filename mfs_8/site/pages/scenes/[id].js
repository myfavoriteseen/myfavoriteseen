import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
export default function ScenePage({scene}){
  if(!scene) return <div>Not found</div>
  return (<div><Header /><main className='container'><Card title={scene.title} subtitle={scene.category} image={scene.poster}><video controls className='w-full rounded-md mb-4'><source src={scene.video} type='video/mp4' /></video><p>{scene.blurb}</p><div className='mt-4'><a href={scene.product.amazon} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-neon text-black rounded'>Shop the Look (Amazon)</a></div></Card></main><Footer /></div>)
}
export async function getServerSideProps({params}){
  const s = require('../../data/scenes.json').find(x=>x.id===params.id) || null
  return { props: { scene: s } }
}
