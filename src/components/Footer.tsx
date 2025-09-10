import React from 'react';

const Footer: React.FC = () => {
  const usefulLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About us', section: 'about' },
    { name: 'Services', section: 'services' },
    { name: 'Terms of service', section: 'terms' },
    { name: 'Privacy policy', section: 'privacy' }
  ];

  const services = [
    { name: 'General Service', section: 'services' },
    { name: 'Repair Service', section: 'services' },
    { name: 'Engine Repair', section: 'services' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 20; // Reduced header height for better positioning
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const socialNetworks = [
    { 
      name: 'Twitter', 
      normalIcon: '/twitter-normal.png', 
      hoverIcon: '/twitter-hover.png', 
      url: '#' 
    },
    { 
      name: 'Facebook', 
      normalIcon: '/facebook-normal.png', 
      hoverIcon: '/facebook-hover.png', 
      url: '#' 
    },
    { 
      name: 'Instagram', 
      normalIcon: '/insta-normal.png', 
      hoverIcon: '/insta-hover.png', 
      url: '#' 
    }
  ];

  return (
    <footer className="bg-white">
      {/* White Section */}
      <div className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Useful Links */}
            <div>
              <h3 className="text-base font-bold text-[#37517E] mb-2 relative pb-3" style={{ fontSize: '16px', fontWeight: 'bold', color: '#37517e', position: 'relative', paddingBottom: '12px', fontFamily: 'Jost, sans-serif' }}>Useful Links</h3>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-gray-600 hover:text-[#47b2e4] transition-colors duration-200 flex items-center bg-transparent border-none cursor-pointer"
                      style={{ color: '#777777', fontSize: '14px', fontFamily: 'Open Sans, sans-serif' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#47b2e4'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#777777'}
                    >
                      <img 
                        src="/checkmark.png" 
                        alt="checkmark" 
                        className="w-[14px] h-[14px] object-contain mr-2 flex-shrink-0"
                      />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-base font-bold text-[#37517E] mb-2 relative pb-3" style={{ fontSize: '16px', fontWeight: 'bold', color: '#37517e', position: 'relative', paddingBottom: '12px', fontFamily: 'Jost, sans-serif' }}>Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.section)}
                      className="text-gray-600 hover:text-[#47b2e4] transition-colors duration-200 flex items-center bg-transparent border-none cursor-pointer"
                      style={{ color: '#777777', fontSize: '14px', fontFamily: 'Open Sans, sans-serif' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#47b2e4'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#777777'}
                    >
                      <img 
                        src="/checkmark.png" 
                        alt="checkmark" 
                        className="w-[14px] h-[14px] object-contain mr-2 flex-shrink-0"
                      />
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Networks */}
            <div>
                <h3 className="text-base font-bold text-[#37517E] mb-2 relative pb-3" style={{ fontSize: '16px', fontWeight: 'bold', color: '#37517e', position: 'relative', paddingBottom: '12px', fontFamily: 'Jost, sans-serif' }}>Our Social Networks</h3>
              <div className="flex space-x-1  ">
                {socialNetworks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-[34px] h-[34px] flex items-center justify-center transition-all duration-200 hover:scale-110 group relative"
                    aria-label={social.name}
                  >
                    <img 
                      src={social.normalIcon} 
                      alt={social.name}
                      className="w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                    />
                    <img 
                      src={social.hoverIcon} 
                      alt={`${social.name} hover`}
                      className="w-full h-full object-contain absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Blue Section */}
      <div className="py-6" style={{ backgroundColor: '#3B517E' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 ml-10">
              <span className="text-white text-sm">
                © Copyright <span className="font-bold">Go Bikey</span>. All Rights Reserved.
              </span>
            </div>
            <div className="text-white text-sm">
              Designed by <span style={{ color: '#ffe4c4' }}>maazsyed917@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
