'use client';

import { useState } from 'react';
import { Check, ArrowUpRight, Globe, Server, Shield, Headphones, Zap, Search, Award, Sparkles, Star, TrendingUp } from 'lucide-react';

const trustBadges = [
  { icon: Globe, label: 'Free Domain', gradient: 'from-blue-500 via-indigo-500 to-purple-500' },
  { icon: Server, label: 'Free Hosting', gradient: 'from-green-500 via-emerald-500 to-teal-500' },
  { icon: Headphones, label: '1 Year Support', gradient: 'from-purple-500 via-pink-500 to-rose-500' },
  { icon: Zap, label: 'Fast Delivery', gradient: 'from-yellow-500 via-orange-500 to-red-500' },
  { icon: Search, label: 'SEO Ready', gradient: 'from-cyan-500 via-blue-500 to-indigo-500' },
  { icon: Shield, label: 'SSL Security', gradient: 'from-rose-500 via-red-500 to-orange-500' },
];

const plans = [
  {
    name: 'Starter Launch',
    badge: null,
    tagline: 'Perfect for small businesses starting their digital journey',
    price: '₹7,999',
    originalPrice: '₹12,999',
    period: 'one-time payment',
    features: [
      { text: '3–5 Page Business Website', highlight: false },
      { text: 'Mobile Responsive Design', highlight: false },
      { text: 'Basic SEO Setup', highlight: false },
      { text: 'Google Business Profile Setup', highlight: false },
      { text: 'Lead Capture Contact Form', highlight: false },
      { text: 'Free Domain (1 Year)', highlight: true },
      { text: 'Free Hosting (1 Year)', highlight: true },
      { text: 'Free SSL Security', highlight: true },
      { text: '1 Year Free Support', highlight: true },
    ],
    cta: 'Start Growing',
    highlight: false,
    gradient: 'from-gray-50 to-white',
    savings: 'Save 38%',
  },
  {
    name: 'Growth Engine',
    badge: '🔥 Best Value',
    tagline: 'Complete digital presence for growing businesses',
    price: '₹14,999',
    originalPrice: '₹22,999',
    period: 'one-time payment',
    features: [
      { text: 'Everything in Starter Launch', highlight: false },
      { text: '10–15 Page Custom Website', highlight: false },
      { text: 'Advanced SEO & Google Maps Ranking', highlight: false },
      { text: 'WhatsApp Chatbot Integration', highlight: false },
      { text: 'Custom Dashboard (Basic)', highlight: false },
      { text: 'Free Domain (1 Year)', highlight: true },
      { text: 'Free Hosting (1 Year)', highlight: true },
      { text: 'Priority Support (1 Year)', highlight: true },
    ],
    cta: 'Get Started',
    highlight: true,
    gradient: 'from-gray-900 to-gray-800',
    savings: 'Save 35%',
  },
  {
    name: 'Market Domination',
    badge: null,
    tagline: 'Full-scale digital transformation for market leaders',
    price: '₹XX,999+',
    originalPrice: '₹XX,999+',
    period: 'custom pricing',
    features: [
      { text: 'Everything in Growth Engine', highlight: false },
      { text: 'Full Custom Website (20+ Pages)', highlight: false },
      { text: 'Web or Mobile App Development', highlight: false },
      { text: 'AI Automation Funnels', highlight: false },
      { text: 'Advanced Analytics Dashboard', highlight: false },
      { text: 'Performance Marketing Setup', highlight: false },
      { text: 'Brand Identity System', highlight: false },
      { text: 'Free Domain (1 Year)', highlight: true },
      { text: 'Free Hosting (1 Year)', highlight: true },
      { text: 'Lifetime Technical Guidance', highlight: true },
    ],
    cta: 'Book Consultation',
    highlight: false,
    gradient: 'from-gray-50 to-white',
    savings: null,
    customPrice: true,
  },
];

const trustItems = ['One-time Payment', 'No Hidden Charges', 'Full Ownership'];

export default function PricingSection() {
  return (
    <section id="pricing" aria-label="Pricing plans" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Trusted by 100+ Businesses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Plans Made for{' '}
            <span className="text-orange-500 font-extrabold">Your Growth</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan to launch, scale, and dominate your business online with complete support, hosting, and growth-focused solutions.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-full shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${badge.gradient} flex items-center justify-center shadow-sm`}>
                <badge.icon className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors duration-300">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col group ${
                plan.highlight
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700 shadow-2xl shadow-gray-900/30 lg:scale-[1.05] lg:-my-4 ring-2 ring-orange-500/20'
                  : 'bg-white/80 backdrop-blur-sm border-gray-100/50 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-50" />
              )}

              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg shadow-orange-500/30">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {plan.savings && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-[10px] font-bold rounded-full">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className="relative z-10 mb-5">
                <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className={`text-3xl sm:text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {!plan.customPrice && (
                    <span className={`text-sm line-through ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                      {plan.originalPrice}
                    </span>
                  )}
                  {plan.customPrice && (
                    <span className={`text-xs ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                      (custom quote)
                    </span>
                  )}
                </div>
                <p className={`text-[10px] sm:text-xs mt-0.5 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                  {plan.period}
                </p>
              </div>

              <ul className="relative z-10 space-y-2.5 flex-1 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        feature.highlight
                          ? plan.highlight
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 ring-2 ring-orange-400/30'
                            : 'bg-gradient-to-r from-orange-500 to-red-500 ring-2 ring-orange-200'
                          : plan.highlight
                            ? 'bg-gray-700'
                            : 'bg-gray-100'
                      }`}
                    >
                      <Check className={`w-2.5 h-2.5 ${feature.highlight || plan.highlight ? 'text-white' : 'text-orange-500'}`} />
                    </div>
                    <span
                      className={`text-xs sm:text-sm leading-relaxed ${
                        plan.highlight
                          ? feature.highlight ? 'text-orange-400 font-medium' : 'text-gray-300'
                          : feature.highlight ? 'text-orange-600 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative z-10 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:shadow-2xl hover:shadow-orange-500/40 text-white'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800 text-white hover:shadow-2xl'
                }`}
              >
                {plan.cta} 
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              </a>

              <div className="relative z-10 flex flex-wrap justify-center gap-x-3 gap-y-1 mt-4 pt-3 border-t border-dashed border-gray-200/50">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className={`text-[10px] sm:text-xs ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 blur-xl rounded-full" />
            <p className="relative text-gray-600 text-sm sm:text-base">
              Need a custom solution?{' '}
              <a href="#contact" className="group inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Let's talk about your specific requirements.
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}