import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const siteId = request.nextUrl.searchParams.get("site");

  if (siteId) {
    response.headers.set("x-site-id", siteId);
  }

  return response;
}

export const config = {
  matcher: ["/:path*"],
};