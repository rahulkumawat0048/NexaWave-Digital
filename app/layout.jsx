import './globals.css';
import JsonLd from '@/components/JsonLd';
import FloatingButtons from '@/components/FloatingButtons';
import { SITE_URL, BUSINESS } from '@/lib/seo-data';

const FONT_PRECONNECT = 'https://fonts.googleapis.com';
const FONT_PRECONNECT_CROSS = 'https://fonts.gstatic.com';
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Best Website Developer in Rajsamand | App Development & SEO Agency | NexaWave Digital',
    template: '%s | NexaWave Digital',
  },
  description:
    'NexaWave Digital helps businesses grow online with website development, app development, SEO, social media marketing, and WhatsApp automation services in Rajsamand, Rajasthan.',
  keywords: [
    'website developer Rajsamand',
    'app developer Rajsamand',
    'SEO agency Rajsamand',
    'web design Rajsamand',
    'website development near me',
    'app development near me',
    'digital marketing Rajsamand',
    'WhatsApp automation services in Rajsamand',
    'digital marketing agency in Rajsamand',
    'web design company in Rajsamand',
    'SEO services in Rajsamand',
  ],
  authors: [{ name: 'NexaWave Digital' }],
  creator: 'NexaWave Digital',
  publisher: 'NexaWave Digital',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'NexaWave Digital',
    title: 'Best Website Developer in Rajsamand | App Development & SEO Agency | NexaWave Digital',
    description:
      'NexaWave Digital helps businesses grow online with website development, app development, SEO, social media marketing, and WhatsApp automation services in Rajsamand, Rajasthan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexaWave Digital — Website Development, App Development & SEO Services in Rajsamand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Developer in Rajsamand | NexaWave Digital',
    description:
      'Website development, app development, SEO, social media marketing, and WhatsApp automation services in Rajsamand, Rajasthan.',
    images: ['/og-image.png'],
    creator: '@nexawavedigital',
  },
  category: 'Technology',
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Rajsamand, Rajasthan, India',
    'geo.position': `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    'ICBM': `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#16a34a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-inter">
      <head>
        <meta name="google-site-verification" content="AwPbhNHQ_onD33QjJbcurh30u_hfjiHsqOjvHZHF8E4" />
        <link rel="preconnect" href={FONT_PRECONNECT} />
        <link rel="preconnect" href={FONT_PRECONNECT_CROSS} crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF} />
        <JsonLd />
      </head>
      <body className="font-inter overflow-x-hidden">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
