import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section 
      id="hero"
      className="relative bg-hero-purple py-10 text-gray-600 font-open-sans text-base z-40"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content - Order 2 on mobile, Order 1 on desktop */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:translate-x-[-15px]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white leading-relaxed text-2xl font-bold font-jost mb-2.5"
            >
              <div className="space-y-4">
                <div className="block lg:whitespace-nowrap">Online Professional Bike Service & Repairs Anywhere in</div>
                <div className="block">Hyderabad</div>
              </div>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/book-now"
                className="inline-block bg-active-yellow text-hero-purple px-7 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all duration-200 shadow-lg text-base mt-6 hover:scale-105"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Image - Order 1 on mobile, Order 2 on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: 1, 
              x: isLargeScreen ? -160 : 0 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.img 
              src="/logo.png" 
              alt="Go Bikey Logo" 
              className="object-contain max-h-[300px] h-auto"
              animate={{ 
                y: [0, -10, 0] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
