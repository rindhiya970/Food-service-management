import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Restaurants from './pages/Restaurants';
import Foods from './pages/Foods';
import Contact from './pages/Contact';
import './App.css';

/**
 * Main App Component
 * Sets up routing and layout structure
 */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Header Component */}
        <Navbar />
        
        {/* Body Section Component */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
