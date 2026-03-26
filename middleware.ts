import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get("xouston_locale")?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country && ["GB", "IE", "DE", "FR", "ES", "IT", "NL", "SE", "NO", "PL"].includes(country)) {
    return "en";
  }

  const language = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (language.startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    return NextResponse.next();
  }

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
