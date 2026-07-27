import { NextRequest, NextResponse } from 'next/server';
import { getGuestByEmail } from '@/lib/guests';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const guest = await getGuestByEmail(email.trim());
    if (!guest) {
      return NextResponse.json(
        { error: 'We couldn\'t find your email in our guest list. Please double-check and try again.' },
        { status: 404 }
      );
    }

    const response = NextResponse.json({ name: guest.name });
    response.cookies.set('guest_email', guest.email, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
    });
    return response;
  } catch (err) {
    console.error('[Guest Login API]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
