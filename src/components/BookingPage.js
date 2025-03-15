import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/api';
import axios from 'axios';
import './BookingPage.css';

const api = axios.create({
  baseURL: 'http://localhost:8089', // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const BookingPage = () => {
  const { carId } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [destination, setDestination] = useState('Pettah');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [carHirePrice, setCarHirePrice] = useState(100); // Default Car Hire price for Pettah
  const [driverCharge] = useState(500); // Fixed driver charge
  const [totalPrice, setTotalPrice] = useState(600); // Default total price (Car Hire + Driver Charge)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Success popup state

  const destinations = ['Pettah', 'Nugegoda', 'Kollupitiya', 'Bambalapitiya', 'Maradana'];

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const carDetails = await getCarById(carId);
        setVehicleName(`${carDetails.make} ${carDetails.model}`);
      } catch (error) {
        console.error('Failed to fetch car details:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  // Function to update the car hire price based on the destination
  const updatePrice = (destination) => {
    const priceMap = {
      Pettah: 100,
      Nugegoda: 200,
      Kollupitiya: 200,
      Bambalapitiya: 200,
      Maradana: 200,
    };
    setCarHirePrice(priceMap[destination] || 100); // Default to 100 if destination is not in the map
  };

  // Update the total price whenever the car hire price or destination changes
  useEffect(() => {
    setTotalPrice(carHirePrice + driverCharge); // Car Hire price + Driver Charge
  }, [carHirePrice, driverCharge]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const customerData = { name, address, phoneNumber, email, vehicleName, destination, time, date, carId, price: totalPrice };

    try {
      await api.post('/api/bookings/save', customerData);
      setShowSuccessPopup(true); // Show success popup

      // Clear form fields
      setName('');
      setAddress('');
      setPhone('');
      setEmail('');
      setTime('');
      setDate('');
      setDestination('Pettah');
      setCarHirePrice(100); // Reset Car Hire price
      setTotalPrice(600); // Reset total price
    } catch (error) {
      console.error('Error saving booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-container">
      <h2>Exciting Ride Awaits!</h2>
      <p>Fill in your details below to kickstart your adventure with us! 🚗💨</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicle-name">Vehicle Name:</label>
          <input
            type="text"
            id="vehicle-name"
            value={vehicleName}
            disabled
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              updatePrice(e.target.value); // Update car hire price when destination changes
            }}
            required
            className="form-control"
            disabled={isSubmitting}
          >
            {destinations.map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="carHirePrice">Car Hire Price (LKR):</label>
          <input
            type="text"
            id="carHirePrice"
            value={`LKR ${carHirePrice}`}
            disabled
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="driverCharge">Driver Charge (LKR):</label>
          <input
            type="text"
            id="driverCharge"
            value={`LKR ${driverCharge}`}
            disabled
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price (LKR):</label>
          <input
            type="text"
            id="totalPrice"
            value={`LKR ${totalPrice}`}
            disabled
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="form-control"
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Order is Successful!</h3>
            <p>Your booking has been successfully submitted.</p>
            <button onClick={() => setShowSuccessPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
