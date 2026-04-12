"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header className='site-header'>
      <div className='container header-row'>
        <Link href='/' className='brand'>
          <img src='/logo.jpg' alt='TFN Logo' style={{ height: 48, width: 'auto' }} />
          <span>TRUE FITNESS NAAS</span>
        </Link>

        <button type='button' className='menu-btn' onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>

        <nav className={`desktop-nav ${mobileOpen ? 'show' : ''}`}>
          <Link href='/'>Home</Link>
          <div className='dropdown' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button type='button' className='nav-link'>Class ▾</button>
            {open && (
              <div className='dropdown-menu'>
                <Link href='/class'>All Classes</Link>
                {classPages.map((item) => (
                  <Link key={item.slug} href={item.slug}>{item.name}</Link>
                ))}
              </div>
            )}
          </div>
          {navPages.map((p) => (
            <Link key={p.slug} href={p.slug}>{p.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}