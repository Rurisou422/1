import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Status from './components/Status';
import StarField from './components/StarField';
// import ChatBot from './components/ChatBot';
import Guides from './components/Guides';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AntiCheat from './components/AntiCheat';
import StatsCounter from './components/StatsCounter';

const HomePage = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Function to get random position within safe area (avoiding edges)
  const getRandomPosition = () => {
    // Keep stars 15% away from edges
    const min = 15;
    const max = 85;
    return min + (Math.random() * (max - min));
  };

  return (
    <>
      <main>
        <div className="relative flex items-center justify-center min-h-[580px] overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Undetected Firmware badge - centered without orange line */}
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="relative mb-3">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1F2937] border border-[#374151] rounded-full w-fit shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/20 via-transparent to-[#1F2937]/20 rounded-full"></div>
                    <span className="inline-block rounded-full bg-white w-2 h-2 mr-1 relative z-10"></span>
                    <div className="font-medium text-sm tracking-wide text-white relative z-10">
                      Undetected Firmware &amp; Best Hardware
                    </div>
                    <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: 'inset 0 0 4px 1px rgba(100, 100, 150, 0.4), 0 0 6px 0px rgba(100, 100, 150, 0.3)' }}></div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-white mb-4 animate-title-shake text-center" style={{ animationDuration: '3s' }}>
                DIVINER DMA
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                We offer the highest quality of DMA products/firmware and ensure a smooth user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  onClick={scrollToProducts}
                  className="px-10 py-3 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-full font-medium transition-colors cursor-pointer flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                    <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Explore Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  className="px-10 py-3 text-lg bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full font-medium flex items-center justify-center gap-3 transition-colors border border-gray-700/50"
                  onClick={() => window.open('http://discord.gg/diviner', '_blank')}
                >
                  Discord
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics counter section with minimal space */}
        <div className="h-8"></div>
        <StatsCounter />

        {/* Space before AntiCheat section */}
        <div className="h-48"></div>

        {/* Add the AntiCheat component here */}
        <AntiCheat />

        {/* Significantly increased space before Products section */}
        <div className="h-24"></div>

        {/* Products Section */}
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0 border-0 bg-black" style={{ borderBottom: 'none' }}>
          <Products />
        </div>
      </main>
    </>
  );
};

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Immediate scroll to top without animation to ensure it happens right away
    window.scrollTo(0, 0);
    
    // For Safari and some mobile browsers, sometimes we need to force it
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);
  
  return null;
};

// Create a wrapper component to access location
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Header background image - only visible on home page */}
      {isHomePage && (
        <div 
          className="absolute top-0 left-0 right-0 w-full h-[480px] bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/images/header.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundColor: '#000000'
          }}
        >
          {/* Gradient fade at bottom of header image */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      )}
      
      {/* Border lines */}
      <div className="fixed left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-10" />
      <div className="fixed right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent z-10" />
      
      {/* StarField background */}
      <StarField />
      
      {/* Subtle radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-600/5 via-cyan-900/5 to-transparent opacity-20 pointer-events-none z-20" />
      
      {/* Additional soft glow effect */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-20 pointer-events-none blur-xl z-20" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, rgba(6,182,212,0.02) 25%, transparent 100%)',
        }}
      />
      
      <Navbar />
      
      {/* Main content - simplified structure */}
      <main className="flex-grow pt-[70px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<Status />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App; 