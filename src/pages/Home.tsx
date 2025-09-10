import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkProcess from '../components/WorkProcess';
import WhatsIncluded from '../components/WhatsIncluded';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <section id="about">
        <WorkProcess />
        <WhatsIncluded />
      </section>
      <CallToAction />
      <FAQ />
      <section id="contact" className="bg-white" style={{ padding: '60px 0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[1400px] mx-auto pb-[30px]">
            <h2 className="contact-title services-title text-[32px] font-jost font-bold uppercase text-service-blue pb-5 mb-5">
              CONTACT US
            </h2>
          </div>
          
          <div className="grid md:grid-cols-7 gap-6 items-stretch">
            <div className="md:col-span-3 flex">
              <ContactInfo />
            </div>
            <div className="md:col-span-4 flex">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
