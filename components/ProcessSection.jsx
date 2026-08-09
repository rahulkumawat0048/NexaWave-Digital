'use client';

import Image from 'next/image';
import { ArrowUpRight, Sparkles, ChevronRight, CheckCircle } from 'lucide-react';

const processTeam = '/process/process-team.jpeg';

const steps = [
  {
    num: '01',
    title: 'Business Meeting',
    desc: 'We connect over a call or WhatsApp to understand your business requirements, products, and target audience.',
  },
  {
    num: '02',
    title: 'Custom Strategy',
    desc: 'We create a simple, tailored digital blueprint, website design mockup, and fixed transparent budget for your project.',
  },
  {
    num: '03',
    title: 'Fast Development',
    desc: 'Our technical team builds your lightning-fast website and sets up your entire Google Maps SEO and business profile.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We launch your brand live on Google and provide you with seamless lifetime technical support.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-label="Our working process" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Left Column */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl" />
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-[1.15]">
              Trusted Service,{' '}
              <span className="text-orange-500 font-extrabold">For Your Various Needs</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed max-w-md">
              A streamlined process designed to deliver results efficiently and transparently from start to finish.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {['Transparent Process', 'Fast Delivery', 'Lifetime Support'].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-gray-600 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold rounded-full text-sm shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-xl"
            >
              Get in touch 
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          {/* Right Column - Steps */}
          <div className="relative">
            <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 opacity-20" />
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative flex gap-4 py-5 ${i < steps.length - 1 ? 'border-b border-gray-100/80' : ''} group cursor-default pl-12`}
                >
                  <div className="absolute left-0 top-5 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white text-[10px] font-bold shadow-lg shadow-orange-500/20">
                    <span className="sr-only">Step {step.num}</span>
                    <span>{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                      {step.title}
                      <ChevronRight className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
          <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
              </span>
              <span className="text-white text-xs font-medium">Active Projects</span>
            </div>
          </div>
          <Image
            src={processTeam}
            alt="NexaWave Digital team building custom websites and SEO systems for clients"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, calc(100vw - 64px)"
            loading="lazy"
            quality={85}
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-sm font-medium">Our team at work — building digital excellence</p>
            <p className="text-white/60 text-xs">Rajsamand, Rajasthan — 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}