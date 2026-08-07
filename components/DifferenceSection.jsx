'use client';

import { Zap, Search, Clock, Palette, DollarSign, TrendingUp, Sparkles, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Performance-first',
    desc: 'Lightning-fast websites optimized for speed and user experience. Core Web Vitals perfected.',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    bgGradient: 'from-yellow-50/50 via-orange-50/50 to-red-50/50',
  },
  {
    icon: Search,
    title: 'SEO-ready',
    desc: 'Built with search engine optimization from the ground up. Rank higher from day one.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-50/50 via-indigo-50/50 to-purple-50/50',
  },
  {
    icon: Clock,
    title: 'Fast delivery',
    desc: 'Quick turnaround times without compromising quality. Landing pages in 3–4 days.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-50/50 via-emerald-50/50 to-teal-50/50',
  },
  {
    icon: Palette,
    title: 'Premium UI',
    desc: 'Beautiful, modern designs that convert visitors into customers with clear hierarchy.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50/50 via-pink-50/50 to-rose-50/50',
  },
  {
    icon: DollarSign,
    title: 'Transparent pricing',
    desc: 'No hidden fees. Clear, upfront pricing for every project — what you see is what you pay.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgGradient: 'from-emerald-50/50 via-teal-50/50 to-cyan-50/50',
  },
  {
    icon: TrendingUp,
    title: 'Growth-focused',
    desc: 'Every solution designed to help your business scale. We think long-term, not just launch-day.',
    gradient: 'from-rose-500 via-red-500 to-orange-500',
    bgGradient: 'from-rose-50/50 via-red-50/50 to-orange-50/50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
};

export default function DifferenceSection() {
  return (
    <section id="difference" aria-label="Why choose NexaWave Digital" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Why Choose Us</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            We Offer Quality,{' '}
            <span className="text-orange-500 font-extrabold">With the Best Approach</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The NexaWave Difference — we don't just build websites. We engineer complete digital growth systems.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100/50 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-default"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${feat.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                
                <div className="relative flex gap-4">
                  <motion.div 
                    className="shrink-0"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-lg shadow-opacity-30`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-all duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {feat.desc}
                    </p>
                    <motion.div 
                      className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="text-[10px] font-medium text-orange-500">Key feature</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-r from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-2xl border border-orange-200/30 px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {[
                { icon: Shield, label: 'Quality Guaranteed', sub: '100% satisfaction', gradient: 'from-blue-500 to-indigo-500' },
                { icon: Star, label: '4.9/5 Rating', sub: 'Client reviews', gradient: 'from-yellow-500 to-orange-500' },
                { icon: TrendingUp, label: 'Growth Focused', sub: 'Long-term success', gradient: 'from-green-500 to-emerald-500' },
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
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md shadow-${item.gradient.split(' ')[0].replace('from-', '')}/30`}>
                    <item.icon className={`w-4 h-4 ${item.label === '4.9/5 Rating' ? 'fill-white' : ''} text-white`} />
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