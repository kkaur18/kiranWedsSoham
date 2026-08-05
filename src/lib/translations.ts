import type { Locale } from './i18n';

export interface T {
  nav: {
    events: string;
    stayTransport: string;
  };
  countdown: {
    label: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
  };
  home: {
    tagline: string;
    weHaveTakenCare: string;
    joinUsTitle: string;
    stayTitle: string;
    stayDesc: string;
    stayLink: string;
    transportTitle: string;
    transportDesc: string;
    transportLink: string;
  };
  events: {
    tagline: string;
    welcomePrefix: string; // prepended to guest name: "[welcomePrefix] Kiran"
    noEvents: string;
    rsvpTagline: string;
    rsvpTitle: string;
    noInviteTitle: string;
    noInviteDesc: string;
    noInviteContact: string;
  };
  rsvp: {
    attendingQ: string;
    accepts: string;
    declines: string;
    partySizeQ: string;
    maxLabel: string;
    dietaryQ: string;
    dietaryHint: string;
    dietaryPlaceholder: string;
    songQ: string;
    songPlaceholder: string;
    messageQ: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successAttendingTitle: string;
    successAttendingBody: string;
    successDeclineTitle: string;
    successDeclineBody: string;
  };
  info: {
    heroTagline: string;
    heroTitle: string;
    heroDesc: string;
    stayTitle: string;
    accommodationBadge: string;
    transportTitle: string;
    airportTitle: string;
    howToBook: string;
    contactTitle: string;
    contactDesc: string;
    whatsapp: string;
  };
  invite: {
    tagline: string;
    dear: string;
    subtitle: string;
    invitationIncludes: string;
    celebrationsTitle: string;
    noEvents: string;
    respondBy: string;
    infoDesc: string;
    infoLink: string;
  };
  story: {
    tagline: string;
    title: string;
  };
  gallery: {
    tagline: string;
    title: string;
    comingSoon: string;
  };
  footer: {
    home: string;
    events: string;
    stayTransport: string;
    madeWithLove: string;
  };
  eventCard: {
    attireLabel: string;
  };
}

const en: T = {
  nav: {
    events: 'Events',
    stayTransport: 'Stay & Transport',
  },
  countdown: {
    label: 'Celebrations begin in',
    days: 'Days',
    hours: 'Hours',
    mins: 'Mins',
    secs: 'Secs',
  },
  home: {
    tagline: 'Together with their families',
    weHaveTakenCare: "We've taken care of everything",
    joinUsTitle: 'Join Us in Goa',
    stayTitle: 'Where to Stay',
    stayDesc: "We will be taking care of accommodations for all guests.",
    stayLink: 'View accommodation details',
    transportTitle: 'Getting Around',
    transportDesc: 'We are arranging airport pickups and shuttles between the hotel and all event venues — all complimentary.',
    transportLink: 'View transport details',
  },
  events: {
    tagline: 'Your celebrations',
    welcomePrefix: 'Welcome,',
    noEvents: 'No events found. Please contact us if this looks wrong.',
    rsvpTagline: 'Kindly respond at your earliest',
    rsvpTitle: 'RSVP',
    noInviteTitle: 'Your invitation is waiting',
    noInviteDesc: 'Please open the personal invitation link we sent you — your events will appear here automatically.',
    noInviteContact: 'Need help? Contact us at',
  },
  rsvp: {
    attendingQ: 'Will you be joining us?',
    accepts: 'Joyfully accepts ✓',
    declines: 'Regretfully declines',
    partySizeQ: 'How many guests will be attending?',
    maxLabel: 'max',
    dietaryQ: 'Any dietary requirements or allergies?',
    dietaryHint: 'Please list for all guests in your party.',
    dietaryPlaceholder: 'e.g. vegetarian, gluten-free, nut allergy…',
    songQ: 'Song request for the dance floor? 🎵',
    songPlaceholder: 'The one song that will get you dancing…',
    messageQ: 'A message for us? 💌',
    messagePlaceholder: 'Wishes, memories, advice…',
    submit: 'Send RSVP',
    submitting: 'Sending…',
    successAttendingTitle: 'We cannot wait to see you!',
    successAttendingBody: "Your RSVP is confirmed. We'll be in touch with more details soon.",
    successDeclineTitle: "We'll miss you!",
    successDeclineBody: 'Thank you for letting us know. You will be in our thoughts.',
  },
  info: {
    heroTagline: 'Everything you need to know',
    heroTitle: 'Stay & Transport',
    heroDesc: "We've organised everything to make your trip to Goa as easy as possible.",
    stayTitle: 'Where to Stay',
    accommodationBadge: 'Accommodation',
    transportTitle: 'Getting Around',
    airportTitle: 'Airport Transfers',
    howToBook: 'How to book',
    contactTitle: "Questions? We're Here.",
    contactDesc: 'Reach out to us for anything — we want your trip to Goa to be seamless.',
    whatsapp: 'WhatsApp Group',
  },
  invite: {
    tagline: 'You are invited',
    dear: 'Dear',
    subtitle: 'We would be overjoyed to have you celebrate with us.',
    invitationIncludes: 'Your invitation includes',
    celebrationsTitle: 'Your Celebrations',
    noEvents: 'No events found for this invite code. Please contact us.',
    respondBy: 'Please respond by',
    infoDesc: 'Need information about accommodation or transport?',
    infoLink: 'Stay & Transport Info',
  },
  story: {
    tagline: 'How it happened',
    title: 'Our Story',
  },
  gallery: {
    tagline: 'A few of our favourite moments',
    title: 'Us',
    comingSoon: 'Photo coming soon',
  },
  footer: {
    home: 'Home',
    events: 'Events',
    stayTransport: 'Stay & Transport',
    madeWithLove: 'Made with love for our favourite people.',
  },
  eventCard: {
    attireLabel: 'Attire',
  },
};

export const translations: Record<Locale, T> = { en };
