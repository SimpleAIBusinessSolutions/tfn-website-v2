import Link from "next/link";
import { headers } from "next/headers";

import { getPageContent } from "@/lib/cms";

type HeroContent = {
  heading?: string;
  subheading?: string;
  cta?: string;
};

type Plan = {
  title?: string;
  price?: string;
  sub?: string;
  accent?: string;
  points?: string[];
};

type Extra = {
  title?: string;
  price?: string;
  accent?: string;
  points?: string[];
};

export default async function Page() {
  const headersList = headers();

  const siteKey =
    headersList.get("x-site-key") ||
    "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteKey,
    "membership",
    preview
  );

  const hero =
    content["membership_hero"] as HeroContent;

  const plans =
    (content[
      "membership_plans"
    ] as Plan[]) || [];

  const extras =
    (content[
      "membership_extras"
    ] as Extra[]) || [];

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
        <div
          className="container"
          style={{ maxWidth: 920 }}
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
            <Link
              href="/contact"
              className="btn"
            >
              {hero?.cta}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {plans.map((plan) => (
              <Link
                key={plan.title}
                href="/contact"
                style={{
                  display: "block",
                }}
              >
                <div
                  className="card"
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    textAlign: "center",
                    padding: 28,
                  }}
                >
                  <p
                    style={{
                      color:
                        plan.accent,
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform:
                        "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {plan.sub}
                  </p>

                  <h2
                    style={{
                      fontSize: 30,
                      margin:
                        "0 0 8px",
                    }}
                  >
                    {plan.title}
                  </h2>

                  <p
                    style={{
                      fontSize: 38,
                      fontWeight: 800,
                      color:
                        plan.accent,
                      margin:
                        "0 0 16px",
                    }}
                  >
                    {plan.price}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin:
                        "0 0 22px",
                    }}
                  >
                    {plan.points?.map(
                      (point) => (
                        <li
                          key={point}
                          style={{
                            padding:
                              "7px 0",
                            color:
                              "#bbb",
                          }}
                        >
                          ✓ {point}
                        </li>
                      )
                    )}
                  </ul>

                  <span
                    className="btn"
                    style={{
                      background:
                        plan.accent,
                    }}
                  >
                    Get Started
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 42,
              textAlign: "center",
              marginTop: 0,
            }}
          >
            Other Services
          </h2>

          <div className="extras-grid">
            {extras.map((item) => (
              <Link
                key={item.title}
                href="/contact"
                style={{
                  display: "block",
                }}
              >
                <div
                  className="card"
                  style={{
                    height: "100%",
                    minHeight: 360,
                    cursor: "pointer",
                    textAlign: "center",
                    padding: 28,
                    display: "flex",
                    flexDirection:
                      "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 28,
                      margin:
                        "0 0 auto",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color:
                        item.accent,
                      fontSize: 28,
                      fontWeight: 800,
                      margin:
                        "20px 0",
                    }}
                  >
                    {item.price}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin:
                        "0 0 20px",
                    }}
                  >
                    {item.points?.map(
                      (point) => (
                        <li
                          key={point}
                          style={{
                            padding:
                              "7px 0",
                            color:
                              "#bbb",
                          }}
                        >
                          ✓ {point}
                        </li>
                      )
                    )}
                  </ul>

                  <div
                    style={{
                      marginTop: "auto",
                    }}
                  >
                    <span
                      className="btn"
                      style={{
                        background:
                          item.accent,
                      }}
                    >
                      Enquire Now
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}