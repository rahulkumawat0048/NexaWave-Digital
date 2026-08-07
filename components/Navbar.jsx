'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-200/30 shadow-lg shadow-orange-200/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <motion.a 
            href="#home" 
            aria-label="NexaWave Digital home" 
            className="flex items-center gap-2.5 group shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-4 h-4 text-white fill-white" />
            </motion.div>
            <span className="font-bold text-[16px] tracking-tight text-gray-900 leading-none">
              NexaWave <span className="text-orange-500">Digital</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden md:flex items-center gap-3 shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-sm font-semibold rounded-full shadow-md shadow-orange-500/30 whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 30px -10px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav 
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100/50 overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3.5 text-sm font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-red-500 hover:to-pink-500 rounded-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                className="pt-2 pb-1"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-5 py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-sm font-semibold rounded-xl text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in touch
                </motion.a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}