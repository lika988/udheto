import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Partners />
      <Footer />
    </>
  );
};

export default HomePage;