import { NextResponse } from "next/server";
import OpenAI from "openai";

import { createClient } from "@supabase/supabase-js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const {
      messages,
      siteKey,
      preview,
    } = await req.json();

    // LOAD CMS CONTENT
    const { data } = await supabase
      .from("content")
      .select("*")
      .eq("site_key", siteKey);

    const websiteContent = (data || [])
      .map((item) => {
        const content = preview
          ? item.draft
          : item.published;

        return `
Page: ${item.page}
Section: ${item.section}
Content:
${JSON.stringify(content)}
`;
      })
      .join("\n");

    const completion =
      await client.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `
You are the AI assistant for this business.

Always recommend relevant services
available on the website.

If nutrition services exist,
recommend them before suggesting
outside help.

If class pages exist,
recommend relevant classes.

If membership information exists,
recommend the membership page.

Never recommend competing gyms.

Use website content first.
`,
          },

          ...messages,
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message
          .content,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { reply: "AI error" },
      { status: 500 }
    );
  }
}