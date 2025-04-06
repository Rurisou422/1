import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from './StarField';

type ServiceStatus = 'operational' | 'maintenance' | 'outage';

interface ServiceInfo {
  name: string;
  status: ServiceStatus;
  lastUpdated: string;
  description: string;
}

const Status: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'maintenance':
        return 'bg-yellow-500';
      case 'outage':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'maintenance':
        return 'Maintenance';
      case 'outage':
        return 'Outage';
      default:
        return 'Unknown';
    }
  };

  // Real-looking service information
  const services: ServiceInfo[] = [
    {
      name: 'Placeholder Text',
      status: 'operational',
      lastUpdated: 'Today, 08:45 UTC',
      description: 'Placeholder Text'
    },
    {
      name: 'Placeholder Text',
      status: 'operational',
      lastUpdated: 'Today, 09:12 UTC',
      description: 'Placeholder Text'
    },
    {
      name: 'Placeholder Text',
      status: 'operational',
      lastUpdated: 'Yesterday, 22:30 UTC',
      description: 'Placeholder Text'
    },
    {
      name: 'Placeholder Text',
      status: 'maintenance',
      lastUpdated: 'Today, 03:15 UTC',
      description: 'Placeholder Text'
    },
    {
      name: 'Placeholder Text',
      status: 'operational',
      lastUpdated: 'Today, 07:50 UTC',
      description: 'Placeholder Text'
    },
    {
      name: 'Placeholder Text',
      status: 'outage',
      lastUpdated: 'Today, 05:22 UTC',
      description: 'Placeholder Text'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black border-0">
      <StarField />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">DIVINER Status</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real-time operational status for all DIVINER services
          </p>
        </motion.div>
        
        <div className="flex justify-center gap-4 mb-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-yellow-500/20 text-yellow-400 flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span>Service Status</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="text-gray-400 flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 hover:bg-gray-800/30 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
            <span>Incident History</span>
          </motion.button>
        </div>
        
        <p className="text-center text-gray-400 mb-8">
          Current service status. Select a service to see detailed information.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div 
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="flex items-center justify-between bg-black border border-gray-800 rounded-lg px-6 py-4 cursor-pointer hover:border-gray-700 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(service.status)}`}></div>
                  <h3 className="font-medium text-white">{service.name}</h3>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm hidden md:inline">{service.lastUpdated}</span>
                  <span className={`text-sm ${
                    service.status === 'operational' ? 'text-green-400' : 
                    service.status === 'maintenance' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {getStatusText(service.status)}
                  </span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </div>
              </motion.div>
              
              <AnimatePresence mode="wait">
                {expandedService === index && (
                  <motion.div 
                    key={`service-content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: {
                        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.25, delay: 0.05 }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden bg-gray-900/20 border border-t-0 border-gray-800 rounded-b-lg px-6 -mt-[1px]"
                  >
                    <div className="py-4">
                      <p className="text-gray-300 mb-2">{service.description}</p>
                      <p className="text-sm text-gray-500">Last updated: {service.lastUpdated}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status; 