"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const classPages = [
    { name: 'Strength', slug: '/strength' },
    { name: 'Blitz', slug: '/blitz' },
    { name: 'Engine', slug: '/engine' },
    { name: 'Survival', slug: '/survival' },
  ];
  const navPages = [
    { name: 'Nutrition', slug: '/nutrition' },
    { name: 'Timetable', slug: '/timetable' },
    { name: 'Membership', slug: '/membership' },
    { name: 'Contact', slug: '/contact' },
  ];

  const toggleMenu = () => setOpen(!open);

  return (
    <header style={{ position:'sticky', top:0, zIndex:100, background:'#0a0a0af2', borderBottom:'1px solid #222' }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 20px', gap:20, flexWrap:'wrap' }}>
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src="/tlogo.jpg" alt="tlogo.jpg" style={{ height:52, width:'auto' }} />
          <span style={{ fontSize:22, fontWeight:800 }}>TRUE FITNESS NAAS</span>
        </Link>
        <nav style={{ display:'flex', alignItems:'center', gap:22, position:'relative', flexWrap:'wrap' }}>
          <Link href='/'>Home</Link>
          <div style={{ position:'relative', display:'flex', alignItems:'center', gap:6 }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Link href='/class'>Class</Link>
            <button onClick={toggleMenu} aria-label='Open class menu' style={{ background:'transparent', border:'none', color:'#fff', cursor:'pointer', fontSize:16, padding:0 }}>
              ▾
            </button>
            {open && <div style={{ position:'absolute', top:'100%', left:0, background:'#111', border:'1px solid #222', borderRadius:14, minWidth:220, padding:10 }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              {classPages.map((item) => <Link key={item.slug} href={item.slug} style={{ display:'block', padding:'10px 12px' }}>{item.name}</Link>)}
            </div>}
          </div>
          {navPages.map((p) => <Link key={p.slug} href={p.slug}>{p.name}</Link>)}
        </nav>
      </div>
    </header>
  );
}