import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <img 
              src="/cns-logo-transparent.png" 
              alt="CNS Logo" 
              className="h-20 object-contain"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Bridging the gap between Strategy, Law, and Finance. We provide integrated, high-caliber solutions empowering businesses to navigate growth with absolute confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-teal-500 hover:text-navy-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-teal-500 hover:text-navy-900 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-teal-500 hover:text-navy-900 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Admin Login', href: '/login' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight size={14} className="text-teal-500/0 group-hover:text-teal-400 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <MapPin size={18} className="text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>B 538, Urbtech Trade Centre<br/>Sector 132, Noida</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <Phone size={18} className="text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:01169269304" className="hover:text-teal-400 transition-colors">011 6926 9304</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <Mail size={18} className="text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:contact@thecns.online" className="hover:text-teal-400 transition-colors">contact@thecns.online</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest legal insights and financial strategies directly to your inbox.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-1 top-1 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-navy-900 hover:bg-teal-400 transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Consult New Stream. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
