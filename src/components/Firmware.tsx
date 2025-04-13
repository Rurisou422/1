import React, { useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized list item components
const FeatureItem = memo(({ feature }: { feature: { id: number; text: string; checked: boolean } }) => (
  <li className="flex items-center text-gray-300 py-1.5">
    <div className="h-4 w-4 rounded-full bg-black border border-cyan-500 flex items-center justify-center mr-3 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-gray-300 text-sm">{feature.text}</span>
  </li>
));

// Memoized anti-cheat icon component
const AntiCheatIcon = memo(({ type }: { type: string }) => {
  let imageSrc, bgColor;
  
  switch(type) {
    case 'eac':
      imageSrc = '/images2/EAC.png';
      bgColor = 'orange';
      break;
    case 'battleye':
      imageSrc = '/images2/BE.png';
      bgColor = 'cyan';
      break;
    case 'vanguard':
      imageSrc = '/images2/VG.png';
      bgColor = 'purple';
      break;
    case 'ricochet':
    case 'faceit':
    case 'valorant':
    default:
      return null; // Don't display icons without images
  }
  
  return (
    <div className={`w-8 h-8 rounded-full bg-black border border-${bgColor}-500/50 flex items-center justify-center shadow-[0_0_4px_rgba(var(--${bgColor}-rgb),0.3)] overflow-hidden p-0.5`}>
      <img 
        src={imageSrc} 
        alt={type.toUpperCase()} 
        className="w-full h-full object-contain" 
        loading="lazy"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
});

// Memoized tier card component
const TierCard = memo(({ tier }: { tier: any }) => {
  // Optimize animations by defining them once
  const hoverAnimation = {
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.15)",
    borderColor: "rgba(6, 182, 212, 0.5)"
  };
  
  const stripeButtonHover = { 
    scale: 1.02,
    boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)",
    borderColor: "rgba(6, 182, 212, 0.7)"
  };
  
  const cryptoButtonHover = { 
    scale: 1.02,
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
    borderColor: "rgba(59, 130, 246, 0.7)"
  };
  
  const tapAnimation = { scale: 0.98 };
  const transition = { duration: 0.2, ease: "easeOut" };
  
  return (
    <motion.div 
      className="bg-black/80 backdrop-blur-xl rounded-xl border border-cyan-900/50 p-4 relative overflow-hidden group"
      whileHover={hoverAnimation}
      transition={transition}
    >
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Tier header */}
      <div className="flex justify-between items-center mb-3 relative z-10">
        <div>
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{tier.name}</h3>
          <p className="text-gray-400 text-xs">{tier.warranty}</p>
        </div>
        <div className="flex space-x-2">
          <div className="bg-black/90 backdrop-blur-md rounded-lg px-2 py-1.5 text-center border border-cyan-500/30">
            <p className="text-cyan-400 font-bold text-base">${tier.price.stripe.toFixed(2)}</p>
            <p className="text-xs text-gray-400 font-medium">Stripe</p>
          </div>
          <div className="bg-black/90 backdrop-blur-md rounded-lg px-2 py-1.5 text-center border border-blue-500/30">
            <p className="text-blue-400 font-bold text-base">${tier.price.crypto.toFixed(2)}</p>
            <p className="text-xs text-gray-400 font-medium">Crypto</p>
          </div>
        </div>
      </div>
      
      {/* Anti-cheat icons */}
      <div className="flex space-x-2 mb-3 relative z-10">
        {tier.icons.map((icon: string) => (
          <AntiCheatIcon key={icon} type={icon} />
        ))}
      </div>
      
      {/* Purchase buttons */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        <motion.button
          whileHover={stripeButtonHover}
          whileTap={tapAnimation}
          transition={transition}
          className="w-full py-2 px-3 bg-black/80 border border-cyan-500/50 text-cyan-400 text-sm font-medium rounded-md shadow-md relative overflow-hidden"
        >
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            Purchase with Stripe
          </span>
        </motion.button>
        
        <motion.button
          whileHover={cryptoButtonHover}
          whileTap={tapAnimation}
          transition={transition}
          className="w-full py-2 px-3 bg-black/80 border border-blue-500/50 text-blue-400 text-sm font-medium rounded-md shadow-md relative overflow-hidden"
        >
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            Purchase with Crypto
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
});

const Firmware: React.FC = () => {
  // Features list for the firmware
  const features = useMemo(() => [
    { id: 1, text: '1:1 Real Device Emulation', checked: true },
    { id: 2, text: 'Full bar support', checked: true },
    { id: 3, text: 'TLP packet emulation', checked: true },
    { id: 4, text: 'Authentic Configspace', checked: true },
    { id: 5, text: 'Successfully passes drvscan', checked: true },
    { id: 6, text: 'No triangle (fully emulated)', checked: true },
    { id: 7, text: 'Supported Cards: 35T/50T/75T/100T', checked: true },
    { id: 8, text: 'HWID Locked to Your Card for Enhanced Security', checked: true },
    { id: 9, text: 'Warranty varies by tier', checked: true },
  ], []);
  
  // Systems list
  const systems = useMemo(() => [
    { id: 1, text: 'Windows 10 & 11', checked: true },
    { id: 2, text: 'All Motherboards', checked: true },
    { id: 3, text: '(including locked models)', checked: true },
    { id: 4, text: 'Intel & AMD Processors Supported', checked: true },
    { id: 5, text: 'Full Support for All Other Hardware', checked: true },
  ], []);
  
  // Tier data for pricing cards
  const tiers = useMemo(() => [
    {
      id: 'budget',
      name: 'Budget Tier',
      warranty: 'One-month warranty',
      price: { stripe: 111.00, crypto: 100.00 },
      icons: ['eac', 'battleye']
    },
    {
      id: 'standard',
      name: 'Standard Tier',
      warranty: 'Lifetime warranty',
      price: { stripe: 220.00, crypto: 200.00 },
      icons: ['eac', 'battleye', 'ricochet', 'faceit', 'vanguard']
    },
    {
      id: 'advanced',
      name: 'Advanced Tier',
      warranty: 'One-month warranty',
      price: { stripe: 270.00, crypto: 250.00 },
      icons: ['eac', 'battleye', 'ricochet', 'faceit', 'vanguard', 'valorant']
    },
    {
      id: 'premium',
      name: 'Premium Tier',
      warranty: 'One-month warranty',
      price: { stripe: 385.00, crypto: 349.00 },
      icons: ['eac', 'battleye', 'ricochet', 'faceit', 'vanguard', 'valorant']
    },
  ], []);

  // Optimize image loading with smaller height
  const imageProps = useMemo(() => ({
    src: "/images2/Banner Firmwares.jpg",
    alt: "Diviner Firmware",
    className: "w-full object-cover h-64 opacity-100",
    loading: "lazy" as const,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      target.src = 'https://via.placeholder.com/800x400/111827/FFFFFF?text=DIVINER+FIRMWARE';
    }
  }), []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="bg-black/60 backdrop-blur-xl rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
          <div className="relative">
            <img {...imageProps} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[3px] mix-blend-multiply"></div>
            {/* Add vibrant bottom shadow for better transition */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cyan-900/30 to-transparent mix-blend-overlay"></div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-cyan-400 text-lg font-bold mb-4 uppercase tracking-wide">FEATURES</h3>
                <ul className="space-y-2">
                  {features.map(feature => (
                    <FeatureItem key={feature.id} feature={feature} />
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-cyan-400 text-lg font-bold mb-4 uppercase tracking-wide">SYSTEMS</h3>
                <ul className="space-y-2">
                  {systems.map(system => (
                    <FeatureItem key={system.id} feature={system} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <AnimatePresence>
            {tiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default memo(Firmware); 