import React from 'react';

function AboutUs() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <img
        src="https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Taxi-03-512.png"
        alt="Company Logo"
        style={imageStyle}
      />

      <p style={paragraphStyle}>
        Welcome to Mega City Cab! We are a trusted and reliable transportation service
        based in Colombo, committed to providing you with topnotch services for your travel needs.
      </p>

      <h2 style={subHeadingStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        Our mission is to make commuting in Colombo convenient, safe, and affordable. We aim to
        provide efficient transportation options for individuals, families, and corporate clients
        with a focus on customer satisfaction, punctuality, and safety.
      </p>

      <h2 style={subHeadingStyle}>What We Offer</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Reliable 24/7 cab service</li>
        <li style={listItemStyle}>Competitive pricing with no hidden charges</li>
        <li style={listItemStyle}>Experienced and friendly drivers</li>
        <li style={listItemStyle}>Advanced booking and ride tracking</li>
        <li style={listItemStyle}>Clean and well-maintained vehicles</li>
      </ul>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '50px',
  background: 'url(https://images.unsplash.com/photo-1592891024301-bf7948cee673?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center fixed',
  backgroundSize: 'cover',
  position: 'relative',
  color: '#fff',
  borderRadius: '20px', // More rounded corners
  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.5)', // Larger shadow for a more elevated effect
  maxWidth: '900px',
  margin: 'auto',
  textAlign: 'center',
  animation: 'fadeIn 2s ease-out', // Fade-in animation
  overflow: 'hidden', // Ensure content doesn't overflow the rounded corners
};

// Darker overlay for the background image
const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better contrast
  zIndex: -1, // Keep the overlay behind the text
};

const headingStyle = {
  fontSize: '3rem',
  color: '#fff',
  marginBottom: '20px',
  fontFamily: "'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  letterSpacing: '1px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Text shadow to make the text pop
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#ecf0f1', // Light gray text for better readability
  lineHeight: '1.8',
  fontFamily: "'Arial', sans-serif",
  marginBottom: '20px',
  textAlign: 'justify',
  borderRadius: '10px', // Rounded corners for the paragraph container
  padding: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the paragraph
};

const subHeadingStyle = {
  fontSize: '2rem',
  color: '#fff',
  marginBottom: '15px',
  marginTop: '30px',
  fontFamily: "'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Text shadow for subheading
};

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%', // Round shape for the logo
  marginBottom: '20px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)', // Stronger shadow around the image
  transition: 'transform 0.3s ease-in-out',
  border: '5px solid #fff', // White border around the image for contrast
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  fontSize: '1.2rem',
  color: '#ecf0f1',
  lineHeight: '1.8',
  textAlign: 'center',
};

const listItemStyle = {
  marginBottom: '15px',
  fontFamily: "'Arial', sans-serif",
  transition: 'color 0.3s ease', // Smooth hover effect on list items
  borderRadius: '10px', // Rounded corners for the list items
  padding: '8px', // Padding for each list item
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for list items
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Light shadow for each list item
};

// Hover effect for the image
imageStyle[':hover'] = {
  transform: 'scale(1.1)', // Slightly enlarge the image on hover
};

// Hover effect for list items
listItemStyle[':hover'] = {
  color: '#f39c12', // Change the color of list items when hovered
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker background on hover
  transform: 'scale(1.05)', // Slight scale effect when hovered
};

// Keyframes for fade-in animation
const keyframes = {
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

// Apply the keyframe style globally (dynamically injected into the style)
const styleSheet = document.styleSheets[0];
const keyframeRule = `@keyframes fadeIn {0% {opacity: 0;} 100% {opacity: 1;}}`;
styleSheet.insertRule(keyframeRule, styleSheet.cssRules.length);

export default AboutUs;
