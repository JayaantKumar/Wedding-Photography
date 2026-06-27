import React from 'react';
import FeaturedWeddings from '../sections/FeaturedWeddings';
import ParallaxGallery from '../sections/ParallaxGallery'; // Injecting the new component
import Instagram from '../sections/Instagram';
import CTA from '../sections/CTA';

const PortfolioPage = () => {
  return (
    <div className="pt-24">
      <FeaturedWeddings />
      <ParallaxGallery /> 
      <Instagram />
      <CTA />
    </div>
  );
};

export default PortfolioPage;