import { headers } from "next/headers";

import { getPageContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

type HeroContent = {
  heading?: string;
  subheading?: string;
  cta?: string;
};

type SplitContent = {
  headline?: string;
  text?: string;
  image?: string;
};

type CTAContent = {
  headline?: string;
  text?: string;
  cta?: string;
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
    "blitz",
    preview
  );

  const hero =
    content["blitz_hero"] as HeroContent;

  const split =
    content["blitz_split"] as SplitContent;

  const cta =
    content["blitz_cta"] as CTAContent;

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
              style={{
                background: "#F97316",
              }}
            >
              {hero?.cta}
            </a>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <Split data={split} />
        </div>
      </section>

      <CTABanner data={cta} />
    </>
  );
}