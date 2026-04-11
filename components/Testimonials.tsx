
export default function Testimonials({ data }) {
 if(!data?.items) return null;
 return <section className='section'><div className='container'><h2>Results From Members</h2><div className='grid grid-3'>{data.items.map((item,i)=><div key={i} className='card'><strong>{item.name}</strong><p className='muted'>{item.text}</p></div>)}</div></div></section>
}