import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

/**
 * Navbar Component
 * Displays the main navigation bar with logo and menu items
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <Link to="/">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
              <path d="M10 8L16 12L10 16V8Z" fill="white"/>
            </svg>
            <span className="logo-text">GeekFoods</span>
          </Link>
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
            <li><NavLink to="/quote" className={({ isActive }) => isActive ? 'active-link' : ''}>Quote</NavLink></li>
            <li><NavLink to="/restaurants" className={({ isActive }) => isActive ? 'active-link' : ''}>Resturants</NavLink></li>
            <li><NavLink to="/foods" className={({ isActive }) => isActive ? 'active-link' : ''}>Foods</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
          </ul>
        </div>
        
        <div className="navbar-buttons">
          <button className="btn-get-started">Get started</button>
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
