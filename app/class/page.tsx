import Link from "next/link";
import { getContent } from "@/lib/cms";

export default async function Page() {
  const content = await getContent();

  const hero = content["class_hero_0"];
  const classes = content["class_list_1"]?.items || [];

  return (
    <>
      <section className="hero" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>{hero?.heading || "Classes"}</h1>
          <p className="muted">{hero?.subheading}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {classes.map((item: any, i: number) => (
            <Link key={i} href={item.href}>
              <div className="card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>

                <ul>
                  {item.points?.map((p: string, j: number) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>

                <span className="btn">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}