import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import products from '../../data/products.json'
export default function Shop(){ return (<div><Header /><main className='container'><h1 className='text-3xl neon mb-4'>Shop</h1><div className='grid md:grid-cols-3 gap-6'>{products.map(p=> <Card key={p.id} title={p.name} subtitle={`$${p.price.toFixed(2)}`} image={p.image}><p>{p.description||''}</p><div className='mt-3'><a href={p.amazon} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-neon text-black rounded'>Buy on Amazon</a></div></Card>)}</div></main><Footer /></div>) }
