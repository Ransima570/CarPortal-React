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

// Interceptor for response error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Fetch available cars
export const getAvailableCars = async () => {
  try {
    const response = await api.get('/api/cars/available-cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching available cars:', error);
    throw error;
  }
};

// Fetch car details by ID
export const getCarById = async (carId) => {
  try {
    const response = await api.get(`/api/cars/available-cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car details:', error);
    throw error;
  }
};

// Create a new booking
export const saveBooking = async (bookingData) => {
  try {
    const response = await api.post('/api/bookings/save', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/api/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Fetch orders by user ID
export const getOrdersByUser = async (userId) => {
  try {
    const response = await api.get(`/api/orders/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};

// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/api/login', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Logout function
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};

export default api;
