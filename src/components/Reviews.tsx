import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const reviews = [
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    name: "Alex Thompson",
    stars: 5,
    text: "The Trading Dorm has completely transformed my approach to crypto trading. The strategies I've learned here are invaluable."
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    name: "Sarah Chen",
    stars: 5,
    text: "Exceptional community and support. The mentors are always available and the educational content is top-notch."
  },
  {
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    name: "Michael Rodriguez",
    stars: 5,
    text: "Best investment I've made in my trading journey. The risk management techniques alone are worth the price."
  }
];

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const displayReviews = [...reviews, ...reviews, ...reviews]; // Triple the reviews for infinite scroll
  const offset = -currentIndex * 100;

  return (
    <section id="reviews" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          ref={ref}
          className="text-3xl font-semibold text-center mb-16"
        >
          What Our <span className="gradient-text animate-gradient">CLIENTS SAY</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            animate={{ x: `${offset}%` }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            {displayReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className="w-full flex-shrink-0 px-4"
                style={{ flex: '0 0 33.333%' }}
              >
                <div className="p-6 rounded-lg bg-dark-lighter border border-white/10 relative overflow-hidden h-full">
                  {/* Градиентный фон при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <h3 className="font-semibold">{review.name}</h3>
                    </div>
                    <div className="flex">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-white text-white" // Белые звездочки
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400">{review.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;