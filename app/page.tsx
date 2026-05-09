import Link from "next/link";
import { headers } from "next/headers";

import { getPageContent } from "@/lib/cms";
import FeatureGrid from "@/components/FeatureGrid";
import Split from "@/components/Split";

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

export default async function Page() {
  const headersList = headers();

  const siteId =
    headersList.get("x-site-id") ||
    "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteId,
    "home",
    preview
  );

  const hero =
    content["home_hero"] as HeroContent;

  const features =
    content["home_features"];

  const split =
    content["home_split"];

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

      <FeatureGrid data={features} />

      <Split data={split} />
    </>
  );
}