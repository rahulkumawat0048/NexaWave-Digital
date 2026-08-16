import { SERVICES, SITE_URL, BUSINESS, SERVICE_AREAS } from '@/lib/seo-data';
import { Sparkles, ArrowRight, CheckCircle, Zap, Award, Shield, Clock, Rocket, TrendingUp, MapPin } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) return {};

  return {
    title: `${service.name} in India - ${SERVICE_AREAS.join(', ')}`,
    description: service.description,
    alternates: { canonical: service.url },
    openGraph: {
      title: `${service.name} in India | NexaWave Digital`,
      description: service.description,
      url: service.url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in India | NexaWave Digital`,
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
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
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

  const benefits = [
    { icon: Zap, label: 'Lightning Fast', desc: 'Optimized for speed and performance' },
    { icon: Shield, label: 'Quality Guaranteed', desc: '100% satisfaction guaranteed' },
    { icon: Clock, label: 'Fast Delivery', desc: 'Landing pages in 3-4 days' },
    { icon: Award, label: 'Expert Team', desc: '1+ years of experience' },
    { icon: Rocket, label: 'Growth Focused', desc: 'Built to scale your business' },
    { icon: TrendingUp, label: 'SEO Optimized', desc: 'Rank higher from day one' },
  ];

  // All India states for display
  const indianStates = [
    'Rajasthan', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Delhi NCR',
    'Haryana', 'Punjab', 'Madhya Pradesh', 'Karnataka', 'Tamil Nadu',
    'Telangana', 'West Bengal', 'Bihar', 'Odisha', 'Kerala',
    'Andhra Pradesh', 'Assam', 'Chhattisgarh', 'Goa', 'Himachal Pradesh',
    'Jharkhand', 'Uttarakhand', 'Puducherry', 'Chandigarh', 'Jammu & Kashmir'
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav 
          aria-label="Breadcrumb" 
          className="text-sm text-gray-500 mb-8"
          style={{
            animation: 'slideDown 0.5s ease-out forwards'
          }}
        >
          <Link href="/" className="hover:text-[--plum] transition-colors duration-200">
            Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/#services" className="hover:text-[--plum] transition-colors duration-200">
            Services
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-[--plum] font-medium">{service.name}</span>
        </nav>

        {/* Main Content */}
        <div className="space-y-10" style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
          {/* Service Header */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[--plum]/5 rounded-full blur-2xl" />
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[--plum]/10 via-[--plum-dark]/10 to-pink-50/80 border border-[--plum]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[--plum]" />
              <span className="text-[--plum-dark] text-xs font-semibold uppercase tracking-wider">Our Service</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-[1.15]">
              {service.name}{' '}
              <span className="text-[--plum]">Across India</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[--plum] via-[--plum-dark] to-pink-500 p-6 sm:p-8 shadow-2xl shadow-[--plum]/30 hover:shadow-3xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{ animation: 'pulseSlow 4s ease-in-out infinite' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{ animation: 'pulseSlowDelay 5s ease-in-out infinite 1s' }} />
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Get Started Today
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-6 max-w-2xl">
                Ready to grow your business with professional {service.name.toLowerCase()} services across India?
                Contact NexaWave Digital for a free consultation.
              </p>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[--plum] font-semibold rounded-full text-sm shadow-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[--plum] via-[--plum-dark] to-pink-500 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Why Choose NexaWave Digital?</h2>
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
              We deliver premium {service.name.toLowerCase()} solutions tailored to businesses across India. 
              Our team combines technical expertise with local market understanding to help your business 
              dominate online. Whether you're in Rajasthan, Maharashtra, Karnataka, or anywhere else in India, 
              we've got you covered.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100/50 hover:border-transparent p-4 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[--plum]/10 via-[--plum-dark]/10 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[--plum] via-[--plum-dark] to-pink-500 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[--plum] via-[--plum-dark] to-pink-500 flex items-center justify-center shrink-0 shadow-lg shadow-[--plum]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[--plum] transition-all duration-300">
                          {benefit.label}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Areas - All India */}
          <div className="relative bg-gradient-to-r from-[--plum]/5 via-[--plum-dark]/5 to-pink-600/5 rounded-2xl border border-[--plum]/30 px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[--plum]" />
                <span className="text-sm font-semibold text-gray-700">Serving Across India:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {indianStates.slice(0, 12).map((state, index) => (
                  <span
                    key={state}
                    className="inline-flex px-3 py-1 bg-white/80 backdrop-blur-sm border border-[--plum]/50 rounded-full text-xs font-medium text-gray-700 hover:text-[--plum] hover:border-[--plum] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {state}
                  </span>
                ))}
                <span className="inline-flex px-3 py-1 bg-gradient-to-r from-[--plum]/10 via-[--plum-dark]/10 to-pink-500/10 border border-[--plum]/50 rounded-full text-xs font-medium text-[--plum] shadow-sm">
                  + {indianStates.length - 12} More States
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-gray-50 via-white to-gray-50/50 rounded-2xl border border-gray-100/50 px-6 sm:px-8 py-8 sm:py-10 hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to Transform Your Business Across India?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Let's discuss how our {service.name.toLowerCase()} services can help you achieve your digital goals, 
              no matter where you are in India.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[--plum] via-[--plum-dark] to-pink-500 hover:from-[--plum-dark] hover:via-[--plum] hover:to-pink-600 text-white font-semibold rounded-full text-sm shadow-lg shadow-[--plum]/30 hover:shadow-2xl hover:shadow-[--plum]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          @keyframes pulseSlowDelay {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
          .space-y-10 > * + * {
            margin-top: 2.5rem;
          }
        `
      }} />
    </main>
  );
}