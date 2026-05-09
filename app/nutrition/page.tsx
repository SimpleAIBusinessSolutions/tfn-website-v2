import { headers } from "next/headers";
import { getPageContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

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
    "nutrition",
    preview
  );

const hero = content["nutrition_hero"] as {
  heading?: string;
  subheading?: string;
  cta?: string;
};

const split = content["nutrition_split"] as {
  headline?: string;
  text?: string;
  image?: string;
};

const cta = content["nutrition_cta"] as {
  headline?: string;
  text?: string;
};

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
        <div className="container" style={{ maxWidth: 900 }}>
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
            <a
              href="/contact"
              className="btn"
              style={{ background: "#F97316" }}
            >
              {hero?.cta}
            </a>
          </div>
        </div>
      </section>

      <Split data={split} />

      <CTABanner data={cta} />
    </>
  );
}