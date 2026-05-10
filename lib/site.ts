import { createClient }
from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getWebsite(
  siteKey: string
) {

  const { data, error } =
    await supabase
      .from("websites")
      .select("*")
      .eq("site_key", siteKey)
      .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}