
"use client";

import { useEffect } from "react";

export default function CMSLoader() {
  useEffect(() => {
    // 🔥 Get edit key from URL
    const key = new URLSearchParams(window.location.search).get("key");

    if (!key) return; // no CMS if no key

    // 🔥 Inject remote CMS script
    const script = document.createElement("script");
    script.src = "https://website-ai-builder-eight.vercel.app/cms.js"; // 🔥 CHANGE THIS
    script.async = true;

    script.onload = () => {
      // 🔥 Initialise CMS after load
      if (window.__CMS__) {
        window.__CMS__.init({
          siteId: process.env.NEXT_PUBLIC_SITE_ID,
          key,
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
          supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null; // 🔥 no UI rendered directly
}
