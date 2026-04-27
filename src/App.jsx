import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header Component */}
      <Navbar />
      
      {/* Body Section Component */}
      <main>
        <Hero />
        <CardSection />
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
