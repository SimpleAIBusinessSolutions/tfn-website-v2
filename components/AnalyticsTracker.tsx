"use client";

import { useEffect } from "react";

export default function AnalyticsTracker({
  clientId,
  siteKey,
}: {
  clientId: string;
  siteKey: string;
}) {

  useEffect(() => {

    async function trackPageView() {

      try {

        // VISITOR ID
        let visitorId =
          localStorage.getItem(
            "visitor_id"
          );

        if (!visitorId) {

          visitorId =
            crypto.randomUUID();

          localStorage.setItem(
            "visitor_id",
            visitorId
          );
        }

        // SESSION ID
        let sessionId =
          sessionStorage.getItem(
            "session_id"
          );

        if (!sessionId) {

          sessionId =
            crypto.randomUUID();

          sessionStorage.setItem(
            "session_id",
            sessionId
          );
        }

        await fetch(
          "https://dashboard.scholardigitalsolutions.ie/api/track",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              client_id: clientId,
              site_key: siteKey,

              event_type:
                "page_view",

              page:
                window.location.pathname,

              source:
                document.referrer,

              metadata: {

                visitor_id:
                  visitorId,

                session_id:
                  sessionId,

                screen_width:
                  window.innerWidth,

                screen_height:
                  window.innerHeight,

                language:
                  navigator.language,

                user_agent:
                  navigator.userAgent,

                url:
                  window.location.href,
              },
            }),
          }
        );

      } catch (err) {

        console.error(
          "Analytics tracking failed",
          err
        );
      }
    }

    trackPageView();

  }, [clientId, siteKey]);

  return null;
}