import { headers } from "next/headers";
import { getPageContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

export default async function Page() {
  const headersList = await headers();

  const siteId =
    headersList.get("x-site-id") ||
    process.env.NEXT_PUBLIC_SITE_ID!;

  const preview =
    headersList.get("referer")?.includes("preview=true") ??
    false;

  const content = await getPageContent(
    siteId,
    "blitz",
    preview
  );

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
              fontSize: "clamp(42px,7vw,82px)",
              margin: "10px 0",
            }}
          >
            {content["blitz_hero"]?.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {content["blitz_hero"]?.subheading}
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
              {content["blitz_hero"]?.cta}
            </a>
          </div>
        </div>
      </section>

      <Split data={content["blitz_split"]} />

      <CTABanner data={content["blitz_cta"]} />
    </>
  );
}