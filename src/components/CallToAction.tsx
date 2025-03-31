import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-32 text-center relative overflow-visible">
      {/* Cyan glow background */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[200%] max-h-none pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.4) 0%, rgba(6,182,212,0.15) 30%, rgba(6,182,212,0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 relative"
      >
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white"
            style={{ textShadow: '0 0 20px rgba(6,182,212,0.5)' }}>
          Why wait?
        </h2>
        <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
           style={{ textShadow: '0 0 20px rgba(6,182,212,0.5)' }}>
          Unlock your subscription today!
        </p>
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-cyan-700 hover:bg-cyan-600 rounded-full font-medium transition-colors border border-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction; 