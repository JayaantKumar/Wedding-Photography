import React from 'react';
import StoryTimeline from '../sections/StoryTimeline';
import WhyChooseUs from '../sections/WhyChooseUs';
import CTA from '../sections/CTA';

const About = () => {
  return (
    <div className="pt-24">
      <WhyChooseUs />
      <StoryTimeline />
      <CTA />
    </div>
  );
};

export default About;