import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- Data for the service cards ---
const servicesData = [
  {
    imgSrc: '/bike-general-service.jpg',
    title: 'Bike General Service',
    originalPrice: '1499',
    salePrice: '899',
  },
  {
    imgSrc: '/bike-repair-service.jpg',
    title: 'Bike Repair Service',
    originalPrice: '500',
    salePrice: '300',
  },
  {
    imgSrc: '/bike-engine-repair.jpg',
    title: 'Bike Engine Repair',
    originalPrice: '9500',
    salePrice: '5999',
  },
];

// Horizontal nudge for text under the image (in pixels). Adjust as needed.
const TEXT_OFFSET_PX = 4;

// --- A new, reusable component for a single service card ---
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/book-now');
  };

  return (
    <motion.div
      // This outer div acts as the grid column
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex" 
    >
      <div
        // This is the inner, styled card with fixed dimensions
        className="bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full h-[400px] py-[50px] px-[30px] flex flex-col items-center cursor-pointer group"
        onClick={handleCardClick}
        style={{
          minWidth: '280px',
          maxWidth: '350px',
          width: '100%'
        }}
      >
        {/* Image with fixed height */}
        <img 
          src={service.imgSrc} 
          alt={service.title} 
          className="w-full h-[180px] object-cover mb-3" 
        />
        
        {/* Text Content */}
        <h4 className="text-2xl font-jost text-service-blue font-medium mb-4 self-start text-left group-hover:text-[#47b2e4] transition-colors duration-300" style={{ marginLeft: TEXT_OFFSET_PX }}>
          {service.title}
        </h4>

        <p className="text-base font-open-sans flex items-center gap-2 self-start text-left" style={{ marginLeft: TEXT_OFFSET_PX }}>
          <del className="font-bold text-[#444444]">
            ₹ {service.originalPrice}
          </del>
          <span className="font-bold text-gray-800">
            ₹ {service.salePrice}
          </span>
        </p>
      </div>
    </motion.div>
  );
};


// --- The main Services component ---
const Services: React.FC = () => {
  return (
    <section id="services" className="bg-service-gray py-[60px]">
      <div className="container mx-auto px-4 max-w-[1300px]">
        
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-[1400px] mx-auto pb-8"
        >
          <h2 className="services-title text-[32px] font-jost font-bold uppercase text-service-blue pb-5 mb-5">
            Services
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base font-open-sans text-[#444444] max-w-[1400px]"
          >
            Welcome to Go Bikey, your premier destination for Best-quality bike services in Hyderabad. Our expert mechanics offer comprehensive solutions, from bike repairs to maintenance, all at affordable prices all over Hyderabad. Whether you're in need of a bike mechanic near you, we've got you covered. In the fast-paced city of Hyderabad, where time is a precious commodity, the demand for convenient and efficient services is at an all-time high. In this digital age, the world of bike maintenance is evolving, offering residents the ease of accessing online bike services. The benefits of online bike service in Hyderabad and tips on finding a reliable bike mechanic near you.
          </motion.p>
        </motion.div>

        {/* The Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;