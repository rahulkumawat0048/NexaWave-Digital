import { Check, ArrowUpRight, Sparkles, Rocket, Zap, TrendingUp } from 'lucide-react';

export default function CTASection() {
  return (
    <section 
      id="cta" 
      aria-label="Call to action" 
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ─── Decorative Background Elements ────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* ─── Left Column ────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                Let's Build Together
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-[1.15]">
              It's time to build your{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                digital dominance
              </span>
              ,{' '}
              <span className="text-gray-400 font-normal">with NexaWave</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <div className="flex items-center gap-2.5 group">
                <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  Experienced for more than 1+ years
                </span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  Support for the latest technology
                </span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-800/50">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">10+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-400">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-400">Growth Guaranteed</span>
              </div>
            </div>
          </div>

          {/* ─── Right Column ────────────────────────────────────────── */}
          <div className="lg:text-right">
            <div className="relative">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-green-500/10 font-serif leading-none">
                "
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                By increasing the efficiency of your digital presence, the use of premium web
                technology is very profitable for all business services.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-600/40"
                >
                  Get in touch 
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </a>
                
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white font-semibold rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
                >
                  Explore Services
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
              
              {/* Small note */}
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
