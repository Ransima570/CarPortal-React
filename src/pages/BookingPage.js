import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById, saveBooking } from '../services/api';

const BookingPage = () => {
  const { carId } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        console.log("Fetching car details for ID:", carId);
        const carDetails = await getCarById(carId);
        console.log("Car details received:", carDetails);
        
        if (carDetails && carDetails.make && carDetails.model) {
          setVehicleName(`${carDetails.make} ${carDetails.model}`);
        } else {
          setVehicleName('Unknown Vehicle');
        }
      } catch (error) {
        console.error('Failed to fetch car details:', error);
        setVehicleName('Unknown Vehicle');
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    
    const bookingData = { name, address, phone, email, vehicleName, time, date, carId };

    console.log("Submitting booking:", bookingData);

    try {
      const response = await saveBooking(bookingData);
      console.log("Booking response:", response);
      setMessage('Booking successful!');
    } catch (error) {
      console.error("Booking error:", error.response?.data || error.message);
      setMessage('Failed to save booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <h2>Customer Details</h2>
      <p>Please fill in your details to complete the rental process.</p>
      
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="vehicle-name">Vehicle Name:</label>
          <input type="text" id="vehicle-name" value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
