import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Remove unwanted query params (SEO Safe)
  const blockedParams = ["utm_source", "utm_medium", "utm_campaign", "fbclid", "gclid"];

  let shouldRedirect = false;
  blockedParams.forEach((param) => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  });

  // index.html → /
  if (url.pathname === "/index.html") {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // www → non-www
  const host = req.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const cleanUrl = new URL(req.url);
    cleanUrl.hostname = host.replace("www.", "");
    return NextResponse.redirect(cleanUrl, 301);
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

