import React, { useState, useEffect } from 'react';

const MakeOrder = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  // Set the background color of the page when the component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#fff3e0'; // Soft light orange background for professionalism
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Details:', customerDetails);
    alert('Order Submitted Successfully!');
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#ffffff',  // White background for form
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow for emphasis
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333', // Dark color for the title for readability
    marginBottom: '30px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    fontSize: '1rem',
    marginBottom: '5px',
    color: '#555', // Soft grey for labels
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9', // Subtle background for input fields
    width: '100%',
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#ff7f00',  // Orange color for the button
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e76f00', // Darker shade of orange on hover
  };

  const buttonActiveStyle = {
    backgroundColor: '#d65e00', // Even darker shade when clicked
  };

  // Image Styles (Icon Size)
  const imgStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://cdn-icons-png.freepik.com/512/8738/8738171.png"
        alt="Order Form"
        style={imgStyle}
      />
      
      <h2 style={titleStyle}>Customer Details</h2>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Enter your name"
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customerDetails.address}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Enter your address"
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
          onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default MakeOrder;
