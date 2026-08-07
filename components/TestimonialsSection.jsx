'use client';

import { useState } from 'react';
import { ArrowUpRight, Sparkles, Star, Quote, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Rajesh C.',
    initials: 'R',
    role: 'Real Estate Developer',
    location: 'Jaipur',
    date: '4 months ago',
    rating: 5,
    review: '"NexaWave Digital delivered our complete corporate website in just 4 days. Lightning-fast, premium design, and zero hassle. The team\'s professionalism and speed exceeded our expectations."',
    category: 'Real Estate',
    tag: 'Corporate Website',
    image: '🏗️',
    color: 'from-blue-500 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-50/50 via-indigo-50/50 to-purple-50/50'
  },
  {
    id: 2,
    name: 'Vikram S.',
    initials: 'V',
    role: 'Marble Industry Owner',
    location: 'Rajsamand',
    date: '3 months ago',
    rating: 5,
    review: '"Our WhatsApp automation, catalog, and lead funnel were live in 20 days. Highly professional and incredibly fast team. The results exceeded our expectations."',
    category: 'Marble',
    tag: 'Catalog & Automation',
    image: '🪨',
    color: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-50/50 via-emerald-50/50 to-teal-50/50'
  },
  {
    id: 3,
    name: 'Amit A.',
    initials: 'A',
    role: 'Restaurant Owner',
    location: 'Udaipur',
    date: '2 months ago',
    rating: 5,
    review: '"Got our high-conversion landing page live in just 3 days. The speed and quality NexaWave delivers is unmatched. Our online orders increased by 200%."',
    category: 'Restaurant',
    tag: 'Landing Page',
    image: '🍽️',
    color: 'from-orange-500 via-red-500 to-pink-500',
    bgGradient: 'from-orange-50/50 via-red-50/50 to-pink-50/50'
  },
  {
    id: 4,
    name: 'Priya M.',
    initials: 'P',
    role: 'E-commerce Owner',
    location: 'Delhi',
    date: '1 month ago',
    rating: 5,
    review: '"NexaWave built our complete e-commerce store with payment integration in just 2 weeks. The site is fast, beautiful, and converting like crazy."',
    category: 'E-commerce',
    tag: 'Online Store',
    image: '🛍️',
    color: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50/50 via-pink-50/50 to-rose-50/50'
  },
];

const tabs = ['All', 'Real Estate', 'Marble', 'Restaurant', 'E-commerce'];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews = activeTab === 'All' 
    ? reviews 
    : reviews.filter(r => r.category === activeTab);

  const currentReview = filteredReviews[currentIndex] || filteredReviews[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" aria-label="Client testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50/80 via-orange-50/80 to-red-50/80 border border-yellow-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">What Our Clients Say</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            What Our Clients Say About{' '}
            <span className="text-orange-500 font-extrabold">NexaWave Digital</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900 ml-2">5.0</span>
            <span className="text-gray-400">out of 5 · Google Reviews</span>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(0);
              }}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-orange-200 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <AnimatePresence mode="wait">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100/50 hover:border-transparent p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${review.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${review.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header with Avatar and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-md shadow-${review.color.split(' ')[0].replace('from-', '')}/30`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {review.initials}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-gray-500">{review.role}</span>
                          <span className="text-[10px] text-gray-300">·</span>
                          <span className="text-[10px] text-gray-400">{review.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 ml-1">{review.date}</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {review.review}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${review.color} text-white text-[10px] font-medium`}>
                      {review.image} {review.category}
                    </span>
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-medium">
                      {review.tag}
                    </span>
                    <motion.button 
                      className="ml-auto text-orange-500 hover:text-orange-600 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 3 }}
                    >
                      Read More <ChevronRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Google Reviews CTA */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 hover:border-orange-300 rounded-full text-sm text-gray-700 hover:text-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ThumbsUp className="w-4 h-4 text-green-500" />
            See all Google Reviews
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-r from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-2xl border border-orange-200/30 px-6 sm:px-8 py-4 sm:py-5 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {[
                { icon: Star, label: '5.0 Rating', sub: 'Google Reviews', gradient: 'from-yellow-500 to-orange-500' },
                { icon: Sparkles, label: '10+ Projects', sub: 'Successfully delivered', gradient: 'from-blue-500 to-indigo-500' },
                { icon: Quote, label: 'Happy Clients', sub: 'Across industries', gradient: 'from-green-500 to-emerald-500' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                    <item.icon className={`w-4 h-4 ${item.label === '5.0 Rating' ? 'fill-white' : ''} text-white`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{item.label}</div>
                    <div className="text-[10px] text-gray-500">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}