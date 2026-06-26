import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, LogOut, Upload, Image as ImageIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const defaultPortfolio = [
  {
    id: '1',
    title: "Rajnesh v. Neha (AIR 2020 SC)",
    text: "AIR 2020 SC, Criminal Appeal No. 730 of 2020, decided on 04 November 2020. This landmark judgement sets guidelines on alimony and maintenance in matrimonial disputes.",
    imageUrl: "/admin/upload/judgement/661095809.png"
  },
  {
    id: '2',
    title: "Gaurav Nagpal v. Sumedha Nagpal",
    text: "AIR 2009 SC 557, Civil Appeal No. 4359 of 2002. An essential precedent regarding child custody rights in Indian family law.",
    imageUrl: "/admin/upload/judgement/601894520.webp"
  },
  {
    id: '3',
    title: "Vineeta Sharma v. Rakesh Sharma",
    text: "AIR 2020 SC 3717, Civil Appeal No. 32601 of 2018. A milestone ruling establishing coparcenary rights for daughters in Hindu Undivided Family property.",
    imageUrl: "/admin/upload/judgement/1442967649.webp"
  },
  {
    id: '4',
    title: "Smt. Seema v. Ashwani Kumar",
    text: "AIR 2006 SC 1158, Writ Petition (Civil) No. 291 of 2005. The Supreme Court ruling that made registration of marriages compulsory in India.",
    imageUrl: "/admin/upload/judgement/1522889100.webp"
  },
  {
    id: '5',
    title: "Indra Sarma v. V.K.V. Sarma",
    text: "AIR 2013 SC 3096, Criminal Appeal No. 2009 of 2013. A key decision on live-in relationships and protection under the Domestic Violence Act.",
    imageUrl: "/admin/upload/judgement/1543310096.webp"
  },
  {
    id: '6',
    title: "Shilpa Sailesh v. Varun Sreenivasan",
    text: "AIR 2023 SC 2495, Civil Appeal No. 498 of 2015. Landmark ruling allowing the Supreme Court to grant divorce directly under Article 142 on the ground of irretrievable breakdown.",
    imageUrl: "/admin/upload/judgement/1474778962.webp"
  },
  {
    id: '7',
    title: "Shayara Bano v. Union of India",
    text: "AIR 2017 SC 4609, Writ Petition (Civil) No. 118 of 2016. The historic judgement declaring the practice of Triple Talaq (Talaq-e-biddat) unconstitutional.",
    imageUrl: "/admin/upload/judgement/444068797.webp"
  },
  {
    id: '8',
    title: "Samar Ghosh v. Jaya Ghosh",
    text: "AIR 2007 SC 3146, Civil Appeal No. 151 of 2004. Significant ruling outlining grounds and examples of mental cruelty in divorce proceedings.",
    imageUrl: "/admin/upload/judgement/965533667.webp"
  },
  {
    id: '9',
    title: "Naveen Kohli v. Neelu Kohli",
    text: "AIR 2006 SC 1675, Civil Appeal No. 2791 of 2005. Landmark ruling discussing the irretrievable breakdown of marriage as a key factor in divorce cases.",
    imageUrl: "/admin/upload/judgement/59042934.webp"
  },
  {
    id: '10',
    title: "Sarla Mudgal v. Union of India",
    text: "AIR 1995 SC 1531, Writ Petition (Civil) No. 347 of 1990. Important ruling on conflict of personal laws and bigamy under the Indian Penal Code.",
    imageUrl: "/admin/upload/judgement/810388111.webp"
  },
  {
    id: '11',
    title: "Mohd. Ahmed Khan v. Shah Bano Begum",
    text: "AIR 1985 SC 945, Criminal Appeal No. 103 of 1981. Groundbreaking judgment upholding the right of maintenance for divorced Muslim women under Section 125 CrPC.",
    imageUrl: "/admin/upload/judgement/868819378.webp"
  }
];

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  
  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formText, setFormText] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin status
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
    
    // Load portfolio items
    const stored = localStorage.getItem('portfolioItems');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const sanitized = parsed.map(item => {
          if (item.imageUrl && !item.imageUrl.startsWith('/') && !item.imageUrl.startsWith('http') && !item.imageUrl.startsWith('data:')) {
            return { ...item, imageUrl: '/' + item.imageUrl };
          }
          return item;
        });
        setItems(sanitized);
        localStorage.setItem('portfolioItems', JSON.stringify(sanitized));
      } catch (e) {
        localStorage.setItem('portfolioItems', JSON.stringify(defaultPortfolio));
        setItems(defaultPortfolio);
      }
    } else {
      localStorage.setItem('portfolioItems', JSON.stringify(defaultPortfolio));
      setItems(defaultPortfolio);
    }
  }, []);

  const saveItems = (updatedItems) => {
    localStorage.setItem('portfolioItems', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    navigate('/');
  };

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
  };

  const executeDelete = () => {
    const updated = items.filter(item => item.id !== deleteItemId);
    saveItems(updated);
    setDeleteItemId(null);
  };

  const openAddModal = () => {
    setCurrentEditItem(null);
    setFormTitle('');
    setFormText('');
    setFormImageUrl('');
    setImagePreview('');
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setCurrentEditItem(item);
    setFormTitle(item.title);
    setFormText(item.text);
    setFormImageUrl(item.imageUrl);
    setImagePreview(item.imageUrl);
    setIsModalOpen(true);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormImageUrl(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const itemData = {
      title: formTitle,
      text: formText,
      imageUrl: formImageUrl || '/assets/image/practice-area/corporate-lawyer.png'
    };

    if (currentEditItem) {
      // Update
      const updated = items.map(item => 
        item.id === currentEditItem.id ? { ...item, ...itemData } : item
      );
      saveItems(updated);
    } else {
      // Create
      const newItem = {
        id: Date.now().toString(),
        ...itemData
      };
      saveItems([newItem, ...items]);
    }
    
    setIsModalOpen(false);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-navy-900 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Admin Panel Header */}
      {isAdmin && (
        <div className="bg-teal-500/10 border-b border-teal-500/20 py-4 mb-8 sticky top-[64px] z-40 backdrop-blur-md">
          <div className="container-page flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-semibold text-teal-400 uppercase tracking-widest">Admin Control Mode</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={openAddModal}
                className="btn-primary py-2 px-5 text-sm flex items-center gap-2"
              >
                <Plus size={16} /> Add Portfolio Item
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors uppercase border border-white/10 rounded-full px-4 py-2 bg-white/5"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Case Archives</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-100 mb-6">Our Portfolio</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover a gallery of notable representations and legal precedents shaped by Consult New Stream's expert legal group.
          </p>
        </motion.div>

        {/* Grid of Portfolio Items */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-teal-500/30 transition-all duration-300 flex flex-col relative group h-full"
            >
              {/* Card Image */}
              <div className="h-52 w-full relative overflow-hidden bg-navy-950 flex items-center justify-center">
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h3 className="text-xl font-serif font-bold text-slate-200 mb-4 group-hover:text-teal-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  {item.text}
                </p>

                {/* Admin Management Buttons */}
                {isAdmin && (
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-end gap-3">
                    <button
                      onClick={() => openEditModal(item)}
                      className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-navy-900 transition-colors"
                      title="Edit Item"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item.id)}
                      className="p-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors btn-delete"
                      title="Delete Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl glass border border-white/10 rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-100 mb-6">
                {currentEditItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Title</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Enter case/judgement title"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Description</label>
                  <textarea
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    placeholder="Write details and summary of the portfolio entry..."
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all resize-none"
                    required
                  />
                </div>

                {/* Image Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Upload File */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Upload Image File</label>
                    <div className="relative group border-2 border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-teal-500/50 hover:bg-white/5 transition-all">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="text-slate-400 group-hover:text-teal-400 mb-2 transition-colors" size={24} />
                      <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">Choose local file...</span>
                    </div>
                  </div>

                  {/* Image URL Link */}
                  <div className="space-y-2 flex flex-col justify-between">
                    <div>
                      <label className="text-sm font-semibold text-slate-300 block mb-2">Or enter Image URL</label>
                      <input
                        type="text"
                        value={formImageUrl}
                        onChange={(e) => {
                          setFormImageUrl(e.target.value);
                          setImagePreview(e.target.value);
                        }}
                        placeholder="https://example.com/image.png"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                    {imagePreview && (
                      <div className="h-16 w-full rounded-lg overflow-hidden border border-white/10 relative mt-2 flex items-center justify-center bg-navy-950">
                        <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                        <button
                          type="button"
                          onClick={() => {
                            setFormImageUrl('');
                            setImagePreview('');
                          }}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500/80 text-white flex items-center justify-center"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-white/5 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn-secondary py-3 px-6 text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary py-3 px-6 text-sm font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteItemId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 delete-confirm-container">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteItemId(null)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md glass border border-white/10 rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl text-center"
            >
              <h3 className="text-xl font-serif font-bold text-slate-100 mb-4">Confirm Deletion</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Are you sure you want to delete this portfolio item? This action cannot be undone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setDeleteItemId(null)}
                  className="btn-secondary py-2.5 px-6 text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={executeDelete}
                  className="bg-red-500 hover:bg-red-600 text-white py-2.5 px-6 text-sm font-semibold rounded-full transition-all btn-confirm-delete"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
