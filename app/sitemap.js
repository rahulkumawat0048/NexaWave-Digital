import { SITE_URL, SERVICES } from '@/lib/seo-data';

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const servicePages = SERVICES.map((service) => ({
    url: service.url,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}