import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Where Shadows Come to Life</h2>
          <p>Explore the interplay of light and darkness through contemporary art.</p>
          <button className="btn">Explore Gallery</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
