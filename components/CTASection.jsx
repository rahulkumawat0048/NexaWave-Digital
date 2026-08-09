'use client';

import { Check, ArrowUpRight, Sparkles, Rocket, Zap, TrendingUp } from 'lucide-react';

export default function CTASection() {
  return (
    <section 
      id="cta" 
      aria-label="Call to action" 
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Let's Build Together</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-[1.15]">
              It's time to build your{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
                digital dominance
              </span>
              ,{' '}
              <span className="text-gray-400 font-normal">with NexaWave</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              {['Experienced for more than 1+ years', 'Support for the latest technology'].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-800/50">
              {[
                { icon: Rocket, label: '10+ Projects', color: 'text-orange-400' },
                { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
                { icon: TrendingUp, label: 'Growth Guaranteed', color: 'text-green-400' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:text-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-orange-500/10 font-serif leading-none">
                "
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                By increasing the efficiency of your digital presence, the use of premium web technology is very profitable for all business services.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-semibold rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Get in touch 
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
                
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white font-semibold rounded-full text-sm transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  Explore Services
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                No commitment required • Free consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}