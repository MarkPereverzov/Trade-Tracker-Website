import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, Clock, BookOpen, Users, Shield, Zap
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Expert Analysis',
    description: 'Get professional insights and market analysis from experienced traders'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your trading needs'
  },
  {
    icon: BookOpen,
    title: 'Exclusive Content',
    description: 'Access to premium educational materials and trading strategies'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a thriving community of like-minded traders'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Learn proper risk management techniques for sustainable trading'
  },
  {
    icon: Zap,
    title: 'Real-time Alerts',
    description: 'Instant notifications for market opportunities and updates'
  }
];

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }} // Ускоряем анимацию заголовка
          ref={ref}
          className="text-3xl font-semibold text-center mb-16"
        >
          Why Choose <span className="gradient-text animate-gradient">US?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.3 }} // Ускоряем появление карточек
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                  transition: { duration: 0.2 } // Ускоряем анимацию при наведении
                }}
                className="p-8 rounded-lg bg-dark-lighter border border-white/10 relative overflow-hidden"
              >
                {/* Иконка */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white">
                  <Icon className="w-8 h-8 text-black" />
                </div>

                {/* Заголовок и описание */}
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
