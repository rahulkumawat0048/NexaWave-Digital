import { Monitor, Search, Smartphone, Bot, BarChart3, PenTool, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    desc: 'Business Websites, Landing Pages & Custom Dashboards. Ultra-fast, beautiful on all devices, tailored to automate your business.',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Search,
    title: 'Smart SEO Systems',
    desc: 'Google Maps SEO, Business Profile optimization, and organic search domination built from the ground up.',
    gradient: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-50 to-green-50',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Scalable mobile and web applications engineered for performance, reliability, and seamless user experience.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Bot,
    title: 'AI Automation Funnels',
    desc: 'Intelligent automation workflows that streamline operations, nurture leads, and convert prospects into customers.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across Google, Meta, and organic channels to accelerate your growth trajectory.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Premium branding systems — logo, typography, color, and visual language that builds instant authority.',
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
  },
];

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      aria-label="Our digital services" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700 text-xs font-semibold uppercase tracking-wider">What We Do</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.15] mb-3">
            Services That Drive{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent font-extrabold">
              Real Growth
            </span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Complete digital solutions designed to transform your business and accelerate growth
            across every touchpoint.
          </p>
        </div>

        {/* ─── Services Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 shadow-md shadow-opacity-20 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Learn more indicator */}
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      Learn more
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transition-transform duration-300 group-hover:translate-x-1`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── CTA Section ────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-8 sm:p-10 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                Let's Get Started
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Grow Your Business?
            </h3>
            
            <p className="text-green-100/90 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-7 py-3 rounded-full hover:bg-green-50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
