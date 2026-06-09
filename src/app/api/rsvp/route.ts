import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { getGuestByCode } from '@/lib/guests';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, attending, partySize, dietary, songRequest, message } = body;

    if (!code || attending === undefined || attending === null) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const guest = await getGuestByCode(code);
    if (!guest) {
      return NextResponse.json({ error: 'Invalid invite code.' }, { status: 404 });
    }

    const timestamp = new Date().toISOString();

    // Append to the "RSVPs" sheet
    // Columns: Timestamp | Code | Name | Attending | PartySize | Dietary | SongRequest | Message
    await appendRow('RSVPs!A:H', [
      timestamp,
      guest.code,
      guest.name,
      attending ? 'Yes' : 'No',
      attending ? String(partySize ?? 1) : '0',
      (dietary ?? '').trim(),
      (songRequest ?? '').trim(),
      (message ?? '').trim(),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[RSVP API]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
