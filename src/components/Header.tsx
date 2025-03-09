import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react'; // Заменяем MessageCircle на Send
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-dark/50 border-b border-white/10" // Увеличиваем прозрачность
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <div className="text-3xl font-semibold gradient-text">
            The Trading Dorm
          </div>

          {/* Навигация для десктопов */}
          <nav className="hidden md:flex space-x-10">
            {['Home', 'Benefits', 'Services', 'Reviews', 'FAQ'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-300 hover:text-white transition-colors"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Кнопка "Join Telegram" */}
          <motion.a
            href="https://t.me/TradingDormBot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 transition-opacity text-lg"
            whileHover={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Белая подсветка
              transition: { duration: 0.1, ease: "easeOut" } // Быстрая анимация
            }}
          >
            <Send className="w-6 h-6 mr-2" /> {/* Заменяем иконку на Send */}
            Join Telegram
          </motion.a>

          {/* Мобильное меню (бургер) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильное меню (раскрывающееся) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {['Home', 'Benefits', 'Services', 'Reviews', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg text-gray-300 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="https://t.me/TradingDormBot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-start to-primary-end hover:opacity-90 transition-opacity text-lg"
            >
              <Send className="w-6 h-6 mr-2" /> {/* Заменяем иконку на Send */}
              Join Telegram
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;