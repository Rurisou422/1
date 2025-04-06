import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animation timing settings
const ANIMATION_DURATION = 1500; // 1.5 seconds for the count animation

// Generate random digits for glitch effect
const getRandomDigit = () => Math.floor(Math.random() * 10).toString();

// Generate a glitched version of a number
const getGlitchedNumber = (value: number, decimals: number, suffix: string): string => {
  const valueString = value.toFixed(decimals);
  let glitched = '';
  
  // Randomly replace 1-2 digits with random numbers
  for (let i = 0; i < valueString.length; i++) {
    if (valueString[i] === '.' || Math.random() > 0.3) {
      glitched += valueString[i];
    } else {
      glitched += getRandomDigit();
    }
  }
  
  return glitched + suffix;
};

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState(value.toFixed(decimals) + suffix);
  const [isGlitching, setIsGlitching] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Initial count-up animation
  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number;
      let animationFrame: number;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / ANIMATION_DURATION, 1);
        
        // Ease out cubic animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(easeOut * value);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setHasAnimated(true);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value, hasAnimated]);
  
  // Periodic glitching effect after initial animation
  useEffect(() => {
    if (!hasAnimated) return;
    
    // Set up random glitching intervals
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to trigger a glitch
        setIsGlitching(true);
        
        // Multiple rapid glitch frames
        let glitchFrames = 0;
        const maxGlitchFrames = 3 + Math.floor(Math.random() * 4); // 3-6 frames
        
        const glitchFrame = () => {
          if (glitchFrames < maxGlitchFrames) {
            setDisplayValue(getGlitchedNumber(value, decimals, suffix));
            glitchFrames++;
            setTimeout(glitchFrame, 50 + Math.random() * 100); // 50-150ms between glitch frames
          } else {
            setDisplayValue(value.toFixed(decimals) + suffix);
            setIsGlitching(false);
          }
        };
        
        glitchFrame();
      }
    }, 3000 + Math.random() * 5000); // Random interval between 3-8 seconds
    
    return () => clearInterval(glitchInterval);
  }, [hasAnimated, value, decimals, suffix]);
  
  return (
    <div ref={countRef} className="flex flex-col items-center relative group">
      <div 
        className={`bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold mb-1 relative transition-all duration-75 ${isGlitching ? 'opacity-90 blur-[0.5px]' : ''}`}
        style={{ 
          textShadow: isGlitching 
            ? '0 0 10px rgba(6, 182, 212, 0.9), 0 0 20px rgba(6, 182, 212, 0.7), 0 0 30px rgba(6, 182, 212, 0.4)' 
            : '0 0 10px rgba(6, 182, 212, 0.7), 0 0 20px rgba(6, 182, 212, 0.4)' 
        }}
      >
        {hasAnimated || !isInView 
          ? displayValue
          : count.toFixed(decimals) + suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <StatCounter value={4.99} label="1000 Verified Reviews" decimals={2} />
        <StatCounter value={343} label="Players Online Now" />
        <StatCounter value={3000} label="Active Users" suffix="+" />
      </div>
      
      <div className="mt-12 pt-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default StatsCounter; 