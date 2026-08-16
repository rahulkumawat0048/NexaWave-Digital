import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import heroMain from '@/public/hero/hero-main.jpeg';
import heroProject from '@/public/hero/hero-project.jpeg';

const stats = [
  { value: '10+', label: 'Projects Delivered', sub: 'Across diverse industries' },
  { value: '3–4', label: 'Day Avg. Delivery', sub: 'For landing pages' },
  { value: '100%', label: 'Client Satisfaction', sub: 'Zero compromise on quality' },
];

export default function HeroSection() {
  return (
    <section id="home" aria-label="NexaWave Digital hero" className="relative" style={{ marginTop: 2}}>

      {/* MOBILE layout */}
      <div className="flex flex-col sm:hidden hero-mobile-container mx-3 pb-2 pt-1" style={{ height: 'calc(100vh - 74px)' }}>
        <div className="relative rounded-2xl overflow-hidden flex-1 min-h-0">
          <Image
            src={heroMain}
            alt="NexaWave Digital — website development and SEO agency in Rajsamand, Rajasthan"
            fill
            priority
            quality={80}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/60 to-gray-900/90" />
          <div className="relative h-full flex flex-col justify-end px-5 pb-16 pt-8">
            <p className="text-white text-[13px] font-medium tracking-wide mb-3">
              #1 Digital Growth Agency in India
            </p>
            <h1 className="text-[26px] font-bold text-white leading-[1.2] mb-5">
              Scale Your Business with{' '}
              <span className="text-[--plum]">Premium Websites</span>
              {' '}& Smart SEO Systems
            </h1>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 bg-[--plum] text-white font-semibold rounded-full md:text-[14px] text-[12px] hover:scale-105 transition-transform duration-200"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-full border border-white/50 text-[14px] hover:bg-white/10 transition-colors duration-200"
              >
                Our services <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 -mt-6 relative z-10 flex items-center px-3 py-3 shrink-0">
          <div className="grid grid-cols-3 divide-x divide-gray-200 w-full">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center px-1 py-2">
                <div className="text-[26px] font-bold text-[--plum] leading-none">{stat.value}</div>
                <div className="text-[11px] font-semibold text-gray-800 mt-1.5 leading-tight">{stat.label}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP layout */}
      <div className="hidden sm:block">
        <div className="relative mx-6 lg:mx-8 rounded-2xl overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
          <Image
            src={heroMain}
            alt="NexaWave Digital — premium website development and smart SEO systems in Rajsamand"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="calc(100vw - 48px)"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/55 to-gray-800/40" />
          <div className="relative h-full flex flex-col justify-end px-10 lg:px-16 pb-14 lg:pb-16">
            <p className="text-white/70 text-sm font-medium tracking-wide mb-3">
              #1 Digital Growth Agency in India
            </p>
            <h1 className="text-[38px] lg:text-[50px] font-bold text-white leading-[1.1] max-w-2xl mb-7">
              Scale Your Business with{' '}
              <span className="text-[--plum]">Premium Websites</span>
              {' '}& Smart SEO Systems
            </h1>
            <div className="flex flex-wrap gap-5">
              <a
                href="#contact"
                className="flex items-center justify-center px-5 py-3.5 bg-[--plum] text-white text-sm font-semibold rounded-xl text-center hover:scale-105 transition-transform duration-200"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-colors duration-200 border border-white/20 text-sm hover:scale-105"
              >
                Our services <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="absolute top-10 right-8 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-52">
              <div className="relative rounded-xl overflow-hidden mb-3 h-28">
                <Image
                  src={heroProject}
                  alt="Recent high-converting landing page project by NexaWave Digital"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
              <p className="text-white font-semibold text-sm">Discover Our Recent Project</p>
              <p className="text-white/60 text-xs mt-0.5">High-converting landing page</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-6 lg:mx-8 -mt-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-16 py-8">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {stats.map((stat, index) => (
                <div key={stat.value} className={`${index === 1 ? "text-center" : index === 2 ? "text-right" : "text-left"} px-8 lg:px-10 first:pl-0 last:pr-0`}>
                  <div className="text-4xl lg:text-5xl font-bold text-[--plum] tracking-tight">{stat.value}</div>
                  <div className="text-base font-semibold text-gray-800 mt-1">{stat.label}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}