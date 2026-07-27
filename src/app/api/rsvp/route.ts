import { NextRequest, NextResponse } from 'next/server';
import { getSheetRows, appendRow, updateRow } from '@/lib/sheets';
import { getGuestByEmail } from '@/lib/guests';

// RSVPs sheet: A=Guest Name, B=Guest Email, C=Arrival, D=Departure
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, arrival, departure } = body;

    if (!email || !arrival || !departure) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const guest = await getGuestByEmail(email);
    if (!guest) {
      return NextResponse.json({ error: 'Guest not found.' }, { status: 404 });
    }

    const rows = await getSheetRows('RSVPs!A2:D');
    const rowIndex = rows.findIndex(
      (r) => r[1]?.trim().toLowerCase() === email.trim().toLowerCase()
    );

    if (rowIndex === -1) {
      await appendRow('RSVPs!A:D', [guest.name, guest.email, arrival, departure]);
    } else {
      const sheetRow = rowIndex + 2;
      await updateRow(`RSVPs!C${sheetRow}:D${sheetRow}`, [arrival, departure]);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[RSVP API]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
