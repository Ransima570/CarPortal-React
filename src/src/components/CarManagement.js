import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarManagement.css'; // Import the CSS file

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: '', model: '', status: 'Available', quantity: 0, price: 0 });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to store modal message
  const [editCar, setEditCar] = useState({ id: null, quantity: 0, price: 0 }); // State to manage car being edited

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
      setModalMessage('Car added successfully!'); // Set success message
      setShowModal(true); // Show modal
    } catch (error) {
      console.error("Error adding car:", error.response ? error.response.data : error.message);
      setModalMessage('Failed to add car. Please try again.'); // Set error message
      setShowModal(true); // Show modal
    }
  };

  const handleUpdateCar = async (id, updatedCar) => {
    try {
      await axios.put(`http://localhost:8089/api/cars/update-car/${id}`, updatedCar, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchCars();
      setModalMessage('Car updated successfully!'); // Set success message
      setShowModal(true); // Show modal
    } catch (error) {
      console.error("Error updating car:", error.response ? error.response.data : error.message);
      setModalMessage('Failed to update car. Please try again.'); // Set error message
      setShowModal(true); // Show modal
    }
  };

  const handleDeleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/api/cars/delete-car/${id}`);
      fetchCars();
      setModalMessage('Car deleted successfully!'); // Set success message
      setShowModal(true); // Show modal
    } catch (error) {
      console.error("Error deleting car:", error.response ? error.response.data : error.message);
      setModalMessage('Failed to delete car. Please try again.'); // Set error message
      setShowModal(true); // Show modal
    }
  };

  // Handle update of quantity and price
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEdit = async () => {
    if (editCar.id !== null) {
      const updatedCar = { quantity: editCar.quantity, price: editCar.price };
      await handleUpdateCar(editCar.id, updatedCar);
      setEditCar({ id: null, quantity: 0, price: 0 });
    }
  };

  return (
    <div className="car-management-container">
      <h2 className="page-title">Car Management</h2>

      {/* Car Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Brand</th>
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
                  {/* Button to Edit Quantity & Price */}
                  <button className="btn-update" onClick={() => setEditCar({ id: car.id, quantity: car.quantity, price: car.price })}>
                    Edit Quantity & Price
                  </button>
                  <button className="btn-delete" onClick={() => handleDeleteCar(car.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Quantity & Price Form */}
      {editCar.id && (
        <div className="edit-car-form">
          <h3>Edit Car Details</h3>
          <div className="form-group">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={editCar.quantity}
              onChange={handleEditChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={editCar.price}
              onChange={handleEditChange}
            />
            <button className="btn-add" onClick={handleSubmitEdit}>Save Changes</button>
          </div>
        </div>
      )}

      {/* Add New Car Form */}
      <div className="add-car-form">
        <h3>Add New Car</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Brand"
            value={newCar.make}
            onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
          />
          <input
            type="text"
            placeholder="Model"
            value={newCar.model}
            onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newCar.quantity}
            onChange={(e) => setNewCar({ ...newCar, quantity: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: Number(e.target.value) })}
          />
          <button className="btn-add" onClick={handleAddCar}>Add Car</button>
        </div>
      </div>

      {/* Modal for Success/Error Messages */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarManagement;
