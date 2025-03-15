import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById, saveBooking } from '../services/api';
import './BookingPage.css';


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
        const carDetails = await getCarById(carId);
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

    try {
      await saveBooking(bookingData);
      setMessage('✅ Booking successful!');
    } catch (error) {
      setMessage('❌ Failed to save booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Book Your Car</h2>
      <p className="text-gray-600 mb-6 text-center">Fill in your details to complete the booking process.</p>

      {message && <p className="mb-4 text-center text-lg font-medium text-blue-600">{message}</p>}

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full p-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" className="w-full p-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="w-full p-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full p-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Vehicle</label>
          <input type="text" value={vehicleName} disabled className="w-full p-2 border rounded-lg bg-gray-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400" disabled={loading}>
          {loading ? 'Submitting...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;