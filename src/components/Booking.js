// src/components/Booking.js
import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [bookingId, setBookingId] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8088/api/booking', {
        pickupLocation,
        dropLocation,
        pickupTime,
      })
      .then((response) => {
        setBookingId(response.data.bookingId);
        alert('Booking confirmed! Your booking ID is: ' + response.data.bookingId);
      })
      .catch((error) => {
        alert('Booking failed, please try again.');
      });
  };

  return (
    <div>
      <h2>Book a Cab</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label>Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Drop Location</label>
          <input
            type="text"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pickup Time</label>
          <input
            type="datetime-local"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>

      {bookingId && <p>Your Booking ID is: {bookingId}</p>}
    </div>
  );
};

export default Booking;
