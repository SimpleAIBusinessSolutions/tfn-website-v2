'use client';
import { useState } from 'react';

export function ContactForm() {
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

  return (
    <form onSubmit={submit}>
      <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='Your Name' required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
      <input type='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Your Email' required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
      <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder='Your Message' rows={6} required style={{width:'100%',padding:14,marginBottom:12,borderRadius:12,border:'1px solid #333',background:'#0a0a0a',color:'#fff'}} />
      <button type='submit' className='btn'>Send Message</button>
      {status && <p className='muted' style={{marginTop:12}}>{status}</p>}
    </form>
  );
}