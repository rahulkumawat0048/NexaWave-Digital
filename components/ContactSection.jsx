'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Check, Loader2, AlertCircle, Sparkles, Clock } from 'lucide-react';

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

  return (
    <section 
      id="contact" 
      aria-label="Contact NexaWave Digital" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Start Your{' '}
            <span className="text-orange-500 font-extrabold">Project Today</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and we'll deliver a custom digital growth plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Phone', value: '+91 63776 75005', href: 'tel:+916377675005', sub: 'Available 24/7', gradient: 'from-blue-500 via-indigo-500 to-purple-500' },
                { icon: Mail, label: 'Email', value: 'info.nexawavedigital@gmail.com', href: 'mailto:info.nexawavedigital@gmail.com', sub: 'Reply within 24 hrs', gradient: 'from-green-500 via-emerald-500 to-teal-500' },
                { icon: MapPin, label: 'Location', value: 'Rajasthan, India', href: null, sub: 'Serving pan-India', gradient: 'from-orange-500 via-red-500 to-pink-500' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
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
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916377675005"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['24hr response', 'Free consultation', 'No obligation'].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs text-gray-500">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                  <p className="text-gray-500 text-sm max-w-xs mb-6">{errorMsg}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full transition-colors duration-300"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-6 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full" />
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

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-orange-500/30"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>

                    <p className="text-center text-[10px] text-gray-400">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}