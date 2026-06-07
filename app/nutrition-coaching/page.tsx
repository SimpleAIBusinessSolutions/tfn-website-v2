import Split from "@/components/Split";
import ChecklistSection from "@/components/ChecklistSection";
import CTABanner from "@/components/CTABanner";


export default function NutritionCoachingPage() {
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
      TRUE FITNESS NAAS
    </p>

    <h1
      style={{
        fontSize: "clamp(48px,8vw,84px)",
        lineHeight: 1,
        margin: "10px 0",
      }}
    >
      1-to-1 Nutrition
    </h1>

    <p
      className="muted"
      style={{
        fontSize: 20,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      A fully bespoke 12-week coaching
      program designed to help you improve
      body composition, build sustainable
      habits and finally create an approach
      to nutrition that actually fits your
      lifestyle.
    </p>

    <div
      style={{
        marginTop: 28,
      }}
    >
      <a
        href="/contact"
              className="btn"
              style={{
                background: "#F97316",
              }}
            >
              Apply Now
      </a>
    </div>
  </div>
</section>

      <Split
        data={{
          headline: "Personalised Coaching Built Around You",
          text:
            "This is a personalised nutrition and accountability coaching program designed for individuals who want a more in-depth, structured, and tailored approach to improving their health, body composition, and lifestyle habits. \n\n Unlike generic meal plans or restrictive diets, every aspect of the program is built around you — your schedule, preferences, lifestyle, training, work commitments, and goals. \n\n Whether your goal is fat loss, improving body composition, building healthier habits, or simply gaining clarity around nutrition, this program provides the structure, support, and accountability needed to create long-term results.",
          image: "/3.jpg",
        }}
      />

      <section className="section">
        <div className="container split">
          <ChecklistSection
            eyebrow="BUILT FOR REAL LIFE"
            headline="THIS PROGRAM IS FOR YOU IF…"
            accent="#60A5FA"
            points={[
              'You’ve struggled with consistency around nutrition',
              'You’ve tried restrictive diets that weren’t sustainable',
              'You want a personalised approach instead of generic meal plans',
              'You feel overwhelmed by conflicting nutrition advice online',
              'You want accountability and ongoing support',
              'You want to improve body composition without extreme dieting',
              'You want to build healthier habits that fit real life',
            ]}
          />

          <ChecklistSection
            eyebrow="WHAT'S INCLUDED"
            headline="EVERYTHING YOU NEED"
            accent="#F97316"
            points={[
              'Initial Consultation & Goal Assessment',
              'Comprehensive Nutrition & Lifestyle Questionnaire',
              'Fully Bespoke Nutrition Plan',
              'Individual Calorie & Macronutrient Targets',
              'Weekly Coaching Check-In Calls',
              'Weekly Nutrition & Habit Tracking',
              'Ongoing Accountability & Support',
              'InBody Scans & Progress Photos Every 4 Weeks',
            ]}
          />
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container split">
          <ChecklistSection
            eyebrow="WHY MOST PEOPLE STRUGGLE"
            headline="SUSTAINABLE NUTRITION WINS"
            accent="#F97316"
            points={[
              "No restrictive diets",
              "Personalised to your goals",
              "Focus on habits not quick fixes",
              "Regular accountability",
              "Sustainable results",
            ]}
          />

          <ChecklistSection
            eyebrow="RESULTS YOU CAN EXPECT"
            headline="WHAT YOU CAN EXPECT"
            accent="#60A5FA"
            points={[
              'Improve body composition and reduce body fat',
                'Develop healthier eating habits',
                'Feel more in control around food and nutrition',
                'Build consistency and routine',
                'Improve energy levels and overall lifestyle structure',
                'Gain clarity and confidence around nutrition',
                'Learn how to maintain results long term',
            ]}
          />
        </div>
      </section>

      <Split
        data={{
          headline: "A Coaching Process Built Around You",
          text:
            "Every client begins with an in-depth consultation and assessment process to understand your goals, current habits, lifestyle, training routine, food preferences, dieting history, and challenges.\n\n From there, we design a completely personalised nutrition strategy built specifically around your life and goals.\n\n Throughout the 12 weeks, you’ll receive ongoing support, accountability, regular progress reviews, and adjustments to ensure the plan continues working for you as you progress.\n\n This is not a quick-fix diet. It’s a structured coaching process designed to help you create sustainable results and long-term habits."
            ,
          image: "/1.jpg",
        }}
      />

      <CTABanner
        data={{
          headline: "Ready To Transform Your Nutrition?",
          text:
            "Apply for Nutrition Coaching today and start building habits that deliver lasting results.",
        }}
      />
    </>
  );
}