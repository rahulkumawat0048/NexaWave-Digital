"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

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
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CrGNUfeqH/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexawavedigital?igsh=a2IzdzZveXNvemp2",
    icon: InstagramIcon,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b h-[70px] border-[#eee7ee] bg-white/95 backdrop-blur-md">
        <div className="md:mx-16 mx-3">
          <div className="flex h-[70px] items-center justify-between">
            <a
              href="/"
              aria-label="NexaWave Digital home"
              className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-100"
            >
              <Image
                src="/favicon.jpeg"
                alt="NexaWave Digital"
                width={38}
                height={38}
                className="rounded-full border border-[#eaddeb] object-cover"
              />
              <span className="text-[15px] font-semibold text tracking-wider text-[#252027]">
                NexaWave <span className="text-[--plum-dark]">Digital</span>
              </span>
            </a>

            <div className="flex">
              <nav
                className="hidden items-center gap-8 md:flex"
                aria-label="Main navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[12px] font-semibold uppercase tracking-wider text-[--plum] transition-colors duration-200 hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-4 pl-8 md:flex">
                <span className="h-4 w-px bg-[#ded4de]" aria-hidden="true" />
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={label}
                    className="text-[var(--plum)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              className="rounded-sm p-2 text-[#253346] transition-colors duration-200 hover:bg-[var(--lavender)] hover:text-[var(--plum)] md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-[#eee7ee] bg-white transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="section-shell flex flex-col gap-1 py-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#69616b] transition-colors duration-200 hover:bg-[var(--lavender)] hover:text-[var(--plum)]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 border-t border-[#eee7ee] px-3 pt-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-[#e1d5e2] text-[var(--plum)] transition-all duration-200 hover:scale-105 hover:border-[var(--plum)] hover:bg-[var(--lavender)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>
      {/* Add spacing to prevent content from hiding behind fixed navbar */}
      <div className="h-[70px]"></div>
    </>
  );
}