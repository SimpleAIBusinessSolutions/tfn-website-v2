import { getContent } from "@/lib/cms";
import Split from "@/components/Split";
import CTABanner from "@/components/CTABanner";

export default async function Page() {
  const content = await getContent();

  return (
    <>
      <section className="hero text-center">
        <h1>{content["blitz_hero_0"]?.heading}</h1>
        <p>{content["blitz_hero_0"]?.subheading}</p>
      </section>

      <Split data={content["blitz_split_1"]} />

      <CTABanner data={content["blitz_cta_2"]} />
    </>
  );
}