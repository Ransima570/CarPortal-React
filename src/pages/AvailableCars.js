import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAvailableCars } from '../services/api';
import './AvailableCars.css';

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAvailableCars();
        setCars(data);
      } catch (error) {
        setError('Failed to fetch cars.');
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const handleRentClick = (carId) => {
    navigate(`/booking/${carId}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-message">Fetching available cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="btn-retry" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="cars-container">
      <h2 className="page-title">Available Cars</h2>
      <p className="intro-text">Choose from a wide range of cars for your trip:</p>

      {cars.length > 0 ? (
        <div className="cars-list">
          {cars.map((car) => (
            <div className="car-item" key={car.id}>
              <div className="car-image">
                <img src={car.image || '/placeholder-car.jpg'} alt={`${car.make} ${car.model}`} />
              </div>
              <div className="car-details">
                <h3 className="car-name">{car.make} {car.model}</h3>
                <p><strong>Price:</strong> ${car.price?.toFixed(2) || 'N/A'}</p>
                <p><strong>Quantity Available:</strong> {car.quantity}</p>
                <p><strong>Status:</strong> {car.quantity > 0 ? 'Available' : 'Out of Stock'}</p>
              </div>
              <button 
                className="btn-rent"
                onClick={() => handleRentClick(car.id)}
                disabled={car.quantity === 0}
              >
                {car.quantity === 0 ? 'Out of Stock' : 'Rent Now'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-cars-message">No cars available at the moment.</p>
      )}
    </div>
  );
};

export default AvailableCars;
