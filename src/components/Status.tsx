import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceStatus = 'operational' | 'maintenance' | 'outage';

interface ServiceInfo {
  name: string;
  status: ServiceStatus;
  lastUpdated: string;
  description?: string;
}

const Status: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedIncident, setExpandedIncident] = useState<number | null>(null);

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'bg-cyan-500';
      case 'maintenance':
        return 'bg-yellow-500';
      case 'outage':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusGlow = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'shadow-[0_0_8px_rgba(8,145,178,0.6)]';
      case 'maintenance':
        return 'shadow-[0_0_8px_rgba(234,179,8,0.6)]';
      case 'outage':
        return 'shadow-[0_0_8px_rgba(239,68,68,0.6)]';
      default:
        return '';
    }
  };

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'ONLINE';
      case 'maintenance':
        return 'MAINTENANCE';
      case 'outage':
        return 'OFFLINE';
      default:
        return 'UNKNOWN';
    }
  };

  const services: ServiceInfo[] = [
    {
      name: 'Placeholder',
      status: 'operational',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    },
    {
      name: 'Placeholder',
      status: 'operational',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    },
    {
      name: 'Placeholder',
      status: 'operational',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    },
    {
      name: 'Placeholder',
      status: 'maintenance',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    },
    {
      name: 'Placeholder',
      status: 'operational',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    },
    {
      name: 'Placeholder',
      status: 'outage',
      lastUpdated: 'Placeholder',
      description: 'Placeholder'
    }
  ];

  const incidents = [
    {
      type: 'maintenance',
      title: 'Placeholder',
      date: 'Placeholder',
      description: 'Placeholder'
    },
    {
      type: 'outage',
      title: 'Placeholder',
      date: 'Placeholder',
      description: 'Placeholder'
    },
    {
      type: 'info',
      title: 'Placeholder',
      date: 'Placeholder',
      description: 'Placeholder'
    }
  ];

  return (
    <div className="relative z-30 min-h-screen">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            height: ['100%', '95%', '100%']
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            height: ['95%', '100%', '95%']
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            width: ['95%', '100%', '95%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            width: ['100%', '95%', '100%']
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          {/* Animated corner accent */}
          <motion.div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
            <motion.div 
              className="absolute top-0 left-0 w-[2px] h-12 bg-cyan-500/70"
              animate={{ height: [12, 14, 12] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute top-0 left-0 h-[2px] w-12 bg-cyan-500/70"
              animate={{ width: [12, 14, 12] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
          
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-4 pl-6">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500 filter drop-shadow-[0_0_8px_rgba(8,145,178,0.5)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <span className="relative group">
              PLACEHOLDER_STATUS//
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.span>
            </span>
          </h1>
          
          <div className="flex gap-3 items-center pl-6">
            <p className="text-xl text-gray-300 max-w-3xl font-mono tracking-wide">
              PLACEHOLDER [v0.0.0]
            </p>
            <motion.div 
              className="h-4 w-4 bg-cyan-500/20 border border-cyan-500/60"
              animate={{ 
                opacity: [0.5, 1, 0.5], 
                boxShadow: [
                  '0 0 5px rgba(8,145,178,0.3)', 
                  '0 0 10px rgba(8,145,178,0.5)', 
                  '0 0 5px rgba(8,145,178,0.3)'
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0C0F17]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(8,145,178,0.15)] relative"
        >
          {/* Animated tech overlay lines */}
          <motion.div 
            className="absolute right-6 top-6 w-24 h-[1px] bg-cyan-500/20"
            animate={{ width: [24, 30, 24] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute right-6 top-6 w-[1px] h-24 bg-cyan-500/20"
            animate={{ height: [24, 30, 24] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <div className="border-b border-gray-800 px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <h2 className="text-xl font-semibold font-mono">PLACEHOLDER_NETWORK</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(8,145,178,0.6)]"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <span className="text-cyan-400 font-medium tracking-wider text-sm">PLACEHOLDER</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">PING: 00MS</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800/70">
                  <th className="text-left py-3 text-cyan-400 font-medium font-mono text-sm">PLACEHOLDER</th>
                  <th className="text-left py-3 text-cyan-400 font-medium font-mono text-sm">PLACEHOLDER</th>
                  <th className="text-left py-3 text-cyan-400 font-medium font-mono text-sm hidden md:table-cell">PLACEHOLDER</th>
                  <th className="text-left py-3 text-cyan-400 font-medium font-mono text-sm hidden lg:table-cell">PLACEHOLDER</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <motion.tr 
                    key={index} 
                    className="border-b border-gray-800/50 hover:bg-cyan-950/10 transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.1 }}
                  >
                    <td className="py-4 font-medium">{service.name}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className={`h-3 w-3 rounded-full ${getStatusColor(service.status)} ${getStatusGlow(service.status)}`}
                          animate={hoveredService === index ? {
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8]
                          } : {}}
                          transition={{ duration: 0.8, repeat: hoveredService === index ? Infinity : 0 }}
                        ></motion.div>
                        <span className={`font-mono text-sm ${service.status === 'operational' ? 'text-cyan-400' : service.status === 'maintenance' ? 'text-yellow-400' : 'text-red-400'}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-400 hidden md:table-cell font-mono text-sm">{service.lastUpdated}</td>
                    <td className="py-4 text-gray-400 hidden lg:table-cell">{service.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-[#0C0F17]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-[0_0_30px_rgba(8,145,178,0.15)] relative"
        >
          {/* Animated corner accent */}
          <motion.div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
            <motion.div 
              className="absolute top-0 right-0 w-[2px] h-8 bg-cyan-500/50"
              animate={{ height: [8, 10, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute top-0 right-0 h-[2px] w-8 bg-cyan-500/50"
              animate={{ width: [8, 10, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
          
          <h2 className="text-xl font-semibold mb-4 font-mono flex gap-2 items-center">
            <motion.span 
              className="text-cyan-500 text-xs"
              animate={{ x: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >⟨⟨</motion.span>
            PLACEHOLDER_LOG
            <motion.span 
              className="text-cyan-500 text-xs"
              animate={{ x: [1, -1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >⟩⟩</motion.span>
          </h2>
          
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div 
                key={index}
                className={`border-l-4 ${
                  incident.type === 'maintenance' ? 'border-yellow-500' : 
                  incident.type === 'outage' ? 'border-red-500' : 'border-cyan-500'
                } pl-4 py-1 bg-gradient-to-r ${
                  incident.type === 'maintenance' ? 'from-yellow-950/30' : 
                  incident.type === 'outage' ? 'from-red-950/30' : 'from-cyan-950/30'
                } to-transparent rounded-r cursor-pointer`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.1 }}
                onClick={() => setExpandedIncident(expandedIncident === index ? null : index)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-medium ${
                    incident.type === 'maintenance' ? 'text-yellow-400' : 
                    incident.type === 'outage' ? 'text-red-400' : 'text-cyan-400'
                  }`}>{incident.title}</h3>
                  <span className="text-gray-400 text-sm font-mono">{incident.date}</span>
                </div>
                <AnimatePresence>
                  {(expandedIncident === index || expandedIncident === null) && (
                    <motion.p 
                      className="text-gray-300 text-sm"
                      initial={expandedIncident !== null ? { height: 0, opacity: 0 } : {}}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {incident.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Status; 