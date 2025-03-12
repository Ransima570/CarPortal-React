import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import to get current location
import './NavBar.css'; // Ensure you create this file for styling

function NavBar() {
  const location = useLocation(); // Get the current route
  const hideNavBarOnPages = ['/login', '/choose-role']; // Pages where the NavBar should not appear

  if (hideNavBarOnPages.includes(location.pathname)) {
    return null; // Don't render the NavBar on these pages
  }

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/make-order">Make Order</Link></li>
        <li><Link to="/available-cars">Available Cars</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
