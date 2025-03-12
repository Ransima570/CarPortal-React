import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={pageContainerStyle(pageLoaded)}>
      {/* Dark Overlay */}
      <div style={overlayStyle}></div>

      {/* Content */}
      <div style={contentStyle}>
        <div style={logoContainerStyle}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Taxi-03-512.png"
            alt="Mega City Cab Logo"
            style={logoStyle}
          />
        </div>
        <h1 style={headingStyle}>Welcome to Mega City Cab</h1>
        <p style={paragraphStyle}>Your trusted transportation service in Colombo.</p>
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
      </div>

      {/* Inline Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes backgroundZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes typingEffect {
            0% { width: 0; }
            100% { width: 100%; }
          }

          @keyframes hoverEffect {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}

// Styles
const pageContainerStyle = (pageLoaded) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  padding: '20px',
  backgroundImage: 'url("https://img.freepik.com/free-photo/toys-accessories-tourist_23-2148232448.jpg?t=st=1741776659~exp=1741780259~hmac=bc9a09bdc0246e510a7b1aab2ed53357d8a466a5084579ef390b5669d9e904f2&w=996")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: 'backgroundZoom 15s ease-in-out infinite',
  opacity: pageLoaded ? 1 : 0,
  transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)',
  animation: pageLoaded ? 'fadeIn 1.5s ease-out forwards' : 'none',
});

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(43, 40, 40, 0.5)', // Dark overlay for better contrast
};

const contentStyle = {
  position: 'relative',
  zIndex: 2,
  color: '#fff',
};

const logoContainerStyle = {
  marginBottom: '20px',
};

const logoStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'contain',
  borderRadius: '10px',
  animation: 'backgroundZoom 3s ease-in-out infinite',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '0',
  animation: 'typingEffect 3s steps(30) 1s forwards',
};

const paragraphStyle = {
  fontSize: '1.5rem',
  marginBottom: '30px',
  opacity: 0,
  animation: 'fadeIn 6s ease-in forwards',
};

const buttonStyle = {
  padding: '12px 30px',
  fontSize: '1.2rem',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  animation: 'hoverEffect 0.5s ease-in-out infinite',
};

export default HomePage;
