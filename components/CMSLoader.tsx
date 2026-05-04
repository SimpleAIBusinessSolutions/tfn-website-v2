"use client";

import { useEffect } from "react";

export default function CMSLoader() {
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("key");

    if (!key) return;

    const script = document.createElement("script");
    script.src = "https://YOUR-DASHBOARD.vercel.app/cms.js";
    script.async = true;

    script.onload = () => {
      window.__CMS__?.init({
        siteId: process.env.NEXT_PUBLIC_SITE_ID,
        key,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}