"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [classOpen, setClassOpen] = useState(false);
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenus = () => {
  setMobileOpen(false);
  setClassOpen(false);
  setNutritionOpen(false);
};

  const classPages = [
    { name: 'Strength', slug: '/strength' },
    { name: 'Blitz', slug: '/blitz' },
    { name: 'Engine', slug: '/engine' },
    { name: 'Survival', slug: '/survival' },
  ];

const nutritionPages = [
  {name: "Nutrition Coaching", slug: "/nutrition-coaching"},
  {name: "Reset 6",slug: "/reset-6"},
];

  const navPages = [
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
          <div
  className="dropdown"
  onMouseEnter={() => setClassOpen(true)}
  onMouseLeave={() => setClassOpen(false)}
>
  <Link
    href="/class"
    className="nav-link"
    onClick={closeMenus}
  >
    Classes
  </Link>

  <button
    type="button"
    className="nav-link"
  >
    ▾
  </button>

  {classOpen && (
    <div className="dropdown-menu">
      {classPages.map((item) => (
        <Link
          key={item.slug}
          href={item.slug}
          onClick={closeMenus}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

<div
  className="dropdown"
  onMouseEnter={() => setNutritionOpen(true)}
  onMouseLeave={() => setNutritionOpen(false)}
>
  <Link
    href="/nutrition"
    className="nav-link"
    onClick={closeMenus}
  >
    Nutrition
  </Link>

  <button
    type="button"
    className="nav-link"
  >
    ▾
  </button>

  {nutritionOpen && (
    <div className="dropdown-menu">
      {nutritionPages.map((item) => (
        <Link
          key={item.slug}
          href={item.slug}
          onClick={closeMenus}
        >
          {item.name}
        </Link>
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