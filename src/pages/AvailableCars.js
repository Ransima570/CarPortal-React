import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAvailableCars } from '../services/api';
import { motion } from 'framer-motion'; // For animations
import { FaCar, FaArrowLeft } from 'react-icons/fa'; // Icons for buttons

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const data = await getAvailableCars();
      setCars(data);
    } catch (error) {
      setError('Failed to fetch cars. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleRentClick = (carId) => {
    navigate(`/booking/${carId}`);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchCars();
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
          Loading cars...
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
          Retry
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
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
        Available Cars
      </motion.h2>

      {/* Cars List */}
      {cars && cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-white/20"
            >
              <div className="flex flex-col items-center text-center">
                <FaCar className="text-5xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {car.make} {car.model}
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Price:</strong> ${car.price ? car.price.toFixed(2) : 'N/A'}</p>
                  <p><strong>Quantity:</strong> {car.quantity}</p>
                  <p><strong>Status:</strong> {car.status}</p>
                </div>
                <button
                  onClick={() => handleRentClick(car.id)}
                  disabled={car.quantity === 0}
                  className={`w-full mt-4 px-4 py-2 rounded-lg text-white transition duration-300 ${
                    car.quantity === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {car.quantity === 0 ? 'Out of Stock' : 'Rent Now'}
                </button>
              </div>
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
          No cars available at the moment.
        </motion.p>
      )}
    </div>
  );
};

export default AvailableCars;