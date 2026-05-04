"use client";

import { useState, useEffect } from "react";
import { getContent } from "@/lib/cms";

export default function Page() {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    getContent().then(setContent);
  }, []);

  return (
    <>
      <section className="hero text-center">
        <h1>{content["contact_hero_0"]?.heading}</h1>
        <p>{content["contact_hero_0"]?.subheading}</p>
      </section>

      <section className="section">
        <p>{content["contact_info_1"]?.address}</p>
        <p>{content["contact_info_1"]?.email}</p>
        <p>{content["contact_info_1"]?.phone}</p>
      </section>
    </>
  );
}