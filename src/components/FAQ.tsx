import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Our package includes!',
      answer: 'Our service package includes an engine oil change, chain lubrication, oil leakage cleaning, brake inspection, air filter cleaning, spark plug cleaning, and clutch plate adjustment. Additionally, we offer a complimentary foam wash and convenient pick-up and drop-off service.'
    },
    {
      question: 'What about your prices?',
      answer: 'We offer competitive and transparent pricing for all our services. Our prices are designed to provide excellent value while maintaining the highest quality standards. We also offer special discounts and package deals for regular customers.'
    },
    {
      question: 'How to Book Services?',
      answer: 'Booking our services is simple and convenient. You can book online through our website, call us directly, or use our mobile app. Choose your preferred service, select a convenient time slot, and confirm your booking. We\'ll handle the rest!'
    },
    {
      question: 'What Modes of Payment do you accept?',
      answer: 'We accept multiple payment methods including cash, credit/debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay. We also offer EMI options for high-value services.'
    },
    {
      question: 'Delivery time?',
      answer: 'Our standard service delivery time is 24-48 hours for most services. For complex repairs, we\'ll provide you with an accurate timeline during the initial assessment. We also offer express services for urgent requirements at an additional cost.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-service-gray faq-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-[1400px] mx-auto pb-[30px]"
        >
          <h2 className="faq-title services-title text-[32px] font-jost font-bold uppercase text-service-blue pb-5 mb-5">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div
                className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div 
                  className="flex items-center justify-between hover:bg-gray-50 transition-colors duration-200" 
                  style={{ 
                    padding: '20px',
                    background: '#fff',
                    borderRadius: '4px',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    const questionElement = e.currentTarget.querySelector('h3');
                    if (questionElement) {
                      questionElement.style.color = '#47b2e4';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const questionElement = e.currentTarget.querySelector('h3');
                    if (questionElement) {
                      questionElement.style.color = '#37517e';
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0">
                      <img 
                        src="/Question-mark.png" 
                        alt="Question mark" 
                        className="fixed-question-icon"
                        width={24} 
                        height={24} 
                      />
                    </div>
                    <h3 style={{
                      color: '#37517e',
                      transition: '0.3s'
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      className="w-6 h-6 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ color: '#37517e' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#47b2e4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#37517e';
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
