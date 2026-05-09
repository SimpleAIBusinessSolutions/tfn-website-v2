import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getPageContent(
  siteId: string,
  page: string,
  preview = false
) {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("site_id", siteId)
    .eq("page", page);

  if (error) {
    console.error("CMS ERROR:", error);
    return {};
  }

  const content: Record<string, unknown> = {};

  data.forEach((item) => {
    content[item.key] = preview
      ? item.draft
      : item.published;
  });

  return content;
}