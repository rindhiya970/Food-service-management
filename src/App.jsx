import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
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
        <ContentSection />
        <CardSection />
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
