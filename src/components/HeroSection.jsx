import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-2xl font-medium text-gray-500 mb-6">Welcome!</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Manage your <span className="text-blue-600">Deals</span>
            </h1>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Get Started
            </button>
          </div>

          <img src="src\assets\1000056077.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
