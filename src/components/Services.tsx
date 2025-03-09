import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Send } from 'lucide-react'; // Импортируем Send

const services = [
  {
    title: 'Starter',
    price: '$49',
    features: [
      'Basic trading strategies',
      'Market analysis basics',
      'Community access',
      'Weekly updates',
    ]
  },
  {
    title: 'Pro',
    price: '$99',
    features: [
      'Advanced trading strategies',
      'Priority support',
      'Live trading sessions',
      'Risk management course',
      'Trading indicators',
      'Monthly Q&A calls'
    ]
  },
  {
    title: 'Elite',
    price: '$199',
    features: [
      'One-on-one mentoring',
      'Custom trading plan',
      'Advanced technical analysis',
      'Private chat group',
      'Daily market updates',
      'Lifetime access',
      'Priority signals'
    ]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24 px-4 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }} // Анимация заголовка
          ref={ref}
          className="text-3xl font-semibold text-center mb-16"
        >
          Our Crypto <span className="gradient-text">Services</span>
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
              className="p-8 rounded-lg bg-dark gradient-border flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4 gradient-text">{service.title}</h3> {/* Градиентный текст */}
              <div className="text-3xl font-bold mb-6 gradient-text">{service.price}</div>
              <ul className="space-y-4 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-white" /> {/* Белый цвет галочек */}
                    <span className="text-gray-300">{feature}</span> {/* Серый цвет названий */}
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/thetradingdormcrypto" // Обновленная ссылка
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 mt-8 text-center rounded-lg bg-gradient-to-r from-primary-start to-primary-end hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" /> {/* Добавляем иконку Send */}
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;