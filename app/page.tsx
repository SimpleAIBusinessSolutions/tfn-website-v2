import Link from "next/link";
import { getContent } from "@/lib/cms";
import FeatureGrid from "@/components/FeatureGrid";
import Split from "@/components/Split";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Page({
  headers,
}: {
  headers: Headers;
}) {
  // ✅ Get domain from request
  const host = headers.get("host");

  // ✅ Find site by domain
  const { data: site } = await supabase
    .from("websites")
    .select("*")
    .eq("domain", host)
    .single();

  // ✅ fallback (first site if no domain match)
  if (!site) {
    const { data } = await supabase
      .from("websites")
      .select("*")
      .limit(1)
      .single();

    if (!data) return <div>No site found</div>;

    return renderPage(data);
  }

  return renderPage(site);
}

// 🔥 render function
async function renderPage(site: any) {
  const content = await getContent(site.id);

  return (
    <>
      {/* HERO */}
      <section style={{ padding: 80, textAlign: "center" }}>
        <h1>{content["hero_0_0"]?.heading || site.title}</h1>
        <p>{content["hero_0_0"]?.subheading}</p>

        <Link href="/contact" className="btn">
          {content["hero_0_0"]?.cta || "Start"}
        </Link>
      </section>

      <FeatureGrid data={content["featureGrid_0_1"]} />
      <Split data={content["split_0_2"]} />
    </>
  );
}