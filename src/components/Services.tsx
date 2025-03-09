import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Send } from 'lucide-react'; // Импортируем Send

const services = [
  {
    title: 'STARTER',
    price: '$49',
    features: [
      'Basic trading strategies',
      'Market analysis basics',
      'Community access',
      'Weekly updates',
    ],
    circleColor: 'from-pink-500/40 to-purple-500/40', // Цвет кружка для Starter
    titleGradient: 'bg-gradient-to-r from-pink-500 to-purple-500', // Градиент для заголовка Starter
    priceGradient: 'bg-gradient-to-r from-pink-500 to-purple-500' // Градиент для цены Starter
  },
  {
    title: 'PRO',
    price: '$99',
    features: [
      'Advanced trading strategies',
      'Priority support',
      'Live trading sessions',
      'Risk management course',
      'Trading indicators',
      'Monthly Q&A calls'
    ],
    circleColor: 'from-blue-500/40 to-cyan-500/40', // Цвет кружка для Pro
    titleGradient: 'bg-gradient-to-r from-blue-500 to-cyan-500', // Градиент для заголовка Pro
    priceGradient: 'bg-gradient-to-r from-blue-500 to-cyan-500' // Градиент для цены Pro
  },
  {
    title: 'ELITE',
    price: '$199',
    features: [
      'One-on-one mentoring',
      'Custom trading plan',
      'Advanced technical analysis',
      'Private chat group',
      'Daily market updates',
      'Lifetime access',
      'Priority signals'
    ],
    circleColor: 'from-green-500/40 to-teal-500/40', // Цвет кружка для Elite
    titleGradient: 'bg-gradient-to-r from-green-500 to-teal-500', // Градиент для заголовка Elite
    priceGradient: 'bg-gradient-to-r from-green-500 to-teal-500' // Градиент для цены Elite
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-24 px-4 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }} // Анимация заголовка
          ref={ref}
          className="text-3xl font-semibold text-center mb-16"
        >
          Our Crypto <span className="gradient-text animate-gradient">SERVICES</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.3 }} // Анимация появления карточек
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                transition: { duration: 0.2 } // Анимация при наведении
              }}
              className="p-8 rounded-lg bg-dark-lighter border border-white/10 relative overflow-hidden flex flex-col"
            >
              {/* Размытые цвета в правом верхнем углу */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-r ${service.circleColor} blur-2xl opacity-70`} // Увеличил размер и непрозрачность
              ></div>

              {/* Заголовок и цена */}
              <h3 className={`text-4xl font-semibold mb-4 bg-clip-text text-transparent ${service.titleGradient}`}>
                {service.title}
              </h3>
              <div className={`text-2xl font-bold mb-6 bg-clip-text text-transparent ${service.priceGradient}`}>
                {service.price}
              </div>

              {/* Список преимуществ */}
              <ul className="space-y-4 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-white" /> {/* Белый цвет галочек */}
                    <span className="text-gray-300">{feature}</span> {/* Серый цвет названий */}
                  </li>
                ))}
              </ul>

              {/* Кнопка "Get Started" */}
              <motion.a
                href="https://t.me/thetradingdormcrypto" // Обновленная ссылка
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 mt-8 text-center rounded-full bg-white text-dark transition-all duration-300"
                whileHover={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Белая подсветка
                  transition: { duration: 0.1, ease: "easeOut" } // Быстрая анимация
                }}
              >
                <Send className="w-5 h-5 mr-2" /> {/* Добавляем иконку Send */}
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;