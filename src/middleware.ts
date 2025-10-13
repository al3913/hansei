import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If the request is for the site root, redirect to /inProgress
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/inProgress';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Only run this middleware for the root path
export const config = {
  matcher: '/',
};
