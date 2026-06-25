import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Are lawyers and prosecutors different?",
    a: "Yes, they are different. Proving in court that the suspect committed the crime they are accused of is the responsibility of a prosecutor, who is an attorney who works for a state or government agency. The opposite of this is a lawyer, who represents their client in court."
  },
  {
    q: "Why should I hire a lawyer?",
    a: "A lawyer is someone who is well versed with the law of the country and hence, can help you out in any legal situation and provide you justice."
  },
  {
    q: "In which area do lawyers specialise?",
    a: "Different lawyers specialise in different legal matters. There are corporate lawyers, criminal lawyers, family lawyers, employment and labour lawyers, etc who are experts in their fields."
  },
  {
    q: "What are the business hours of VR Associates Law Firm?",
    a: "Our business hours are Monday to Sunday: 10:00 AM - 9:00 PM."
  },
  {
    q: "How to Find the Best Divorce Lawyers in NCR Court?",
    a: "Getting a divorce lawyer in NCR and following through with all legal procedures can be draining. You need a person who knows the legal processes and requirements. A specialized lawyer from VR Associates will have the experience to fix the issue efficiently and offer you a clear portrait of the circumstance."
  },
  {
    q: "What is the procedure for mutual consent divorce in NCR?",
    a: "Step 1- First motion necessitates the joint petition filing. Step 2- Wife and husband appear before the court to record their declarations. Step 3- The court inspects their appeal and documents, refers for mediation, and records statements. The court then passes the order on the first motion. Later, the judge grants permission to file for the second motion."
  },
  {
    q: "Who is the best divorce lawyer near me?",
    a: "VR Associates Law Firm provides the Best Divorce Lawyers in NCR and has the best experienced legal practitioners specialising in Matrimonial Jurisprudence."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
            We Have All Your <span className="text-gold-400">Answers Here</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden relative shadow-2xl group sticky top-24"
          >
            <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img src="/assets/image/best-advisor-for-law-firm.jpg" alt="FAQ Law Firm" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Accordion Column */}
          <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'border-teal-500/30 bg-white/[0.03]' : 'hover:border-white/10'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-serif text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-teal-400' : 'text-slate-200'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-teal-500/20 text-teal-400' : 'bg-white/5 text-slate-400'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
