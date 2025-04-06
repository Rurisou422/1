import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
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
            <h1 className="text-3xl font-bold mb-4 text-center">Terms of Service</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-300">
              <div>
                <h2 className="text-base font-bold text-white mb-1">1. Introduction</h2>
                <p className="text-xs leading-tight">
                  These Terms govern your use of services provided by DIVINER.gg. By using our services, you agree to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-white mb-1">2. Account Use</h2>
                <p className="text-xs leading-tight">
                  You are responsible for maintaining the confidentiality of your account and password.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-white mb-1">3. Prohibited Activities</h2>
                <p className="text-xs leading-tight mb-1">You agree not to:</p>
                <ul className="list-disc pl-4 text-xs leading-tight space-y-0.5">
                  <li>Share the loader or any related files with anyone</li>
                  <li>Bypass security measures</li>
                  <li>Share login details or key</li>
                  <li>Disrupt our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-white mb-1">4. Payments and Refunds</h2>
                <p className="text-xs leading-tight">
                  Subscriptions renew automatically. Refunds only if hardware cannot achieve basic functionality. Chargebacks prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-white mb-1">5. Termination</h2>
                <p className="text-xs leading-tight">
                  We may terminate your account for violations, potentially resulting in purchase bans without refund.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-white mb-1">6. Limitation of Liability</h2>
                <p className="text-xs leading-tight">
                  DIVINER.gg shall not be liable for indirect, incidental, special, or consequential damages.
                </p>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-base font-bold text-white mb-1">7. Governing Law</h2>
                <p className="text-xs leading-tight">
                  These Terms shall be governed by and construed in accordance with the laws of Northern Ireland, Germany and the United States.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 