import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host === "asridge.com" || host === "www.asridge.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = "asridge.ca";
    // path and query string are preserved automatically by clone() -
    // asridge.com/services?x=1 redirects to asridge.ca/services?x=1,
    // not just to the .ca homepage.
    return NextResponse.redirect(url, 301); // 301 = permanent, transfers SEO ranking signal
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};