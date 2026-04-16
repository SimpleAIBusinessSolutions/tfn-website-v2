import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getContent } from "@/lib/cms";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const content = await getContent();

    const websiteData = JSON.stringify(content).slice(0, 12000);

    const system = {
      role: "system",
      content: `
You are the True Fitness Naas AI assistant.

Your job:
- Answer questions using the website content provided below.
- Prioritise current website data over assumptions.
- Be friendly, concise and helpful.
- If pricing or schedules are missing, advise the user to contact the gym.
- Encourage enquiries when appropriate.
- Never invent services that are not listed.

Website Content:
${websiteData}
      `,
    };

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [system, ...messages],
      temperature: 0.4,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { reply: "Sorry, I could not respond right now." },
      { status: 500 }
    );
  }
}