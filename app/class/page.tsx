// app/class/page.tsx

import Link from "next/link";
import { headers } from "next/headers";
import { getPageContent } from "@/lib/cms";

type ClassItem = {
  title?: string;
  image?: string;
  href?: string;
  points?: string[];
};

export default async function Page() {
  const headersList = headers();

  const siteKey =
    headersList.get("x-site-key") || "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteKey,
    "class",
    preview
  );

  const hero = content["class_hero"] as {
    heading?: string;
    subheading?: string;
    cta?: string;
  };

  const classes = content["class_cards"] as {
    items?: ClassItem[];
  };

  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "60vh",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
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
                "clamp(42px,7vw,78px)",
              margin: "10px 0",
            }}
          >
            {hero?.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {hero?.subheading}
          </p>

          <div style={{ marginTop: 24 }}>
            <Link
              href="/timetable"
              className="btn"
            >
              {hero?.cta}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 20 }}
      >
        <div className="container">
          <div className="grid grid-3">
            {classes?.items?.map(
              (item, i) => (
                <Link
                  key={i}
                  href={item.href || "#"}
                  style={{
                    display: "block",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      overflow: "hidden",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || ""}
                        style={{
                          width: "100%",
                          height: 220,
                          objectFit:
                            "cover",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding: 24,
                        textAlign:
                          "center",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 28,
                          marginTop: 0,
                        }}
                      >
                        {item.title}
                      </h3>

                      <ul
                        style={{
                          listStyle:
                            "none",
                          padding: 0,
                          margin:
                            "0 0 20px",
                          textAlign:
                            "center",
                        }}
                      >
                        {item.points?.map(
                          (
                            point,
                            idx
                          ) => (
                            <li
                              key={idx}
                              style={{
                                padding:
                                  "6px 0",
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
                          display:
                            "flex",
                          justifyContent:
                            "center",
                        }}
                      >
                        <span
                          className="btn"
                          style={{
                            background:
                              "#F97316",
                          }}
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}