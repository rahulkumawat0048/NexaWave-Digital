'use client';

import { Building2, Plane, Briefcase, ShoppingBag, Heart, GraduationCap, Landmark, Rocket, Newspaper, UtensilsCrossed, Train, Car, Sparkles, TrendingUp ,ArrowUpRight } from 'lucide-react';

const industries = [
  { icon: Building2, label: 'Real Estate', gradient: 'from-blue-500 to-indigo-500', bgGradient: 'from-blue-50 to-indigo-50' },
  { icon: Plane, label: 'Travel & Hospitality', gradient: 'from-cyan-500 to-blue-500', bgGradient: 'from-cyan-50 to-blue-50' },
  { icon: Briefcase, label: 'B2B Solutions', gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-50 to-pink-50' },
  { icon: ShoppingBag, label: 'B2C Solutions', gradient: 'from-pink-500 to-rose-500', bgGradient: 'from-pink-50 to-rose-50' },
  { icon: Heart, label: 'Healthcare', gradient: 'from-red-500 to-rose-500', bgGradient: 'from-red-50 to-rose-50' },
  { icon: GraduationCap, label: 'Education', gradient: 'from-orange-500 to-amber-500', bgGradient: 'from-orange-50 to-amber-50' },
  { icon: Landmark, label: 'Banking', gradient: 'from-emerald-500 to-teal-500', bgGradient: 'from-emerald-50 to-teal-50' },
  { icon: Rocket, label: 'Startups', gradient: 'from-violet-500 to-purple-500', bgGradient: 'from-violet-50 to-purple-50' },
  { icon: Newspaper, label: 'Media & Publishing', gradient: 'from-sky-500 to-blue-500', bgGradient: 'from-sky-50 to-blue-50' },
  { icon: UtensilsCrossed, label: 'Food Ordering', gradient: 'from-amber-500 to-yellow-500', bgGradient: 'from-amber-50 to-yellow-50' },
  { icon: Train, label: 'Train Ticket Booking', gradient: 'from-indigo-500 to-blue-500', bgGradient: 'from-indigo-50 to-blue-50' },
  { icon: Car, label: 'Automotive', gradient: 'from-gray-600 to-gray-700', bgGradient: 'from-gray-50 to-gray-100' },
];

export default function IndustriesSection() {
  return (
    <section 
      id="industries" 
      aria-label="Industries served by NexaWave Digital" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Industries{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              We Serve
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We bring domain-specific expertise to every project, ensuring your website speaks
            directly to your target audience.
          </p>
        </div>

        {/* ─── Industries Grid ────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {industries.map(({ icon: Icon, label, gradient, bgGradient }) => (
            <div
              key={label}
              className="group relative flex flex-col items-center gap-2.5 p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-transparent bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                {/* Icon with gradient background */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md shadow-opacity-20 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
                </div>
                
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                  {label}
                </span>
                
                {/* Decorative dot */}
                <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* ─── Trust Indicator ────────────────────────────────────── */}
        <div className="mt-10 sm:mt-14">
          <div className="relative bg-gradient-to-r from-green-600/5 via-emerald-500/5 to-cyan-600/5 rounded-2xl border border-green-100/50 px-6 sm:px-8 py-4 sm:py-5">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">12+ Industries</div>
                  <div className="text-[10px] text-gray-500">And counting</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">10+ Projects</div>
                  <div className="text-[10px] text-gray-500">Successfully delivered</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Domain Expertise</div>
                  <div className="text-[10px] text-gray-500">Tailored solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom CTA ────────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Not sure if we're the right fit?{' '}
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-1 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              Let's talk about your industry.
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
