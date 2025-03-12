import React from 'react';

function AboutUs() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <img src="path_to_logo_or_image.jpg" alt="Company Logo" style={imageStyle} />

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
  backgroundColor: '#f4f4f4',  // Light background color for the page
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for emphasis
  maxWidth: '800px',
  margin: 'auto',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#666',
  lineHeight: '1.6',
};

const subHeadingStyle = {
  fontSize: '1.8rem',
  color: '#333',
  marginBottom: '15px',
  marginTop: '30px',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',  // Makes the image circular
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  fontSize: '1.1rem',
  color: '#555',
  lineHeight: '1.8',
};

const listItemStyle = {
  marginBottom: '10px',
};

export default AboutUs;
