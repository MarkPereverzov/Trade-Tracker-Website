import React from 'react';
import { Twitter, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Логотип и описание */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-semibold gradient-text mb-2">
            THE TRADING DORM
          </div>
          <div className="text-sm text-gray-400">
            Your gateway to professional crypto trading education
          </div>
        </div>

        {/* Хлебные крошки */}
        <nav className="text-sm text-gray-400 flex space-x-4">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </nav>

        {/* Социальные сети */}
        <div className="flex space-x-4">
          <a href="https://t.me/TradingDormBot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Send className="w-6 h-6" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Копирайт */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 The Trading Dorm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
