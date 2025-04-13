import React from 'react';
import { Link } from 'react-router-dom';

const Legal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Legal Information</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our policies and legal documents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800/50">
          <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
          <p className="text-gray-400 mb-6">
            Please review our Terms of Service to understand the rules and guidelines that govern your use of our products and services.
          </p>
          <Link 
            to="/terms" 
            className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Read Terms of Service
          </Link>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800/50">
          <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
          <p className="text-gray-400 mb-6">
            Learn how we collect, use, and protect your personal information when you use our products and services.
          </p>
          <Link 
            to="/privacy" 
            className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Read Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Legal; 