// api.js
import axios from 'axios';

// Create an axios instance with the base URL set to your backend
const api = axios.create({
  baseURL: 'http://localhost:8089', // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding token (if using authentication)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fetch all available cars
export const getAvailableCars = async () => {
  try {
    const response = await api.get('/api/cars/available-cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching available cars:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch car details by ID
export const getCarById = async (carId) => {
  try {
    const response = await api.get(`/api/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car details (ID: ${carId}):`, error.response?.data || error.message);
    throw error;
  }
};

// Add a new car
export const addCar = async (carData) => {
  try {
    const response = await api.post('/api/cars/add-car', carData);
    return response.data;
  } catch (error) {
    console.error('Error adding car:', error.response?.data || error.message);
    throw error;
  }
};

// Update car details
export const updateCar = async (carId, carData) => {
  try {
    const response = await api.put(`/api/cars/update/${carId}`, carData);
    return response.data;
  } catch (error) {
    console.error(`Error updating car (ID: ${carId}):`, error.response?.data || error.message);
    throw error;
  }
};

// Delete a car
export const deleteCar = async (carId) => {
  try {
    await api.delete(`/api/cars/delete/${carId}`);
  } catch (error) {
    console.error(`Error deleting car (ID: ${carId}):`, error.response?.data || error.message);
    throw error;
  }
};

// Fetch available orders
export const getOrders = async () => {
  try {
    const response = await api.get('/api/orders/available-orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching available orders:', error.response?.data || error.message);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/api/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw error;
  }
};

// Create a new booking
export const saveBooking = async (bookingData) => {
  try {
    const response = await api.post('/api/bookings/save', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error saving booking:', error.response?.data || error.message);
    throw error;
  }
};

// Other API calls (authentication, users, etc.) can be added here

export default api;
