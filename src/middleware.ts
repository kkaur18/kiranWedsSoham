import { NextRequest, NextResponse } from 'next/server';

// When a guest opens their invite link, silently store their code in a cookie
// so every other page (e.g. /events) can personalise content without re-prompting.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/invite\/([^/]+)$/);
  if (!match) return NextResponse.next();

  const code = decodeURIComponent(match[1]);
  const response = NextResponse.next();
  response.cookies.set('guest_code', code, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  });
  return response;
}

export const config = {
  matcher: '/invite/:code*',
};
