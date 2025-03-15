// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8088/api/vehicles')
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Vehicles</h3>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>License Plate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicleId}>
              <td>{vehicle.model}</td>
              <td>{vehicle.licensePlate}</td>
              <td>{vehicle.status}</td>
              <td>
                <button>Assign Driver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
