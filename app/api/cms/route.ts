import { NextRequest, NextResponse } from "next/server";
import { getPageContent } from "@/lib/cms";

export async function GET(
  req: NextRequest
) {
  try {
    const { searchParams } =
      new URL(req.url);

    const page =
      searchParams.get("page") || "";

    const siteId =
      searchParams.get("site") || "tfn";

    const preview =
      searchParams.get("preview") ===
      "true";

    const content =
      await getPageContent(
        siteId,
        page,
        preview
      );

    return NextResponse.json(
      content
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "CMS error" },
      { status: 500 }
    );
  }
}