import { NextRequest, NextResponse } from 'next/server';
import { getSheetRows, appendRow, updateRow } from '@/lib/sheets';
import { getGuestByEmail } from '@/lib/guests';

// RSVPs sheet: A=Guest Name, B=Guest Email, C=Arrival Date, D=Arrival Time,
// E=Departure Date, F=Departure Time, G=Number of People
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, arrival, arrivalTime, departure, departureTime, partySize } = body;

    if (!email || !arrival || !arrivalTime || !departure || !departureTime || !partySize) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const guest = await getGuestByEmail(email);
    if (!guest) {
      return NextResponse.json({ error: 'Guest not found.' }, { status: 404 });
    }

    const rows = await getSheetRows('RSVPs!A2:G');
    const target = email.replace(/\s+/g, '').toLowerCase();
    const rowIndex = rows.findIndex(
      (r) => r[1] && r[1].replace(/\s+/g, '').toLowerCase() === target
    );

    const values = [arrival, arrivalTime, departure, departureTime, String(partySize)];

    if (rowIndex === -1) {
      await appendRow('RSVPs!A:G', [guest.name, guest.email, ...values]);
    } else {
      const sheetRow = rowIndex + 2;
      await updateRow(`RSVPs!C${sheetRow}:G${sheetRow}`, values);
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
