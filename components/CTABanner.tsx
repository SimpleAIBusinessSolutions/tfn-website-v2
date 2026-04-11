export default function CTABanner({ data }) {
 if(!data) return null;
 return (
  <section className='section'>
    <div className='container'>
      <div style={{background:'linear-gradient(135deg,#22c55e,#16a34a)',padding:40,borderRadius:28,color:'#000',textAlign:'center'}}>
        <h2 style={{fontSize:42,marginTop:0}}>{data.headline}</h2>
        <p style={{maxWidth:800,margin:'0 auto'}}>{data.text}</p>
      </div>
    </div>
  </section>
 );
}

