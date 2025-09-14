import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
// ...existing code...

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero" aria-label="Restaurant Introduction">
      <div className="hero-content">
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button
          className="reserve-btn"
          onClick={() => navigate('/reservations')}
          aria-label="On Click"
        >
          Reserve a Table
        </button>
      </div>
      {/* Removed greek-salad image from hero section */}
    </section>
  );
}

export default Hero;
