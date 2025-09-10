import React from 'react';
import { motion } from 'framer-motion';

const DoubleCheckIcon = () => (
  <img 
    src="/double-check-icon.png" 
    alt="Included service" 
    className="fixed-check-icon"
    width={20}
    height={20}
  />
);

const WhatsIncluded: React.FC = () => {
  const services = [
    'Engine Oil Change',
    'Chain Tension Check',
    'Oil Leakage Check',
    'Brakes Check',
    'Air Filter Cleaning',
    'Spark Plug Cleaning',
    'Cables & Levers Adjustment',
    'Clutch Greasing',
    'Chain Lubrication',
    'Electrical Checkup',
    'Greasing & Lubrication',
    'Exterior Foam Wash',
    'Sanitization'
  ];

  return (
    <section className="py-[60px] bg-white overflow-hidden text-[#444444] font-open-sans text-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pb-[30px] max-w-[1116px] mx-auto"
        >
          <h2 className="whats-included-title services-title text-[32px] font-jost font-bold uppercase text-service-blue pb-5 mb-5">
            WHAT'S INCLUDED
          </h2>
          <p className="text-base font-open-sans text-[#444444] max-w-[1116px] mx-auto leading-relaxed text-center">
            Go Bikey offers a comprehensive Bike service lineup, from bike engine oil change to exterior foam wash. Our skilled team ensures top-notch care, including chain tension check, brakes inspection, and spark plug cleaning. With us, your bike stays in prime condition, both in terms of performance and appearance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center py-2"
            >
              <DoubleCheckIcon />
              <span className="text-gray-700 font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
