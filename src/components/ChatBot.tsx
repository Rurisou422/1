import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Games options
const GAME_OPTIONS = [
  { id: 'fortnite', name: 'Fortnite', icon: <img src="/images/Fortnite_Icon.png" alt="Fortnite" className="w-5 h-5 object-contain" /> },
  { id: 'valorant', name: 'Valorant', icon: <img src="/images/Valorant_Logo.png" alt="Valorant" className="w-5 h-5 object-contain" /> },
  { id: 'both', name: 'Both', icon: null }
];

// Firmware descriptions for recommendation
const FIRMWARE_OPTIONS = [
  { 
    name: "S+ Firmware", 
    description: "Perfect for tournaments and competitive play. Advanced features with minimal detection risk.",
    level: "Expert"
  },
  { 
    name: "HHr5.1", 
    description: "Ideal for beginners getting first hands-on experience with enhancements. User-friendly interface.",
    level: "Beginner"
  },
  { 
    name: "Private", 
    description: "Maximum security for professional players. Custom-tailored solutions with exclusive features.",
    level: "Pro"
  }
];

// Valorant placeholder content
const VALORANT_MESSAGE = "Valorant requires specialized firmware due to its anti-cheat system. Our solutions provide safe bypasses while maintaining competitive performance. Would you like more information about our Valorant offerings?";

// Both games placeholder content
const BOTH_GAMES_MESSAGE = "Looking to dominate in multiple games? Our multi-game packages offer integrated solutions that work seamlessly across both Fortnite and Valorant, with unified controls and customizable profiles for each game.";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [showFirmwareOptions, setShowFirmwareOptions] = useState(false);
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedGame(null);
      setMessage('');
      setShowFirmwareOptions(false);
      // Instant message display instead of typing animation for better responsiveness
      setMessage("Which game are you interested in?");
    }
  };
  
  const simulateTyping = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setMessage('');
    
    // Adjust typing speed - slightly slower for better readability
    let i = 0;
    // Clear any existing interval
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }
    
    // Make sure to include the first character immediately to avoid first letter missing issue
    setMessage(text.charAt(0));
    i = 1; // Start from the second character
    
    typingTimerRef.current = setInterval(() => {
      if (i < text.length) {
        setMessage((prev) => prev + text.charAt(i));
        i++;
      } else {
        if (typingTimerRef.current) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
        }
        setIsTyping(false);
        if (callback) {
          setTimeout(callback, 300); // Reduced delay for faster response
        }
      }
    }, 35); // Slower typing speed for better readability (was 20)
  };
  
  const scrollToFirmware = () => {
    // Find the firmware section by id or class
    const firmwareSection = document.getElementById('products');
    if (firmwareSection) {
      // Set the activeCategory to 'firmware' if possible
      const firmwareCategoryButton = document.querySelector('[data-category="Firmware"]');
      if (firmwareCategoryButton) {
        (firmwareCategoryButton as HTMLElement).click();
      }
      
      firmwareSection.scrollIntoView({ behavior: 'smooth' });
      
      // Show firmware options instead of closing
      setShowFirmwareOptions(true);
    }
  };
  
  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
    setShowFirmwareOptions(false);
    
    // Different responses based on selection
    if (game === 'fortnite') {
      simulateTyping("Great! Let's check out our firmware for Fortnite. I'll explain which options might be best for your needs...", scrollToFirmware);
    } else if (game === 'valorant') {
      simulateTyping(VALORANT_MESSAGE);
    } else {
      simulateTyping(BOTH_GAMES_MESSAGE);
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Icon Button */}
      <motion.button
        onClick={toggleChat}
        className="bg-gradient-to-r from-cyan-800 to-cyan-900 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-700/40 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }} // Faster animation
      >
        <img 
          src="/images/logo.png" 
          alt="DIVINER"
          className="w-12 h-12 object-contain" 
        />
      </motion.button>
      
      {/* Chat Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30, duration: 0.15 }} // Faster animation
            className="absolute bottom-20 right-0 w-80 bg-[#050a12]/98 border border-cyan-900/50 rounded-lg shadow-[0_0_25px_rgba(8,145,178,0.25)] overflow-hidden backdrop-blur-sm"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#061626]/95 to-[#071a2e]/95 p-3 border-b border-cyan-900/50 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                <h3 className="text-cyan-100 font-mono text-sm tracking-wider">DIVINER ASSISTANT</h3>
              </div>
              <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-green-400 bg-[url('/grid-pattern.svg')] bg-center min-h-[200px]">
              <div className="mb-4">
                <span className="text-gray-500">~/DIVINER$</span> <span className="typing-cursor">{message}</span>
                {isTyping && <span className="animate-pulse">_</span>}
              </div>
              
              {!isTyping && !selectedGame && (
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {GAME_OPTIONS.map((game) => (
                    <motion.button
                      key={game.id}
                      onClick={() => handleGameSelect(game.id)}
                      className="bg-[#05111e]/95 border border-cyan-900/40 rounded px-4 py-2.5 text-left hover:bg-cyan-900/20 transition-colors flex items-center"
                      whileHover={{ scale: 1.01, y: -1, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
                    >
                      {game.icon && <span className="mr-3 flex items-center justify-center">{game.icon}</span>}
                      <span className="text-green-400 font-medium">{game.name}</span>
                    </motion.button>
                  ))}
                </div>
              )}
              
              {!isTyping && selectedGame && !showFirmwareOptions && (
                <div className="mt-4">
                  <motion.button
                    onClick={() => {
                      setSelectedGame(null);
                      setMessage("Which game are you interested in?");
                      setShowFirmwareOptions(false);
                    }}
                    className="bg-[#05111e]/95 border border-cyan-900/40 rounded px-4 py-2 text-left hover:bg-cyan-900/20 transition-colors"
                    whileHover={{ scale: 1.01, y: -1, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
                  >
                    ← Back to options
                  </motion.button>
                </div>
              )}

              {!isTyping && showFirmwareOptions && (
                <div className="mt-2">
                  <p className="text-cyan-100 text-xs mb-2">Here are our recommended firmware options:</p>
                  
                  <div className="grid grid-cols-1 gap-2 mt-3 mb-3">
                    {FIRMWARE_OPTIONS.map((firmware, index) => (
                      <div 
                        key={index}
                        className="bg-[#0a192f]/70 rounded border border-cyan-900/30 p-2.5 text-xs"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-yellow-400 font-bold">{firmware.name}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded ${
                            firmware.level === "Beginner" ? "bg-green-900/40 text-green-400" :
                            firmware.level === "Expert" ? "bg-red-900/40 text-red-400" :
                            "bg-purple-900/40 text-purple-400"
                          }`}>
                            {firmware.level}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-tight">{firmware.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={() => {
                      setSelectedGame(null);
                      setMessage("Which game are you interested in?");
                      setShowFirmwareOptions(false);
                    }}
                    className="w-full bg-[#05111e]/95 border border-cyan-900/40 rounded px-4 py-2 text-center hover:bg-cyan-900/20 transition-colors"
                    whileHover={{ scale: 1.01, y: -1, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
                  >
                    ← Back to game selection
                  </motion.button>
                </div>
              )}
            </div>
            
            {/* Terminal Footer */}
            <div className="bg-[#040810] p-2 border-t border-cyan-900/30 flex justify-center">
              <div className="text-xs text-gray-600 font-mono">DIVINER GAMING NETWORK v1.0.3</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot; 