import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatchTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Booking Page</h1>
      {!submitted ? (
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          availableTimes={availableTimes}
          dispatchTimes={dispatchTimes}
          onSubmit={handleBookingSubmit}
        />
      ) : (
        <div>
          <h2>Thank you for your reservation!</h2>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Guests: {guests}</p>
          <p>Occasion: {occasion}</p>
        </div>
      )}
    </section>
  );
}

export default BookingPage;
