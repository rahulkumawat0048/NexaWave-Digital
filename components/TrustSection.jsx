import { Globe2, Users2, Award, Clock, Shield, Sparkles, Star, CheckCircle } from "lucide-react";

const trustIndicators = [
  {
    icon: Users2,
    value: "10+",
    label: "Happy Clients",
    description: "Across diverse industries",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
    description: "Quality guaranteed",
  },
  {
    icon: Clock,
    value: "3-4",
    label: "Day Delivery",
    description: "For landing pages",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support",
    description: "Dedicated assistance",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      aria-label="Trust and quality assurance"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200/50 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-green-600 fill-green-600" />
            <span className="text-xs font-medium text-green-700 tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            We Believe in{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 font-extrabold">
                Quality & Trust
              </span>
              {/* Dark green-cyan underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 rounded-full transition-all duration-300 group-hover:w-full shadow-lg shadow-green-600/30"></span>
              {/* Dark green-cyan glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-500/10 to-cyan-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              {/* Floating dark accent */}
              <span className="absolute -top-2 -right-2 w-1.5 h-1.5 rounded-full bg-green-700/30 animate-pulse"></span>
              <span className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-emerald-700/30 animate-pulse delay-75"></span>
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every project we deliver goes through rigorous quality checks. 
            We're committed to building scalable, high-performance solutions 
            that help your business grow.
          </p>
        </div>

        {/* ─── Trust Indicators Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-200 p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-green-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Why Choose Us ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 p-5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-md shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                  Quality First
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Every line of code is reviewed for performance, security, and best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 p-5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Globe2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                  Modern Solutions
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We use the latest technologies to build fast, responsive, and scalable websites.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-purple-200 p-5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                <Users2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                  Client-First Approach
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Your success is our success. We work closely with you to achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Trust Bar ──────────────────────────────────────── */}
        <div className="relative bg-gradient-to-r from-green-600/5 via-emerald-500/5 to-cyan-600/5 rounded-2xl border border-green-100/50 px-6 sm:px-8 py-4 sm:py-5">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                100% Client Satisfaction
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                10+ Projects Delivered
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                4.9/5 Rating
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Fast Turnaround
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
