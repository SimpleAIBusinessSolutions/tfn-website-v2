import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const system = {
      role: 'system',
      content: `You are the True Fitness Naas AI assistant. 
      Be helpful, concise and friendly. Use these facts: 
      Location: Unit 7, M7 Business Park, Naas, Co Kildare. 
      Email: dave@tfn.ie. Phone: 083 112 1188. 
      Classes: Strength, Blitz, Engine, Survival. 
      Nutrition: 1-1 Coaching and 6 Week Nutrition Kickstart. 
      Memberships: Bronze €70, Silver €90, Gold €105, Platinum €115, Trial week €30, try before you buy €15. 
      Encourage users to contact the gym for personalised help.`
    };

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [system, ...messages],
      temperature: 0.7,
    });

    return NextResponse.json({ reply: completion.choices[0].message.content });
  } catch (e) {
    return NextResponse.json({ reply: 'Sorry, I could not respond right now.' }, { status: 500 });
  }
}