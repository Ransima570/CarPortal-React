import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Mega City Cab</h1>
      <p>Your trusted transportation service in Colombo</p>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
