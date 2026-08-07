'use client';

import { Zap, Sparkles, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Website Development',
  'Smart SEO Systems',
  'App Development',
  'AI Automation',
  'Digital Marketing',
  'Brand Identity',
];

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.04 24 18.07 24 12.07z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38c.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

const socials = [
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/share/1CrGNUfeqH/', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/nexawavedigital?igsh=a2IzdzZveXNvemp2', label: 'Instagram' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white">
      <motion.div 
        className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-2.5 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-5 h-5 text-white fill-white" />
              </motion.div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NexaWave
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner for digital growth across India. Web, App, SEO, Marketing & AI Automation — delivered with luxury craft.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Trusted', '1+ Years', '10+ Clients'].map((text, i) => (
                <motion.div 
                  key={text}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/50 rounded-full border border-gray-700/50"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                >
                  {i === 0 && <Shield className="w-3 h-3 text-orange-400" />}
                  {i === 1 && <Clock className="w-3 h-3 text-blue-400" />}
                  {i === 2 && <Award className="w-3 h-3 text-yellow-400" />}
                  <span className="text-[10px] text-gray-400">{text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 bg-gray-800/60 hover:bg-gradient-to-r hover:from-orange-500 hover:via-red-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav variants={itemVariants}>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 inline-block">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <motion.li key={s} whileHover={{ x: 5 }}>
                  <span className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 cursor-default">
                    {s}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <motion.a
                  href="tel:+916377675005"
                  className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  +91 63776 75005
                </motion.a>
              </li>
              <li>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <motion.a
                  href="mailto:info.nexawavedigital@gmail.com"
                  className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors duration-200 break-all"
                  whileHover={{ x: 5 }}
                >
                  info.nexawavedigital@gmail.com
                </motion.a>
              </li>
              <li>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <span className="text-gray-300 text-sm font-medium">Rajsamand, Rajasthan, India</span>
              </li>
              <li>
                <motion.a
                  href="https://wa.me/916377675005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Sparkles className="w-3 h-3" />
                  Chat on WhatsApp
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800/60 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[11px]">
            © 2026 <span className="text-gray-400">NexaWave Digital</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Terms of Service', 'Privacy Policy', 'Sitemap'].map((text, i) => (
              <motion.a 
                key={text}
                href="#" 
                className="text-gray-500 hover:text-orange-400 text-[11px] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}