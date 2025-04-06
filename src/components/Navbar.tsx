import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameSettingsUI } from './Guides';

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`relative px-4 py-2 text-base font-semibold tracking-wide transition-all duration-300 ${
        isActive 
          ? 'text-white' 
          : 'text-gray-200 hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <motion.span 
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showAmateur, setShowAmateur] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowLegal(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close legal dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.legal-dropdown') && !target.closest('.legal-button')) {
        setShowLegal(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* GameSettingsUI */}
      {showAmateur && (
        <GameSettingsUI onBack={() => setShowAmateur(false)} />
      )}
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[70px] relative">
            {/* Left side - Amateur Button */}
            <div className="absolute left-4">
              <button
                onClick={() => setShowAmateur(true)}
                className="relative px-4 py-2 text-base font-semibold tracking-wide transition-all duration-300 flex items-center text-white hover:text-cyan-300 bg-black/50 rounded-md border border-cyan-500"
              >
                <motion.div 
                  className="absolute inset-0 rounded-md"
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 8px rgba(6, 182, 212, 0.6)', '0 0 0px rgba(6, 182, 212, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="h-2 w-2 bg-cyan-400 rounded-full mr-2"
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(6, 182, 212, 0.5)', '0 0 10px rgba(6, 182, 212, 0.8)', '0 0 0px rgba(6, 182, 212, 0.5)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                Start Journey
              </button>
            </div>
            
            {/* Center - Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 justify-center w-full">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/guides">Guides</NavLink>
              <NavLink to="/status">Status</NavLink>
              
              {/* Legal Pages Dropdown */}
              <div className="relative legal-dropdown">
                <button 
                  onClick={() => setShowLegal(!showLegal)}
                  className="legal-button relative px-4 py-2 text-base font-semibold tracking-wide text-gray-200 hover:text-white transition-all duration-300 flex items-center"
                >
                  Legal
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 transition-transform ${showLegal ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {showLegal && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 right-0 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-md overflow-hidden shadow-xl z-10"
                    >
                      <Link 
                        to="/terms" 
                        onClick={() => setShowLegal(false)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                      >
                        Terms of Service
                      </Link>
                      <Link 
                        to="/privacy" 
                        onClick={() => setShowLegal(false)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Search Input - Positioned at the right */}
            <div className="hidden md:flex items-center absolute right-4">
              <div className="relative flex items-center bg-[#18191C]/80 rounded-md border border-gray-800">
                <div className="flex items-center pl-3 pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="py-1.5 px-1 w-36 bg-transparent text-sm text-gray-300 border-0 focus:ring-0 focus:outline-none"
                />
              </div>
              
              {/* User Icon */}
              <div className="ml-3">
                <button className="p-1.5 text-gray-300 hover:text-white focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile Menu Button - Positioned at the right */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md border-b border-gray-800"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {/* Amateur Button in Mobile Menu */}
                <div className="py-2 px-3 border-b border-gray-800/30 mb-2">
                  <button
                    onClick={() => {
                      setShowAmateur(true);
                      setIsOpen(false);
                    }}
                    className="relative w-full px-4 py-2 text-base font-semibold tracking-wide flex items-center text-white hover:text-cyan-300 bg-black/50 rounded-md border border-cyan-500"
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-md"
                      animate={{ 
                        boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 8px rgba(6, 182, 212, 0.6)', '0 0 0px rgba(6, 182, 212, 0)']
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="h-2 w-2 bg-cyan-400 rounded-full mr-2"
                      animate={{ 
                        boxShadow: ['0 0 0px rgba(6, 182, 212, 0.5)', '0 0 10px rgba(6, 182, 212, 0.8)', '0 0 0px rgba(6, 182, 212, 0.5)']
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Start Journey
                  </button>
                </div>
                <div className="py-2 px-3">
                  <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                </div>
                <div className="py-2 px-3">
                  <NavLink to="/guides" onClick={() => setIsOpen(false)}>Guides</NavLink>
                </div>
                <div className="py-2 px-3">
                  <NavLink to="/status" onClick={() => setIsOpen(false)}>Status</NavLink>
                </div>
                
                {/* Legal Pages in Mobile Menu */}
                <div className="py-2 px-3 border-t border-gray-800/50 my-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Legal Pages
                  </div>
                  <Link
                    to="/terms"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/privacy"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
                
                {/* Update mobile menu Shop button to Search form */}
                <div className="py-2 px-3">
                  <div className="relative flex items-center w-full bg-[#18191C]/80 rounded-md border border-gray-800">
                    <div className="flex items-center pl-3 pr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className="py-1.5 px-1 w-full bg-transparent text-sm text-gray-300 border-0 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar; 