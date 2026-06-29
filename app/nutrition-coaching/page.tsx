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

  const hero =
    (content["nutrition_coaching_hero"] as HeroContent) || {};

  const split1 =
    (content["nutrition_coaching_split1"] as SplitContent) || {};

  const forYou =
    (content["nutrition_coaching_for_you"] as ChecklistContent) || {};

  const included =
    (content["nutrition_coaching_included"] as ChecklistContent) || {};

  const whyStruggle =
    (content["nutrition_coaching_why_struggle"] as ChecklistContent) || {};

  const expectations =
    (content["nutrition_coaching_expectations"] as ChecklistContent) || {};

  const split2 =
    (content["nutrition_coaching_split2"] as SplitContent) || {};

  const cta =
    (content["nutrition_coaching_cta"] as CTAContent) || {};

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
          <p
            style={{
              color: "#F97316",
              fontWeight: 700,
            }}
          >
            {hero.eyebrow || "TRUE FITNESS NAAS"}
          </p>

          <h1
            style={{
              fontSize: "clamp(48px,8vw,84px)",
              lineHeight: 1,
              margin: "10px 0",
            }}
          >
            {hero.heading || "1-to-1 Nutrition"}
          </h1>

          <p
            className="muted"
            style={{
              fontSize: 20,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {hero.subheading ||
              "A fully bespoke 12-week coaching program designed to help you improve body composition, build sustainable habits and finally create an approach to nutrition that actually fits your lifestyle."}
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="/contact"
              className="btn"
              style={{ background: "#F97316" }}
            >
              {hero.cta || "Apply Now"}
            </a>
          </div>
        </div>
      </section>

      <Split data={split1} />

      <section className="section">
        <div className="container split">
          <ChecklistSection
            eyebrow={forYou.eyebrow || "BUILT FOR REAL LIFE"}
            headline={forYou.headline || "THIS PROGRAM IS FOR YOU IF…"}
            accent={forYou.accent || "#60A5FA"}
            points={
              forYou.points || [
                "You've struggled with consistency around nutrition",
                "You've tried restrictive diets that weren't sustainable",
                "You want a personalised approach instead of generic meal plans",
                "You feel overwhelmed by conflicting nutrition advice online",
                "You want accountability and ongoing support",
                "You want to improve body composition without extreme dieting",
                "You want to build healthier habits that fit real life",
              ]
            }
          />

          <ChecklistSection
            eyebrow={included.eyebrow || "WHAT'S INCLUDED"}
            headline={included.headline || "EVERYTHING YOU NEED"}
            accent={included.accent || "#F97316"}
            points={
              included.points || [
                "Initial Consultation & Goal Assessment",
                "Comprehensive Nutrition & Lifestyle Questionnaire",
                "Fully Bespoke Nutrition Plan",
                "Individual Calorie & Macronutrient Targets",
                "Weekly Coaching Check-In Calls",
                "Weekly Nutrition & Habit Tracking",
                "Ongoing Accountability & Support",
                "InBody Scans & Progress Photos Every 4 Weeks",
              ]
            }
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <ChecklistSection
            eyebrow={whyStruggle.eyebrow || "WHY MOST PEOPLE STRUGGLE"}
            headline={whyStruggle.headline || "SUSTAINABLE NUTRITION WINS"}
            accent={whyStruggle.accent || "#F97316"}
            points={
              whyStruggle.points || [
                "No restrictive diets",
                "Personalised to your goals",
                "Focus on habits not quick fixes",
                "Regular accountability",
                "Sustainable results",
              ]
            }
          />

          <ChecklistSection
            eyebrow={expectations.eyebrow || "RESULTS YOU CAN EXPECT"}
            headline={expectations.headline || "WHAT YOU CAN EXPECT"}
            accent={expectations.accent || "#60A5FA"}
            points={
              expectations.points || [
                "Improve body composition and reduce body fat",
                "Develop healthier eating habits",
                "Feel more in control around food and nutrition",
                "Build consistency and routine",
                "Improve energy levels and overall lifestyle structure",
                "Gain clarity and confidence around nutrition",
                "Learn how to maintain results long term",
              ]
            }
          />
        </div>
      </section>

      <Split data={split2} />

      <CTABanner data={cta} />
    </>
  );
}
