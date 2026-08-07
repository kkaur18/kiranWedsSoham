import { getSheetRows } from './sheets';
import { EVENT_ORDER, type EventId } from './events';

export interface Guest {
  email: string;
  name: string;
  events: EventId[];
}

function normalizeEmail(email: string): string {
  return email.replace(/\s+/g, '').toLowerCase();
}

// Guests sheet columns: A=Name, B=Email, C=Mehndi, D=Gala, E=Haldi, F=Shrimanti Pooja,
// G=Sangeet, H=Baraat, I=Anand Karaj, J=Vedic Shaadi, K=Wedding Dinner, L=Reception
// Event columns contain "Yes" (case-insensitive) if the guest is invited to that event.
export interface GuestStay {
  accommodationName: string;
  accommodationAddress: string;
  roomNumber: string;
}

// Stay sheet columns: A=Guest Name, B=Guest Email, C=Accommodation Name,
// D=Accommodation Address, E=Room Number (if applicable)
export async function getGuestStay(email: string): Promise<GuestStay | null> {
  const rows = await getSheetRows('Stay!A2:E');
  const target = normalizeEmail(email);
  const row = rows.find((r) => r[1] && normalizeEmail(r[1]) === target);
  if (!row) return null;
  return {
    accommodationName: row[2]?.trim() ?? '',
    accommodationAddress: row[3]?.trim() ?? '',
    roomNumber: row[4]?.trim() ?? '',
  };
}

export async function getGuestByEmail(email: string): Promise<Guest | null> {
  const rows = await getSheetRows('Guests!A2:L');
  const target = normalizeEmail(email);
  const row = rows.find((r) => r[1] && normalizeEmail(r[1]) === target);
  if (!row) return null;

  const events = EVENT_ORDER.filter((_, i) => row[i + 2]?.trim().toLowerCase() === 'yes');

  return {
    name: row[0]?.trim() ?? 'Guest',
    email: row[1].trim(),
    events,
  };
}
