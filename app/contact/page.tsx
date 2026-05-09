"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    fetch("/api/cms?page=contact")
      .then((r) => r.json())
      .then((d) => {
        setHero(d.contact_hero);
      });
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "60vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: 900 }}
        >
          <p
            style={{
              color: "#F97316",
              fontWeight: 700,
            }}
          >
            TRUE FITNESS NAAS
          </p>

          <h1
            style={{
              fontSize:
                "clamp(42px,7vw,82px)",
              margin: "10px 0",
            }}
          >
            {hero?.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {hero?.subheading}
          </p>
        </div>
      </section>
    </>
  );
}