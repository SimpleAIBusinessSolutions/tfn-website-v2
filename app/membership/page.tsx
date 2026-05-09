import { headers } from "next/headers";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";

export default async function Page() {
  const headersList = headers();

  const siteId =
    headersList.get("x-site-id") || "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteId,
    "membership",
    preview
  );

  const hero = content["membership_hero"] as {
    heading?: string;
    subheading?: string;
    cta?: string;
  };

  const plans = [
    {
      title: "Bronze",
      price: "€70",
      sub: "8 sessions • ~2/week",
      accent: "#cd7f32",
    },
    {
      title: "Silver",
      price: "€90",
      sub: "12 sessions • ~3/week",
      accent: "#c0c0c0",
    },
    {
      title: "Gold",
      price: "€105",
      sub: "16 sessions • ~4/week",
      accent: "#d4af37",
    },
    {
      title: "Platinum",
      price: "€115",
      sub: "20 sessions • ~5/week",
      accent: "#F97316",
    },
  ];

  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "65vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: 920 }}>
          <p style={{ color: "#F97316", fontWeight: 700 }}>
            TRUE FITNESS NAAS
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,7vw,82px)",
              margin: "10px 0",
            }}
          >
            {hero?.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {hero?.subheading}
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/contact" className="btn">
              {hero?.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="card"
                style={{
                  textAlign: "center",
                }}
              >
                <h2>{plan.title}</h2>

                <p
                  style={{
                    color: plan.accent,
                    fontSize: 42,
                    fontWeight: 800,
                  }}
                >
                  {plan.price}
                </p>

                <p className="muted">
                  {plan.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}