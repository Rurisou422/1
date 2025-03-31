import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the guide data structure
type Guide = {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  category: 'flash' | 'troubleshooting';
  image?: string;
};

// Guide Item Component
const GuideItem: React.FC<{ guide: Guide }> = ({ guide }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800/40 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`px-5 py-4 cursor-pointer ${isExpanded ? 'border-b border-gray-800/30' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-0.5 text-white">{guide.title}</h2>
            <p className="text-gray-400 text-sm font-medium">{guide.subtitle}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <motion.div 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/70 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4">
              <div className="prose prose-invert prose-sm max-w-none">
                {guide.content}
                
                {guide.image && (
                  <div className="mt-4 flex justify-center">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="rounded-md border border-gray-800/50 shadow-md max-w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Guides: React.FC = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState<'flash' | 'troubleshooting'>('flash');
  
  // Guide data
  const guides: Guide[] = [
    {
      id: '35t-flash-guide',
      title: '35T Captain Flash Guide',
      subtitle: 'Complete guide to flash your 35T Captain firmware',
      category: 'flash',
      content: (
        <div className="space-y-6">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 1</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">35T Captain Flash Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="font-bold mr-2">Tool:</span>
                <span className="text-blue-400">FlashTool35TCaptain.rar</span>
              </p>
              
              <p className="flex items-start">
                <span className="font-bold mr-2">Note:</span>
                <span>Before Flashing, Make Sure your wire is in Jtag port ➡ Update port</span>
              </p>
              
              <p className="italic text-yellow-400/80 mb-2">(Type C to Type C Wire can not be used to Flash)</p>
              
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Download FlashTool35TCaptain</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Run Zdiag_Drivers.exe To update drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>When you Open Zdiag, it will ask "Online update?" Click no</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>Click on Options ➡ List All Devices</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>Find "Quad RS-232-HS (Interface 0)"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 6:</span>
                  <span>Click On Reinstall Drivers and wait for completion</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/35tFlashGuidePart1.png" 
                alt="Zdiag Interface" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
          
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 2</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">35T Captain Flash Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Place Firmware in "Ocd" Folder</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Rename your Firmware bin File as "pcileech_screamer_m2_top.bin"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Run File That Says "Open"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>Wait For firmware to flash, it takes 2 mins to update</span>
                </li>
                <li className="ml-6">and it will stuck on Sector 24</li>
                <li className="ml-6">No need to worry about it</li>
                <li className="flex items-start mt-2">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>When Completed it will give an error which means Successfully Completed</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 6:</span>
                  <span>Restart Gaming pc ➡ Wire Data port and your good</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/35tFlashGuidePart2.png" 
                alt="Flash Completed" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
        </div>
      ),
    },
    {
      id: 'squirrel-flash-guide',
      title: 'Squirrel / MVP Flash Guide',
      subtitle: 'Complete guide to flash your Squirrel or MVP firmware',
      category: 'flash',
      content: (
        <div className="space-y-6">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 1</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">Squirrel / MVP Flash Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="font-bold mr-2">Tool:</span>
                <span className="text-blue-400">Squirrel35TFlashTool.rar</span>
              </p>
              
              <p className="flex items-start">
                <span className="font-bold mr-2">Note:</span>
                <span>Before Flashing, Make Sure your wire is in Jtag port ➡ Update port</span>
              </p>
              
              <p className="italic text-yellow-400/80 mb-2">(Type C to Type C Wire can not be used to Flash)</p>
              
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Download Squirrel35TFlashTool</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Run "JtagDrivers.exe"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Click On Install and it will install drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>If it Says "Sucess" Means Drivers Installed</span>
                </li>
                <li className="ml-6">
                  <span>➡ if it says "Already Installed means your dma wire not in jtag port or dma is captain dma not Squirrel or wire broken</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/SquirrelFlashGuidePart1.png" 
                alt="Driver Installation" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
          
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 2</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">Squirrel / MVP Flash Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Run Flash tool "FlashFirmware.exe"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Click on The White box to Sellect Firmware .bin file</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Click on the "Start" Button and it will start to update firmware</span>
                </li>
                <li className="ml-6">
                  <span>(It takes 2 to 3 mins to update ➡ and it will also stuck on "Sector 24" for like 1 minute which is normal)</span>
                </li>
                <li className="flex items-start mt-2">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>When Completed it will say Successfully Completed</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>Restart Gaming pc ➡ Wire Data port and your good</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/SquirrelFlashGuidePart2.png" 
                alt="Flash Completed" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
        </div>
      ),
    },
    {
      id: '75t-flash-guide',
      title: '75T with JTag Interface Guide',
      subtitle: 'Complete guide to flash your 75T Captain firmware',
      category: 'flash',
      content: (
        <div className="space-y-6">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 1</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">75T with JTag Interface Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="font-bold mr-2">Tool:</span>
                <span className="text-blue-400">FlashTool75TCaptain.rar</span>
              </p>
              
              <p className="flex items-start">
                <span className="font-bold mr-2">Note:</span>
                <span>Before Flashing, Make Sure your wire is in Jtag port ➡ Update port</span>
              </p>
              
              <p className="italic text-yellow-400/80 mb-2">(Type C to Type C Wire can not be used to Flash)</p>
              
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Download FlashTool75TCaptain</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Open "JTagDriver" Folder and Run "JtagDrivers.exe"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Click On Install and it will install drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>If it Says "Sucess" Means Drivers installed</span>
                </li>
                <li className="ml-6">
                  <span>➡ if it says "Already Installed means your dma wire not in jtag port or dma is captain dma not Squirrel or wire broken</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/Captain75tPart1.png" 
                alt="Driver Installation" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
          
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 2</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">75T with JTag Interface Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Open "FlashTool75t" Folder and Run Flash tool "CH347FpgaFlashTool"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Change Bit option To Bin, and On Top Left Select "xcfa75t" From the list</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Click on the box and Select your Firmware .Bin File, You Can put your firmware in the Folder Aswell</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>Click on the Second Button Next to the % Bar and it will start to update firmware</span>
                </li>
                <li className="ml-6">
                  <span>(It takes 2 to 3 mins to update ➡ and it will also stuck on "Sector 32" for like 1 minute which is normal</span>
                </li>
                <li className="flex items-start mt-2">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>When Completed it will Give Little error which means Successfully Completed</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 6:</span>
                  <span>Restart Gaming pc ➡ Wire Data port and your good</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/Captain75tPart2.png" 
                alt="Flash Tool Interface" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
        </div>
      ),
    },
    {
      id: 'mvp-75t-guide',
      title: 'MVP 75T Guide',
      subtitle: 'Complete guide to flash your MVP 75T Single RS-232-HS firmware',
      category: 'flash',
      content: (
        <div className="space-y-6">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 1</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">MVP 75T Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="font-bold mr-2">Tool:</span>
                <span className="text-blue-400">FlashToolMvp75T.rar</span>
              </p>
              
              <p className="flex items-start">
                <span className="font-bold mr-2">Note:</span>
                <span>Before Flashing, Make Sure your wire is in Jtag port ➡ Update port</span>
              </p>
              
              <p className="italic text-yellow-400/80 mb-2">(Type C to Type C Wire can not be used to Flash)</p>
              
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Download FlashToolMvp75T</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Run Zdiag.exe To update drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>When you Open Zdiag, it will ask "Online update?" Click no</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>Click on Options ➡ List All Devices</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>Find "Single RS-232-HS"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 6:</span>
                  <span>Click On Reinstall Drivers and wait for completion</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/MVP75t1.png" 
                alt="Driver Installation" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
          
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-4 border-l-2 border-yellow-500/60">
            <h3 className="text-xl font-bold mb-2 text-white">Step 2</h3>
            <h4 className="text-lg font-semibold mb-4 text-white">MVP 75T Single RS-232-HS Guide</h4>
            
            <div className="space-y-3 text-gray-300">
              <ol className="list-none space-y-2 pl-1">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 1:</span>
                  <span>Place Firmware in "FlashToolMvp75T" Folder</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 2:</span>
                  <span>Rename your Firmware bin File as "pcileech_enigma_x1_top.bin"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 3:</span>
                  <span>Run File That Says "Flash.bat"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 4:</span>
                  <span>Wait For firmware to flash, it takes 2 mins to update</span>
                </li>
                <li className="ml-6">
                  <span>and it will stuck on Sector 31 or 32</span>
                </li>
                <li className="ml-6">
                  <span>No need to worry about it</span>
                </li>
                <li className="flex items-start mt-2">
                  <span className="font-semibold mr-2">Step 5:</span>
                  <span>When Completed it will give an error which means Successfully Completed</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Step 6:</span>
                  <span>Restart Gaming pc ➡ Wire Data port and your good</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-4 mb-2">
              <img 
                src="/images/MVP75t2.png" 
                alt="Flash Completed" 
                className="rounded-md border border-gray-800/50 shadow-md max-w-full mx-auto"
              />
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-1">DIVINER DMA Inc©</p>
          </div>
        </div>
      ),
    },
    {
      id: 'vgk-error',
      title: 'PC stuck on boot with VGK error',
      subtitle: 'Firmware driver most likely interrupted with real WiFi card or loaded wrong drivers',
      category: 'troubleshooting',
      content: (
        <div className="space-y-3">
          <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
            <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
              <li>Unplug DMA device, boot Windows</li>
              <li>Disable real WiFi from device manager</li>
              <li>Show hidden devices</li>
              <li>Delete hidden network devices with drivers</li>
              <li>If you don't have WiFi in main PC still follow from "remove hidden devices" step</li>
              <li>Turn off PC</li>
              <li>Plug in DMA</li>
              <li>Boot PC (90% of freeze issues are fixed this way)</li>
            </ol>
            <p className="mt-3 text-gray-400 text-sm font-medium">For remaining freeze issues, ask DIVINER to rebuild firmware 😈</p>
          </div>
        </div>
      ),
      image: '/images/PCStuck.png'
    },
    {
      id: 'speed-test',
      title: 'Speed test not working',
      subtitle: 'Most likely driver not loaded (yellow error in Device Manager)',
      category: 'troubleshooting',
      content: (
        <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
            <li>Hold power button until PC turns off</li>
            <li>Turn on PC after 10 seconds wait</li>
            <li>If not working, reflash the firmware</li>
            <li>If still not working, follow the "remove hidden devices" steps from the guide above</li>
          </ol>
        </div>
      )
    },
    {
      id: 'driver-installation',
      title: 'Driver installation failing',
      subtitle: 'Common driver installation issues and solutions',
      category: 'troubleshooting',
      content: (
        <div className="bg-black/90 backdrop-blur-sm rounded-md p-3 border-l-2 border-gray-700/60">
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300 text-sm">
            <li>Make sure all antivirus software is disabled temporarily</li>
            <li>Run the installer as Administrator</li>
            <li>Disconnect from the internet during installation</li>
            <li>If Windows Security blocks installation, choose "More info" and "Run anyway"</li>
            <li>For persistent issues, contact support for a custom driver package</li>
          </ol>
        </div>
      )
    }
  ];

  // Filter guides by active category
  const filteredGuides = guides.filter(guide => guide.category === activeCategory);

  return (
    <div className="pt-32 pb-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-3 text-white">DIVINER Guides</h1>
          <p className="text-lg text-gray-400 mb-8">
            Flash guides and troubleshooting solutions for DIVINER products
          </p>
          
          {/* Category Selector */}
          <div className="flex justify-center gap-4 mb-10">
            <motion.button
              onClick={() => setActiveCategory('flash')}
              className={`relative px-8 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'flash' 
                  ? 'bg-gradient-to-r from-yellow-600/20 to-yellow-600/5 shadow-[0_0_15px_rgba(234,179,8,0.2)] border border-yellow-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-yellow-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Animated glow effect for active button */}
              {activeCategory === 'flash' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-yellow-600/5 to-yellow-600/10"
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
              <div className="flex items-center gap-2 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className={`w-5 h-5 ${activeCategory === 'flash' ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span className={`font-medium ${activeCategory === 'flash' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  Flash Guides
                </span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveCategory('troubleshooting')}
              className={`relative px-8 py-3 rounded-xl backdrop-blur-sm transition-all overflow-hidden group ${
                activeCategory === 'troubleshooting' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-cyan-600/5 shadow-[0_0_15px_rgba(8,145,178,0.2)] border border-cyan-500/30' 
                  : 'bg-black/30 border border-gray-800/50 hover:border-cyan-600/30'
              }`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0 }
              }}
            >
              {/* Animated glow effect for active button */}
              {activeCategory === 'troubleshooting' && (
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
              <div className="flex items-center gap-2 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className={`w-5 h-5 ${activeCategory === 'troubleshooting' ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
                <span className={`font-medium ${activeCategory === 'troubleshooting' ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  Troubleshooting
                </span>
              </div>
            </motion.button>
          </div>
          
          {/* Category description */}
          <div className="mb-8">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              {activeCategory === 'flash' ? (
                <p className="text-gray-300">
                  Step-by-step guides for flashing firmware on different DIVINER hardware models.
                  Select your device model below to see detailed instructions.
                </p>
              ) : (
                <p className="text-gray-300">
                  Solutions for common issues with DIVINER products. 
                  If you can't find what you need, contact our support team.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Category specific header */}
        <motion.h2
          key={`header-${activeCategory}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl font-bold mb-6 ${
            activeCategory === 'flash' ? 'text-yellow-500' : 'text-cyan-500'
          }`}
        >
          {activeCategory === 'flash' ? 'Firmware Flash Guides' : 'Troubleshooting Guides'}
        </motion.h2>

        {/* Guides Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4"
          >
            {filteredGuides.map(guide => (
              <GuideItem key={guide.id} guide={guide} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Support CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border ${
            activeCategory === 'flash' ? 'border-yellow-500/20' : 'border-cyan-500/20'
          } p-5 text-center mt-10`}
        >
          <h2 className="text-xl font-semibold mb-2 text-white">Need more help?</h2>
          <p className="text-gray-400 text-sm mb-3">
            Our support team is available to assist with any complex issues not covered in these guides.
          </p>
          <a 
            href="#" 
            className={`inline-flex items-center px-6 py-2 rounded-md text-sm font-medium transition-colors shadow-md ${
              activeCategory === 'flash' 
                ? 'bg-yellow-600/30 hover:bg-yellow-600/50 text-yellow-100' 
                : 'bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Guides; 