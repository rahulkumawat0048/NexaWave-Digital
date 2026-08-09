'use client';

import Link from 'next/link';
import {
  Monitor,
  Search,
  Smartphone,
  Bot,
  BarChart3,
  PenTool,
  Sparkles,
  ArrowRight,
  Rocket,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    desc: 'Business Websites, Landing Pages & Custom Dashboards. Ultra-fast, beautiful on all devices, tailored to automate your business.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-50/50 via-indigo-50/50 to-purple-50/50',
    href: '/website-development',
  },
  {
    icon: Search,
    title: 'Smart SEO Systems',
    desc: 'Google Maps SEO, Business Profile optimization, and organic search domination built from the ground up.',
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    bgGradient: 'from-emerald-50/50 via-green-50/50 to-teal-50/50',
    href: '/seo-services',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Scalable mobile and web applications engineered for performance, reliability, and seamless user experience.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50/50 via-pink-50/50 to-rose-50/50',
    href: '/app-development',
  },
  {
    icon: Bot,
    title: 'AI Automation Funnels',
    desc: 'Intelligent automation workflows that streamline operations, nurture leads, and convert prospects into customers.',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    bgGradient: 'from-cyan-50/50 via-blue-50/50 to-indigo-50/50',
    href: '/whatsapp-automation',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across Google, Meta, and organic channels to accelerate your growth trajectory.',
    gradient: 'from-orange-500 via-red-500 to-rose-500',
    bgGradient: 'from-orange-50/50 via-red-50/50 to-rose-50/50',
    href: '/social-media-marketing',
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Premium branding systems — logo, typography, color, and visual language that builds instant authority.',
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
    bgGradient: 'from-rose-50/50 via-pink-50/50 to-purple-50/50',
    href: '/website-development',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Our digital services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Services That Drive{' '}
            <span className="text-orange-500 font-extrabold">Real Growth</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Complete digital solutions designed to transform your business and accelerate growth across every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative block bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100/50 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {service.desc}
                  </p>
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-medium text-orange-500">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          className="relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%)'
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">Trusted by 100+ Businesses</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ready to Grow Your Business?
            </h3>
            
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Let's discuss how we can help you achieve your digital goals with our premium services.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/80" />
                <span className="text-xs text-white/80">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/80" />
                <span className="text-xs text-white/80">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/80" />
                <span className="text-xs text-white/80">Fast Turnaround</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-colors duration-300 text-sm"
              >
                Explore Services
                <Sparkles className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-white/60 mt-4">
              No commitment required • Free consultation • 100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}