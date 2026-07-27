import { BUSINESS } from '@/lib/seo-data';

export default function manifest() {
  return {
    name: BUSINESS.name,
    short_name: 'NexaWave',
    description:
      'Website development, app development, SEO, and digital marketing services in Rajsamand, Rajasthan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
