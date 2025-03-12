import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation
import { getAvailableCars } from '../services/api';  // Import API function
import './AvailableCars.css'; // Import CSS file for styling

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to another page

  const fetchCars = async () => {
    try {
      const data = await getAvailableCars();
      setCars(data);
    } catch (error) {
      setError('Failed to fetch cars. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars(); // Initial fetch call on component mount
  }, []);

  const handleRentClick = (carId) => {
    // Redirect to the booking page with the selected car's ID
    navigate(`/booking/${carId}`);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);  // Reset error state before retrying
    fetchCars();  // Call the fetchCars function again
  };

  if (loading) return <p className="loading-message">Loading available cars...</p>;

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="btn-retry" onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  return (
    <div className="cars-container">
      <h2 className="page-title">Available Cars</h2>
      <p className="intro-text">Choose your preferred car for an exciting ride:</p>

      {cars && cars.length > 0 ? (
        <div className="cars-list">
          {cars.map((car) => (
            <div className="car-item" key={car.id}>
              <div className="car-image">
                <img 
                  src={car.image || '/default-car-image.jpg'} // Use a fallback image if car image is unavailable
                  alt={`${car.make} ${car.model}`} 
                  className="car-img" 
                />
              </div>
              <div className="car-details">
                <h3 className="car-name">{car.make} {car.model}</h3>
                <p><strong>Price:</strong> ${car.price ? car.price.toFixed(2) : 'N/A'}</p>
                <p><strong>Quantity Available:</strong> {car.quantity}</p>
                <p><strong>Status:</strong> {car.status}</p>
              </div>
              <button 
                className={`btn-rent ${car.quantity === 0 ? 'disabled' : ''}`}
                onClick={() => handleRentClick(car.id)}
                disabled={car.quantity === 0}
              >
                {car.quantity === 0 ? 'Out of Stock' : 'Rent Now'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-cars-message">No cars available at the moment. Please check back later.</p>
      )}
    </div>
  );
};

export default AvailableCars;
