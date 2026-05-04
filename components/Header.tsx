"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getContent } from "@/lib/cms";

export default function Header() {
  const [nav, setNav] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const content = await getContent();
      setNav(content["site_nav_0"]?.items || []);
    }

    load();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand">
          TRUE FITNESS NAAS
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`site-nav ${open ? "show" : ""}`}>
          {nav.map((item, i) => (
            <Link key={i} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}