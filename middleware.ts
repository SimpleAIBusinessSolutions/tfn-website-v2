import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const key = searchParams.get("key");

  // ✅ Allow preview mode
  if (key === "preview") {
    return NextResponse.next();
  }

  // ✅ Allow static files (favicon, images, etc)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/)
  ) {
    return NextResponse.next();
  }

  // ✅ Allow public website (IMPORTANT)
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};