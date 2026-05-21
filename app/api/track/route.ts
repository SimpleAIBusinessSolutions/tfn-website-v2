import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      client_id,
      site_key,
      event_type,
      page,
      source,
    } = body;

    const { error } =
      await supabase
        .from("analytics_events")
        .insert({
          client_id,
          site_key,
          event_type,
          page,
          source,
        });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Tracking failed",
      },
      { status: 500 }
    );
  }
}