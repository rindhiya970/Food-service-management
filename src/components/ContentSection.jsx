import React from 'react';
import '../styles/ContentSection.css';

/**
 * ContentSection Component
 * Displays content with image and text in a two-column layout
 */
const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="container content-container">
        <div className="content-image">
          <img 
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Beautiful house" 
          />
        </div>
        <div className="content-text">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, 
            beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
          </p>
          <button className="btn-get-in-touch">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
