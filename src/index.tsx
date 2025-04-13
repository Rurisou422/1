import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Firmware from './components/Firmware';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-900 text-white">
      <Firmware />
    </div>
  </React.StrictMode>
); 