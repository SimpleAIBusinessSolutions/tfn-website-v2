export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'60vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Privacy Policy</h1>
          <p className='muted' style={{maxWidth:720,margin:'0 auto'}}>Your privacy matters to us. We are committed to protecting your information and being clear about how it is used.</p>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container' style={{maxWidth:900,textAlign:'center'}}>
          <div className='card'>
            <h2 style={{fontSize:38,marginTop:0}}>How We Handle Data</h2>
            <p className='muted'>We only collect information needed for enquiries, memberships, bookings and service delivery.</p>
            <p className='muted'>Your personal data is never sold to third parties.</p>
            <p className='muted'>Information may be used to contact you, manage your membership, improve services and respond to requests.</p>
            <p className='muted'>You can request access, correction or deletion of your data at any time by contacting us directly.</p>
            <p className='muted'>We take reasonable steps to keep your information secure and handled responsibly.</p>
          </div>
        </div>
      </section>
    </>
  );
}