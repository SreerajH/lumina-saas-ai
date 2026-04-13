import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';

export const ModalContext = createContext(null);

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true) }}>
      <Navbar onStartFree={() => setModalOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}
    </ModalContext.Provider>
  );
}

export default App;
