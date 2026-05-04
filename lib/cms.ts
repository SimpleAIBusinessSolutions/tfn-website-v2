
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getContent() {
  const { data } = await supabase
    .from("content")
    .select("*")
    .eq("site_id", process.env.NEXT_PUBLIC_SITE_ID);

  const map: Record<string, any> = {};

  data?.forEach((item) => {
    map[item.key] = item.published;
  });

  return map;
}
