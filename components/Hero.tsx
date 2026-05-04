export default function Hero({ data }: any) {
  if (!data) return null;

  return (
    <section className="hero">
      <div className="container">
        <div style={{ maxWidth: 700 }}>
          <p style={{ color: "#F97316", fontWeight: 700 }}>
            TRUE FITNESS NAAS
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,8vw,78px)",
              lineHeight: 1,
              margin: "10px 0",
            }}
          >
            {data.headline}
          </h1>

          <p className="muted" style={{ fontSize: 20 }}>
            {data.subtext}
          </p>

          {data.cta && (
            <div style={{ marginTop: 24 }}>
              <a className="btn" href="/contact">
                {data.cta}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}