import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 lg:pt-24 pb-12">
      <div className="absolute inset-0 bg-navy-900">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/image/bannerimage1.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 to-transparent opacity-50" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-500 text-sm font-semibold tracking-widest mb-8 uppercase">
            <Shield size={16} />
            <span className="mt-0.5">Premier Legal & Business Firm</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 leading-tight mb-6">
            Expertise. Empathy. <br className="hidden md:block" />
            <span className="text-teal-400">Excellence.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Consult New Stream offers top-notch legal representation ensuring your case success & favorable results every step of the way. From district courts to the Supreme Court of India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary group text-base px-8 py-4">
              Book a Consultation
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#services" className="btn-secondary group text-base px-8 py-4">
              Our Practice Areas
              <Scale className="group-hover:-rotate-12 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-12 w-full max-w-5xl"
        >
          {[
            { label: 'Successful Cases', value: '1,500+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Expert Lawyers', value: '15+' },
            { label: 'Courts Covered', value: 'All Levels' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </section>
  );
};

export default Hero;
