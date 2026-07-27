import { config } from './config';

export type EventId =
  | 'mehndi'
  | 'gala'
  | 'haldi'
  | 'shrimanti_pooja'
  | 'sangeet'
  | 'baraat'
  | 'anand_karaj'
  | 'vedic_shaadi'
  | 'wedding_dinner'
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
  accentColor: string;
  accentText: string;
  accentBorder: string;
  badgeStyle: string;
}

export const EVENTS: Record<EventId, WeddingEvent> = {
  mehndi: {
    id: 'mehndi',
    name: 'Mehndi',
    shortName: 'Mehndi',
    ...config.events.mehndi,
    description:
      'Henna, music, and the first celebrations of the week. An intimate afternoon of intricate mehndi designs, laughter, and the beginning of something beautiful.',
    attire: 'Bright colors encouraged',
    accentColor: 'bg-emerald-50',
    accentText: 'text-emerald-800',
    accentBorder: 'border-emerald-500',
    badgeStyle: '#16a34a',
  },
  gala: {
    id: 'gala',
    name: 'Gala',
    shortName: 'Gala',
    ...config.events.gala,
    description:
      'An elegant evening to kick off the celebrations — cocktails, canapes, and the perfect chance to get to know the people who matter most to Kiran and Soham.',
    attire: 'Smart formal or festive ethnic wear',
    accentColor: 'bg-indigo-50',
    accentText: 'text-indigo-800',
    accentBorder: 'border-indigo-500',
    badgeStyle: '#4338ca',
  },
  haldi: {
    id: 'haldi',
    name: 'Haldi',
    shortName: 'Haldi',
    ...config.events.haldi,
    description:
      'Turmeric, blessings, and joyful chaos — the haldi ceremony is a riot of colour and tradition that readies the bride and groom for the ceremonies ahead. Wear something you don\'t mind getting yellow.',
    attire: 'Yellow, orange, or fushcia pink highly recommended!',
    accentColor: 'bg-amber-50',
    accentText: 'text-amber-800',
    accentBorder: 'border-amber-500',
    badgeStyle: '#d97706',
  },
  shrimanti_pooja: {
    id: 'shrimanti_pooja',
    name: 'Shrimanti Pooja',
    shortName: 'Shrimanti',
    ...config.events.shrimanti_pooja,
    description:
      'A sacred Maharashtrian pre-wedding ritual where the couple is honoured by their families with prayers and blessings for their new journey ahead.',
    attire: 'Ethnic wear recommended',
    accentColor: 'bg-rose-50',
    accentText: 'text-rose-800',
    accentBorder: 'border-rose-500',
    badgeStyle: '#be123c',
  },
  sangeet: {
    id: 'sangeet',
    name: 'Sangeet & Cocktail',
    shortName: 'Sangeet',
    ...config.events.sangeet,
    description:
      'Both families take the stage, the bar is open, and the dance floor doesn\'t close. Performances, Bollywood, and a night that goes longer than anyone planned.',
    attire: 'Festive — sequins, colour, and glamour highly encouraged',
    accentColor: 'bg-pink-50',
    accentText: 'text-pink-800',
    accentBorder: 'border-pink-500',
    badgeStyle: '#be185d',
  },
  baraat: {
    id: 'baraat',
    name: 'Baraat',
    shortName: 'Baraat',
    ...config.events.baraat,
    description:
      'The groom\'s procession — dancing, dhol, and the whole wedding party arriving in style. Join the baraat and help usher Soham to the Gurdwara in true celebratory fashion.',
    accentColor: 'bg-orange-50',
    accentText: 'text-orange-800',
    accentBorder: 'border-orange-500',
    badgeStyle: '#ea580c',
  },
  anand_karaj: {
    id: 'anand_karaj',
    name: 'Anand Karaj',
    shortName: 'Anand Karaj',
    ...config.events.anand_karaj,
    description:
      'Anand Karaj means "blissful union." Four sacred rounds of the Guru Granth Sahib, four vows, and a ceremony rooted in centuries of Sikh tradition — witnessing Kiran and Soham begin their life together.',
    attire: 'Traditional ethnic wear encouraged. Please cover your head (dupattas/scarves provided at the entrance if needed).',
    accentColor: 'bg-blue-50',
    accentText: 'text-blue-800',
    accentBorder: 'border-blue-500',
    badgeStyle: '#1d4ed8',
  },
  vedic_shaadi: {
    id: 'vedic_shaadi',
    name: 'Vedic Shaadi',
    shortName: 'Vedic Shaadi',
    ...config.events.vedic_shaadi,
    description:
      'The Vedic wedding ceremony: agni as witness, seven pheras around the sacred fire, seven vows. A vibrant, meaningful ceremony that unites two families and two traditions.',
    attire: 'Traditional or semi-formal ethnic wear — sarees, sherwanis, lehengas, kurtas',
    accentColor: 'bg-red-50',
    accentText: 'text-red-800',
    accentBorder: 'border-red-500',
    badgeStyle: '#dc2626',
  },
  wedding_dinner: {
    id: 'wedding_dinner',
    name: 'Wedding Dinner',
    shortName: 'Dinner',
    ...config.events.wedding_dinner,
    description:
      'A celebratory dinner following the ceremonies — a moment to sit together, share a meal, and toast to the newly married couple surrounded by the people they love.',
    accentColor: 'bg-teal-50',
    accentText: 'text-teal-800',
    accentBorder: 'border-teal-500',
    badgeStyle: '#0f766e',
  },
  reception: {
    id: 'reception',
    name: 'Reception',
    shortName: 'Reception',
    ...config.events.reception,
    description:
      'The grand finale — a night to celebrate with everyone who helped make this story possible.',
    attire: 'Formal or festive — Indian or Western. This is a night to dress up!',
    accentColor: 'bg-purple-50',
    accentText: 'text-purple-800',
    accentBorder: 'border-purple-500',
    badgeStyle: '#7c3aed',
  },
};

// Must match the sheet column order exactly: C=mehndi, D=gala, E=haldi, F=shrimanti_pooja,
// G=sangeet, H=baraat, I=anand_karaj, J=vedic_shaadi, K=wedding_dinner, L=reception
export const EVENT_ORDER: EventId[] = [
  'mehndi',
  'gala',
  'haldi',
  'shrimanti_pooja',
  'sangeet',
  'baraat',
  'anand_karaj',
  'vedic_shaadi',
  'wedding_dinner',
  'reception',
];

export function getEventsForGuest(eventIds: EventId[]): WeddingEvent[] {
  return EVENT_ORDER.filter((id) => eventIds.includes(id)).map((id) => EVENTS[id]);
}
