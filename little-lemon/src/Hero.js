import React from 'react';
import './Hero.css';
import restauranfood from './assets/images/restauranfood.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-caption">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-description">
          Little Lemon is a celebrated Chicago restaurant, awarded for its vibrant flavors and welcoming atmosphere.
        </p>
        <button className="hero-reserve-btn">Reservations</button>
      </div>
      <img 
        src={restauranfood} 
        alt="Restaurant food" 
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
