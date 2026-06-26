import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle2, User, Mail, Phone, MapPin, MessageSquare, FileText } from 'lucide-react';

const Page = () => {
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-navy-900 flex items-center justify-center relative overflow-hidden">
      {/* Decorative backdrop blur */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/5 bg-navy-800/40 relative overflow-hidden shadow-glow"
        >
          {/* Top heading */}
          <div className="text-center mb-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg"
            >
              We are open to welcoming Financial Advisors, lawyers, paralegals, and legal professionals.
            </motion.p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 border border-white/20"
              >
                <CheckCircle2 size={40} />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Application Received</h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                Thank you for applying. Our hiring committee will review your resume and contact you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={formVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <motion.div variants={itemVariants} className="relative group">
                  <span className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-white transition-colors">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-all text-white placeholder-slate-500"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="relative group">
                  <span className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-white transition-colors">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-all text-white placeholder-slate-500"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants} className="relative group">
                  <span className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-white transition-colors">
                    <Phone size={18} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-all text-white placeholder-slate-500"
                  />
                </motion.div>

                {/* Address */}
                <motion.div variants={itemVariants} className="relative group">
                  <span className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-white transition-colors">
                    <MapPin size={18} />
                  </span>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-all text-white placeholder-slate-500"
                  />
                </motion.div>
              </div>

              {/* PDF Resume Attachment */}
              <motion.div variants={itemVariants} className="relative">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block pl-1">
                  Upload Resume (PDF only)
                </label>
                <div className="relative border-2 border-dashed border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all bg-white/5 text-center group">
                  <input
                    type="file"
                    name="attachment"
                    required
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-black transition-colors">
                      {fileName ? <FileText size={20} /> : <Upload size={20} />}
                    </div>
                    {fileName ? (
                      <span className="text-sm font-semibold text-white truncate max-w-xs">{fileName}</span>
                    ) : (
                      <>
                        <span className="text-sm text-slate-300">Click or drag PDF resume here</span>
                        <span className="text-xs text-slate-500">Maximum file size: 5MB</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="relative group">
                <span className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-white transition-colors">
                  <MessageSquare size={18} />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself / Cover message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white focus:bg-white/10 transition-all text-white placeholder-slate-500 h-32 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-bold text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-[0_0_36px_rgba(255,255,255,0.2)]"
                >
                  Submit Application
                </button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
