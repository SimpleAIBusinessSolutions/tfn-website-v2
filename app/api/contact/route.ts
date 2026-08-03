import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Replace with a verified sending address on your own domain once
        // set up in Resend — onboarding@resend.dev only works for testing
        // and only delivers to the Resend account owner's own email.
        from:
          process.env.CONTACT_EMAIL_FROM ||
          "True Fitness Naas <onboarding@resend.dev>",
        to: ["dave@tfn.ie"],
        reply_to: email,
        subject: `New TFN Contact Form: ${name}`,
        text: `Name: ${name}
Email: ${email}

${message}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
