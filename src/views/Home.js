import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      <FeaturesTiles />
      <FeaturesSplit/>
    </>
  );
}

export default Home;