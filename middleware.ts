import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  // ✅ ALLOW CMS PREVIEW
  if (key === "preview") {
    return NextResponse.next();
  }

  // 🔒 normal auth (if you use it)
  const token = request.cookies.get("sb-access-token");

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};