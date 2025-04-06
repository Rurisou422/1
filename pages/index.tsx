import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the heavier components with proper type handling
const Products = dynamic(() => import('../src/components/Products'), { ssr: true });
const CallToAction = dynamic(() => import('../src/components/CallToAction'), { ssr: true });

// Function to get random position within safe area (avoiding edges)
const getRandomPosition = () => {
  // Keep stars 15% away from edges
  const min = 15;
  const max = 85;
  return min + (Math.random() * (max - min));
};

const HomePage = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>DIVINER.GG - Cybersecurity Solutions</title>
        <meta name="description" content="Advanced Cybersecurity Solutions by DIVINER" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-32 md:pt-40 md:pb-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 
                  bg-gradient-to-r from-cyan-400 via-cyan-100 to-white bg-clip-text text-transparent
                  drop-shadow-[0_5px_15px_rgba(8,145,178,0.2)]">
                    The future of <br /> hardware tech. <br />
                    <span className="text-white">DIVINER.GG</span>
                  </h1>
                  
                  <p className="text-gray-300 text-lg">
                    Advanced smart devices for enhancing your gaming experience.
                    Get an edge with our next-generation technology.
                  </p>
                </motion.div>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={scrollToProducts}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl text-white font-medium 
                    shadow-[0_0_20px_rgba(8,145,178,0.3)] border border-cyan-500/50 hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] 
                    transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Products
                  </motion.button>
                  
                  <motion.a
                    href="http://discord.gg/diviner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-transparent border border-gray-700 hover:border-indigo-400/50 rounded-xl 
                    text-white font-medium hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center 
                    gap-2 group hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                    Join Discord
                  </motion.a>
                </div>
                
                <motion.div 
                  className="flex items-center gap-8 mt-2" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">Free Worldwide Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">24/7 Support</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Hero Image */}
              <motion.div 
                className="hidden md:block relative aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* This is a placeholder for your hero image - replace with your actual product image */}
                  <div className="relative w-[90%] h-[90%] flex items-center justify-center">
                    {/* Animated glow behind product */}
                    <div className="absolute w-full h-full rounded-full bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent blur-2xl pulse-slow"></div>
                    
                    {/* Placeholder for product image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="w-[80%] h-[80%] relative">
                        <img 
                          src="/images/pictest.png" 
                          alt="DIVINER Smart Device" 
                          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute w-full h-full pointer-events-none">
                      {/* Corner accents */}
                      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30"></div>
                      
                      {/* Tech circles */}
                      <div className="absolute" style={{ top: getRandomPosition() + '%', left: getRandomPosition() + '%' }}>
                        <div className="w-3 h-3 rounded-full bg-cyan-400/50 pulse-slow"></div>
                      </div>
                      <div className="absolute" style={{ top: getRandomPosition() + '%', left: getRandomPosition() + '%' }}>
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50 pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="absolute" style={{ top: getRandomPosition() + '%', left: getRandomPosition() + '%' }}>
                        <div className="w-4 h-4 rounded-full bg-indigo-400/30 pulse-slow" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-cyan-900/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
        </section>
        
        {/* Products Section */}
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <Products />
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default HomePage; 