import React from 'react';

const KmboxBProGuide: React.FC = () => {
  // Add state for enlarged image modal
  const [enlargedImage, setEnlargedImage] = React.useState<string | null>(null);

  return (
    <div className="space-y-6 text-gray-300 leading-relaxed font-light">
      <div className="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
        <h2 className="text-xl font-medium tracking-wider text-white">KM Box B+ Setup</h2>
      </div>
      
      <ol className="list-decimal ml-6 space-y-4">
        <li>Connect to your 2nd PC with the included USB cable. (Port #1)</li>
        <li>Connect to your main PC with the included USB cable. (Port #2)</li>
        <li>Connect your keyboard or mouse to either #3 or #4.</li>
      </ol>

      <div className="my-6">
        <div className="rounded border border-white/10 p-4 bg-black/30 max-w-xl mx-auto">
          <img 
            src="/images/kmboxbpro.avif" 
            alt="KM Box B+ Device" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
      
      <ol className="list-decimal ml-6 space-y-4" start={4}>
        <li>
          Go to <a href="http://www.linux-usb.org/usb.ids" className="text-blue-400 hover:underline">http://www.linux-usb.org/usb.ids</a>
        </li>
        <li>
          <div>Here you will find a list of devices. Find and select the mouse you would like your KM Box to mimic. Note down the Product ID (PID) and Vendor ID (VID) of your chosen device for future reference.</div>
        </li>
        <li>Connect your KM Box to your secondary PC.</li>
        <li>
          <div>Download the <a href="https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/" className="text-blue-400 hover:underline">uPyCraft.exe</a> file. <em className="text-gray-400">(You might encounter a message box mentioning "Font" – please ignore this and proceed by clicking on either "board" or "serial" under the "Tools" menu.)</em></div>
        </li>
        <li>
          <div>In the script, find the dynamic PID and VID command line and device.enable(1). Remove the # before those 3 lines. Here is how it should look before (Picture #1) and after (Picture #2).</div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded border border-white/10 p-4 bg-black/30 relative cursor-zoom-in"
                onClick={() => setEnlargedImage("/images/Kmboxbpro1.avif")}>
              <img 
                src="/images/Kmboxbpro1.avif" 
                alt="Script Before Changes" 
                className="max-w-full h-auto"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-xs text-gray-300 px-2 py-1 rounded">
                Click to enlarge
              </div>
            </div>
            
            <div className="rounded border border-white/10 p-4 bg-black/30 relative cursor-zoom-in"
                onClick={() => setEnlargedImage("/images/Kmboxbpro2.avif")}>
              <img 
                src="/images/Kmboxbpro2.avif" 
                alt="Script After Changes" 
                className="max-w-full h-auto"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-xs text-gray-300 px-2 py-1 rounded">
                Click to enlarge
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>Locate the static PID and VID command line (0x46d, c07d). Replace the existing PID and VID with the ones you noted down in Step 5. Make sure to remove the # comment if it is there as shown above.</div>
        </li>
        <li>
          <div>Press "Ctrl + S" to save your changes, and then click on "Download and run" under the "Tools" menu.</div>
        </li>
        <li>
          <div>Next, we will reboot the device. Unplug both blue USB cables to power down the Kmbox until the screen turns off, then plug them back in. The main PC should now recognize a new mouse and begin setting it up, while also detecting a new VID/PID.</div>
        </li>
      </ol>
      
      <div className="rounded-lg border border-green-800/30 bg-green-900/10 px-5 py-4 mt-8">
        <p className="text-sm text-green-400 font-medium mb-2">Setup Complete!</p>
        <p className="text-sm text-gray-300">
          Your KM Box B+ should now be properly configured. If you encounter any issues, please make sure you've followed all steps correctly or contact our support team.
        </p>
      </div>

      {/* Modal for enlarged image */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={enlargedImage} 
              alt="Enlarged Image" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-white/10 text-white px-2 py-1 rounded text-sm"
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedImage(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KmboxBProGuide; 