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
    celebrationsSuffix: string; // appended to guest name: "Kiran's [celebrationsSuffix]"
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
    celebrationsSuffix: "'s Celebrations",
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

const hi: T = {
  nav: {
    events: 'कार्यक्रम',
    stayTransport: 'रहाइश और परिवहन',
  },
  countdown: {
    label: 'जश्न शुरू होंगे',
    days: 'दिन',
    hours: 'घंटे',
    mins: 'मिनट',
    secs: 'सेकंड',
  },
  home: {
    tagline: 'अपने परिवारों के साथ',
    weHaveTakenCare: 'हमने सब कुछ संभाल लिया है',
    joinUsTitle: 'गोवा में हमारे साथ जुड़ें',
    stayTitle: 'कहाँ ठहरें',
    stayDesc: 'हम सभी मेहमानों के लिए आवास की व्यवस्था करेंगे।',
    stayLink: 'आवास विवरण देखें',
    transportTitle: 'यातायात',
    transportDesc: 'हम हवाई अड्डे से पिकअप और होटल से सभी कार्यक्रम स्थलों के लिए शटल की व्यवस्था कर रहे हैं — बिल्कुल नि:शुल्क।',
    transportLink: 'परिवहन विवरण देखें',
  },
  events: {
    tagline: 'आपके कार्यक्रम',
    celebrationsSuffix: ' के कार्यक्रम',
    noEvents: 'कोई कार्यक्रम नहीं मिला। यदि यह गलत लगता है तो कृपया हमसे संपर्क करें।',
    rsvpTagline: 'कृपया जल्द से जल्द उत्तर दें',
    rsvpTitle: 'RSVP',
    noInviteTitle: 'आपका निमंत्रण प्रतीक्षा में है',
    noInviteDesc: 'कृपया हमारे द्वारा भेजा गया व्यक्तिगत निमंत्रण लिंक खोलें — आपके कार्यक्रम यहाँ स्वतः दिखाई देंगे।',
    noInviteContact: 'सहायता चाहिए? हमसे संपर्क करें:',
  },
  rsvp: {
    attendingQ: 'क्या आप हमारे साथ आएंगे?',
    accepts: 'हर्षपूर्वक स्वीकार ✓',
    declines: 'खेद सहित अस्वीकार',
    partySizeQ: 'कितने अतिथि शामिल होंगे?',
    maxLabel: 'अधिकतम',
    dietaryQ: 'कोई आहार संबंधी आवश्यकता या एलर्जी?',
    dietaryHint: 'कृपया अपने सभी अतिथियों के लिए बताएं।',
    dietaryPlaceholder: 'जैसे: शाकाहारी, ग्लूटेन-मुक्त, मेवे से एलर्जी…',
    songQ: 'डांस फ्लोर के लिए गाने का अनुरोध? 🎵',
    songPlaceholder: 'वह एक गाना जो आपको नाचने पर मजबूर कर दे…',
    messageQ: 'हमारे लिए कोई संदेश? 💌',
    messagePlaceholder: 'शुभकामनाएं, यादें, सलाह…',
    submit: 'RSVP भेजें',
    submitting: 'भेजा जा रहा है…',
    successAttendingTitle: 'हम आपसे मिलने के लिए उत्सुक हैं!',
    successAttendingBody: 'आपका RSVP प्राप्त हो गया है। हम जल्द ही अधिक जानकारी के साथ संपर्क करेंगे।',
    successDeclineTitle: 'आपकी बहुत याद आएगी!',
    successDeclineBody: 'हमें बताने के लिए धन्यवाद। आप हमारे विचारों में रहेंगे।',
  },
  info: {
    heroTagline: 'जो कुछ जानना जरूरी है',
    heroTitle: 'रहाइश और परिवहन',
    heroDesc: 'हमने आपकी गोवा यात्रा को यथासंभव आसान बनाने के लिए सब कुछ व्यवस्थित किया है।',
    stayTitle: 'कहाँ ठहरें',
    accommodationBadge: 'आवास',
    transportTitle: 'यातायात',
    airportTitle: 'हवाई अड्डा स्थानांतरण',
    howToBook: 'बुकिंग कैसे करें',
    contactTitle: 'कोई प्रश्न? हम यहाँ हैं।',
    contactDesc: 'किसी भी बात के लिए हमसे संपर्क करें — हम चाहते हैं कि आपकी गोवा यात्रा सुगम हो।',
    whatsapp: 'WhatsApp ग्रुप',
  },
  invite: {
    tagline: 'आपको आमंत्रित किया गया है',
    dear: 'प्रिय',
    subtitle: 'हमें आपके साथ उत्सव मनाते देख बेहद खुशी होगी।',
    invitationIncludes: 'आपके निमंत्रण में शामिल है',
    celebrationsTitle: 'आपके कार्यक्रम',
    noEvents: 'इस आमंत्रण कोड के लिए कोई कार्यक्रम नहीं मिला। कृपया हमसे संपर्क करें।',
    respondBy: 'कृपया इस तारीख तक जवाब दें:',
    infoDesc: 'आवास या परिवहन के बारे में जानकारी चाहिए?',
    infoLink: 'रहाइश और परिवहन जानकारी',
  },
  story: {
    tagline: 'कैसे हुई शुरुआत',
    title: 'हमारी कहानी',
  },
  gallery: {
    tagline: 'कुछ यादगार पल',
    title: 'हम',
    comingSoon: 'तस्वीर जल्द आएगी',
  },
  footer: {
    home: 'होम',
    events: 'कार्यक्रम',
    stayTransport: 'रहाइश और परिवहन',
    madeWithLove: 'अपने प्रियजनों के लिए प्यार से बनाया।',
  },
  eventCard: {
    attireLabel: 'पोशाक',
  },
};

const pa: T = {
  nav: {
    events: 'ਸਮਾਗਮ',
    stayTransport: 'ਰਿਹਾਇਸ਼ ਅਤੇ ਆਵਾਜਾਈ',
  },
  countdown: {
    label: 'ਜਸ਼ਨ ਸ਼ੁਰੂ ਹੋਣਗੇ',
    days: 'ਦਿਨ',
    hours: 'ਘੰਟੇ',
    mins: 'ਮਿੰਟ',
    secs: 'ਸਕਿੰਟ',
  },
  home: {
    tagline: 'ਆਪਣੇ ਪਰਿਵਾਰਾਂ ਨਾਲ',
    weHaveTakenCare: 'ਅਸੀਂ ਸਭ ਕੁਝ ਸੰਭਾਲ ਲਿਆ ਹੈ',
    joinUsTitle: 'ਗੋਆ ਵਿੱਚ ਸਾਡੇ ਨਾਲ ਸ਼ਾਮਲ ਹੋਵੋ',
    stayTitle: 'ਕਿੱਥੇ ਠਹਿਰਨਾ ਹੈ',
    stayDesc: 'ਅਸੀਂ ਸਾਰੇ ਮਹਿਮਾਨਾਂ ਲਈ ਰਿਹਾਇਸ਼ ਦਾ ਪ੍ਰਬੰਧ ਕਰਾਂਗੇ।',
    stayLink: 'ਰਿਹਾਇਸ਼ ਵੇਰਵੇ ਦੇਖੋ',
    transportTitle: 'ਆਵਾਜਾਈ',
    transportDesc: 'ਅਸੀਂ ਹਵਾਈ ਅੱਡੇ ਤੋਂ ਪਿਕਅੱਪ ਅਤੇ ਹੋਟਲ ਤੋਂ ਸਾਰੇ ਸਮਾਗਮ ਸਥਾਨਾਂ ਲਈ ਸ਼ਟਲ ਦਾ ਪ੍ਰਬੰਧ ਕਰ ਰਹੇ ਹਾਂ — ਬਿਲਕੁਲ ਮੁਫ਼ਤ।',
    transportLink: 'ਆਵਾਜਾਈ ਵੇਰਵੇ ਦੇਖੋ',
  },
  events: {
    tagline: 'ਤੁਹਾਡੇ ਸਮਾਗਮ',
    celebrationsSuffix: ' ਦੇ ਸਮਾਗਮ',
    noEvents: 'ਕੋਈ ਸਮਾਗਮ ਨਹੀਂ ਮਿਲਿਆ। ਜੇ ਇਹ ਗਲਤ ਲੱਗਦਾ ਹੈ ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
    rsvpTagline: 'ਕਿਰਪਾ ਕਰਕੇ ਜਲਦੀ ਜਵਾਬ ਦਿਓ',
    rsvpTitle: 'RSVP',
    noInviteTitle: 'ਤੁਹਾਡਾ ਸੱਦਾ ਉਡੀਕ ਕਰ ਰਿਹਾ ਹੈ',
    noInviteDesc: 'ਕਿਰਪਾ ਕਰਕੇ ਉਹ ਨਿੱਜੀ ਸੱਦਾ ਲਿੰਕ ਖੋਲ੍ਹੋ ਜੋ ਅਸੀਂ ਤੁਹਾਨੂੰ ਭੇਜਿਆ — ਤੁਹਾਡੇ ਸਮਾਗਮ ਆਪਣੇ ਆਪ ਦਿਖਾਈ ਦੇਣਗੇ।',
    noInviteContact: 'ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ:',
  },
  rsvp: {
    attendingQ: 'ਕੀ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਆਵੋਗੇ?',
    accepts: 'ਖੁਸ਼ੀ ਨਾਲ ਮੰਨਦੇ ਹਾਂ ✓',
    declines: 'ਅਫ਼ਸੋਸ ਨਾਲ ਮਨ੍ਹਾ ਕਰਦੇ ਹਾਂ',
    partySizeQ: 'ਕਿੰਨੇ ਮਹਿਮਾਨ ਆਉਣਗੇ?',
    maxLabel: 'ਵੱਧ ਤੋਂ ਵੱਧ',
    dietaryQ: 'ਕੋਈ ਖੁਰਾਕ ਸੰਬੰਧੀ ਜ਼ਰੂਰਤਾਂ ਜਾਂ ਐਲਰਜੀ?',
    dietaryHint: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਸਾਰੇ ਮਹਿਮਾਨਾਂ ਬਾਰੇ ਦੱਸੋ।',
    dietaryPlaceholder: 'ਜਿਵੇਂ: ਸ਼ਾਕਾਹਾਰੀ, ਗਲੂਟਨ-ਮੁਕਤ, ਮੇਵਿਆਂ ਤੋਂ ਐਲਰਜੀ…',
    songQ: 'ਡਾਂਸ ਫਲੋਰ ਲਈ ਗੀਤ ਦੀ ਬੇਨਤੀ? 🎵',
    songPlaceholder: 'ਉਹ ਇੱਕ ਗੀਤ ਜੋ ਤੁਹਾਨੂੰ ਨੱਚਣ ਲਾ ਦੇਵੇ…',
    messageQ: 'ਸਾਡੇ ਲਈ ਕੋਈ ਸੁਨੇਹਾ? 💌',
    messagePlaceholder: 'ਸ਼ੁਭਕਾਮਨਾਵਾਂ, ਯਾਦਾਂ, ਸਲਾਹ…',
    submit: 'RSVP ਭੇਜੋ',
    submitting: 'ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ…',
    successAttendingTitle: 'ਅਸੀਂ ਤੁਹਾਨੂੰ ਮਿਲਣ ਦੀ ਉਡੀਕ ਵਿੱਚ ਹਾਂ!',
    successAttendingBody: 'ਤੁਹਾਡਾ RSVP ਮਿਲ ਗਿਆ ਹੈ। ਅਸੀਂ ਜਲਦੀ ਹੋਰ ਜਾਣਕਾਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।',
    successDeclineTitle: 'ਤੁਹਾਡੀ ਬਹੁਤ ਯਾਦ ਆਵੇਗੀ!',
    successDeclineBody: 'ਦੱਸਣ ਲਈ ਧੰਨਵਾਦ। ਤੁਸੀਂ ਸਾਡੇ ਦਿਲ ਵਿੱਚ ਰਹੋਗੇ।',
  },
  info: {
    heroTagline: 'ਜੋ ਕੁਝ ਜਾਣਨਾ ਜ਼ਰੂਰੀ ਹੈ',
    heroTitle: 'ਰਿਹਾਇਸ਼ ਅਤੇ ਆਵਾਜਾਈ',
    heroDesc: 'ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਆ ਯਾਤਰਾ ਨੂੰ ਜਿੰਨਾ ਸੰਭਵ ਹੋ ਸਕੇ ਆਸਾਨ ਬਣਾਉਣ ਲਈ ਸਭ ਕੁਝ ਵਿਵਸਥਿਤ ਕੀਤਾ ਹੈ।',
    stayTitle: 'ਕਿੱਥੇ ਠਹਿਰਨਾ ਹੈ',
    accommodationBadge: 'ਰਿਹਾਇਸ਼',
    transportTitle: 'ਆਵਾਜਾਈ',
    airportTitle: 'ਹਵਾਈ ਅੱਡਾ ਟਰਾਂਸਫਰ',
    howToBook: 'ਬੁਕਿੰਗ ਕਿਵੇਂ ਕਰੀਏ',
    contactTitle: 'ਕੋਈ ਸਵਾਲ? ਅਸੀਂ ਇੱਥੇ ਹਾਂ।',
    contactDesc: 'ਕਿਸੇ ਵੀ ਗੱਲ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ — ਅਸੀਂ ਚਾਹੁੰਦੇ ਹਾਂ ਕਿ ਤੁਹਾਡੀ ਗੋਆ ਯਾਤਰਾ ਨਿਰਵਿਘਨ ਹੋਵੇ।',
    whatsapp: 'WhatsApp ਗਰੁੱਪ',
  },
  invite: {
    tagline: 'ਤੁਹਾਨੂੰ ਸੱਦਾ ਦਿੱਤਾ ਗਿਆ ਹੈ',
    dear: 'ਪਿਆਰੇ',
    subtitle: 'ਅਸੀਂ ਤੁਹਾਡੇ ਨਾਲ ਜਸ਼ਨ ਮਨਾ ਕੇ ਬਹੁਤ ਖੁਸ਼ ਹੋਵਾਂਗੇ।',
    invitationIncludes: 'ਤੁਹਾਡੇ ਸੱਦੇ ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ',
    celebrationsTitle: 'ਤੁਹਾਡੇ ਸਮਾਗਮ',
    noEvents: 'ਇਸ ਸੱਦਾ ਕੋਡ ਲਈ ਕੋਈ ਸਮਾਗਮ ਨਹੀਂ ਮਿਲਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
    respondBy: 'ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਤਾਰੀਖ ਤੱਕ ਜਵਾਬ ਦਿਓ:',
    infoDesc: 'ਰਿਹਾਇਸ਼ ਜਾਂ ਆਵਾਜਾਈ ਬਾਰੇ ਜਾਣਕਾਰੀ ਚਾਹੀਦੀ ਹੈ?',
    infoLink: 'ਰਿਹਾਇਸ਼ ਅਤੇ ਆਵਾਜਾਈ ਜਾਣਕਾਰੀ',
  },
  story: {
    tagline: 'ਕਿਵੇਂ ਹੋਈ ਸ਼ੁਰੂਆਤ',
    title: 'ਸਾਡੀ ਕਹਾਣੀ',
  },
  gallery: {
    tagline: 'ਕੁਝ ਯਾਦਗਾਰ ਪਲ',
    title: 'ਅਸੀਂ',
    comingSoon: 'ਤਸਵੀਰ ਜਲਦ ਆਵੇਗੀ',
  },
  footer: {
    home: 'ਹੋਮ',
    events: 'ਸਮਾਗਮ',
    stayTransport: 'ਰਿਹਾਇਸ਼ ਅਤੇ ਆਵਾਜਾਈ',
    madeWithLove: 'ਆਪਣੇ ਪਿਆਰਿਆਂ ਲਈ ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ।',
  },
  eventCard: {
    attireLabel: 'ਪਹਿਰਾਵਾ',
  },
};

const mr: T = {
  nav: {
    events: 'कार्यक्रम',
    stayTransport: 'राहणे आणि वाहतूक',
  },
  countdown: {
    label: 'उत्सव सुरू होतील',
    days: 'दिवस',
    hours: 'तास',
    mins: 'मिनिट',
    secs: 'सेकंद',
  },
  home: {
    tagline: 'आपल्या कुटुंबांसोबत',
    weHaveTakenCare: 'आम्ही सर्व काही व्यवस्थित केले आहे',
    joinUsTitle: 'गोव्यात आमच्यासोबत सामील व्हा',
    stayTitle: 'कुठे राहायचे',
    stayDesc: 'आम्ही सर्व पाहुण्यांसाठी राहण्याची व्यवस्था करू.',
    stayLink: 'राहण्याचे तपशील पहा',
    transportTitle: 'प्रवास',
    transportDesc: 'आम्ही विमानतळावरून पिकअप आणि हॉटेल ते सर्व कार्यक्रम ठिकाणांसाठी शटलची व्यवस्था करत आहोत — सर्व विनामूल्य.',
    transportLink: 'वाहतूक तपशील पहा',
  },
  events: {
    tagline: 'तुमचे कार्यक्रम',
    celebrationsSuffix: ' चे कार्यक्रम',
    noEvents: 'कोणतेही कार्यक्रम आढळले नाहीत. हे चुकीचे वाटत असल्यास कृपया आमच्याशी संपर्क करा.',
    rsvpTagline: 'कृपया लवकरात लवकर उत्तर द्या',
    rsvpTitle: 'RSVP',
    noInviteTitle: 'तुमचे निमंत्रण प्रतीक्षेत आहे',
    noInviteDesc: 'कृपया आम्ही पाठवलेला वैयक्तिक निमंत्रण दुवा उघडा — तुमचे कार्यक्रम आपोआप दिसतील.',
    noInviteContact: 'मदत हवी आहे? आमच्याशी संपर्क करा:',
  },
  rsvp: {
    attendingQ: 'तुम्ही येणार का?',
    accepts: 'आनंदाने स्वीकार ✓',
    declines: 'खेदाने नकार',
    partySizeQ: 'किती पाहुणे येणार?',
    maxLabel: 'जास्तीत जास्त',
    dietaryQ: 'काही आहार संबंधी आवश्यकता किंवा ऍलर्जी?',
    dietaryHint: 'कृपया तुमच्या सर्व पाहुण्यांसाठी सांगा.',
    dietaryPlaceholder: 'उदा: शाकाहारी, ग्लूटेन-मुक्त, सुकामेवा ऍलर्जी…',
    songQ: 'नृत्यासाठी गाण्याची विनंती? 🎵',
    songPlaceholder: 'ते एक गाणे जे तुम्हाला नाचायला लावेल…',
    messageQ: 'आमच्यासाठी काही संदेश? 💌',
    messagePlaceholder: 'शुभेच्छा, आठवणी, सल्ला…',
    submit: 'RSVP पाठवा',
    submitting: 'पाठवत आहे…',
    successAttendingTitle: 'तुम्हाला भेटण्याची आम्हाला खूप उत्सुकता आहे!',
    successAttendingBody: 'तुमचा RSVP मिळाला आहे. आम्ही लवकरच अधिक माहितीसह संपर्क करू.',
    successDeclineTitle: 'तुमची खूप आठवण येईल!',
    successDeclineBody: 'आम्हाला कळवल्याबद्दल धन्यवाद. तुम्ही आमच्या मनात राहाल.',
  },
  info: {
    heroTagline: 'जे काही जाणून घेणे आवश्यक आहे',
    heroTitle: 'राहणे आणि वाहतूक',
    heroDesc: 'आम्ही तुमची गोवा सफर शक्य तितकी सोपी करण्यासाठी सर्व काही व्यवस्थित केले आहे.',
    stayTitle: 'कुठे राहायचे',
    accommodationBadge: 'निवास',
    transportTitle: 'प्रवास',
    airportTitle: 'विमानतळ स्थानांतर',
    howToBook: 'बुकिंग कसे करावे',
    contactTitle: 'प्रश्न आहेत? आम्ही इथे आहोत.',
    contactDesc: 'कोणत्याही गोष्टीसाठी आमच्याशी संपर्क करा — आम्हाला तुमची गोवा सफर सुखकर व्हावी असे वाटते.',
    whatsapp: 'WhatsApp गट',
  },
  invite: {
    tagline: 'तुम्हाला आमंत्रित केले आहे',
    dear: 'प्रिय',
    subtitle: 'तुमच्यासोबत उत्सव साजरा करताना आम्हाला खूप आनंद होईल.',
    invitationIncludes: 'तुमच्या निमंत्रणात समाविष्ट आहे',
    celebrationsTitle: 'तुमचे कार्यक्रम',
    noEvents: 'या आमंत्रण कोडसाठी कोणतेही कार्यक्रम आढळले नाहीत. कृपया आमच्याशी संपर्क करा.',
    respondBy: 'कृपया या तारखेपर्यंत उत्तर द्या:',
    infoDesc: 'राहण्याच्या किंवा प्रवासाच्या माहितीची गरज आहे?',
    infoLink: 'राहणे आणि वाहतूक माहिती',
  },
  story: {
    tagline: 'कसं सुरू झालं',
    title: 'आमची गोष्ट',
  },
  gallery: {
    tagline: 'काही आवडते क्षण',
    title: 'आम्ही',
    comingSoon: 'फोटो लवकरच येईल',
  },
  footer: {
    home: 'मुख्यपृष्ठ',
    events: 'कार्यक्रम',
    stayTransport: 'राहणे आणि वाहतूक',
    madeWithLove: 'आमच्या प्रियजनांसाठी प्रेमाने बनवले.',
  },
  eventCard: {
    attireLabel: 'पेहराव',
  },
};

export const translations: Record<Locale, T> = { en, hi, pa, mr };
