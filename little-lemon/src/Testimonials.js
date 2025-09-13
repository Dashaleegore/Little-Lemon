import React from 'react';
import './Testimonials.css';
import Amy from './assets/images/Amy.jpg';
import George from './assets/images/George.jpg';
import Hannah from './assets/images/Hannah.png';
import Mike from './assets/images/Mike.png';

const testimonialPhotos = [Amy, George, Hannah, Mike];
const testimonialNames = ["Amy", "George", "Hannah", "Mike"];
const testimonialReviews = [
  "Amazing food and friendly staff!",
  "Best restaurant in town!",
  "Loved the atmosphere and the desserts.",
  "Quick delivery and delicious meals!"
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-list">
        {testimonialPhotos.map((photo, idx) => (
          <div className="testimonial-item" key={idx}>
            <div className="testimonial-stars">{'★★★★★'}</div>
            <img src={photo} alt={`Customer ${idx + 1}`} className="testimonial-photo" />
            <span className="testimonial-name">{testimonialNames[idx]}</span>
            <p className="testimonial-review">{testimonialReviews[idx]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
