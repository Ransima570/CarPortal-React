// NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { getAuth, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom'; 
import './NavBar.css'; 

function NavBar() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const auth = getAuth(); 

  const hideNavBarOnPages = ['/login', '/choose-role']; 

  if (hideNavBarOnPages.includes(location.pathname)) {
    return null;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate('/login'); 
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
        <li>
          <button 
            onClick={handleLogout} 
            className="logout-button"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
