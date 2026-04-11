import Link from 'next/link';
import { getContent } from '@/lib/cms';
import FeatureGrid from '@/components/FeatureGrid';
import Split from '@/components/Split';

export default async function Page(){
 const content=await getContent();
 return <>
 <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',overflow:'hidden',background:"url('/TFN Logo.JPG') center/contain no-repeat #000"}}>
   <video autoPlay muted loop playsInline poster='/TFN Logo.JPG' style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}>
     <source src='/hero.mp4' type='video/mp4' />
   </video>
   <div style={{position:'absolute',inset:0,background:'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.78))'}} />
   <div className='container' style={{position:'relative',zIndex:2,maxWidth:1000,padding:'40px 20px'}}>
     <p style={{color:'#f97316',fontWeight:800,letterSpacing:4,textTransform:'uppercase',marginBottom:8}}>Welcome To</p>
     <h1 style={{color:'#f97316',fontSize:'clamp(40px,8vw,96px)',lineHeight:.95,margin:'0 0 16px',fontWeight:900,whiteSpace:'nowrap',textShadow:'0 8px 30px rgba(0,0,0,.5)'}}>TRUE FITNESS NAAS</h1>
     <p className='muted' style={{fontSize:'clamp(18px,2vw,24px)',maxWidth:760,margin:'0 auto'}}>Build strength, improve fitness, and train with a community that pushes you forward.</p>
     <div style={{marginTop:34,display:'flex',justifyContent:'center',gap:16,flexWrap:'wrap'}}>
       <Link href='/contact' className='btn'>Start Today</Link>
       <Link href='/class' className='btn' style={{background:'#fff'}}>View Classes</Link>
     </div>
   </div>
 </section>
 <FeatureGrid data={content['featureGrid_0_1']} />
 <Split data={{...content['split_0_2'], image:'/gymlayout.jpg'}} />
 </>;}
