import { Zap, Search, Clock, Palette, DollarSign, TrendingUp, Sparkles, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance-first',
    desc: 'Lightning-fast websites optimized for speed and user experience. Core Web Vitals perfected.',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Search,
    title: 'SEO-ready',
    desc: 'Built with search engine optimization from the ground up. Rank higher from day one.',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Clock,
    title: 'Fast delivery',
    desc: 'Quick turnaround times without compromising quality. Landing pages in 3–4 days.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: Palette,
    title: 'Premium UI',
    desc: 'Beautiful, modern designs that convert visitors into customers with clear hierarchy.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: DollarSign,
    title: 'Transparent pricing',
    desc: 'No hidden fees. Clear, upfront pricing for every project — what you see is what you pay.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: TrendingUp,
    title: 'Growth-focused',
    desc: 'Every solution designed to help your business scale. We think long-term, not just launch-day.',
    gradient: 'from-rose-500 to-red-500',
    bgGradient: 'from-rose-50 to-red-50',
  },
];

export default function DifferenceSection() {
  return (
    <section 
      id="difference" 
      aria-label="Why choose NexaWave Digital" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            We Offer Quality,{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              With the Best Approach
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The NexaWave Difference — we don't just build websites. We engineer complete digital
            growth systems.
          </p>
        </div>

        {/* ─── Feature Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${feat.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
                
                <div className="relative flex gap-4">
                  {/* Icon with gradient background */}
                  <div className="shrink-0">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-md shadow-opacity-20 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {feat.desc}
                    </p>
                    
                    {/* Subtle indicator */}
                    <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feat.gradient}`} />
                      <span className={`text-[10px] font-medium bg-gradient-to-r ${feat.gradient} bg-clip-text text-transparent`}>
                        Key feature
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Bottom CTA / Trust Bar ────────────────────────────── */}
        <div className="mt-10 sm:mt-14">
          <div className="relative bg-gradient-to-r from-green-600/5 via-emerald-500/5 to-cyan-600/5 rounded-2xl border border-green-100/50 px-6 sm:px-8 py-5 sm:py-6">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Quality Guaranteed</div>
                  <div className="text-[10px] text-gray-500">100% satisfaction</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Star className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">4.9/5 Rating</div>
                  <div className="text-[10px] text-gray-500">Client reviews</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Growth Focused</div>
                  <div className="text-[10px] text-gray-500">Long-term success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
