import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define product categories
type ProductCategory = 'all' | 'game' | 'firmware' | 'hardware';

// Define product type
type Product = {
  id: number;
  title: string;
  image: string;
  category: ProductCategory | ProductCategory[];
  tags: string;
  features: string[];
  premium: boolean;
  price: number;
  description?: string;
};

// Product Detail Modal Component
const ProductDetailModal = ({ 
  product, 
  onClose 
}: { 
  product: Product; 
  onClose: () => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<'standard' | 'premium' | 'ultimate'>('standard');
  const [quantity, setQuantity] = useState(1);
  
  // Calculate price based on selected option
  const getPriceForOption = () => {
    switch(selectedOption) {
      case 'standard': return product.price * 0.6;
      case 'premium': return product.price * 0.8;
      case 'ultimate': return product.price;
      default: return product.price;
    }
  };
  
  const formattedPrice = getPriceForOption().toFixed(2);
  const totalPrice = (getPriceForOption() * quantity).toFixed(2);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Cyberpunk grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <motion.div 
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#111827]/95 rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_25px_rgba(8,145,178,0.15)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Glowing top edge accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        {/* Left side - Product Image */}
        <div className="p-6 flex items-center justify-center bg-gradient-to-b from-[#0F1521] to-[#0A0F18]">
          <div className="relative aspect-square w-full max-w-md flex items-center justify-center overflow-hidden group">
            {/* Image backdrop glow */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Product image with hover effect */}
            <motion.div 
              className="relative z-10 w-4/5 h-4/5"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(8,145,178,0.3)]" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder.png";
                }}
              />
            </motion.div>
            
            {/* Corner accents for cyberpunk look */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30"></div>
          </div>
        </div>
        
        {/* Right side - Product Details */}
        <div className="p-6 bg-gradient-to-b from-[#0D1219] to-[#090E15] relative">
          {/* Tech lines accent */}
          <div className="absolute right-6 top-20 w-20 h-[1px] bg-cyan-500/20"></div>
          <div className="absolute right-6 top-20 w-[1px] h-20 bg-cyan-500/20"></div>
          
          {/* Back button */}
          <div className="flex items-center justify-between mb-4">
            <motion.button 
              onClick={onClose}
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm group"
              whileHover={{ x: -2, transition: { duration: 0 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="relative">
                Back to Products
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </motion.button>
            <span className="text-lg font-bold text-white tracking-wider">DIVINER</span>
          </div>
          
          {/* Tag & Title with text glow */}
          <div className="mb-3">
            <p className="text-yellow-500 text-sm">{product.tags}</p>
            <h1 className="text-2xl font-bold text-white text-shadow-sm">{product.title}</h1>
            <p className="text-yellow-500 text-2xl font-bold filter drop-shadow-[0_0_2px_rgba(234,179,8,0.3)]">${formattedPrice}</p>
          </div>
          
          {/* Description */}
          <div className="mb-3">
            <p className="text-gray-400 text-sm">
              {product.description || 
                "This is a placeholder product description. Here you would typically find detailed information about the product, its features, specifications, and benefits."}
            </p>
          </div>
          
          {/* Features with glowing bullets */}
          <div className="mb-4">
            <ul className="space-y-1">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5 text-sm drop-shadow-[0_0_2px_rgba(234,179,8,0.4)]">•</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Option Selection with enhanced highlight effects */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-medium text-white">Select Option</h3>
              <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'standard' 
                    ? 'bg-[#0C141F] border border-cyan-500 ring-1 ring-cyan-500/30 shadow-[0_0_8px_rgba(8,145,178,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-cyan-500/50'
                }`}
                onClick={() => setSelectedOption('standard')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Standard</div>
                <div className="text-gray-400 text-xs">${(product.price * 0.6).toFixed(2)}</div>
              </motion.button>
              
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'premium' 
                    ? 'bg-[#0C141F] border border-cyan-500 ring-1 ring-cyan-500/30 shadow-[0_0_8px_rgba(8,145,178,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-cyan-500/50'
                }`}
                onClick={() => setSelectedOption('premium')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Premium</div>
                <div className="text-gray-400 text-xs">${(product.price * 0.8).toFixed(2)}</div>
              </motion.button>
              
              <motion.button 
                className={`p-2 rounded text-center transition-all ${
                  selectedOption === 'ultimate' 
                    ? 'bg-[#0C141F] border border-yellow-500 ring-1 ring-yellow-500/30 shadow-[0_0_8px_rgba(234,179,8,0.3)]' 
                    : 'bg-[#0C141F] border border-gray-800 hover:border-yellow-500/50'
                }`}
                onClick={() => setSelectedOption('ultimate')}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0, ease: "easeOut" }
                }}
              >
                <div className="text-white text-sm font-medium">Ultimate</div>
                <div className="text-gray-400 text-xs">${product.price.toFixed(2)}</div>
              </motion.button>
            </div>
          </div>
          
          {/* Quantity selector with glowing effects */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-medium text-white">Quantity</h3>
              <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
            </div>
            <div className="flex items-center">
              <motion.button 
                className="w-10 h-10 flex items-center justify-center bg-[#0C141F] text-white border border-gray-800 rounded-l hover:border-cyan-500/50 hover:text-cyan-400"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={quantity <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <div className="w-12 h-10 flex items-center justify-center bg-[#0C141F] text-white border-t border-b border-gray-800">
                {quantity}
              </div>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center bg-[#0C141F] text-white border border-gray-800 rounded-r hover:border-cyan-500/50 hover:text-cyan-400"
                onClick={() => setQuantity(quantity + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
          
          {/* Total price */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium text-white">Total</h3>
              <p className="text-xl font-semibold text-cyan-400">${totalPrice}</p>
            </div>
          </div>
          
          {/* Add to cart button with glowing effect */}
          <motion.button 
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600/90 to-cyan-800/90 rounded-md font-medium text-white shadow-[0_0_15px_rgba(8,145,178,0.3)] border border-cyan-500/50 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated highlight effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12"
              initial={{ x: -250, opacity: 0 }}
              animate={{ 
                x: 250, 
                opacity: [0, 1, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 2.5,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }
              }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal; 