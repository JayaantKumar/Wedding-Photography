import React from 'react';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';

const ServicesPage = () => {
  return (
    <div className="pt-24">
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default ServicesPage;