import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={containerStyle}>
      <img src="path_to_logo_or_image.jpg" alt="Mega City Cab Logo" style={logoStyle} />
      <h1 style={headingStyle}>Welcome to Mega City Cab</h1>
      <p style={paragraphStyle}>
        Your trusted transportation service in Colombo. We are committed to providing you with reliable,
        safe, and comfortable rides.
      </p>
      <Link to="/login">
        <button style={buttonStyle}>Login</button>
      </Link>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px',
  backgroundColor: '#f4f4f4',
  height: '100vh', // Full viewport height
  textAlign: 'center',
};

const logoStyle = {
  width: '200px', // Adjust the logo size as per your image
  height: '200px',
  borderRadius: '50%', // Circular logo if it's a square
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '3rem',
  color: '#333',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.5rem',
  color: '#666',
  lineHeight: '1.8',
  marginBottom: '40px',
};

const buttonStyle = {
  padding: '12px 30px',
  fontSize: '1.2rem',
  backgroundColor: '#0044cc', // Blue color for the button
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default HomePage;
