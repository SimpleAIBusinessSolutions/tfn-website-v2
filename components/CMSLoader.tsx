"use client";

import { useEffect } from "react";

export default function CMSLoader() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const siteId = params.get("site");

    if (!key || !siteId) return;

    const script = document.createElement("script");
    script.src = "https://website-ai-builder-eight.vercel.app/cms.js";
    script.async = true;

    script.onload = () => {
      if (window.__CMS__) {
        window.__CMS__.init({
          siteId,
          key,
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
          supabaseAnonKey:
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}