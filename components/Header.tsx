"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenus = () => {
    setMobileOpen(false);
    setOpen(false);
  };

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
        <Link href='/' className='brand' onClick={closeMenus}>
          <img src='/tlogo.jpg' alt='tlogo.jpg' style={{ height: 48, width: 'auto' }} />
          <span>TRUE FITNESS NAAS</span>
        </Link>

        <button type='button' className='menu-btn' onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>

        <nav className={`site-nav ${mobileOpen ? 'show' : ''}`}>
          <Link href='/' onClick={closeMenus}>Home</Link>
          <div className='dropdown' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Link href='/class' className='nav-link' onClick={closeMenus}>Classes</Link>
            <button type='button' className='nav-link'>▾</button>
            {open && (
              <div className='dropdown-menu'>                {classPages.map((item) => (
                  <Link key={item.slug} href={item.slug} onClick={closeMenus}>{item.name}</Link>
                ))}
              </div>
            )}
          </div>
          {navPages.map((p) => (
            <Link key={p.slug} href={p.slug} onClick={closeMenus}>{p.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}