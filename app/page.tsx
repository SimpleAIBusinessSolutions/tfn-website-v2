import { getContent } from "@/lib/cms";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Split from "@/components/Split";

export default async function Page() {
  const content = await getContent();

  return (
    <>
      {/* HERO */}
      <Hero data={content["home.hero"]} />

      {/* FEATURES */}
      <FeatureGrid data={content["home.features"]} />

      {/* SPLIT */}
      <Split data={content["home.split"]} />
    </>
  );
}