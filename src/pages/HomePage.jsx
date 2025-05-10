import React from 'react';
import Header from '../components/Header';
import './HomePage.css'; // Import your CSS file for styling

const heroImage = require('../assets/img1.jpg'); // Replace with actual image path

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="hero-section text-center py-8">
        <div className="hero-content mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className='highlight'>Beautify</span> and <span className='highlight'>Enhance</span> Your Space With Our Expertise
          </h1>
          <p className="text-lg text-gray-600">
            We will help you to unlock the beauty and comfort of your space
            that inspires and enriches your life
          </p>
        </div>
        <div className="hero-image mb-4">
          <img
            src={heroImage}
            alt="Interior Design"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="scroll-indicator text-gray-700 text-lg animate-bounce">
          ⬇ Scroll Down
        </div>
      </section>
    </div>
  );
};

export default HomePage;
