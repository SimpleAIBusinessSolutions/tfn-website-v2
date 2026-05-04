import Link from 'next/link';

export default function Page() {
  const classes = [
    {
      title: 'Strength',
      image: '/gymlayout.jpg',
      href: '/strength',
      points: ['Personalised programme', 'Coach support', 'Build strength', '2+ sessions weekly'],
    },
    {
      title: 'Blitz',
      image: '/Fintan Kettlebells.jpg',
      href: '/blitz',
      points: ['Strength + conditioning', 'Efficient sessions', 'Busy lifestyle friendly', 'All levels'],
    },
    {
      title: 'Engine',
      image: '/Clodagh Ski.jpg',
      href: '/engine',
      points: ['Low impact cardio', 'Machine based', 'Build stamina', 'Fully scalable'],
    },
    {
      title: 'Survival',
      image: '/Clodagh Row.jpg',
      href: '/survival',
      points: ['Circuit training', 'Full body workouts', 'High energy', 'Improve fitness fast'],
    },
  ];

  return (
    <>
      <section className='hero' style={{minHeight:'60vh', textAlign:'center', justifyContent:'center'}}>
        <div className='container'>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,78px)',margin:'10px 0'}}>Training Classes</h1>
          <p className='muted' style={{maxWidth:700,margin:'0 auto'}}>Choose the right class for your goals, schedule and current fitness level.</p>
          <div style={{marginTop:24}}>
            <Link href='/timetable' className='btn'>View Timetable</Link>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:20}}>
        <div className='container'>
          <div className='grid grid-3'>
            {classes.map((item) => (
              <Link key={item.title} href={item.href} style={{display:'block'}}>
                <div className='card' style={{overflow:'hidden', padding:0, cursor:'pointer'}}>
                <img src={item.image} alt={item.title} style={{width:'100%',height:220,objectFit:'cover'}} />
                <div style={{padding:24, textAlign:'center'}}>
                  <h3 style={{fontSize:28,marginTop:0}}>{item.title}</h3>
                  <ul style={{listStyle:'none',padding:0,margin:'0 0 20px', textAlign:'center'}}>
                    {item.points.map((point) => (
                      <li key={point} style={{padding:'6px 0',color:'#bbb'}}>✓ {point}</li>
                    ))}
                  </ul>
                  <div style={{display:'flex',justifyContent:'center'}}><Link href={item.href} className='btn' style={{background:'#F97316'}}>Learn More</Link></div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}