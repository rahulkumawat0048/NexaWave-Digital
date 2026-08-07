'use client';

import { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: 'How long does it take to build a website?', a: 'Typically 3-4 days for landing pages and 1-2 weeks for full websites, depending on complexity.' },
  { q: 'Do you offer SEO services?', a: 'Yes, we provide comprehensive SEO services including Google Maps SEO, Business Profile optimization, and organic search strategies.' },
  { q: 'What is the pricing structure?', a: 'We offer transparent one-time payment plans starting from ₹7,999 with no hidden charges.' },
  { q: 'Do you provide support after launch?', a: 'Absolutely! We provide 1 year of free support with all our plans and lifetime technical guidance for premium packages.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section 
      id="faq" 
      aria-label="Frequently asked questions" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">FAQ</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Got{' '}
            <span className="text-orange-500 font-extrabold">Questions?</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                className={`group relative border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-orange-200 bg-white/80 backdrop-blur-sm shadow-2xl shadow-orange-500/5' 
                    : 'border-gray-100/50 bg-white/80 backdrop-blur-sm hover:border-orange-200 hover:shadow-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={!isOpen ? { y: -2 } : {}}
              >
                {isOpen && (
                  <motion.div 
                    className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-pink-500"
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${i}`}
                >
                  <span className={`text-sm sm:text-base font-semibold pr-2 transition-colors duration-300 ${
                    isOpen ? 'text-orange-500' : 'text-gray-900 group-hover:text-gray-700'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <motion.div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-md shadow-orange-500/30' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-700" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0.5">
                        <motion.div 
                          className="w-8 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full mb-3"
                          initial={{ width: 0 }}
                          animate={{ width: 32 }}
                          transition={{ duration: 0.4 }}
                        />
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <motion.div 
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-r from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-2xl border border-orange-200/30 px-6 sm:px-8 py-6 sm:py-7 text-center backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-md shadow-orange-500/20"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </motion.div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Still have questions?</p>
                  <p className="text-xs text-gray-500">We're here to help</p>
                </div>
              </div>
              
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 30px -10px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact us
                <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {['Quick responses', 'Clear answers', 'No pressure'].map((text, i) => (
              <motion.div 
                key={text} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-xs text-gray-500">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}