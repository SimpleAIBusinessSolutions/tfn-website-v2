"use client";

import { useEffect } from "react";

export default function CMSLoader() {
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("key");

    if (!key) return;

    const script = document.createElement("script");
    script.src = "https://website-ai-builder-eight.vercel.app/cms.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).__CMS__) {
        (window as any).__CMS__.init({
          key,
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
          supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}