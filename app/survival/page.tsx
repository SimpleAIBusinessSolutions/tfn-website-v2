import Split from '@/components/Split';
import CTABanner from '@/components/CTABanner';

export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Survival</h1>
          <p className='muted' style={{maxWidth:760,margin:'0 auto'}}>Circuit training, TFN style. A fast-paced, highly rewarding class built to test and improve every aspect of your fitness.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <a href='/contact' className='btn' style={{background:'#F97316'}}>Join Survival</a>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <Split data={{
            headline:'What Is It?',
            text:`Survival is our high-energy take on circuit training — a full-body workout built to get you fitter, stronger and moving better, fast.

Sessions use premium equipment including Rowers, SkiErgs, BikeErgs, Assault Bikes, kettlebells, dumbbells, wall balls and slam balls to keep every workout varied and challenging.

Programmes are designed to improve aerobic fitness, anaerobic conditioning, muscular endurance, core strength and overall work capacity.

No two sessions feel the same, keeping training enjoyable while delivering real results for beginners through to advanced members.`,
            image:'/Clodagh Row.jpg'
          }} />
        </div>
      </section>

      <CTABanner data={{headline:'Train Hard. Build Confidence. Get Results.',text:'With premium equipment and expertly designed sessions, Survival helps improve fitness, recovery and confidence — fast.'}} />
    </>
  );
}