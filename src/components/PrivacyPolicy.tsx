import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <Link to="/" className="text-gray-400 hover:text-white flex items-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </Link>
          </div>

          <div className="backdrop-blur-md bg-black/60 border border-gray-800/50 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy at DIVINER.gg</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-300">
              <div className="md:col-span-2">
                <p className="text-xs leading-tight">
                  At DIVINER.gg we are committed to protecting your privacy. We only keep track of details necessary to maintain our software integrity.
                </p>
              </div>
              
              <div>
                <h2 className="text-base font-bold text-white mb-2">Data We Collect</h2>
                <ul className="space-y-1 text-xs leading-tight">
                  <li>
                    <span className="font-semibold text-white">Last Login Time:</span> Tracks playtime on your account
                  </li>
                  <li>
                    <span className="font-semibold text-white">Hardware ID (HWID):</span> Ensures license compliance
                  </li>
                  <li>
                    <span className="font-semibold text-white">IP Address:</span> Diagnoses network issues and protects against fraud
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-base font-bold text-white mb-2">Data Security</h2>
                <ul className="space-y-1 text-xs leading-tight">
                  <li>
                    <span className="font-semibold text-white">Password Protection:</span> Securely salted and hashed
                  </li>
                  <li>
                    <span className="font-semibold text-white">No PII Stored:</span> No personally identifiable information kept
                  </li>
                </ul>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-base font-bold text-white mb-2">Information Sharing</h2>
                <p className="text-xs leading-tight mb-1">
                  <span className="font-semibold text-white">Web Radar/Player List:</span> In-game names are stored temporarily in memory only. Not shared beyond intended destination.
                </p>
                <p className="text-xs leading-tight">
                  We collect no PII beyond operational requirements. Our practices protect your information from unauthorized access.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 