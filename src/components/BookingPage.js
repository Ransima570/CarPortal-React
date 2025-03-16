import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../services/api';
import axios from 'axios';
import { motion } from 'framer-motion'; // For animations
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'; // Icons for success popup and back button

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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.history.back()}
        className="flex items-center px-3 py-1.5 mb-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-sm"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </motion.button>

      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-8"
      >
        Book Your Ride
      </motion.h2>

      {/* Booking Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Vehicle Name */}
          <div className="form-group">
            <label htmlFor="vehicle-name" className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Name:
            </label>
            <input
              type="text"
              id="vehicle-name"
              value={vehicleName}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Destination */}
          <div className="form-group">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Destination:
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                updatePrice(e.target.value); // Update car hire price when destination changes
              }}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>

          {/* Car Hire Price */}
          <div className="form-group">
            <label htmlFor="carHirePrice" className="block text-sm font-medium text-gray-700 mb-1">
              Car Hire Price (LKR):
            </label>
            <input
              type="text"
              id="carHirePrice"
              value={`LKR ${carHirePrice}`}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Driver Charge */}
          <div className="form-group">
            <label htmlFor="driverCharge" className="block text-sm font-medium text-gray-700 mb-1">
              Driver Charge (LKR):
            </label>
            <input
              type="text"
              id="driverCharge"
              value={`LKR ${driverCharge}`}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Total Price */}
          <div className="form-group">
            <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Total Price (LKR):
            </label>
            <input
              type="text"
              id="totalPrice"
              value={`LKR ${totalPrice}`}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Time */}
          <div className="form-group">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Time:
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </motion.form>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Successful!</h3>
            <p className="text-gray-600 mb-4">Your booking has been successfully submitted.</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;