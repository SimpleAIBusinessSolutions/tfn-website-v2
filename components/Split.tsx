
export default function Split({ data }) {
 if(!data) return null;
 return <section className='section'><div className='container split'>{data.image&&<img src={data.image} alt='' style={{borderRadius:24,width:'100%',objectFit:'cover'}}/>}<div><h2 style={{fontSize:42,marginTop:0}}>{data.headline}</h2><p className='muted' style={{whiteSpace:'pre-line'}}>{data.text}</p></div></div></section>
}
