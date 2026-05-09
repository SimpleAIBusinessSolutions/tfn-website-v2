"use client";

import { useEffect, useState } from "react";

type HeroContent = {
  heading?: string;
  subheading?: string;
};

type PolicyContent = {
  title?: string;
  points?: string[];
};

export default function Page() {
  const [hero, setHero] =
    useState<HeroContent>({});

  const [policy, setPolicy] =
    useState<PolicyContent>({});

  useEffect(() => {
    async function loadContent() {
      const siteId =
        new URLSearchParams(
          window.location.search
        ).get("site") || "tfn";

      const preview =
        new URLSearchParams(
          window.location.search
        ).get("preview") === "true";

      const res = await fetch(
        `/api/cms?page=privacy-policy&site=${siteId}&preview=${preview}`
      );

      const data = await res.json();

      setHero(
        data["privacy_hero"] || {}
      );

      setPolicy(
        data["privacy_content"] || {}
      );
    }

    loadContent();
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
            {hero.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {hero.subheading}
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div
          className="container"
          style={{
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          <div className="card">
            <h2
              style={{
                fontSize: 38,
                marginTop: 0,
              }}
            >
              {policy.title}
            </h2>

            {policy.points?.map(
              (point, index) => (
                <p
                  key={index}
                  className="muted"
                >
                  {point}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}