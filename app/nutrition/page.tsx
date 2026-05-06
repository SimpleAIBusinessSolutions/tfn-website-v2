import { headers } from "next/headers";
import { getContent } from "@/lib/cms";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Split from "@/components/Split";

export default async function Page() {
  const headersList = headers();

  const siteId =
    headersList.get("x-site-id") ||
    process.env.NEXT_PUBLIC_SITE_ID!;

  const preview =
    headersList.get("referer")?.includes("key=preview") ??
    false;

  const content = await getContent(siteId, preview);

  return (
    <div>
      <Hero data={content["hero_6_0"]} />
      <FeatureGrid data={content["featureGrid_6_1"]} />
      <Split data={content["split_6_2"]} />
    </div>
  );
}