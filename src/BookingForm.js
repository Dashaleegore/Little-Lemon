import React from 'react';

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatchTimes, onSubmit, submitForm }) {
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchTimes({ type: 'update', date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: '', // Add name field if needed
      date,
      time,
      guests,
      occasion
    };
    if (submitForm) {
      submitForm(formData);
    }
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
