export const SITE_URL = 'https://nexawavedigital.vercel.app';

export const BUSINESS = {
  name: 'NexaWave Digital',
  phone: '+91 63776 75005',
  phoneRaw: '+916377675005',
  email: 'info.nexawavedigital@gmail.com',
  address: {
    street: 'Rajsamand',
    city: 'Rajsamand',
    region: 'Rajasthan',
    postalCode: '313324',
    country: 'IN',
    countryName: 'India',
  },
  geo: {
    latitude: 25.0695,
    longitude: 73.8826,
  },
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  priceRange: '₹₹',
  foundingDate: '2023',
  whatsapp: '916377675005',
};

export const SERVICE_AREAS = [
  'Rajsamand',
  'Udaipur',
  'Nathdwara',
  'Bhilwara',
  'Chittorgarh',
  'Kankroli',
];

export const SERVICES = [
  {
    name: 'Website Development',
    slug: 'website-development',
    description:
      'Business Websites, Landing Pages & Custom Dashboards. Ultra-fast, beautiful on all devices, tailored to automate your business.',
    url: `${SITE_URL}/website-development`,
  },
  {
    name: 'App Development',
    slug: 'app-development',
    description:
      'Scalable mobile and web applications engineered for performance, reliability, and seamless user experience.',
    url: `${SITE_URL}/app-development`,
  },
  {
    name: 'SEO Services',
    slug: 'seo-services',
    description:
      'Google Maps SEO, Business Profile optimization, and organic search domination built from the ground up.',
    url: `${SITE_URL}/seo-services`,
  },
  {
    name: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description:
      'Data-driven campaigns across Google, Meta, and organic channels to accelerate your growth trajectory.',
    url: `${SITE_URL}/social-media-marketing`,
  },
  {
    name: 'WhatsApp Automation',
    slug: 'whatsapp-automation',
    description:
      'Intelligent automation workflows that streamline operations, nurture leads, and convert prospects into customers.',
    url: `${SITE_URL}/whatsapp-automation`,
  },
];

export const FAQS = [
  {
    q: 'How quickly can you deliver a website?',
    a: 'We pride ourselves on lightning-fast delivery. Simple landing pages can be live in 3–4 days, business websites in 7–10 days, and complex platforms in 2–4 weeks. We maintain speed without compromising quality.',
  },
  {
    q: 'What is included in your SEO service?',
    a: 'Our SEO service includes on-page optimization, Google Business Profile setup, Google Maps SEO, keyword research, technical audit, and monthly performance reporting to track your ranking growth.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: "Yes! Every plan includes a free support period (30–90 days depending on plan). Our Digital Domination clients receive lifetime technical support. We're always just a WhatsApp message away.",
  },
  {
    q: 'What information do you need to get started?',
    a: "We typically need your business details, target audience, preferred design style/references, content (or we help create it), and your budget. We'll gather everything in our initial discovery call.",
  },
  {
    q: 'Can you handle projects outside Rajasthan?',
    a: 'Absolutely. We serve businesses pan-India and have worked with clients from Mumbai, Delhi, Bangalore, Hyderabad, and across the country. Everything runs remotely with seamless communication.',
  },
  {
    q: 'Are there any hidden fees?',
    a: "Never. We believe in complete transparency. You'll receive a fixed, itemized quote before we begin. The price you agree to is the price you pay — no surprise add-ons.",
  },
];

function mapAreas() {
  return SERVICE_AREAS.map((area) => ({ '@type': 'City', name: area }));
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    image: BUSINESS.image,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    description:
      'NexaWave Digital helps businesses grow online with website development, app development, SEO, social media marketing, and WhatsApp automation services in Rajsamand, Rajasthan.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: mapAreas(),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.linkedin.com/',
      'https://twitter.com/',
      'https://www.facebook.com/',
      'https://www.instagram.com/',
    ],
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    email: BUSINESS.email,
    telephone: BUSINESS.phoneRaw,
    foundingDate: BUSINESS.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phoneRaw,
      contactType: 'customer service',
      email: BUSINESS.email,
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    description:
      'Premium website development, app development, SEO, and digital marketing services in Rajsamand, Rajasthan.',
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getServiceSchemas() {
  return SERVICES.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      email: BUSINESS.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        addressCountry: BUSINESS.address.country,
      },
      areaServed: mapAreas(),
    },
    areaServed: mapAreas(),
  }));
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ],
  };
}

export function getAllSchemas() {
  return [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebsiteSchema(),
    ...getServiceSchemas(),
    getFAQSchema(),
    getBreadcrumbSchema(),
  ];
}
