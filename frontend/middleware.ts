import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // ✅ index.html → /
  if (url.pathname === "/index.html") {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // ✅ Remove tracking params
  const blocked = ["utm_source", "utm_medium", "utm_campaign", "fbclid", "gclid"];
  let changed = false;

  blocked.forEach((p) => {
    if (url.searchParams.has(p)) {
      url.searchParams.delete(p);
      changed = true;
    }
  });

  if (changed) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

