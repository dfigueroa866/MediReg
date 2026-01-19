
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
