import { headers } from "next/headers";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Split from "@/components/Split";

export default async function Page() {
  // ✅ GET DOMAIN (CORRECT WAY)
  const headersList = headers();
  const host = headersList.get("host");

  // ✅ FETCH SITE BY DOMAIN
  let { data: site } = await supabase
    .from("websites")
    .select("*")
    .eq("domain", host)
    .single();

  // ✅ FALLBACK (PREVENT 403 / BLANK)
  if (!site) {
    const { data } = await supabase
      .from("websites")
      .select("*")
      .limit(1)
      .single();

    site = data;
  }

  if (!site) {
    return <div style={{ padding: 40 }}>No site found</div>;
  }

  // ✅ LOAD CMS CONTENT
  const content = site.config_json;

  return (
    <>
      <Hero data={content?.hero_0_0} />
      <FeatureGrid data={content?.featureGrid_0_1} />
      <Split data={content?.split_0_2} />
    </>
  );
}