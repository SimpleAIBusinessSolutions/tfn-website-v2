import Link from 'next/link';

export default function Page() {
  const plans = [
    { title:'Bronze', price:'€70', sub:'8 sessions • ~2/week', accent:'#cd7f32', points:['Great starter option','Build consistency','Structured weekly routine'] },
    { title:'Silver', price:'€90', sub:'12 sessions • ~3/week', accent:'#c0c0c0', points:['Most popular','Strong weekly progress','Great balance of value'] },
    { title:'Gold', price:'€105', sub:'16 sessions • ~4/week', accent:'#d4af37', points:['Serious momentum','Faster results','Higher training frequency'] },
    { title:'Platinum', price:'€115', sub:'20 sessions • ~5/week', accent:'#F97316', points:['Best value per session','Maximum consistency','For committed members'] },
  ];

  const extras = [
    { title:'Try Before You Buy', price:'€15', accent:'#6294AE', points:['1 trial session','No commitment','Not available for Strength'] },
    { title:'Personal Training', price:'From €50', accent:'#22c55e', points:['Tailored training plan','Nutrition support','Minimum 12 sessions'] },
    { title:'InBody Scan', price:'€20 / €25', accent:'#eab308', points:['Members €20','Non-members €25','Track progress accurately'] },
    { title:'Nutrition 1-1 Coaching', price:'Price on Application', accent:'#F97316', points:['Custom strategy','Weekly check-ins','Ongoing accountability'] },
    { title:'6 Week Nutrition Kickstart', price:'Price on Application', accent:'#8b5cf6', points:['Structured 6-week plan','Education tools','Great starting point'] },
  ];

  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:920}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Membership</h1>
          <p className='muted' style={{maxWidth:760,margin:'0 auto'}}>Fees are charged every 4 weeks from your signup date. Booking access begins once payment is received. 7 days notice required to cancel direct debit.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <Link href='/contact' className='btn'>Join Today</Link>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <div className='grid' style={{gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))'}}>
            {plans.map((plan) => (
              <Link key={plan.title} href='/contact' style={{display:'block'}}>
                <div className='card' style={{height:'100%',cursor:'pointer',textAlign:'center',padding:28}}>
                  <p style={{color:plan.accent,fontWeight:800,letterSpacing:1,textTransform:'uppercase',marginBottom:8}}>{plan.sub}</p>
                  <h2 style={{fontSize:30,margin:'0 0 8px'}}>{plan.title}</h2>
                  <p style={{fontSize:38,fontWeight:800,color:plan.accent,margin:'0 0 16px'}}>{plan.price}</p>
                  <ul style={{listStyle:'none',padding:0,margin:'0 0 22px'}}>
                    {plan.points.map((point) => <li key={point} style={{padding:'7px 0',color:'#bbb'}}>✓ {point}</li>)}
                  </ul>
                  <span className='btn' style={{background:plan.accent}}>Get Started</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <h2 style={{fontSize:42,textAlign:'center',marginTop:0}}>Other Services</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
            {extras.slice(0,3).map((item) => (
              <Link key={item.title} href='/contact' style={{display:'block'}}>
                <div className='card' style={{height:'100%',minHeight:360,cursor:'pointer',textAlign:'center',padding:28,display:'flex',flexDirection:'column'}}>
                  <h3 style={{fontSize:28,margin:'0 0 auto'}}>{item.title}</h3>
                  <p style={{color:item.accent,fontSize:28,fontWeight:800,margin:'20px 0'}}>{item.price}</p>
                  <ul style={{listStyle:'none',padding:0,margin:'0 0 20px'}}>
                    {item.points.map((point) => <li key={point} style={{padding:'7px 0',color:'#bbb'}}>✓ {point}</li>)}
                  </ul>
                  <div style={{marginTop:'auto'}}><span className='btn' style={{background:item.accent}}>Enquire Now</span></div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(280px,380px))',justifyContent:'center',gap:24,marginTop:24}}>
            {extras.slice(3).map((item) => (
              <Link key={item.title} href='/contact' style={{display:'block'}}>
                <div className='card' style={{height:'100%',minHeight:360,cursor:'pointer',textAlign:'center',padding:28,display:'flex',flexDirection:'column'}}>
                  <h3 style={{fontSize:28,margin:'0 0 auto'}}>{item.title}</h3>
                  <p style={{color:item.accent,fontSize:28,fontWeight:800,margin:'20px 0'}}>{item.price}</p>
                  <ul style={{listStyle:'none',padding:0,margin:'0 0 20px'}}>
                    {item.points.map((point) => <li key={point} style={{padding:'7px 0',color:'#bbb'}}>✓ {point}</li>)}
                  </ul>
                  <div style={{marginTop:'auto'}}><span className='btn' style={{background:item.accent}}>Enquire Now</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}