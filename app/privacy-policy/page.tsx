// app/privacy-policy/page.tsx

import { headers } from "next/headers";
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
    "privacy-policy",
    preview
  );

  const hero = content[
    "privacy_hero"
  ] as {
    heading?: string;
    subheading?: string;
  };

  const body = content[
    "privacy_body"
  ] as {
    headline?: string;
    paragraphs?: string[];
  };

  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "60vh",
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
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {hero?.subheading}
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div
          className="container"
          style={{
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          <div className="card">
            <h2
              style={{
                fontSize: 38,
                marginTop: 0,
              }}
            >
              {body?.headline}
            </h2>

            {body?.paragraphs?.map(
              (paragraph, i) => (
                <p
                  key={i}
                  className="muted"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}