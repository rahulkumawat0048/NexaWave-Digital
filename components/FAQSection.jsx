'use client';

import { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '@/lib/seo-data';

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section 
      id="faq" 
      aria-label="Frequently asked questions" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Got{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              Questions?
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        {/* ─── Accordion ────────────────────────────────────────────── */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group relative border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-green-200 bg-white shadow-lg shadow-green-500/5' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Decorative gradient line */}
                {isOpen && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500" />
                )}
                
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${i}`}
                >
                  <span className={`text-sm sm:text-base font-semibold pr-2 transition-colors duration-300 ${
                    isOpen ? 'text-green-700' : 'text-gray-900 group-hover:text-gray-700'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-md shadow-green-500/30' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-700" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-content-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0.5">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-3" />
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Still Have Questions? ────────────────────────────────── */}
        <div className="mt-10 sm:mt-12">
          <div className="relative bg-gradient-to-r from-green-600/5 via-emerald-500/5 to-cyan-600/5 rounded-2xl border border-green-100/50 px-6 sm:px-8 py-6 sm:py-7 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md shadow-green-500/20">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Still have questions?</p>
                  <p className="text-xs text-gray-500">We're here to help</p>
                </div>
              </div>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-600/30"
              >
                Contact us
                <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Trust Indicator ────────────────────────────────────── */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500">Quick responses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500">Clear answers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500">No pressure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
