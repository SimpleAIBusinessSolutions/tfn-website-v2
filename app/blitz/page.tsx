import Split from '@/components/Split';
import CTABanner from '@/components/CTABanner';

export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Blitz</h1>
          <p className='muted' style={{maxWidth:760,margin:'0 auto'}}>Strength and conditioning, TFN style. A hybrid class combining full-body strength work with high-intensity conditioning for maximum results in minimal time.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <a href='/contact' className='btn' style={{background:'#F97316'}}>Join Blitz</a>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:0}}>
        <div className='container'>
          <Split data={{
            headline:'What Is It?',
            text:`Blitz is our hybrid strength and conditioning class built for people who want to get stronger, fitter and in better shape without needing multiple sessions each week.

Each week includes three new workouts combining 35–40 minutes of full-body strength training with 12–15 minutes of high-intensity conditioning.

Strength blocks use barbells and dumbbells to improve strength, muscle tone, movement quality and overall body composition.

Conditioning blocks use machines and bodyweight work, with scalable targets to suit beginners through to experienced trainees.`,
            image:'/Fintan Kettlebells.jpg'
          }} />
        </div>
      </section>

      <CTABanner data={{headline:'Maximum Results. Minimal Time.',text:'Perfect for busy people who want the balance of strength and fitness in one efficient session.',cta:'Get Started'}} />
    </>
  );
}