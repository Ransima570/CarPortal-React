import React from 'react';
import './AboutUs.css'; // Assuming you'll add styling in this CSS file

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Welcome to Mega City Cab!</h1>
        <p>Your reliable ride in the city and beyond.</p>
      </div>
      <div className="about-details">
        <h2>Who We Are</h2>
        <p>
          At Mega City Cab, we believe in providing an exceptional travel experience with top-notch service.
          Whether you need a quick ride across town or a longer journey, we are here to make your commute
          seamless, comfortable, and affordable.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li><strong>Luxury Rides:</strong> Experience comfort with our premium vehicle selection.</li>
          <li><strong>Affordable Options:</strong> Budget-friendly cars for all your city travels.</li>
          <li><strong>24/7 Availability:</strong> No matter the time, we’re always ready to drive.</li>
        </ul>
        <h2>Why Choose Mega City Cab?</h2>
        <p>
          We offer competitive pricing, a wide range of vehicles, and a commitment to customer satisfaction.
          With friendly, professional drivers and a seamless booking process, we ensure your journey is smooth and stress-free.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
