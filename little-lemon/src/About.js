import React from 'react';
import './About.css';
import MarioAdrian from './assets/images/Mario-and-Adrian-A.jpg';

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-caption">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">
            Little Lemon is a family owned restaurant of Mediterranean cuisine run by two brothers, Adrian and Mario. It is an award-winning restaurant offering meals, delivery services, and table reservation.
          </p>
        </div>
        <div className="about-right">
          <img src={MarioAdrian} alt="Mario and Adrian" className="about-photo" />
        </div>
      </div>
      <div className="about-space-dark"></div>
    </section>
  );
}

export default About;
