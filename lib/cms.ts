import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getContent(
  siteId: string,
  preview = false
) {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("site_id", siteId);

  if (error) {
    console.error("CMS error:", error.message);
    return {};
  }

  const map: Record<string, any> = {};

  data?.forEach((item) => {
    map[item.key] = preview
      ? item.draft
      : item.published;
  });

  return map;
}