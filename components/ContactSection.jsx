'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Check, Loader2, AlertCircle, Sparkles, Clock, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setStatus('sent');
    } catch (err) {
      const msg = err instanceof Error ? err.message : '';
      if (msg.includes('fetch') || msg.includes('network') || msg.toLowerCase().includes('failed to fetch')) {
        setErrorMsg('Network error — check your internet connection and try again.');
      } else if (msg.includes('not configured') || msg.includes('API key')) {
        setErrorMsg('Email service is not configured yet. Please WhatsApp or call us at +91 63776 75005.');
      } else if (msg) {
        setErrorMsg(msg);
      } else {
        setErrorMsg('Something went wrong. Please WhatsApp or call us at +91 63776 75005.');
      }
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact NexaWave Digital" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
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
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Let's Connect</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Start Your{' '}
            <span className="text-orange-500 font-extrabold">Project Today</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and we'll deliver a custom digital growth plan within 24 hours.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Phone', value: '+91 63776 75005', href: 'tel:+916377675005', sub: 'Available 24/7', gradient: 'from-blue-500 via-indigo-500 to-purple-500' },
                { icon: Mail, label: 'Email', value: 'info.nexawavedigital@gmail.com', href: 'mailto:info.nexawavedigital@gmail.com', sub: 'Reply within 24 hrs', gradient: 'from-green-500 via-emerald-500 to-teal-500' },
                { icon: MapPin, label: 'Location', value: 'Rajasthan, India', href: null, sub: 'Serving pan-India', gradient: 'from-orange-500 via-red-500 to-pink-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -4, scale: 1.01 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <motion.div 
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md shadow-${item.gradient.split(' ')[0].replace('from-', '')}/20`}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-gray-900 font-semibold hover:text-orange-500 transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/916377675005"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full text-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 25px 40px -12px rgba(16, 185, 129, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Chat on WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>

            {/* Trust indicators */}
            <motion.div 
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {['24hr response', 'Free consultation', 'No obligation'].map((text, i) => (
                <motion.div 
                  key={text} 
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <Check className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs text-gray-500">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
            
            <motion.div 
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 sm:p-8 shadow-2xl"
              whileHover={{ boxShadow: '0 30px 60px -20px rgba(249, 115, 22, 0.2)' }}
            >
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div 
                    key="sent"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div 
                    key="error"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                    <p className="text-gray-500 text-sm max-w-xs mb-6">{errorMsg}</p>
                    <motion.button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Again
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <motion.div 
                        className="w-1 h-6 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full"
                        initial={{ height: 0 }}
                        animate={{ height: 24 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                      <h3 className="text-lg font-bold text-gray-900">Send Us a Message</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-500 mb-1.5">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Rahul Sharma"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-business" className="block text-xs font-semibold text-gray-500 mb-1.5">
                            Business Name
                          </label>
                          <input
                            id="contact-business"
                            name="business"
                            value={form.business}
                            onChange={handleChange}
                            placeholder="Your Company Ltd."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-500 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 mb-1.5">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="rahul@yourcompany.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 mb-1.5">
                          Tell us about your project <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="I need a website for my real estate business..."
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={status !== 'sending' ? { scale: 1.02, y: -2, boxShadow: '0 20px 30px -10px rgba(249, 115, 22, 0.4)' } : {}}
                        whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </motion.button>

                      <p className="text-center text-[10px] text-gray-400">
                        By submitting, you agree to our privacy policy. We never share your data.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}