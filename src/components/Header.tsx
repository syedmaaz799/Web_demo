import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 0;
          setIsScrolled(scrolled);
          
          // Debug: Log current state
          console.log('Scroll Y:', window.scrollY, 'Is Scrolled:', scrolled);
          
          // Detect which section is currently in view
          const scrollPosition = window.scrollY;
          
          // If at the top of the page (home section)
          if (scrollPosition < 100) {
            setActiveSection('home');
          } else {
            // Check other sections
            const sections = ['services', 'about', 'contact'];
            
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = document.getElementById(sections[i]);
              if (section && section.offsetTop <= scrollPosition + 100) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Remove any existing listeners first
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to prevent re-registration

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'About', section: 'about' },
    { name: 'Contact Us', section: 'contact' },
    { name: 'Book Now', isButton: true },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Scroll to top of the page for Home
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


  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-transparent transition-colors duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{
          backgroundColor: isScrolled ? '#270949' : 'transparent'
        }}
      >
        {/* Single flex container with three direct children */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-4">
          {/* Left: Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center lg:translate-x-[-10px] bg-transparent border-none cursor-pointer"
          >
            <img src="/go_bikey_logo.jpeg" alt="Go Bikey" className="h-10 w-auto" />
          </button>

          {/* Right: Navigation and Book Now Button Grouped Together */}
          <div className="flex items-center gap-x-8">
            {/* Navigation - Hidden on mobile, visible on md+ */}
            <nav className="hidden md:flex items-center gap-1 lg:translate-x-4">
              {navItems
                .filter(i => !i.isButton)
                .map(item => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.section!)}
                    className={`text-[15px] font-medium py-2 px-4 bg-transparent border-none cursor-pointer transition-colors duration-300 ${
                      activeSection === item.section ? 'text-active-yellow' : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
            </nav>

            {/* Book Now Button - Hidden on mobile, visible on desktop */}
            <Link
              to="/book-now"
              className="hidden md:block text-[15px] font-medium py-2 px-4 text-white hover:text-yellow-400 cursor-pointer no-underline transition-colors duration-300"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button - Visible on mobile, hidden on md+ */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
            style={{
              position: 'fixed',
              top: '55px',
              right: '15px',
              bottom: '15px',
              left: '15px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              zIndex: 1000
            }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.filter(item => !item.isButton).map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.section!);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 px-0 bg-transparent border-none cursor-pointer"
                  style={{ 
                    color: '#270949',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: '"Open Sans", sans-serif'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/book-now"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 inline-block text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#270949',
                  padding: '12px 0 12px 20px',
                  borderRadius: '25px',
                  border: '2px solid #270949',
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  fontFamily: 'Arial, sans-serif',
                  display: 'block',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;