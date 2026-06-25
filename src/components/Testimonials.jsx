import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Akansha Dwivedi',
    text: "The best consultant and lawyer even an advice can change your thinking and life and he's the best one about it.",
    rating: 5,
    avatar: '/assets/image/Supriya.jpeg'
  },
  {
    name: 'Suhani Sehgal',
    text: "Thank you Consult New Stream for all the help and support while fighting my sister's case. The case went in her favor, all thanks to your knowledge and efforts! Highly recommended!",
    rating: 5,
    avatar: '/assets/image/Gitanjali.jpg'
  },
  {
    name: 'Arun',
    text: "I highly recommend Consult New Stream. They guided me through a tough phase with care and clarity. I truly appreciate everything they did for me.",
    rating: 5,
    avatar: '/assets/image/suresh.png'
  },
  {
    name: 'Priyanka Borah',
    text: "Working with Consult New Stream truly made a difference during one of the most challenging times in my life. From our very first meeting, they combined expert legal counsel with genuine empathy, offering not just guidance but a sense of calm that made the entire process much easier to navigate.",
    rating: 5,
    avatar: '/assets/image/rekha.jpeg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Client Reviews</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
            What Our <span className="text-gold-400">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 md:p-10 rounded-3xl relative group"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-teal-400/10 transition-colors duration-500">
                <Quote size={80} className="rotate-180" />
              </div>

              <div className="flex gap-1 mb-6 text-gold-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-300 text-lg mb-8 relative z-10 leading-relaxed font-light italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-teal-500/20">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-200 text-lg">{t.name}</h4>
                  <p className="text-sm text-slate-500">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
