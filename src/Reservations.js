import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import BookingTable from './BookingTable';

function Reservations({ availableTimes, dispatchTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [bookingData, setBookingData] = useState(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('bookingData');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever bookingData changes
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [bookingData]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      name: '', // Add name field if needed
      date,
      time,
      guests,
      occasion
    };
    setBookingData([...bookingData, newBooking]);
  };

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Reservations</h1>
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
        submitForm={submitForm}
      />
      <BookingTable bookingData={bookingData} />
    </section>
  );
}

export default Reservations;
