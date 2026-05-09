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
    "timetable",
    preview
  );

  const hero = content["timetable_hero"] as any;
  const image = content["timetable_image"] as any;

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
              maxWidth: 720,
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
            <Link href="/contact" className="btn">
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
          <img
            src={image?.image}
            alt="Timetable"
            style={{
              borderRadius: 24,
              width: "100%",
            }}
          />
        </div>
      </section>
    </>
  );
}