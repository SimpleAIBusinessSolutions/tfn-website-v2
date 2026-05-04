import { getContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

export default async function Page() {
  const content = await getContent();

  return (
    <>
      <section className="hero text-center">
        <h1>{content["engine_hero_0"]?.heading}</h1>
        <p>{content["engine_hero_0"]?.subheading}</p>
      </section>

      <Split data={content["engine_split_1"]} />

      <CTABanner data={content["engine_cta_2"]} />
    </>
  );
}