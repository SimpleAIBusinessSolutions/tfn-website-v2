import Link from "next/link";
import { headers } from "next/headers";

import { getPageContent } from "@/lib/cms";

type HeroContent = {
  heading?: string;
  subheading?: string;
  cta?: string;
};

type NutritionOption = {
  title?: string;
  subtitle?: string;
  points?: string[];
  accent?: string;
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
    "nutrition",
    preview
  );

  const hero =
    content["nutrition_hero"] as HeroContent;

  const options =
    (content[
      "nutrition_options"
    ] as NutritionOption[]) || [];

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
              style={{
                background: "#F97316",
              }}
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
                "repeat(auto-fit,minmax(320px,1fr))",
            }}
          >
            {options.map((item) => (
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
                    cursor: "pointer",
                    textAlign: "center",
                    padding: 32,
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background:
                        item.accent,
                      margin:
                        "0 auto 20px",
                    }}
                  />

                  <h2
                    style={{
                      marginTop: 0,
                      fontSize: 32,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      color:
                        item.accent,
                      fontWeight: 700,
                    }}
                  >
                    {item.subtitle}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "22px 0",
                    }}
                  >
                    {item.points?.map(
                      (point) => (
                        <li
                          key={point}
                          style={{
                            padding:
                              "8px 0",
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
                      display: "flex",
                      justifyContent:
                        "center",
                    }}
                  >
                    <span
                      className="btn"
                      style={{
                        background:
                          item.accent,
                      }}
                    >
                      Get Started
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