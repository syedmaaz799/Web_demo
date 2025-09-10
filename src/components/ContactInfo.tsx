import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactInfo: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const contactDetails = [
    {
      normalIcon: '/location-normal.png',
      hoverIcon: '/location-hover.png',
      label: 'Location:',
      value: 'Gachibowli, Hyderabad 500032',
      id: 'location'
    },
    {
      normalIcon: '/email-normal.png',
      hoverIcon: '/email-hover.png',
      label: 'Email:',
      value: 'helpdesk@gobikey.in',
      id: 'email'
    },
    {
      normalIcon: '/phone-normal.png',
      hoverIcon: '/phone-hover.png',
      label: 'Call:',
      value: '+91 9346256309',
      id: 'phone'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white p-8 shadow-2xl border border-gray-100 relative w-full h-full"
    >
      {/* Top Blue Line */}
      <div className="absolute top-0 left-0 right-0" style={{ backgroundColor: '#47b2e4', height: '3px' }}></div>
      
      <div className="space-y-1">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start"
            onMouseEnter={() => {
              console.log('Hovering over:', detail.id);
              setHoveredIcon(detail.id);
            }}
            onMouseLeave={() => {
              console.log('Leaving:', detail.id);
              setHoveredIcon(null);
            }}
          >
            <div 
              className="flex-shrink-0 fixed-contact-icon"
              style={{
                backgroundImage: `url(${hoveredIcon === detail.id ? detail.hoverIcon : detail.normalIcon})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '44px',
                height: '44px',
                transition: 'background-image 0.3s ease',
                marginRight: '4px'
              }}
            >
            </div>
            <div>
              <p 
                className="mb-1"
                style={{
                  padding: '0 0 0 8px',
                  fontSize: '22px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#37517e'
                }}
              >
                {detail.label}
              </p>
              <p 
                style={{
                  padding: '0 0 10px 8px',
                  marginBottom: '20px',
                  fontSize: '14px',
                  color: '#6182ba'
                }}
              >
                {detail.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Blue Line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: '#47b2e4', height: '3px' }}></div>
    </motion.div>
  );
};

export default ContactInfo;
