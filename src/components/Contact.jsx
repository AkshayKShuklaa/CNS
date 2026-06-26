import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-pad bg-navy-900 relative">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="section-title mb-6">Let's Build the Future Together</h2>
          <p className="section-copy mx-auto">
            We are ready to help you write your next chapter. Get in touch with our team today to discover how our integrated legal and financial insights can drive your vision forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-center space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full blur-[30px] z-0" />
              
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg mb-2 relative z-10">
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img src="/assets/image/connect-us.jpg" alt="Contact CNS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Call Us</p>
                      <a href="tel:01169269304" className="block text-slate-200 hover:text-teal-400 transition-colors font-medium">
                        011 6926 9304
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Email Us</p>
                      <a href="mailto:contact@thecns.online" className="block text-slate-200 hover:text-teal-400 transition-colors font-medium break-all">
                        contact@thecns.online
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Instagram</p>
                      <a href="https://instagram.com/consult.ns" target="_blank" rel="noopener noreferrer" className="block text-slate-200 hover:text-teal-400 transition-colors font-medium">
                        @consult.ns
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Location</p>
                      <p className="text-slate-200 font-medium">
                        B 538, Urbtech Trade Centre<br />
                        <span className="text-slate-400 text-sm font-normal">Sector 132, Noida</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Working Hours</p>
                      <p className="text-slate-200 font-medium">Mon - Sat: 10:00 AM - 09:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Inquiry / Details</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                    placeholder="Briefly describe how we can assist you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full group">
                  Work With Us
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
