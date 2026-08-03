import Link from "next/link";
import { headers } from "next/headers";

import { getPageContent } from "@/lib/cms";

type HeroContent = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryCta?: string;
  primaryLink?: string;
  secondaryCta?: string;
  secondaryLink?: string;
  video?: string;
};

type SimpleHero = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
};

type ClassItem = {
  title?: string;
  image?: string;
  href?: string;
  points?: string[];
};

type Plan = {
  title?: string;
  price?: string;
  sub?: string;
  accent?: string;
  points?: string[];
};

type NutritionOption = {
  title?: string;
  subtitle?: string;
  points?: string[];
  accent?: string;
  href?: string;
  buttonText?: string;
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

  const [
    content,
    classContent,
    membershipContent,
    nutritionContent,
  ] = await Promise.all([
    getPageContent(siteKey, "home", preview),
    getPageContent(siteKey, "class", preview),
    getPageContent(siteKey, "membership", preview),
    getPageContent(siteKey, "nutrition", preview),
  ]);

  const hero =
    content["home_hero"] as HeroContent;

  // CLASSES — same content shown on /class, so editing that page
  // in the dashboard also updates what's featured here.
  const classHero =
    (classContent["class_hero"] as SimpleHero) || {};

  const classCards =
    classContent["class_cards"] as { items?: ClassItem[] };

  const classItems = classCards?.items || [];

  // MEMBERSHIPS — same plans shown on /membership.
  const membershipHero =
    (membershipContent["membership_hero"] as SimpleHero) || {};

  const plans =
    (membershipContent["membership_plans"] as Plan[]) || [];

  // NUTRITION — same options shown on /nutrition.
  const nutritionHero =
    (nutritionContent["nutrition_hero"] as SimpleHero) || {};

  const nutritionOptions =
    (nutritionContent["nutrition_options"] as NutritionOption[]) || [];

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          background:
            "url('/tlogo.jpg') center/contain no-repeat #000",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/tlogo.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src={hero?.video || "/hero.mp4"}
            type="video/mp4"
          />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.78))",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1000,
            padding: "40px 20px",
          }}
        >
          <p
            style={{
              color: "#f97316",
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            {hero?.eyebrow}
          </p>

          <h1
            style={{
              color: "#f97316",
              fontSize:
                "clamp(40px,8vw,96px)",
              lineHeight: 0.95,
              margin: "0 0 16px",
              fontWeight: 900,
              whiteSpace: "normal",
              textShadow:
                "0 8px 30px rgba(0,0,0,.5)",
            }}
          >
            {hero?.heading}
          </h1>

          <p
            className="muted"
            style={{
              fontSize:
                "clamp(18px,2vw,24px)",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {hero?.subheading}
          </p>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              href={
                hero?.primaryLink ||
                "/contact"
              }
              className="btn"
            >
              {hero?.primaryCta}
            </Link>

            <Link
              href={
                hero?.secondaryLink ||
                "/class"
              }
              className="btn"
              style={{
                background: "#fff",
              }}
            >
              {hero?.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* CLASSES */}
      {classItems.length > 0 && (
        <section
          className="section"
          style={{ paddingTop: 0 }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 700,
                margin: "0 auto 40px",
              }}
            >
              <p
                style={{
                  color: "#F97316",
                  fontWeight: 700,
                }}
              >
                {classHero?.eyebrow || "TRAIN WITH US"}
              </p>

              <h2
                style={{
                  fontSize: 42,
                  margin: "8px 0 12px",
                }}
              >
                Our Classes
              </h2>

              {classHero?.subheading && (
                <p className="muted">
                  {classHero.subheading}
                </p>
              )}
            </div>

            <div className="grid grid-3">
              {classItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href || "/class"}
                  style={{ display: "block" }}
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
                          objectFit: "cover",
                        }}
                      />
                    )}

                    <div
                      style={{
                        padding: 24,
                        textAlign: "center",
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
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 20px",
                          textAlign: "center",
                        }}
                      >
                        {item.points?.map((point, idx) => (
                          <li
                            key={idx}
                            style={{
                              padding: "6px 0",
                              color: "#bbb",
                            }}
                          >
                            ✓ {point}
                          </li>
                        ))}
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          className="btn"
                          style={{ background: "#F97316" }}
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="/class"
                className="btn"
                style={{ background: "#fff" }}
              >
                View Full Timetable
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* MEMBERSHIPS */}
      {plans.length > 0 && (
        <section
          className="section"
          style={{ paddingTop: 0 }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 700,
                margin: "0 auto 40px",
              }}
            >
              <p
                style={{
                  color: "#F97316",
                  fontWeight: 700,
                }}
              >
                {membershipHero?.eyebrow || "JOIN TODAY"}
              </p>

              <h2
                style={{
                  fontSize: 42,
                  margin: "8px 0 12px",
                }}
              >
                Membership Plans
              </h2>

              {membershipHero?.subheading && (
                <p className="muted">
                  {membershipHero.subheading}
                </p>
              )}
            </div>

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
                  style={{ display: "block" }}
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
                        color: plan.accent,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      {plan.sub}
                    </p>

                    <h3
                      style={{
                        fontSize: 30,
                        margin: "0 0 8px",
                      }}
                    >
                      {plan.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 38,
                        fontWeight: 800,
                        color: plan.accent,
                        margin: "0 0 16px",
                      }}
                    >
                      {plan.price}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 22px",
                      }}
                    >
                      {plan.points?.map((point) => (
                        <li
                          key={point}
                          style={{
                            padding: "7px 0",
                            color: "#bbb",
                          }}
                        >
                          ✓ {point}
                        </li>
                      ))}
                    </ul>

                    <span
                      className="btn"
                      style={{ background: plan.accent }}
                    >
                      Get Started
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="/membership"
                className="btn"
                style={{ background: "#fff" }}
              >
                View All Membership Options
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* NUTRITION */}
      {nutritionOptions.length > 0 && (
        <section
          className="section"
          style={{ paddingTop: 0 }}
        >
          <div className="container">
            <div
              style={{
                textAlign: "center",
                maxWidth: 700,
                margin: "0 auto 40px",
              }}
            >
              <p
                style={{
                  color: "#F97316",
                  fontWeight: 700,
                }}
              >
                {nutritionHero?.eyebrow || "FUEL YOUR PROGRESS"}
              </p>

              <h2
                style={{
                  fontSize: 42,
                  margin: "8px 0 12px",
                }}
              >
                Nutrition
              </h2>

              {nutritionHero?.subheading && (
                <p className="muted">
                  {nutritionHero.subheading}
                </p>
              )}
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
              }}
            >
              {nutritionOptions.map((item, i) => (
                <Link
                  key={i}
                  href={item.href || "/nutrition"}
                  style={{ display: "block" }}
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
                        background: item.accent,
                        margin: "0 auto 20px",
                      }}
                    />

                    <h3
                      style={{
                        marginTop: 0,
                        fontSize: 28,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: item.accent,
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
                      {item.points?.map((point, idx) => (
                        <li
                          key={idx}
                          style={{
                            padding: "8px 0",
                            color: "#bbb",
                          }}
                        >
                          ✓ {point}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="btn"
                        style={{ background: item.accent }}
                      >
                        {item.buttonText || "Learn More"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="/nutrition"
                className="btn"
                style={{ background: "#fff" }}
              >
                Explore Nutrition Coaching
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
