import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const siteKey =
    request.nextUrl.searchParams.get("site");

  if (siteKey) {
    response.headers.set(
      "x-site-key",
      siteKey
    );
  }

  return response;
}

export const config = {
  matcher: ["/:path*"],
};