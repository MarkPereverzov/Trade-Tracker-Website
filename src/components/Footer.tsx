import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Логотип и описание */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-semibold gradient-text mb-2">
            The Trading Dorm
          </div>
          <div className="text-sm text-gray-400">
            Your gateway to professional crypto trading education
          </div>
        </div>

        {/* Ссылки на разделы в одну строку */}
        <div className="flex space-x-6">
          <div className="text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <a href="#team" className="hover:text-white transition-colors">
              Team
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} The Trading Dorm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;