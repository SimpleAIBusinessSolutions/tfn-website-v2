import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (e) {
    return NextResponse.json(
      { reply: "AI error" },
      { status: 500 }
    );
  }
}