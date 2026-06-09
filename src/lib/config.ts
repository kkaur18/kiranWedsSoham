// ─── Update all values in this file to personalise your site ───────────────

export const config = {
  couple: {
    partner1: 'Kiran Kaur',
    partner2: 'Soham Kulkarni',
    combined: 'Kiran & Soham',
    hashtag: '#KiranWedsSoham',
  },

  // ISO date string used for the countdown timer
  weddingStartDate: '2026-12-31T08:00:00+05:30',
  weddingDateDisplay: 'January 2027',
  location: 'Goa, India',

  events: {
    mehendi_haldi: {
      isoDate: '2026-12-31T10:00:00+05:30',
      day: 'Day 1',
      dateDisplay: '[Day], [Date] December 2027',
      time: '10:00 AM – 2:00 PM',
      venue: '[Venue Name]',
      address: '[Area], Goa',
    },
    sangeet: {
      isoDate: '2026-12-31T19:00:00+05:30',
      day: 'Day 1',
      dateDisplay: '[Day], [Date] January 2027',
      time: '7:00 PM – Late',
      venue: '[Venue Name]',
      address: '[Area], Goa',
    },
    anand_karaj: {
      isoDate: '2027-12-06T08:00:00+05:30',
      day: 'Day 2',
      dateDisplay: '[Day], [Date] December 2027',
      time: '8:00 AM – 12:00 PM',
      venue: '[Gurudwara / Venue Name]',
      address: '[Area], Goa',
    },
    hindu_ceremony: {
      isoDate: '2027-12-06T14:00:00+05:30',
      day: 'Day 2',
      dateDisplay: '[Day], [Date] December 2027',
      time: '2:00 PM – 6:00 PM',
      venue: '[Venue Name]',
      address: '[Area], Goa',
    },
    reception: {
      isoDate: '2027-12-07T19:00:00+05:30',
      day: 'Day 3',
      dateDisplay: '[Day], [Date] December 2027',
      time: '7:00 PM – Late',
      venue: '[Venue Name]',
      address: '[Area], Goa',
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
    name: '[Contact Person]',
    phone: '[+91 XXXXX XXXXX]',
    email: '[email@example.com]',
    whatsappGroup: '[WhatsApp group link]',
  },
} as const;
