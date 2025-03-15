import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../services/api';
import { motion } from 'framer-motion'; // For animations
import { FaDownload, FaSync, FaArrowLeft } from 'react-icons/fa'; // Icons for buttons

const Orders = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const data = await getOrders();
      setCars(data);
    } catch (error) {
      setError('Failed to fetch orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchCars();
  };

  const handleDownloadBill = (car) => {
    const billContent = `
      Order Details:
      --------------------
      Car: ${car.name}
      Address: ${car.address}
      Phone Number: ${car.phoneNumber}
      Email: ${car.email}
      Vehicle Name: ${car.vehicleName}
      Time: ${car.time}
      Date: ${car.date}
      Status: ${car.status}
      Destination: ${car.destination}
      Price: $${car.price}
    `;

    const blob = new Blob([billContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Bill_${car.id}.txt`;
    link.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-gray-700"
        >
          Loading orders...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-red-600 mb-4"
        >
          {error}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRetry}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaSync className="mr-2" />
          Retry
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-6"
      >
        Your Orders
      </motion.h2>

      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="flex items-center px-3 py-1.5 mb-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-sm mx-auto"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </motion.button>

      {/* Orders List */}
      {cars && cars.length > 0 ? (
        <div className="max-w-2xl mx-auto">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-300 border border-white/20"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{car.name}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Vehicle:</strong> {car.vehicleName}</p>
                <p><strong>Date:</strong> {car.date}</p>
                <p><strong>Time:</strong> {car.time}</p>
                <p><strong>Status:</strong> {car.status}</p>
                <p><strong>Price:</strong> ${car.price}</p>
              </div>
              <button
                onClick={() => handleDownloadBill(car)}
                className="flex items-center justify-center w-full mt-3 px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
              >
                <FaDownload className="mr-2" />
                Download Bill
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600"
        >
          No orders available at the moment.
        </motion.p>
      )}
    </div>
  );
};

export default Orders;