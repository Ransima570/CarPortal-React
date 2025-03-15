import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { getAuth, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom'; // Import to get current location
import './NavBar.css'; // Ensure you create this file for styling

function NavBar() {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // Use useNavigate for navigation
  const auth = getAuth(); // Firebase auth instance

  const hideNavBarOnPages = ['/login', '/choose-role']; // Pages where the NavBar should not appear

  // Hide NavBar if current page is in hideNavBarOnPages list
  if (hideNavBarOnPages.includes(location.pathname)) {
    return null;
  }

  // Handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate('/login'); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/available-cars">Available Cars</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li> {/* Logout button */}
      </ul>
    </nav>
  );
}

export default NavBar;
