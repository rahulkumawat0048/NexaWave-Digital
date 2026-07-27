import { SERVICES, SITE_URL, BUSINESS, SERVICE_AREAS } from '@/lib/seo-data';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) return {};

  return {
    title: `${service.name} in Rajsamand`,
    description: service.description,
    alternates: { canonical: service.url },
    openGraph: {
      title: `${service.name} in Rajsamand | NexaWave Digital`,
      description: service.description,
      url: service.url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in Rajsamand | NexaWave Digital`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  const serviceSchema = {
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
      areaServed: SERVICE_AREAS.map((area) => ({
        '@type': 'City',
        name: area,
      })),
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: service.url },
    ],
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <a href={SITE_URL} className="hover:text-green-600 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href={`${SITE_URL}/#services`} className="hover:text-green-600 transition-colors">Services</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{service.name}</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {service.name} in Rajsamand
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {service.description}
        </p>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-gray-600 mb-6">
            Ready to grow your business with professional {service.name.toLowerCase()} services in Rajsamand, Rajasthan?
            Contact NexaWave Digital for a free consultation.
          </p>
          <a
            href={`${SITE_URL}/#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-600/25"
          >
            Get a Free Quote
          </a>
        </div>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose NexaWave Digital?</h2>
          <p className="text-gray-600 mb-4">
            We deliver premium {service.name.toLowerCase()} solutions tailored to businesses in Rajsamand,
            Udaipur, Nathdwara, Bhilwara, Chittorgarh, and across Rajasthan. Our team combines technical
            expertise with local market understanding to help your business dominate online.
          </p>
        </div>
      </div>
    </main>
  );
}
