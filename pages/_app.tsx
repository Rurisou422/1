import React from 'react';
import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import StarField from '../src/components/StarField';
import ChatBot from '../src/components/ChatBot';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background elements */}
      <StarField />
      
      <div className="fixed inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none z-10"></div>
      
      <div
        className="fixed inset-0 bg-gradient-radial opacity-20 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
        }}
      />
      
      {/* Subtle cyan glow */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-20 pointer-events-none blur-xl z-20" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, rgba(6,182,212,0.02) 25%, transparent 100%)',
        }}
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      <Footer />
      
      {/* Add ChatBot component */}
      <ChatBot />
    </div>
  );
}

export default MyApp; 