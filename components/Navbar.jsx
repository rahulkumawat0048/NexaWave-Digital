'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs  ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#home" aria-label="NexaWave Digital home" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors duration-200" aria-hidden="true">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900 leading-none">
              NexaWave <span className="text-green-600">Digital</span>
            </span>
          </a>

          {/* Desktop Nav — centered */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-green-600 group-hover:w-full transition-all duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-md hover:shadow-green-600/20 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav aria-label="Mobile navigation" className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-5 py-3 bg-green-600 text-white text-sm font-semibold rounded-full text-center hover:bg-green-700 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
