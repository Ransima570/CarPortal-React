import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the carId from the URL
import { getCarById } from '../services/api'; // Assuming you have an API function to get the car details
import './BookingPage.css'; // Import CSS for styling

const BookingPage = () => {
  const { carId } = useParams(); // Get the carId from the route parameter
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch the vehicle details based on the carId
    const fetchCarDetails = async () => {
      try {
        const carDetails = await getCarById(carId); // Assuming this function returns car details by carId
        setVehicleName(carDetails.make + " " + carDetails.model); // Example: 'Toyota Corolla'
      } catch (error) {
        console.error('Failed to fetch car details:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the customer data
    const customerData = { name, address, phone, email, vehicleName, time, date, carId };
    
    // Example: Perform API call to save customer data (e.g., save to DB)
    console.log(customerData);

    // Save the customer data via API (implement the saveCustomerData function)
    // saveCustomerData(customerData);
  };

  return (
    <div className="booking-container">
      <h2>Customer Details</h2>
      <p>Please fill in your details to complete the rental process.</p>
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            className="form-control"
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
          <label htmlFor="date">Date:</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            className="form-control"
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
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
