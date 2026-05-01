import React from 'react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import CardSection from '../components/CardSection';

/**
 * Home Page Component
 * Main landing page with hero, content section, and testimonials
 */
const Home = () => {
  return (
    <>
      <Hero />
      <ContentSection />
      <CardSection />
    </>
  );
};

export default Home;
