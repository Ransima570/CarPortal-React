import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarManagement.css'; // Import the CSS file

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: '', model: '', status: 'Available', quantity: 0, price: 0 });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8089/api/cars/available-cars');
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error.response ? error.response.data : error.message);
    }
  };

  const handleAddCar = async () => {
    try {
      const response = await axios.post('http://localhost:8089/api/cars/add-car', newCar, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Car added:", response.data);
      fetchCars();
      setNewCar({ make: '', model: '', status: 'Available', quantity: 0, price: 0 });
    } catch (error) {
      console.error("Error adding car:", error.response ? error.response.data : error.message);
    }
  };

  const handleUpdateCar = async (id, updatedCar) => {
    try {
      await axios.put(`http://localhost:8089/api/cars/update-car/${id}`, updatedCar, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchCars();
    } catch (error) {
      console.error("Error updating car:", error.response ? error.response.data : error.message);
    }
  };

  const handleDeleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/api/cars/delete-car/${id}`);
      fetchCars();
    } catch (error) {
      console.error("Error deleting car:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="car-management-container">
      <h2>Car Management</h2>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.status}</td>
              <td>{car.quantity}</td>
              <td>{car.price ? `$${car.price}` : "N/A"}</td>
              <td>
                <button onClick={() => handleUpdateCar(car.id, { ...car, status: 'Available' })}>
                  Make Available
                </button>
                <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Car</h3>
      <div className="car-form">
        <input type="text" placeholder="Make" value={newCar.make} onChange={(e) => setNewCar({ ...newCar, make: e.target.value })} />
        <input type="text" placeholder="Model" value={newCar.model} onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} />
        <input type="number" placeholder="Quantity" value={newCar.quantity} onChange={(e) => setNewCar({ ...newCar, quantity: Number(e.target.value) })} />
        <input type="number" placeholder="Price" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: Number(e.target.value) })} />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </div>
  );
};

export default CarManagement;
