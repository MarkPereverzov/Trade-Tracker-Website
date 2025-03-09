import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What trading experience do I need?",
    answer: "Our courses are designed for all levels, from complete beginners to advanced traders. We provide step-by-step guidance and support throughout your journey."
  },
  {
    question: "How do I access the course materials?",
    answer: "Once you join through our Telegram bot, you'll receive immediate access to all course materials and our private community channels."
  },
  {
    question: "Are the trading signals reliable?",
    answer: "Our signals are based on thorough technical and fundamental analysis. However, we always emphasize proper risk management and encourage learning the analysis process."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee if you're not completely satisfied with our services."
  },
  {
    question: "How long do I have access to the course?",
    answer: "Depending on your chosen package, you'll have either 6 months or lifetime access to the course materials and updates."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="faq" className="py-24 px-4 bg-dark-lighter">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3 }} // Ускорение анимации заголовка
          ref={ref}
          className="text-3xl font-semibold text-center mb-16"
        >
          Frequently Asked <span className="gradient-text animate-gradient">QUESTIONS</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.3 }} // Ускорение анимации блоков
              whileHover={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: { duration: 0.15 } // Ускорение анимации при наведении
              }}
              style={{
                boxShadow: openIndex === index ? '0 0 20px rgba(255, 255, 255, 0.3)' : '',
                backgroundColor: openIndex === index ? 'rgba(255, 255, 255, 0.05)' : ''
              }}
              className="rounded-lg bg-dark-lighter border border-white/10 transition-all duration-200 relative overflow-hidden"
            >
              {/* Размытые цвета в правом верхнем углу */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-primary-start/20 to-primary-end/20 blur-2xl opacity-50"></div>

              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }} // Ускорение анимации раскрытия
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-400">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;