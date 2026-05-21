"use client";

import { useEffect } from "react";

interface Props {
  clientId: string;
  siteKey: string;
}

export default function VisitorTracker({
  clientId,
  siteKey,
}: Props) {
  useEffect(() => {
    async function trackVisit() {
      try {
        await fetch("/api/track", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            client_id: clientId,
            site_key: siteKey,
            event_type: "page_view",
            page:
              window.location.pathname,
            source:
              document.referrer ||
              "Direct",
          }),
        });
      } catch (error) {
        console.error(
          "Tracking failed",
          error
        );
      }
    }

    trackVisit();
  }, [clientId, siteKey]);

  return null;
}