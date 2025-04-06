import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AntiCheatSolutionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const AntiCheatSolution: React.FC<AntiCheatSolutionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.02 }}
      className="overflow-hidden rounded-lg bg-black border border-gray-800/50 transition-transform duration-150 ease-out"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const AntiCheat: React.FC = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  
  return (
    <section className="py-16 relative overflow-hidden bg-black border-0" style={{ borderTop: 'none', borderBottom: 'none' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Anti-Cheat Solutions</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our advanced solutions work seamlessly with the most secure anti-cheat systems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
          <AntiCheatSolution 
            title="EAC BE Support"
            description="Full compatibility with EAC BE protected games, providing a seamless experience"
            imageSrc="/images/eac be.png"
            imageAlt="EAC BE Support"
          />
          
          <AntiCheatSolution 
            title="EAC BE + VGK Support"
            description="Advanced protection bypass for games using both EAC BE and Vanguard anti-cheat systems"
            imageSrc="/images/eac be vgk.png"
            imageAlt="EAC BE + VGK Support"
          />
        </div>
      </div>
    </section>
  );
};

export default AntiCheat; 