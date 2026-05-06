import { headers } from "next/headers";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const headersList = headers();
  const host = headersList.get("host");

  // 🔥 get site by domain
  let { data: site } = await supabase
    .from("websites")
    .select("*")
    .eq("domain", host)
    .single();

  // fallback (for localhost)
  if (!site) {
    const { data } = await supabase
      .from("websites")
      .select("*")
      .limit(1)
      .single();

    site = data;
  }

  if (!site) return <div>No site found</div>;

  const page = site.config_json.pages.home;

  if (!page) return <div>No homepage</div>;

  return (
    <div>
      {page.sections.map((section: any, i: number) => {
        switch (section.type) {
          case "hero":
            return (
              <section key={i} className="hero">
                <h1>{section.data.heading}</h1>
                <p>{section.data.subheading}</p>
              </section>
            );

          case "split":
            return (
              <section key={i}>
                <h2>{section.data.headline}</h2>
                <p>{section.data.text}</p>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}