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

export default async function Reset6Page() {
  const headersList = headers();

  const siteKey =
    headersList.get("x-site-key") || "tfn";

  const preview =
    headersList
      .get("referer")
      ?.includes("preview=true") ?? false;

  const content = await getPageContent(
    siteKey,
    "reset-6",
    preview
  );

  const hero =
    (content["reset6_hero"] as HeroContent) || {};

  const split1 =
    (content["reset6_split1"] as SplitContent) || {};

  const forYou =
    (content["reset6_for_you"] as ChecklistContent) || {};

  const included =
    (content["reset6_included"] as ChecklistContent) || {};

  const whyStruggle =
    (content["reset6_why_struggle"] as ChecklistContent) || {};

  const expectations =
    (content["reset6_expectations"] as ChecklistContent) || {};

  const split2 =
    (content["reset6_split2"] as SplitContent) || {};

  const cta =
    (content["reset6_cta"] as CTAContent) || {};

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
            {hero.heading || "RESET 6"}
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
              "Reset Your Fitness, Strength & Routine in Just 6 Weeks. A structured coaching program designed for busy adults who want real guidance, accountability, and sustainable results — without the confusion or intimidation of traditional gyms."}
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="/contact"
              className="btn"
              style={{ background: "#F97316" }}
            >
              {hero.cta || "APPLY NOW"}
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
                "You've struggled to stay consistent in the gym",
                "You feel unsure what to do when training",
                "You want guidance and accountability",
                "You're tired of starting and stopping",
                "You want to improve fitness, strength, and body composition",
                "You want a supportive environment without ego or intimidation",
                "You're looking for a realistic and sustainable approach to health and fitness",
              ]
            }
          />

          <ChecklistSection
            eyebrow={included.eyebrow || "WHAT'S INCLUDED"}
            headline={included.headline || "EVERYTHING YOU NEED"}
            accent={included.accent || "#F97316"}
            points={
              included.points || [
                "Initial InBody Scan & Goal Assessment",
                "Structured Coach-Supported Training Sessions",
                "A Personalised Training Pathway Based On Your Goals & Experience",
                "2–3 Sessions Per Week",
                "Nutrition Guidance & Meal Planning Resources",
                "Weekly Accountability Check-Ins",
                "Progress Tracking Throughout The Program",
                "Direct Coach Support Through Our Member App",
              ]
            }
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <ChecklistSection
            eyebrow={whyStruggle.eyebrow || "WHY MOST PEOPLE STRUGGLE"}
            headline={whyStruggle.headline || "SUSTAINABLE TRAINING WINS"}
            accent={whyStruggle.accent || "#F97316"}
            points={
              whyStruggle.points || [
                "Most people don't struggle because they lack motivation.",
                `They struggle because they've never had:\n• Structure\n• Accountability\n• Proper guidance\n• A realistic plan\n• A sustainable approach`,
                "Reset 6 removes the guesswork completely.",
                "You simply follow a personalised plan, build habits that fit your lifestyle and receive ongoing support every step of the way.",
              ]
            }
          />

          <ChecklistSection
            eyebrow={expectations.eyebrow || "RESULTS YOU CAN EXPECT"}
            headline={expectations.headline || "WHAT YOU CAN EXPECT IN 6 WEEKS"}
            accent={expectations.accent || "#60A5FA"}
            points={
              expectations.points || [
                "Feel fitter and more energetic",
                "Build a consistent training routine",
                "Improve strength and overall fitness",
                "Feel more confident in the gym",
                "See noticeable body composition improvements",
                "Gain clarity around nutrition and recovery",
                "Finally feel back on track with their health and fitness",
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
