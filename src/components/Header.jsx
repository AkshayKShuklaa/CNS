import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Investments', href: '/#investments' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Join Our Team', href: '/join-our-team' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-navy-900/95 backdrop-blur-md shadow-md py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/cns-logo-transparent.png" 
            alt="CNS Logo" 
            className="h-12 sm:h-16 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Home</Link>
            </li>
            
            {/* Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors py-2">
                Services <ChevronDown size={14} />
              </button>
              
              <AnimatePresence>
                {practiceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-navy-800 shadow-xl border border-white/10 rounded-md py-2 max-h-[70vh] overflow-y-auto custom-scrollbar"
                  >
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        to={`/practice/${area.slug}`}
                        className="block px-4 py-2 text-sm text-slate-300 hover:text-teal-400 hover:bg-navy-700 transition"
                      >
                        {area.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors tracking-wide"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="tel:01169269304" className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition">
              <Phone size={16} />
              <span>011 6926 9304</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-slate-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-navy-800 shadow-xl border-t border-white/10 overflow-hidden xl:hidden"
          >
            <div className="p-5 max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col gap-4 mb-6">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-200">Home</Link>
                </li>
                <li>
                  <div className="text-base font-medium text-teal-400 mb-2 border-b border-white/10 pb-2">Services</div>
                  <ul className="flex flex-col gap-2 pl-4 border-l border-white/10">
                    {practiceAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          to={`/practice/${area.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-slate-300 hover:text-teal-400"
                        >
                          {area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {navLinks.slice(1).map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-medium text-slate-200 hover:text-teal-400"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-medium text-slate-200 hover:text-teal-400"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
                <a href="tel:01169269304" className="flex items-center gap-2 text-slate-300">
                  <Phone size={18} />
                  <span>011 6926 9304</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
