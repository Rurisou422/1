import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Define product categories
type ProductCategory = 'all' | 'game' | 'firmware' | 'hardware' | 'hardware bundles';

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

// Icons for different categories
const CategoryIcon = ({ category }: { category: ProductCategory }) => {
  switch(category) {
    case 'game':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'firmware':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
        </svg>
      );
    case 'hardware':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm0 4h4v6h-4zm-6-3h5v3H6z"/>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      );
  }
};

// Product Detail Modal
const ProductDetailModal = ({ 
  product, 
  onClose 
}: { 
  product: Product; 
  onClose: () => void;
}) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="w-full max-w-4xl bg-[#111111] rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Product Image */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-auto object-contain" 
            />
          </div>
          
          {/* Right side - Product Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col">
            {/* Back button */}
            <div className="mb-6">
              <motion.button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                whileHover={{ x: -2 }}
              >
                ← Back
              </motion.button>
            </div>
            
            {/* Title and Price */}
            <h1 className="text-2xl font-bold text-white mb-2">
              {product.title === "EAC/BE Custom Firmware" ? "EAC/BE (hhr5.1) Custom Firmware" : product.title}
            </h1>
            <p className="text-white text-xl mb-6">€{product.price.toFixed(2)}</p>
            
            {/* Features as bullet points with arrows */}
            <ul className="space-y-2 mb-8">
              {product.title === "EAC/BE Custom Firmware" ? (
                <>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">•</span>
                    <span>Supports: 35t DMA Boards</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">•</span>
                    <span>75t DMA Boards</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">•</span>
                    <span>100t DMA Boards - Zdma/Stark</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>1:1 Real Device Emulation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Full bar support</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Manufacturer driver support</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>TLP packet emulation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Legitimate Configspace</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Legitimate device</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>3 Months Warranty</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Multiple Devices Available</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">→</span>
                    <span>Successfully passes DRVScan</span>
                  </li>
                </>
              ) : (
                product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1">{index < 3 ? "•" : "→"}</span>
                    <span>{feature}</span>
                  </li>
                ))
              )}
            </ul>
            
            {/* Purchase Button */}
            <motion.button 
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 rounded text-black font-medium transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Purchase
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ 
  title, 
  image,
  premium,
  tags,
  features,
  category,
  product,
  onOpenDetail,
  delay = 0
}: { 
  title: string;
  image: string;
  premium: boolean;
  tags: string;
  features: string[];
  category: ProductCategory | ProductCategory[];
  product: Product;
  onOpenDetail: (product: Product) => void;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0c0c0c] border border-gray-800 rounded-xl overflow-hidden flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col flex-grow p-6 bg-black">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {/* Bottom section with price and button */}
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            €{product.price}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-transparent border border-gray-700 rounded text-sm font-medium"
            onClick={() => onOpenDetail(product)}
          >
            View product
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Sample product data
const productData: Product[] = [
  {
    id: 1,
    title: 'EAC/BE Custom Firmware',
    image: '/images/ProductEAC.png',
    category: 'firmware',
    tags: '#eac-be',
    features: ['Custom Firmware', 'Anti-Cheat Bypass', 'Easy Installation', 'Regular Updates'],
    premium: true,
    price: 80
  },
  {
    id: 2,
    title: 'EAC/BE/VGK Custom Firmware',
    image: '/images/ProductEAC.png',
    category: 'firmware',
    tags: '#eac-be-vgk',
    features: ['Custom Firmware', 'Multi Anti-Cheat Support', 'Premium Features', 'Priority Support'],
    premium: true,
    price: 135
  },
  {
    id: 3,
    title: 'EAC/BE Emulated Firmware',
    image: '/images/ProductEAC.png',
    category: 'firmware',
    tags: '#eac-be-emulated',
    features: ['Emulated Bypass', 'Advanced Protection', 'Seamless Integration', 'Technical Support'],
    premium: true,
    price: 175
  },
  {
    id: 4,
    title: 'EAC/BE/VGK Emulated Firmware',
    image: '/images/ProductEAC.png',
    category: 'firmware',
    tags: '#eac-be-vgk-emulated',
    features: ['Complete Protection', 'All Anti-Cheat Support', 'Premium Features', 'VIP Support'],
    premium: true,
    price: 265
  },
  {
    id: 5,
    title: 'Hardware Bundle',
    image: '/images/pictest.png',
    category: 'hardware',
    tags: '#divine-dma',
    features: ['High-Quality Hardware', 'Pre-installed Firmware', 'Plug & Play Setup', 'Lifetime Support'],
    premium: true,
    price: 499.99
  },
  {
    id: 6,
    title: 'Software Package',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#game-software',
    features: ['Advanced Features', 'Regular Updates', 'Multiple Game Support', 'Custom Configuration'],
    premium: true,
    price: 299.99
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('firmware');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category
  const filteredProducts = productData.filter(product => {
    if (activeCategory === 'all') return true;
    
    if (Array.isArray(product.category)) {
      return product.category.includes(activeCategory);
    } else {
      return product.category === activeCategory;
    }
  });

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our selection of high-quality hardware, reliable firmware, and innovative software.
          </p>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => setActiveCategory('hardware')}
              className={`relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'hardware' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Button content */}
              <div className="flex items-center gap-2 relative z-10">
                <span className={`font-medium ${activeCategory === 'hardware' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>Hardware</span>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setActiveCategory('hardware')}
              className={`relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'hardware bundles' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Button content */}
              <div className="flex items-center gap-2 relative z-10">
                <span className={`font-medium ${activeCategory === 'hardware bundles' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>Hardware Bundles</span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveCategory('firmware')}
              className={`relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'firmware' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Button content */}
              <div className="flex items-center gap-2 relative z-10">
                <span className={`font-medium ${activeCategory === 'firmware' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>Firmware</span>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setActiveCategory('game')}
              className={`relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'game' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Button content */}
              <div className="flex items-center gap-2 relative z-10">
                <span className={`font-medium ${activeCategory === 'game' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>Software</span>
              </div>
            </motion.button>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="contents"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.03
                  }
                }
              }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.2,
                        ease: "easeOut"
                      } 
                    }
                  }}
                >
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    premium={product.premium}
                    tags={product.tags}
                    features={product.features}
                    category={product.category}
                    product={product}
                    onOpenDetail={handleOpenProductDetail}
                    delay={index * 0.05}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products; 