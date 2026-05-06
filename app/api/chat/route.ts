import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getContent } from "@/lib/cms";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, siteId, preview } = await req.json();

    if (!siteId) {
      return NextResponse.json(
        { reply: "Missing siteId" },
        { status: 400 }
      );
    }

    // ✅ FIX: pass correct args
    const content = await getContent(siteId, preview);

    const websiteData = JSON.stringify(content).slice(0, 12000);

    const system = {
      role: "system",
      content: `
You are a website AI assistant.

You have access to the website content below:
${websiteData}

Answer user questions based on this data.
Be concise and helpful.
`,
    };

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [system, ...messages],
      temperature: 0.7,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { reply: "Sorry, I could not respond right now." },
      { status: 500 }
    );
  }
}