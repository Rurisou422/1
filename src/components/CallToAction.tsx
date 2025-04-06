import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CallToAction: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-[#3a5272] border-0"
      style={{ borderTop: 'none', borderBottom: 'none' }}
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3a5272] via-[#3a5272] to-[#2a3a52] opacity-80"></div>
      
      {/* Stars overlay */}
      <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-20"></div>
      
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-3 text-white"
        >
          Why wait?
        </motion.h2>
        
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold mb-12 text-white/90"
        >
          Unlock your subscription today!
        </motion.h3>
        
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-1.5 rounded-full bg-[#ff526f]/50 opacity-70 blur-lg animate-pulse-slow"></div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-3 bg-[#e03c50] text-white font-medium rounded-full overflow-hidden group shadow-lg"
            >
              {/* Button text */}
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction; 