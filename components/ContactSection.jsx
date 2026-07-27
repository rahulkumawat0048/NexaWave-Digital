'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Check, Loader2, AlertCircle, Sparkles, Clock, Shield } from 'lucide-react';

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
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">
              Let's Connect
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Start Your{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              Project Today
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and we'll deliver a custom digital growth plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ─── Left Column ────────────────────────────────────────── */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
            
            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-md shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                  <a 
                    href="tel:+916377675005" 
                    aria-label="Call NexaWave Digital at +91 63776 75005" 
                    className="text-gray-900 font-semibold hover:text-green-600 transition-colors text-sm"
                  >
                    +91 63776 75005
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Available 24/7
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Email</p>
                  <a 
                    href="mailto:info.nexawavedigital@gmail.com" 
                    aria-label="Email NexaWave Digital" 
                    className="text-gray-900 font-semibold hover:text-green-600 transition-colors text-sm"
                  >
                    info.nexawavedigital@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Reply within 24 hrs
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-gray-900 font-semibold text-sm">Rajasthan, India</p>
                  <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Serving pan-India
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916377675005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with NexaWave Digital on WhatsApp"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-600/30"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Chat on WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-gray-500">24hr response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-gray-500">Free consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-gray-500">No obligation</span>
              </div>
            </div>
          </div>

          {/* ─── Right Column — Form ────────────────────────────────── */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <div className="relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
                    className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      aria-label="Send message to NexaWave Digital"
                      className="w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
