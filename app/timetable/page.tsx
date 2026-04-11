import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Timetable</h1>
          <p className='muted' style={{maxWidth:720,margin:'0 auto'}}>Plan your week, stay consistent and book the classes that move you closer to your goals.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <Link href='/contact' className='btn'>Book on LegitFit</Link>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <img src='/timetable02.png' alt='TFN Timetable' style={{borderRadius:24,width:'100%'}} />
        </div>
      </section>
    </>
  );
}