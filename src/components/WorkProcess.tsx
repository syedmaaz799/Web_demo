import React from 'react';
import { motion } from 'framer-motion';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Choose Services',
      description: 'Expert diagnostics and repairs for motorbikes, ensuring top performance and reliability.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      title: 'Make Appointment',
      description: 'Book an appointment for expert diagnostics and repairs to keep your motorbike running smoothly.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ),
      title: 'Confirm Request',
      description: 'Confirm your request for expert diagnostics and repairs to maintain your motorbike\'s peak performance.'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
          <path d="M5 6h5V4H5v2z"/>
          <path d="M19 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      ),
      title: 'Pick Your Bike',
      description: 'We\'ll come to your location to pick up your bike and bring it back after service completion.'
    }
  ];

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 bg-white" 
      aria-label="Work Process Section"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold uppercase mb-4"
            style={{ color: '#37517E', fontFamily: 'Jost, sans-serif' }}
          >
            WORK PROCESS
          </h2>
          <p 
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{ color: '#666666', fontFamily: 'Open Sans, sans-serif' }}
          >
            Our streamlined process ensures your bike gets the best care with minimal hassle. 
            From booking to delivery, we make bike servicing simple and convenient.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[270px] mx-auto"
              style={{ height: 'auto', minHeight: '450px' }}
            >
              {/* Blue Cut and Bent Square Box */}
              <div 
                data-blue-box
                style={{
                  WebkitTransition: 'all ease 0.4s',
                  transition: 'all ease 0.4s',
                  display: 'inline-block',
                  position: 'absolute',
                  left: '50%',
                  top: '63px',
                  width: '270px',
                  height: '270px',
                  WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 29% 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 29% 100%)',
                  borderRadius: '10px',
                  zIndex: '5',
                  transform: 'translateX(-50%) rotate(-8deg)',
                  backgroundColor: '#3c5fb0'
                }}
                onMouseEnter={(e) => {
                  // Blue box transformations
                  e.currentTarget.style.transform = 'translateX(-50%) rotate(0deg)';
                  e.currentTarget.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
                  
                  // Number circle transformations
                  const numberCircle = e.currentTarget.parentElement?.querySelector('[data-number-circle]') as HTMLElement;
                  if (numberCircle) {
                    numberCircle.style.marginBottom = '0px';
                    numberCircle.style.marginLeft = '0%';
                  }
                  
                  // White card transformations
                  const whiteCard = e.currentTarget.parentElement?.querySelector('[data-white-card]') as HTMLElement;
                  if (whiteCard) {
                    whiteCard.style.boxShadow = '-6px 3px 0px 0px rgba(17, 180, 245, 0.004), 0px 3px 50px 0px rgba(17, 180, 245, 0.1)';
                    whiteCard.style.transform = 'translateY(-20px)';
                    whiteCard.style.cursor = 'pointer';
                  }
                }}
                onMouseLeave={(e) => {
                  // Blue box transformations
                  e.currentTarget.style.transform = 'translateX(-50%) rotate(-8deg)';
                  e.currentTarget.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 29% 100%)';
                  
                  // Number circle transformations
                  const numberCircle = e.currentTarget.parentElement?.querySelector('[data-number-circle]') as HTMLElement;
                  if (numberCircle) {
                    numberCircle.style.marginBottom = '10px';
                    numberCircle.style.marginLeft = '5%';
                  }
                  
                  // White card transformations
                  const whiteCard = e.currentTarget.parentElement?.querySelector('[data-white-card]') as HTMLElement;
                  if (whiteCard) {
                    whiteCard.style.boxShadow = '0px 3px 0px 0px rgba(17, 180, 245, 0.004), 0px 3px 50px 0px rgba(17, 180, 245, 0.1)';
                    whiteCard.style.transform = 'translateY(0px)';
                    whiteCard.style.cursor = 'default';
                  }
                }}
              />

              {/* Number Circle */}
              <div 
                className="flex items-center justify-center text-white font-bold absolute z-10"
                data-number-circle
                style={{
                  display: 'inline-block',
                  width: '80px',
                  height: '80px',
                  textAlign: 'center',
                  border: '5px solid',
                  fontSize: '26px',
                  fontWeight: '700',
                  lineHeight: '73px',
                  left: '50%',
                  top: '0px',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#3c5fb0',
                  borderRadius: '50%',
                  position: 'absolute',
                  transition: 'all ease 0.4s',
                  marginBottom: '10px',
                  marginLeft: '5%'
                }}
              >
                {step.id.toString().padStart(2, '0')}
              </div>

              {/* White Card */}
              <div 
                className={`absolute z-30 cursor-pointer ${step.id === 1 || step.id === 2 || step.id === 3 || step.id === 4 ? 'white-card-responsive' : ''}`}
                data-white-card
                style={{
                  WebkitTransition: 'all ease 0.4s',
                  transition: 'all ease 0.4s',
                  borderRadius: '10px',
                  boxShadow: '0px 3px 0px 0px rgba(17, 180, 245, 0.004), 0px 3px 50px 0px rgba(17, 180, 245, 0.1)',
                  backgroundColor: step.id === 1 ? '#FFFFFFF7' : step.id === 2 ? '#FFFFFFF7' : step.id === 3 ? '#FFFFFFF7' : step.id === 4 ? '#FFFFFFF7' : 'rgba(255, 255, 255, 0.969)',
                  padding: step.id === 1 ? '35px 20px 30px' : step.id === 2 ? '35px 20px 30px' : step.id === 3 ? '35px 20px 30px' : step.id === 4 ? '35px 20px 30px' : '35px 20px',
                  paddingBottom: step.id === 1 ? '30px' : step.id === 2 ? '30px' : step.id === 3 ? '30px' : step.id === 4 ? '30px' : '30px',
                  maxWidth: '270px',
                  borderBottom: '3px solid #3c5fb0',
                  position: 'absolute',
                  left: '-20px',
                  top: '100px',
                  width: step.id === 1 ? '261px' : step.id === 2 ? '261px' : step.id === 3 ? '261px' : step.id === 4 ? '261px' : '220px',
                  height: 'auto',
                  minHeight: step.id === 1 ? '181.67px' : step.id === 2 ? '205.67px' : step.id === 3 ? '205.67px' : step.id === 4 ? '157.67px' : 'auto'
                }}
                onMouseEnter={(e) => {
                  // White card transformations
                  e.currentTarget.style.boxShadow = '-6px 3px 0px 0px rgba(17, 180, 245, 0.004), 0px 3px 50px 0px rgba(17, 180, 245, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-20px)';
                  
                  // Blue box transformations
                  const blueBox = e.currentTarget.parentElement?.querySelector('[data-blue-box]') as HTMLElement;
                  if (blueBox) {
                    blueBox.style.transform = 'translateX(-50%) rotate(0deg)';
                    blueBox.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
                  }
                  
                  // Number circle transformations
                  const numberCircle = e.currentTarget.parentElement?.querySelector('[data-number-circle]') as HTMLElement;
                  if (numberCircle) {
                    numberCircle.style.marginBottom = '0px';
                    numberCircle.style.marginLeft = '0%';
                  }
                }}
                onMouseLeave={(e) => {
                  // White card transformations
                  e.currentTarget.style.boxShadow = '0px 3px 0px 0px rgba(17, 180, 245, 0.004), 0px 3px 50px 0px rgba(17, 180, 245, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                  
                  // Blue box transformations
                  const blueBox = e.currentTarget.parentElement?.querySelector('[data-blue-box]') as HTMLElement;
                  if (blueBox) {
                    blueBox.style.transform = 'translateX(-50%) rotate(-8deg)';
                    blueBox.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 29% 100%)';
                  }
                  
                  // Number circle transformations
                  const numberCircle = e.currentTarget.parentElement?.querySelector('[data-number-circle]') as HTMLElement;
                  if (numberCircle) {
                    numberCircle.style.marginBottom = '10px';
                    numberCircle.style.marginLeft = '5%';
                  }
                }}
              >
                {/* Title */}
                <h3 
                  className="text-lg font-bold mb-3 text-center"
                  style={{ 
                    color: '#1d165c',
                    fontSize: '20px',
                    lineHeight: '30px',
                    transition: 'all 500ms ease',
                    fontWeight: '600',
                    marginBottom: '12px',
                    fontFamily: 'Jost, sans-serif',
                    textAlign: 'center'
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed text-center"
                  style={{ 
                    color: '#666666', 
                    fontFamily: 'Open Sans, sans-serif',
                    textAlign: 'center'
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
