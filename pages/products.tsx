import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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

// Dynamic import for modal (client-side only)
const ProductDetailModal = dynamic(() => import('../components/ProductDetailModal'), {
  ssr: false
});

// Product Card
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
  // Use first category if array
  const primaryCategory = Array.isArray(category) ? category[0] : category;
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2, delay: delay * 0.5 }} // Faster animation with shorter delays
    className="bg-[#141A27]/70 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 transform scale-95"
  >
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center space-x-2">
        {/* Icon based on category */}
        <div className={`w-5 h-5 ${premium ? 'text-cyan-500' : 'text-gray-400'}`}>
          <CategoryIcon category={primaryCategory} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className={`text-xs ${premium ? 'text-cyan-400' : 'text-gray-400'}`}>{tags}</p>
        </div>
      </div>
      <div className={`px-2 py-0.5 rounded text-xs font-medium ${premium ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-500/20 text-gray-300'}`}>
        {premium ? 'PREMIUM' : 'STANDARD'}
      </div>
    </div>
    
    <div 
      className="relative group cursor-pointer bg-gray-900"
      onClick={() => onOpenDetail(product)}
    >
      <div className="overflow-hidden h-48 flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <Image 
            src={image || '/images/placeholder.png'} 
            alt={title}
            className="object-contain filter transition-all duration-300 group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-xs font-medium">VIEW DETAILS</span>
      </div>
    </div>
  </motion.div>
  );
};

// Sample product data - typically this would come from an API
const productData: Product[] = [
  {
    id: 1,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-1',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
  {
    id: 2,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-2',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: false,
    price: 299.99
  },
  {
    id: 3,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'game',
    tags: '#placeholder-3',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 399.99
  },
  {
    id: 4,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'firmware',
    tags: '#placeholder-4',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: false,
    price: 299.99
  },
  {
    id: 5,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'hardware',
    tags: '#divine-dma',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
  {
    id: 6,
    title: 'Placeholder',
    image: '/images/pictest.png',
    category: 'hardware',
    tags: '#divine-fuser',
    features: ['Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature', 'Placeholder Feature'],
    premium: true,
    price: 499.99
  },
];

type ProductsPageProps = {
  products: Product[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category
  const filteredProducts = products.filter(product => {
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
    <section className="py-20">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">Our Products</h2>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'all' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Animated background glow */}
              {activeCategory === 'all' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-600/5 to-cyan-600/10"
                  initial={{ x: -100, opacity: 0.5 }}
                  animate={{ 
                    x: 100, 
                    opacity: [0.2, 0.5, 0.2],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }
                  }}
                />
              )}
              
              {/* Button content */}
              <span className="relative z-10 text-white font-medium">All Products</span>
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
              {/* Animated background glow */}
              {activeCategory === 'game' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-600/5 to-cyan-600/10"
                  initial={{ x: -100, opacity: 0.5 }}
                  animate={{ 
                    x: 100, 
                    opacity: [0.2, 0.5, 0.2],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }
                  }}
                />
              )}
              
              {/* Button content */}
              <span className="relative z-10 text-white font-medium">Games</span>
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
              {/* Animated background glow */}
              {activeCategory === 'firmware' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-600/5 to-cyan-600/10"
                  initial={{ x: -100, opacity: 0.5 }}
                  animate={{ 
                    x: 100, 
                    opacity: [0.2, 0.5, 0.2],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }
                  }}
                />
              )}
              
              {/* Button content */}
              <span className="relative z-10 text-white font-medium">Firmware</span>
            </motion.button>
            
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
              {/* Animated background glow */}
              {activeCategory === 'hardware' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-cyan-600/5 to-cyan-600/10"
                  initial={{ x: -100, opacity: 0.5 }}
                  animate={{ 
                    x: 100, 
                    opacity: [0.2, 0.5, 0.2],
                    transition: { 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "linear"
                    }
                  }}
                />
              )}
              
              {/* Button content */}
              <span className="relative z-10 text-white font-medium">Hardware</span>
            </motion.button>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={handleCloseProductDetail}
        />
      )}
    </section>
  );
};

// Using getStaticProps for faster page loading
export const getStaticProps: GetStaticProps = async () => {
  // In a real app, you would fetch data from an API or database here
  return {
    props: {
      products: productData,
    },
    // Revalidate every hour (3600 seconds)
    revalidate: 3600,
  };
};

export default ProductsPage; 