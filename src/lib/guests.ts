import { getSheetRows } from './sheets';
import type { EventId } from './events';

export interface Guest {
  code: string;
  name: string;
  events: EventId[];
  maxPartySize: number;
}

// Guests sheet columns: A=Code, B=Name, C=Events (comma-separated), D=MaxPartySize
export async function getGuestByCode(code: string): Promise<Guest | null> {
  const rows = await getSheetRows('Guests!A2:D');
  const row = rows.find((r) => r[0]?.trim().toLowerCase() === code.trim().toLowerCase());
  if (!row) return null;
  return {
    code: row[0].trim(),
    name: row[1]?.trim() ?? 'Guest',
    events: (row[2] ?? '')
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean) as EventId[],
    maxPartySize: parseInt(row[3] ?? '2', 10) || 2,
  };
}
