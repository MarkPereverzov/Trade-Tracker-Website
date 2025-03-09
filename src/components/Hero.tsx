import React from 'react';
import { Send, ChevronDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Animated background circles */}
      <div className="floating-circle w-96 h-96 bg-primary-start left-0 top-1/4" />
      <div className="floating-circle w-96 h-96 bg-primary-end right-0 bottom-1/4" 
           style={{ animationDelay: '-10s' }} />

      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6" // Увеличенный размер текста
        >
          <span className="gradient-text animate-gradient">THE TRADING DORM</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Your gateway to professional crypto trading education
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Кнопка Telegram */}
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://t.me/TradingDormBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Белая подсветка
              transition: { duration: 0.1, ease: "easeOut" } // Быстрая анимация
            }}
            className="flex items-center justify-center w-full md:w-auto px-8 py-3 text-center rounded-full bg-white text-dark hover:bg-gray-100 transition-all duration-300" // Белая кнопка
          >
            <Send className="w-6 h-6 mr-2" /> {/* Иконка Telegram */}
            Join Telegram
          </motion.a>

          {/* Кнопка Discord */}
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://discord.gg/your-discord-link" // Замените на вашу ссылку Discord
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Белая подсветка
              transition: { duration: 0.1, ease: "easeOut" } // Быстрая анимация
            }}
            className="flex items-center justify-center w-full md:w-auto px-8 py-3 text-center rounded-full bg-white text-dark hover:bg-gray-100 transition-all duration-300" // Белая кнопка
          >
            <MessageCircle className="w-6 h-6 mr-2" /> {/* Иконка Discord */}
            Join Discord
          </motion.a>
        </div>

        {/* Кнопка прокрутки вниз */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
          href="#benefits"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;