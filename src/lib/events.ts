import { config } from './config';

export type EventId =
  | 'mehendi_haldi'
  | 'sangeet'
  | 'anand_karaj'
  | 'hindu_ceremony'
  | 'reception';

export interface WeddingEvent {
  id: EventId;
  name: string;
  shortName: string;
  isoDate: string;
  day: string;
  dateDisplay: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  attire: string;
  note?: string;
  accentColor: string;       // Tailwind bg class
  accentText: string;        // Tailwind text class
  accentBorder: string;      // Tailwind border class
  badgeStyle: string;        // inline style hex for the day badge
}

export const EVENTS: Record<EventId, WeddingEvent> = {
  mehendi_haldi: {
    id: 'mehendi_haldi',
    name: 'Mehendi & Haldi',
    shortName: 'Mehendi',
    ...config.events.mehendi_haldi,
    description:
      'An afternoon of henna art, turmeric rituals, and folk music. Come ready to get colourful — and to have your hands covered in beautiful mehndi!',
    attire: 'Yellow, green or floral ethnic wear recommended',
    accentColor: 'bg-emerald-50',
    accentText: 'text-emerald-800',
    accentBorder: 'border-emerald-500',
    badgeStyle: '#16a34a',
  },
  sangeet: {
    id: 'sangeet',
    name: 'Sangeet & Cocktail',
    shortName: 'Sangeet',
    ...config.events.sangeet,
    description:
      'An evening of Bollywood, dancing, cocktails, and celebrations. Expect performances from both families — and the dance floor open all night.',
    attire: 'Festive — sequins, colour, and glamour highly encouraged',
    accentColor: 'bg-pink-50',
    accentText: 'text-pink-800',
    accentBorder: 'border-pink-500',
    badgeStyle: '#be185d',
  },
  anand_karaj: {
    id: 'anand_karaj',
    name: 'Anand Karaj',
    shortName: 'Anand Karaj',
    ...config.events.anand_karaj,
    description:
      'The Sikh wedding ceremony — a sacred union of two souls as they circle the Guru Granth Sahib four times. A deeply spiritual and beautiful morning.',
    attire: 'Traditional ethnic wear. Please cover your head (dupattas/scarves provided at the entrance). Remove footwear before entering.',
    note: 'Please arrive promptly. The ceremony begins at the announced time.',
    accentColor: 'bg-blue-50',
    accentText: 'text-blue-800',
    accentBorder: 'border-blue-500',
    badgeStyle: '#1d4ed8',
  },
  hindu_ceremony: {
    id: 'hindu_ceremony',
    name: 'Hindu Wedding Ceremony',
    shortName: 'Hindu Ceremony',
    ...config.events.hindu_ceremony,
    description:
      'The Hindu wedding with sacred Vedic rituals, the pheras around the holy fire, and the exchange of vows. A vibrant, joyful, and deeply meaningful afternoon.',
    attire: 'Traditional or semi-formal ethnic wear — sarees, sherwanis, lehengas, kurtas',
    accentColor: 'bg-orange-50',
    accentText: 'text-orange-800',
    accentBorder: 'border-orange-500',
    badgeStyle: '#ea580c',
  },
  reception: {
    id: 'reception',
    name: 'Reception & Dinner',
    shortName: 'Reception',
    ...config.events.reception,
    description:
      'Celebrate with us at our grand reception — an evening of gourmet dining, live music, and dancing to close out a beautiful few days together.',
    attire: 'Formal or festive — Indian or Western. This is the night to dress up!',
    accentColor: 'bg-purple-50',
    accentText: 'text-purple-800',
    accentBorder: 'border-purple-500',
    badgeStyle: '#7c3aed',
  },
};

export const EVENT_ORDER: EventId[] = [
  'mehendi_haldi',
  'sangeet',
  'anand_karaj',
  'hindu_ceremony',
  'reception',
];

export function getEventsForGuest(eventIds: EventId[]): WeddingEvent[] {
  return EVENT_ORDER.filter((id) => eventIds.includes(id)).map((id) => EVENTS[id]);
}
