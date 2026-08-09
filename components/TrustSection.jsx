'use client';

import { Globe2, Users2, Award, Clock, Shield, Sparkles, Star, Zap, TrendingUp, ThumbsUp } from "lucide-react";

const trustIndicators = [
  {
    icon: Users2,
    value: "10+",
    label: "Happy Clients",
    description: "Across diverse industries",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    bgGradient: "from-blue-50/50 via-indigo-50/50 to-purple-50/50"
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
    description: "Quality guaranteed",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    bgGradient: "from-yellow-50/50 via-orange-50/50 to-red-50/50"
  },
  {
    icon: Clock,
    value: "3-4",
    label: "Day Delivery",
    description: "For landing pages",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgGradient: "from-green-50/50 via-emerald-50/50 to-teal-50/50"
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support",
    description: "Dedicated assistance",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50/50 via-pink-50/50 to-rose-50/50"
  },
];

export default function TrustSection() {
  return (
    <section id="trust" aria-label="Trust and quality assurance" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50/80 via-red-50/80 to-pink-50/80 border border-orange-200/30 rounded-full px-4 py-1.5 mb-4 shadow-sm backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
            <span className="text-orange-700 text-xs font-semibold uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            We Believe in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 font-extrabold">
              Quality & Trust
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every project we deliver goes through rigorous quality checks. We're committed to building scalable, high-performance solutions that help your business grow.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100/50 hover:border-transparent p-4 sm:p-5 text-center transition-all duration-300 overflow-hidden hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-2.5 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
                  </div>
                  
                  <div className={`text-xl sm:text-2xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-0.5`}>
                    {item.value}
                  </div>
                  
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700 mb-0.5">{item.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400">{item.description}</div>
                  
                  <div className={`w-6 h-0.5 bg-gradient-to-r ${item.gradient} rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {[
            { 
              icon: Sparkles, 
              title: 'Quality First', 
              desc: 'Every line of code is reviewed for performance, security, and best practices.', 
              gradient: 'from-orange-500 via-red-500 to-pink-500',
              bgGradient: 'from-orange-50/50 via-red-50/50 to-pink-50/50'
            },
            { 
              icon: Globe2, 
              title: 'Modern Solutions', 
              desc: 'We use the latest technologies to build fast, responsive, and scalable websites.', 
              gradient: 'from-blue-500 via-indigo-500 to-purple-500',
              bgGradient: 'from-blue-50/50 via-indigo-50/50 to-purple-50/50'
            },
            { 
              icon: Users2, 
              title: 'Client-First Approach', 
              desc: 'Your success is our success. We work closely with you to achieve your goals.', 
              gradient: 'from-green-500 via-emerald-500 to-teal-500',
              bgGradient: 'from-green-50/50 via-emerald-50/50 to-teal-50/50'
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-2xl border border-gray-100/50 hover:border-transparent p-5 transition-all duration-300 overflow-hidden hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
              
              <div className="relative flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                  <item.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-0.5 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="relative bg-gradient-to-r from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-2xl border border-orange-200/30 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm overflow-hidden">
          <div className="relative flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {[
              { icon: ThumbsUp, label: '100% Client Satisfaction', color: 'text-green-500', bg: 'from-green-500 to-emerald-500' },
              { icon: TrendingUp, label: '10+ Projects Delivered', color: 'text-blue-500', bg: 'from-blue-500 to-indigo-500' },
              { icon: Star, label: '4.9/5 Rating', color: 'text-yellow-500', bg: 'from-yellow-500 to-orange-500' },
              { icon: Zap, label: 'Fast Turnaround', color: 'text-orange-500', bg: 'from-orange-500 to-red-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-md`}>
                  <item.icon className={`w-3 h-3 text-white ${item.label === '4.9/5 Rating' ? 'fill-white' : ''}`} />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}