import React from 'react';
import Hero from '../sections/Hero';
import LuxuryIntro from '../sections/LuxuryIntro';
import FeaturedWeddings from '../sections/FeaturedWeddings';
import CTA from '../sections/CTA';

const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      <LuxuryIntro />
      <FeaturedWeddings />
      <CTA />
    </div>
  );
};

export default Home;