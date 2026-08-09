'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-200/30 shadow-lg shadow-orange-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a 
            href="#home" 
            aria-label="NexaWave Digital home" 
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-[16px] tracking-tight text-gray-900 leading-none">
              NexaWave <span className="text-orange-500">Digital</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full shadow-md shadow-orange-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          <button
            className="md:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100/50 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-4 py-3.5 text-sm font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-red-500 hover:to-pink-500 rounded-xl transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-5 py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-sm font-semibold rounded-xl text-center transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}