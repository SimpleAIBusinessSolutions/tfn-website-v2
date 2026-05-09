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
    "home",
    preview
  );

  const hero = content["home_hero"] as {
    headline?: string;
    subtext?: string;
    cta?: string;
  };

  return (
    <>
      <section
        className="hero"
        style={{
          minHeight: "70vh",
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
            {hero?.headline}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {hero?.subtext}
          </p>

          <div style={{ marginTop: 24 }}>
            <Link
              href="/contact"
              className="btn"
            >
              {hero?.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}