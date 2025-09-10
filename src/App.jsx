import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DealsSection from './components/DealsSection';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <HeroSection />
      <DealsSection />
    </div>
  );
}

export default App
