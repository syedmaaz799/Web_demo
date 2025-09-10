import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp business number - same as WhatsAppFloat component
    const phoneNumber = '+919876543210';
    const message = 'Hi! I need bike service assistance.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="call-to-action" 
      className="relative text-white py-28 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/bike-general-service.jpg')",
        backgroundAttachment: 'fixed' // This line adds the parallax effect
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)' }}></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/4 mb-6 lg:mb-0"
          >
            <h3 className="text-[28px] font-jost font-bold uppercase mb-2">
              Call To Action (24 x 7)
            </h3>
            <p className="text-[16px] font-open-sans leading-relaxed">
              Revive your ride! Professional online bike repairs at your fingertips. Schedule now for hassle-free service and get back on the road with confidence. Repair your bike online today. Give us a call or book your appointment now!
            </p>
          </motion.div>

          {/* Button */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: -32 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={handleWhatsAppClick}
              className="inline-block font-jost font-medium text-base tracking-wide py-3 px-10 rounded-full border-2 border-white text-white transition-all duration-500 m-2.5 hover:text-white cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0dcaf0';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#fff';
              }}
            >
              Call To Action
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;