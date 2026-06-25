import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Investments from '../components/Investments';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Investments />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
