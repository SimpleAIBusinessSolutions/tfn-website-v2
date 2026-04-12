'use client';
import { useState } from 'react';

export default function Page() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('');

  const submit = async (e:any) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    setStatus(res.ok ? 'Message sent successfully.' : 'Failed to send. Please try again.');
    if (res.ok) setForm({ name:'', email:'', message:'' });
  };

  return <>
    <section className='hero' style={{minHeight:'60vh',justifyContent:'center',textAlign:'center'}}>
      <div className='container' style={{maxWidth:900}}>
        <p style={{color:'#F97316',fontWeight:700}}>TRUE FITNESS NAAS</p>
        <h1 style={{fontSize:'clamp(42px,7vw,82px)',margin:'10px 0'}}>Contact Us</h1>
        <p className='muted' style={{maxWidth:720,margin:'0 auto'}}>Ready to get started? Speak to the team today and we’ll help you choose the right path.</p>
      </div>
    </section>

    <section className='section' style={{paddingTop:0}}>
      <div className='container split'>
        <div className='card' style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <h2 style={{fontSize:38,marginTop:0}}>Get In Touch</h2>
          <p className='muted'>Unit 7, M7 Business Park,<br/>Naas, Co Kildare</p>
          <p className='muted'>Email: dave@tfn.ie</p>
          <p className='muted'>Phone: 083 112 1188</p>
          <p className='muted'>We’ll respond as quickly as possible and help you get started.</p>
        </div>

        <div className='card' style={{height:'100%'}}>
          <h2 style={{fontSize:38,marginTop:0}}>Send A Message</h2>
          <form onSubmit={submit}>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='Your Name' required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
            <input type='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Your Email' required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
            <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder='Your Message' rows={6} required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
            <button type='submit' className='btn'>Send Message</button>
            {status && <p className='muted' style={{marginTop:12}}>{status}</p>}
          </form>
        </div>
      </div>
    </section>

    <section className='section' style={{paddingTop:0}}>
      <div className='container'>
        <div className='card' style={{padding:0,overflow:'hidden'}}>
          <iframe
            src='https://www.google.com/maps?q=Unit%207,%20M7%20Business%20Park,%20Naas,%20Co%20Kildare&output=embed'
            width='100%'
            height='420'
            style={{border:0}}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </section>
  </>;
}
