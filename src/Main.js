import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Reservations from './Reservations';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

// Use the API functions loaded in index.html
function initializeTimes() {
  // Fallback: generate time slots from 10:00 to 20:00 (8pm)
  const times = [];
  for (let hour = 10; hour <= 20; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return times;
}

function updateTimes(state, action) {
  // Fallback: always return the same time slots
  const times = [];
  for (let hour = 10; hour <= 20; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return times;
}

function Main() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  // Function to submit booking form data
  function submitForm(formData) {
    if (window.submitAPI && window.submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <main role="main">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatchTimes={dispatchTimes} submitForm={submitForm} />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchTimes={dispatchTimes} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<p>Order Online page coming soon.</p>} />
        <Route path="/login" element={<p>Login page coming soon.</p>} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default Main;
