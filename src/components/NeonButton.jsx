export default function NeonButton({ children, href }) { if(href) return <a href={href} className='neon-button'>{children}</a>; return <button className='neon-button'>{children}</button>; }
