// ─── Update all values in this file to personalise your site ───────────────

export const config = {
  couple: {
    partner1: 'Kiran Kaur',
    partner2: 'Soham Kulkarni',
    combined: 'Kiran & Soham',
    hashtag: '#KiranWedsSoham',
  },

  // ISO date string used for the countdown timer (set to your first event)
  weddingStartDate: '2026-12-31T08:00:00+05:30',
  weddingDateDisplay: 'January 2027',
  location: 'Goa, India',

  // Public site URL — used for link-preview metadata (WhatsApp, iMessage, etc).
  // Update this if you attach a custom domain.
  siteUrl: 'https://wedding-website-1056511474685.us-central1.run.app',

  events: {
    mehndi: {
      isoDate: '2026-12-31T10:00:00+05:30',
      day: 'Dec 31',
      dateDisplay: 'December 31, 2026',
      time: '3:00 pm - 7:00pm',
      venue: 'Nanu Resort',
    },
    gala: {
      isoDate: '2026-12-31T19:00:00+05:30',
      day: 'Dec 31',
      dateDisplay: 'December 31, 2026',
      time: '8:oopm onwards',
      venue: 'Nanu Resort',
    },
    haldi: {
      isoDate: '2027-01-01T10:00:00+05:30',
      day: 'Jan 1',
      dateDisplay: 'January 1, 2027',
      time: '10:30am - 3:30pm',
      venue: 'Nanu Resort',
    },
    shrimanti_pooja: {
      isoDate: '2027-01-01T14:00:00+05:30',
      day: 'Jan 1',
      dateDisplay: 'January 1, 2027',
      time: '5:00pm - 6:00pm',
      venue: 'Nanu Resort',
    },
    sangeet: {
      isoDate: '2027-01-01T19:00:00+05:30',
      day: 'Jan 1',
      dateDisplay: 'January 1, 2027',
      time: '7:00 PM onwards',
      venue: 'Nanu Resort',
    },
    baraat: {
      isoDate: '2027-01-02T08:00:00+05:30',
      day: 'Jan 2',
      dateDisplay: 'January 2, 2027',
      time: '8:30am - 9:30am',
      venue: 'Nanu Resort',
    },
    anand_karaj: {
      isoDate: '2027-01-02T10:00:00+05:30',
      day: 'Jan 2',
      dateDisplay: 'January 2, 2027',
      time: '10:00am - 12:00pm',
      venue: 'Gurudwara 3 MTR',
      address: '7X5J+XXP, Aquem Baixo, Goa 403729, India',
    },
    vedic_shaadi: {
      isoDate: '2027-01-02T14:00:00+05:30',
      day: 'Jan 2',
      dateDisplay: 'January 2, 2027',
      time: '5:00pm - 7:30pm',
      venue: 'Nanu Resort',
    },
    wedding_dinner: {
      isoDate: '2027-01-02T19:00:00+05:30',
      day: 'Jan 2',
      dateDisplay: 'January 2, 2027',
      time: '8:00pm onwards',
      venue: 'Nanu Resort',
    },
    reception: {
      isoDate: '2027-01-05T19:00:00+05:30',
      day: 'Jan 5',
      dateDisplay: 'January 5, 2027',
      time: '7:00 PM – Late',
      venue: 'Marigold Banquet Hall',
      address: 'Opp, Windmill Village Rd, Windmill Village, Bavdhan, Pune, Maharashtra 411021, India',
    },
  },

  stay: {
    primary: {
      name: '[Hotel / Villa Name]',
      description:
        'We have reserved a block of rooms for our guests. Use the code below when booking to receive our group rate.',
      bookingCode: '[BOOKING CODE]',
      address: '[Street Address], [Area], Goa',
      checkIn: '[Date]',
      checkOut: '[Date]',
      contactName: '[Coordinator Name]',
      contactPhone: '[+91 XXXXX XXXXX]',
    },
    alternatives: [
      { name: '[Nearby Hotel 1]', area: '[Area], Goa', priceRange: '₹[X,XXX]–[X,XXX] per night' },
      { name: '[Nearby Hotel 2]', area: '[Area], Goa', priceRange: '₹[X,XXX]–[X,XXX] per night' },
    ],
  },

  transport: {
    airport: {
      name: 'Goa International Airport (GOI / Dabolim)',
      note: 'We are arranging complimentary airport pickups for all outstation guests.',
      howToBook: 'Details to come',
    },
  },

  contact: {
    name: 'To Come',
    phone: 'To Come',
  },

  story: [
    {
      date: 'October 2021',
      title: "A friend's birthday party",
      body: "They met in their second year of college at a friend's birthday — and became fast friends almost immediately.",
    },
    {
      date: '2021 – 2024',
      title: 'Best friends',
      body: 'Two and a half years of late nights, shared secrets, and showing up for each other through every high and every hard day.',
    },
    {
      date: 'March 2024',
      title: 'Something more',
      body: 'After years of real friendship, they chose, together, to start something new.',
    },
    {
      date: 'May 2024',
      title: 'Graduates',
      body: 'They walked across the stage together — then stepped into different cities, but never really apart.',
    },
    {
      date: 'August 2025',
      title: 'He asked. She said yes.',
      body: 'Obviously.',
    },
    {
      date: 'Goa, 2027',
      title: 'And so it begins',
      body: 'The beginning of the rest of their story — with everyone they love.',
    },
  ],
} as const;
