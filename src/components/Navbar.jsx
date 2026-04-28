import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="/">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
              <path d="M10 8L16 12L10 16V8Z" fill="white"/>
            </svg>
            <span className="logo-text">GeekFoods</span>
          </a>
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#" className="active-link">Home</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="navbar-buttons">
          <button className="btn-get-started">Get  started</button>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
