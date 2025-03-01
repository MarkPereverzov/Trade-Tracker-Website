import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/Oa3kNRi.png" 
                alt="The Trading Dorm Logo" 
                className="h-10 w-auto opacity-90"
              />
              <span className="ml-2 text-xl font-bold text-white">The Trading Dorm</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 transition-colors">
                About Service
              </Link>
              <Link to="/vip" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-all rainbow-border">
                VIP Access
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              About Service
            </Link>
            <Link
              to="/vip"
              className="block px-3 py-2 rounded-md text-base font-medium bg-gray-800 text-white hover:bg-gray-700 transition-all rainbow-border"
              onClick={toggleMenu}
            >
              VIP Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;