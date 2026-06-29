import { headers } from "next/headers";
import { getPageContent } from "@/lib/cms";
import Split from "@/components/Split";
import ChecklistSection from "@/components/ChecklistSection";
import CTABanner from "@/components/CTABanner";

type HeroContent = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  cta?: string;
};

type SplitContent = {
  headline?: string;
  text?: string;
  image?: string;
};

type ChecklistContent = {
  eyebrow?: string;
  headline?: string;
  accent?: string;
  points?: string[];
};

type CTAContent = {
  headline?: string;
  text?: string;
};

export default async function NutritionCoachingPage() {
  const headersList = headers();

  const siteKey =
    headersList.get("x-site-key") || "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteKey,
    "nutrition-coaching",
    preview
  );

  const hero = (content["nutrition_coaching_hero"] as HeroContent) || {};
  const split1 = (content["nutrition_coaching_split1"] as SplitContent) || {};
  const forYou = (content["nutrition_coaching_for_you"] as ChecklistContent) || {};
  const included = (content["nutrition_coaching_included"] as ChecklistContent) || {};
  const whyStruggle = (content["nutrition_coaching_why_struggle"] as ChecklistContent) || {};
  const expectations = (content["nutrition_coaching_expectations"] as ChecklistContent) || {};
  const split2 = (content["nutrition_coaching_split2"] as SplitContent) || {};
  const cta = (content["nutrition_coaching_cta"] as CTAContent) || {};

  return (
    <>
      <section className="hero">
        <div
          className="container"
          style={{
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          <p style={{ color: "#F97316", fontWeight: 700 }}>
            {hero.eyebrow}
          </p>

          <h1
            style={{
              fontSize: "clamp(48px,8vw,84px)",
              lineHeight: 1,
              margin: "10px 0",
            }}
          >
            {hero.heading}
          </h1>

          <p
            className="muted"
            style={{
              fontSize: 20,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {hero.subheading}
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="/contact"
              className="btn"
              style={{ background: "#F97316" }}
            >
              {hero.cta}
            </a>
          </div>
        </div>
      </section>

      <Split data={split1} />

      <section className="section">
        <div className="container split">
          <ChecklistSection
            eyebrow={forYou.eyebrow}
            headline={forYou.headline}
            accent={forYou.accent}
            points={forYou.points}
          />

          <ChecklistSection
            eyebrow={included.eyebrow}
            headline={included.headline}
            accent={included.accent}
            points={included.points}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <ChecklistSection
            eyebrow={whyStruggle.eyebrow}
            headline={whyStruggle.headline}
            accent={whyStruggle.accent}
            points={whyStruggle.points}
          />

          <ChecklistSection
            eyebrow={expectations.eyebrow}
            headline={expectations.headline}
            accent={expectations.accent}
            points={expectations.points}
          />
        </div>
      </section>

      <Split data={split2} />

      <CTABanner data={cta} />
    </>
  );
}
