import Link from "next/link";

export default function Page() {
  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "70vh",
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
            Stronger. Fitter. Better.
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            Build strength, improve fitness,
            and train with a community.
          </p>

          <div style={{ marginTop: 24 }}>
            <Link
              href="/contact"
              className="btn"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}