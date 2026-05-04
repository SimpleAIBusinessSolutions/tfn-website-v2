import Split from '@/components/Split';
import CTABanner from '@/components/CTABanner';

export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Engine</h1>
          <p className='muted' style={{maxWidth:760,margin:'0 auto'}}>Low-impact conditioning, TFN style. A machine-based class designed to build your fitness, stamina and recovery without the impact of running or jumping.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <a href='/contact' className='btn' style={{background:'#F97316'}}>Join Engine</a>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <Split data={{
            headline:'What Is It?',
            text:`Engine is our low-impact conditioning class built to improve cardiovascular fitness and overall work capacity in a safe, scalable way.

Sessions use Concept2 Bike Ergs, Rowers, Ski Ergs and Assault Bikes, combined with selected bodyweight movements to build fitness without the impact of running or jumping.

It is ideal for all levels — whether you are returning from injury, restarting after time away, postpartum, or simply looking to improve conditioning.

With regular attendance, members can improve stamina, muscular endurance, recovery and the ability to sustain higher intensities for longer.`,
            image:'/Clodagh Ski.jpg'
          }} />
        </div>
      </section>

      <CTABanner data={{headline:'Build Fitness Safely & Consistently',text:'Perfect for all levels, Engine helps improve cardiovascular fitness, muscular endurance and overall conditioning.'}} />
    </>
  );
}