'use client';

import { useState } from 'react';
import { ArrowUpRight, Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    category: 'Real Estate',
    client: 'Rajesh Kumar',
    role: 'Real Estate Developer — Jaipur',
    quote: '"NexaWave Digital delivered our complete corporate website in just 4 days. Lightning-fast, premium design, and zero hassle. The team\'s professionalism and speed exceeded our expectations."',
    tag: 'Corporate Website',
    rating: 5,
    image: '🏗️',
  },
  {
    category: 'Marble',
    client: 'Vikram Singh',
    role: 'Marble Industry Owner — Rajsamand',
    quote: '"Our marble business needed a premium online presence to reach buyers across India. NexaWave built a stunning website with a product catalog in under a week. Inquiries from new markets doubled within the first month."',
    tag: 'Marble Catalog Website',
    rating: 5,
    image: '🪨',
  },
  {
    category: 'Restaurant',
    client: 'Amit Patel',
    role: 'Restaurant Owner — Udaipur',
    quote: '"From online menu to table reservations, NexaWave set up our entire digital presence in days. The Google Maps SEO brought in so many new diners that we had to expand our seating. Truly game-changing for our restaurant."',
    tag: 'Restaurant Website & SEO',
    rating: 5,
    image: '🍽️',
  },
];

const tabs = ['Real Estate', 'Marble', 'Restaurant'];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      aria-label="Client testimonials" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">
              Client Success Stories
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            See How We Solve Problems,{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              Right on Target
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Real stories from real clients who transformed their digital presence with our solutions.
          </p>
        </div>

        {/* ─── Case Study Card ────────────────────────────────────── */}
        <div className="relative">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:-translate-y-1/2 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:-translate-y-1/2 hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Card Header with Category and Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-7 sm:px-10 lg:px-14 pt-7 sm:pt-10 lg:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{c.image}</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide border border-green-200/50">
                  {c.category}
                </span>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < c.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>

            {/* Quote Content */}
            <div className="p-7 sm:p-10 lg:p-14 flex flex-col">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-500/10" />
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-light italic pl-4">
                  {c.quote}
                </p>
              </div>
              
              {/* CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 w-fit px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-600/30"
              >
                Start your project 
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>

            {/* Client Info */}
            <div className="px-7 sm:px-10 lg:px-14 pb-7 sm:pb-10 lg:pb-12 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold shadow-md shadow-green-500/20">
                  {c.client.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {c.client}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {c.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Tabs ────────────────────────────────────────────────── */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              aria-label={`Show ${tab} testimonial`}
              className={`group relative flex items-center gap-2 text-xs sm:text-sm font-medium py-2.5 px-4 sm:px-5 rounded-full transition-all duration-300 ${
                active === i
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-600/30'
                  : 'text-gray-500 hover:text-gray-700 bg-white border border-gray-200 hover:border-green-200 hover:shadow-md'
              }`}
            >
              <span className={`text-base sm:text-lg ${active === i ? 'opacity-100' : 'opacity-60'}`}>
                {cases[i].image}
              </span>
              {tab}
              {active === i && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full rotate-45" />
              )}
            </button>
          ))}
        </div>

        {/* ─── Mobile Navigation ────────────────────────────────── */}
        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-xs text-gray-400 font-medium">
            {active + 1} / {cases.length}
          </span>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* ─── Trust Indicators ────────────────────────────────── */}
        <div className="mt-10 sm:mt-14">
          <div className="relative bg-gradient-to-r from-green-600/5 via-emerald-500/5 to-cyan-600/5 rounded-2xl border border-green-100/50 px-6 sm:px-8 py-4 sm:py-5">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Star className="w-4 h-4 text-green-600 fill-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">4.9/5 Rating</div>
                  <div className="text-[10px] text-gray-500">From ++ reviews</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">10+ Projects</div>
                  <div className="text-[10px] text-gray-500">Successfully delivered</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Happy Clients</div>
                  <div className="text-[10px] text-gray-500">Across every industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
