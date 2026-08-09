'use client';

import { Building2, Plane, Briefcase, ShoppingBag, Heart, GraduationCap, Landmark, Rocket, Newspaper, UtensilsCrossed, Train, Car, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

const industries = [
  { icon: Building2, label: 'Real Estate', gradient: 'from-orange-500 via-red-500 to-orange-600', bgGradient: 'from-orange-50/50 via-red-50/50 to-orange-50/50' },
  { icon: Plane, label: 'Travel & Hospitality', gradient: 'from-amber-500 via-orange-500 to-red-500', bgGradient: 'from-amber-50/50 via-orange-50/50 to-red-50/50' },
  { icon: Briefcase, label: 'B2B Solutions', gradient: 'from-red-500 via-rose-500 to-orange-500', bgGradient: 'from-red-50/50 via-rose-50/50 to-orange-50/50' },
  { icon: ShoppingBag, label: 'B2C Solutions', gradient: 'from-orange-500 via-rose-500 to-red-500', bgGradient: 'from-orange-50/50 via-rose-50/50 to-red-50/50' },
  { icon: Heart, label: 'Healthcare', gradient: 'from-red-500 via-rose-500 to-pink-500', bgGradient: 'from-red-50/50 via-rose-50/50 to-pink-50/50' },
  { icon: GraduationCap, label: 'Education', gradient: 'from-yellow-500 via-orange-500 to-amber-500', bgGradient: 'from-yellow-50/50 via-orange-50/50 to-amber-50/50' },
  { icon: Landmark, label: 'Banking', gradient: 'from-emerald-500 via-teal-500 to-cyan-500', bgGradient: 'from-emerald-50/50 via-teal-50/50 to-cyan-50/50' },
  { icon: Rocket, label: 'Startups', gradient: 'from-orange-500 via-red-500 to-rose-500', bgGradient: 'from-orange-50/50 via-red-50/50 to-rose-50/50' },
  { icon: Newspaper, label: 'Media & Publishing', gradient: 'from-orange-500 via-amber-500 to-yellow-500', bgGradient: 'from-orange-50/50 via-amber-50/50 to-yellow-50/50' },
  { icon: UtensilsCrossed, label: 'Food Ordering', gradient: 'from-amber-500 via-yellow-500 to-orange-500', bgGradient: 'from-amber-50/50 via-yellow-50/50 to-orange-50/50' },
  { icon: Train, label: 'Train Ticket Booking', gradient: 'from-orange-500 via-red-500 to-rose-500', bgGradient: 'from-orange-50/50 via-red-50/50 to-rose-50/50' },
  { icon: Car, label: 'Automotive', gradient: 'from-gray-600 via-gray-700 to-gray-800', bgGradient: 'from-gray-50/50 via-gray-100/50 to-gray-200/50' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" aria-label="Industries served by NexaWave Digital" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 opacity-0 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-orange-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Industries We Serve</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Industries{' '}
            <span className="text-orange-500 font-extrabold">We Serve</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We bring domain-specific expertise to every project, ensuring your website speaks directly to your target audience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {industries.map(({ icon: Icon, label, gradient, bgGradient }, index) => (
            <div
              key={label}
              className="group relative flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-xl border border-gray-100/50 hover:border-transparent bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] cursor-default overflow-hidden opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center transition-all duration-300 group-hover:text-orange-500">
                  {label}
                </span>
                <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 sm:mt-14 opacity-0 animate-on-scroll animation-delay-200">
          <div className="relative bg-gradient-to-r from-orange-600/5 via-red-600/5 to-orange-600/5 rounded-2xl border border-orange-200/30 px-6 sm:px-8 py-4 sm:py-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {[
                { icon: Building2, label: '12+ Industries', sub: 'And counting', gradient: 'from-orange-500 to-red-500' },
                { icon: TrendingUp, label: '10+ Projects', sub: 'Successfully delivered', gradient: 'from-amber-500 to-orange-500' },
                { icon: Sparkles, label: 'Domain Expertise', sub: 'Tailored solutions', gradient: 'from-red-500 to-rose-500' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md shadow-orange-500/30`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{item.label}</div>
                    <div className="text-[10px] text-gray-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center opacity-0 animate-on-scroll animation-delay-300">
          <p className="text-gray-600 text-sm sm:text-base">
            Not sure if we're the right fit?{' '}
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-all duration-300 hover:translate-x-1"
            >
              Let's talk about your industry.
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-on-scroll {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}