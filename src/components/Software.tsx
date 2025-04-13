import React from 'react';

const Software: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">DIVINER Software</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Cutting-edge software tools optimized for seamless integration with our hardware.
        </p>
      </div>
      
      <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800/50 mb-8">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Software Solutions</h2>
        <p className="text-gray-300 mb-6">
          Our software solutions will be displayed here. Please check back soon for our software offerings.
        </p>
        
        <div className="flex justify-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-full shadow-lg">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software; 