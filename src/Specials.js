import React from 'react';
import { Link } from 'react-router-dom';
import './Specials.css';
import greekSalad from './assets/images/greek-salad.jpg';
import bruchetta from './assets/images/bruchetta.svg';
import lemonDessert from './assets/images/lemon-dessert.jpg';

const specialsData = [
  {
    name: 'Greek Salad',
    image: greekSalad,
    alt: 'Greek Salad',
    price: '$12.99',
    description: 'Fresh Greek salad with organic tomatoes and cucumbers, and crisp salad. With cheese or tofu.',
  },
  {
    name: 'Bruschetta',
    image: bruchetta,
    alt: 'Bruschetta',
    price: '$5.99',
    description: 'Fresh tomatoes on a warm piece of freshly baked bread. Gluten free bread is offered as a choice.',
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessert,
    alt: 'Lemon Dessert',
    price: '$5.00',
    description: 'Tender dessert with fresh lemon flavor and zesty notes. Choose dairy cream or plant-based cream.',
  },
];

function Specials() {
  return (
    <section className="specials-section">
      <Link to="/menu" className="specials-title-link">
        <h2 className="specials-title">Specials</h2>
      </Link>
      <div className="specials-list">
        {specialsData.map((item) => (
          <div className="specials-item" key={item.name}>
            <img src={item.image} alt={item.alt} className="specials-image" />
            <div className="specials-info">
              <div className="specials-header">
                <h3 className="specials-name">{item.name}</h3>
                <span className="specials-price">{item.price}</span>
              </div>
              <p className="specials-description">
                {item.description}
              </p>
              <button className="order-now-btn">Order delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
