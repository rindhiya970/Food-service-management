import React from 'react';
import '../styles/Hero.css';

/**
 * Hero Component
 * Displays the main hero section with background image and CTA buttons
 */
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <h1>
            Let us find <br />
            <strong>Forever Food.</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="hero-buttons">
            <button className="btn-search">Search Now</button>
            <button className="btn-know-more">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
