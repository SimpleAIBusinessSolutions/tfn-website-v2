import Hero from '@/components/Hero';
import Split from '@/components/Split';
import CTABanner from '@/components/CTABanner';

export default function Page() {
  return (
    <>
      <section className='hero' style={{minHeight:'65vh',justifyContent:'center',textAlign:'center'}}>
        <div className='container' style={{maxWidth:900}}>
          <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
          <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Strength</h1>
          <p className='muted' style={{maxWidth:760,margin:'0 auto'}}>Personalised strength training, TFN style. Train within a coached environment while following your own tailored programme built around your goals.</p>
          <div style={{marginTop:24,display:'flex',justifyContent:'center'}}>
            <a href='/contact' className='btn' style={{background:'#F97316'}}>Join Strength</a>
          </div>
        </div>
      </section>

      <section className='section' style={{paddingTop:20}}>
        <div className='container'>
          <Split data={{
            headline:'What Is It?',
            text:`Strength is our resistance training class built around individual programme design. Every member follows a personalised plan based on goals, training history and current ability.

Your programme is reviewed and refined over time to improve body composition, strength development and muscular endurance.

Sessions are full-body focused, helping each major muscle group get trained 2–3 times weekly for better progress and manageable recovery.

Classes are capped at 8 members, giving you your own rack and equipment with high-level coaching throughout.`,
            image:'/gymlayout.jpg'
          }} />
        </div>
      </section>

      <CTABanner data={{headline:'Minimum 2 Strength Sessions Per Week',text:'The best results come from consistent training, progressive overload and expert coaching.'}} />
    </>
  );
}