import { getContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

export default async function Page() {
  const content = await getContent();

  const hero = content["survival_hero_0"];
  const split = content["survival_split_1"];
  const cta = content["survival_cta_2"];

  return (
    <>
      <section className="hero" style={{ textAlign: "center", justifyContent: "center" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontSize: "clamp(42px,7vw,82px)" }}>
            {hero?.heading || "Survival"}
          </h1>
          <p className="muted">
            {hero?.subheading || "High-energy circuit training."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Split data={split} />
        </div>
      </section>

      <CTABanner data={cta} />
    </>
  );
}