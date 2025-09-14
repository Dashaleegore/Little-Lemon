import React from 'react';

function BookingTable({ bookingData }) {
  if (!bookingData || bookingData.length === 0) {
    return <p>No bookings available.</p>;
  }
  return (
    <table style={{ margin: '2rem auto', borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Time</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Guests</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.map((booking, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{booking.name || '-'}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{booking.date}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{booking.time}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{booking.guests}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{booking.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;
