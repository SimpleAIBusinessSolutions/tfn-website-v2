"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface Props {
  websiteId: string;
}

export default function VisitorTracker({
  websiteId,
}: Props) {
  useEffect(() => {
    async function trackVisit() {
      try {
        const supabase = createClient();

        const page = window.location.pathname;

        const referrer =
          document.referrer || "Direct";

        const userAgent = navigator.userAgent;

        let device = "Desktop";

        if (/mobile/i.test(userAgent)) {
          device = "Mobile";
        }

        await supabase.from("visits").insert({
          website_id: websiteId,
          page,
          referrer,
          user_agent: userAgent,
          device,
        });
      } catch (error) {
        console.error(error);
      }
    }

    trackVisit();
  }, [websiteId]);

  return null;
}