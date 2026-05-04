import Link from "next/link";
import { getContent } from "@/lib/cms";

export default async function Page() {
  const content = await getContent();

  const hero = content["membership_hero_0"];
  const plans = content["membership_plans_1"]?.items || [];
  const extras = content["membership_extras_2"]?.items || [];

  return (
    <>
      <section className="hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>{hero?.heading || "Membership"}</h1>
          <p className="muted">{hero?.subheading}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {plans.map((plan: any, i: number) => (
            <div key={i} className="card text-center">
              <h2>{plan.title}</h2>
              <p>{plan.price}</p>
              <ul>
                {plan.points?.map((p: string, j: number) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {extras.map((item: any, i: number) => (
            <div key={i} className="card text-center">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <ul>
                {item.points?.map((p: string, j: number) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}