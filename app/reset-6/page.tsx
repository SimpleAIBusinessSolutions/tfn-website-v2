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
      RESET 6
    </h1>

    <p
      className="muted"
      style={{
        fontSize: 20,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      Reset Your Fitness, Strength & Routine in Just 6 Weeks.
            A structured coaching program designed for busy adults
            who want real guidance, accountability, and sustainable
            results — without the confusion or intimidation of
            traditional gyms.
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
              APPLY NOW
      </a>
    </div>
  </div>
</section>

      <Split
        data={{
          headline: "Built To Create Real Momentum",
          text:
           "Reset 6 is our guided 6-week onboarding program at True Fitness Naas designed to help you build consistency, improve fitness, and create a sustainable training routine that fits real life.\n\n Whether you’re getting back into training, starting for the first time, or frustrated with trying to figure it all out alone, Reset 6 gives you the structure, coaching, and support needed to finally build momentum.\n\n You’ll train inside our supportive class-based environment while following a structured pathway tailored to your fitness level, goals, and experience.",
          image: "/1.jpg",
        }}
      />

      <section className="section">
        <div className="container split">
          <ChecklistSection
            eyebrow="BUILT FOR REAL LIFE"
            headline="THIS PROGRAM IS FOR YOU IF…"
            accent="#60A5FA"
            points={[
                'You’ve struggled to stay consistent in the gym',
                'You feel unsure what to do when training',
                'You want guidance and accountability',
                'You’re tired of starting and stopping',
                'You want to improve fitness, strength, and body composition',
                'You want a supportive environment without ego or intimidation',
                'You’re looking for a realistic and sustainable approach to health and fitness',
            ]}
          />

          <ChecklistSection
            eyebrow="WHAT'S INCLUDED"
            headline="EVERYTHING YOU NEED"
            accent="#F97316"
            points={[
                'Initial InBody Scan & Goal Assessment',
                'Structured Coach-Supported Training Sessions',
                'A Personalised Training Pathway Based On Your Goals & Experience',
                '2–3 Sessions Per Week',
                'Nutrition Guidance & Meal Planning Resources',
                'Weekly Accountability Check-Ins',
                'Progress Tracking Throughout The Program',
                'Direct Coach Support Through Our Member App',
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
        "Most people don’t struggle because they lack motivation.",
        `They struggle because they’ve never had:
• Structure
• Accountability
• Proper guidance
• A realistic plan
• A sustainable approach`,
        "Nutrition coaching removes the guesswork completely.",
        "You simply follow a personalised plan, build habits that fit your lifestyle and receive ongoing support every step of the way.",
      ]}
    />
          <ChecklistSection
            eyebrow="RESULTS YOU CAN EXPECT"
            headline="WHAT YOU CAN EXPECT IN 6 WEEKS"
            accent="#60A5FA"
            points={[
                'Feel fitter and more energetic',
                'Build a consistent training routine',
                'Improve strength and overall fitness',
                'Feel more confident in the gym',
                'See noticeable body composition improvements',
                'Gain clarity around nutrition and recovery',
                'Finally feel back on track with their health and fitness'
            ]}
          />
        </div>
      </section>

      <Split
        data={{
          headline: "A Coaching Process Built Around You",
          text:
            "At True Fitness, every member follows a structured training pathway with ongoing coaching support and guidance throughout every session.\n\n Our coaches are there to help you:\n• Learn exercises correctly\n• Build confidence in training\n• Progress safely\n• Stay accountable\n• Adapt training to your ability level\n\nSessions are scalable for all fitness levels, meaning whether you’re a complete beginner or returning to training after time away, we’ll meet you where you’re at."
            ,
          image: "/2.jpg",
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