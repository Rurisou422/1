import React from 'react';

const Hardware: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">DIVINER Hardware</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our high-quality hardware solutions designed for optimal performance.
        </p>
      </div>
      
      <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800/50 mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Hardware Products</h2>
        <p className="text-gray-300 mb-6">
          Our hardware collection will be displayed here. Please check back soon for our product listings.
        </p>
        
        <div className="flex justify-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium rounded-full shadow-lg">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardware; 