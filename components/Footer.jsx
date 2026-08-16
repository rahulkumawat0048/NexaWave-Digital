"use client";

import { Zap, Shield, Clock, Award, Sparkles, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Development",
  "Smart SEO Systems",
  "App Development",
  "AI Automation",
  "Digital Marketing",
  "Brand Identity",
];

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.07 2.91-.56a5.86 5.86 0 0 0 2.12-1.38c.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Facebook", href: "https://www.facebook.com/share/1CrGNUfeqH/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexawavedigital?igsh=a2IzdzZveXNvemp2",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#26002b] text-white">
      {/* Premium CTA Section - Let's Build Together */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3a0a40] via-[#26002b] to-[#3a0a40] opacity-50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-[#e6a9e3]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-[#e6a9e3]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="section-shell relative py-10 sm:py-14">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left gap-6 lg:gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-2">
                <Rocket className="w-3.5 h-3.5 text-[#e6a9e3]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e6a9e3]">
                  Let's Create Something Amazing
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Ready to Build Together?
                <span className="block text-[#e6a9e3] mt-1">Let's Bring Your Vision to Life</span>
              </h2>
              <p className="text-sm text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From concept to launch, we're here to help you create a digital 
                presence that stands out. Let's start your next project today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#26002b] font-semibold rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
              >
                <span>Explore Services</span>
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--plum)]">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="font-display text-xl font-bold">NexaWave</span>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-6 text-white/55">
              Your trusted partner for digital growth across India. Web, App,
              SEO, Marketing &amp; AI Automation — delivered with luxury craft.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Trusted", "1+ Years", "10+ Clients"].map((text, i) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-[.1em] text-white/55"
                >
                  {i === 0 ? (
                    <Shield className="h-3 w-3" />
                  ) : i === 1 ? (
                    <Clock className="h-3 w-3" />
                  ) : (
                    <Award className="h-3 w-3" />
                  )}
                  {text}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/65 transition-colors hover:border-[#e6a9e3] hover:text-[#e6a9e3]"
                >
                  {label === "Instagram" ? (
                    <InstagramIcon className="h-3.5 w-3.5" />
                  ) : (
                    <span className="text-[9px] font-bold">
                      {label.slice(0, 2)}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <nav>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e6a9e3]">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e6a9e3]">
              Our services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-xs text-white/75">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e6a9e3]">
              Contact info
            </h3>
            <ul className="mt-5 space-y-4 text-xs text-white/75">
              <li>
                <a href="tel:+916377675005" className="hover:text-white">
                  +91 63776 75005
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.nexawavedigital@gmail.com"
                  className="break-all hover:text-white"
                >
                  info.nexawavedigital@gmail.com
                </a>
              </li>
              <li>Rajsamand, Rajasthan, India</li>
              <li>
                <a
                  href="https://wa.me/916377675005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#e6a9e3]"
                >
                  <Sparkles className="h-3 w-3" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] text-white/40 sm:flex-row">
          <p>© 2026 NexaWave Digital. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}