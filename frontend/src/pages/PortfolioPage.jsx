import React from 'react';
import FeaturedWeddings from '../sections/FeaturedWeddings';
import Instagram from '../sections/Instagram';
import CTA from '../sections/CTA';

const PortfolioPage = () => {
  return (
    <div className="pt-24">
      <FeaturedWeddings />
      <Instagram />
      <CTA />
    </div>
  );
};

export default PortfolioPage;