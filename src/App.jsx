import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import PracticeArea from './pages/PracticeArea';

import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import JoinOurTeam from './pages/JoinOurTeam';
import TermsAndConditions from './pages/TermsAndConditions';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-navy-900 font-sans text-slate-300 relative">
      <ScrollToHash />
      <BackgroundEffect />
      <WhatsAppButton />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice/:slug" element={<PracticeArea />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
