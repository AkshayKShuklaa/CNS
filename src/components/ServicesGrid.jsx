import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Users, Briefcase, FileText, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/assets/image/practice-area/divorce-lawyer.jpeg',
    icon: <Users size={20} />,
    title: 'Divorce Lawyer',
    slug: 'divorce-advocate-NCR',
    desc: 'The legal process of a divorce depends on the type of matrimonial issue. Expert representation for peaceful transitions.',
  },
  {
    image: '/assets/image/practice-area/child-custody.webp',
    icon: <Users size={20} />,
    title: 'Child Custody',
    slug: 'child-custody',
    desc: 'A child has a right to the affection of both his parents. We ensure the family court grants appropriate visitation and custody rights.',
  },
  {
    image: '/assets/image/practice-area/property-lawyers.jpeg',
    icon: <Building2 size={20} />,
    title: 'Property Lawyer (RERA)',
    slug: 'best-property-lawyers-NCR',
    desc: 'Esteemed legal services for Real Estate matters, resolving disputes and navigating RERA compliance efficiently.',
  },
  {
    image: '/assets/image/practice-area/corporate-lawyer.png',
    icon: <Briefcase size={20} />,
    title: 'Corporate Lawyer',
    slug: 'corporate-law',
    desc: 'Multi-disciplinary commercial representation ensuring corporate compliance, governance, and business success.',
  },
  {
    image: '/assets/image/practice-area/criminal-lawyer.jpeg',
    icon: <Shield size={20} />,
    title: 'Criminal Lawyer',
    slug: 'best-criminal-lawyer-in-NCR',
    desc: 'Commendable services and strategic solutions, ensuring your legal interests are safeguarded with unmatched proficiency.',
  },
  {
    image: '/assets/image/real-eatase.jpeg',
    icon: <Landmark size={20} />,
    title: 'Real Estate Lawyer',
    slug: 'real-estate-lawyer',
    desc: 'Trustable wide range of legal services and representation for property transactions and dispute resolution.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Areas of Practice</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
            Our Popular <span className="text-gold-400">Legal Services</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="p-8 flex-grow relative z-10 flex flex-col">
                {/* Highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-3 relative z-10 flex-grow">
                  {service.desc}
                </p>
                
                <Link 
                  to={`/practice/${service.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300 relative z-10 mt-auto"
                >
                  Read More 
                  <motion.span 
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
