import React from 'react';

function AboutUs() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f9' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em' }}>Mega City Cab</h1>
      <p style={{ color: '#34495e', fontSize: '1.2em' }}>
        Welcome to Mega City Cab! Learn more about our company and the reliable services we offer.
      </p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#2ecc71', color: 'white', borderRadius: '5px' }}>
        <p style={{ margin: '0', fontSize: '1.1em' }}>
          We are committed to providing the best transportation service in the city.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
