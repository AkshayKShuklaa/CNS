import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-navy-900 font-sans text-slate-300 relative">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
