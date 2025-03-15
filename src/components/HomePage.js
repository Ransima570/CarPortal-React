import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure the styles are included here

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Mega City Cab</h1>
        <p>Your trusted transportation service in Colombo, anywhere, anytime.</p>
        <div className="cta-buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/login">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src="https://your-image-url.com" alt="Mega City Cab" />
      </div>
      <div className="scroll-indicator">
        <p>Scroll Down for More</p>
        <span className="arrow">&#8595;</span>
      </div>
    </div>
  );
}

export default HomePage;
