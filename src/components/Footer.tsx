import React from 'react';
import { Instagram as Telegram, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 rainbow-border-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2023 The Trading Dorm | Crypto. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://t.me/TradingDorm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Telegram className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/TradingDorm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/TradingDorm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;