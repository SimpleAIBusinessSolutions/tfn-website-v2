import ContactForm from "@/components/ContactForm";
import { getPageContent } from "@/lib/cms";

type HeroContent = {
  heading?: string;
  subheading?: string;
};

type ContactInfo = {
  title?: string;
  address?: string;
  email?: string;
  phone?: string;
  text?: string;
};

type MapContent = {
  embed?: string;
};

export default async function Page() {
  const content = await getPageContent(
    "tfn",
    "contact"
  );

  const hero =
    (content["contact_hero"] as HeroContent) ||
    {};

  const info =
    (content["contact_info"] as ContactInfo) ||
    {};

  const map =
    (content["contact_map"] as MapContent) ||
    {};

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
            {hero.heading}
          </h1>

          <p
            className="muted"
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {hero.subheading}
          </p>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container split">
          <div
            className="card"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: 38,
                marginTop: 0,
              }}
            >
              {info.title}
            </h2>

            <p
              className="muted"
              style={{
                whiteSpace: "pre-line",
              }}
            >
              {info.address}
            </p>

            <p className="muted">
              Email: {info.email}
            </p>

            <p className="muted">
              Phone: {info.phone}
            </p>

            <p className="muted">
              {info.text}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div
            className="card"
            style={{
              padding: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              src={map.embed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}