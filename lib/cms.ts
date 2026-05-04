import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getContent() {
  let isPreview = false;

  // ✅ Detect preview mode (browser only)
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    isPreview = params.get("key") === "preview";
  }

  const { data } = await supabase
    .from("content")
    .select("*")
    .eq("site_id", process.env.NEXT_PUBLIC_SITE_ID);

  const map: Record<string, any> = {};

  data?.forEach((item) => {
    const key = `${item.page}.${item.key}`;

    // ✅ preview = draft, live = published
    map[key] = isPreview ? item.draft : item.published;
  });

  return map;
}