import React, { useCallback, useEffect, useState } from 'react';

const MakeOrder = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#fff3e0'; // Soft light orange background
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Customer Details:', customerDetails);
    alert(`Order Submitted Successfully!\nThank you, ${customerDetails.name}!`);
  }, [customerDetails]);

  return (
    <div style={styles.container}>
      <img
        src="https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Taxi-03-512.png"
        alt="Order Form"
        style={styles.img}
      />

      <h2 style={styles.title}>Customer Details</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'Name', id: 'name', type: 'text', placeholder: 'Enter your full name (e.g., John Doe)' },
          { label: 'Address', id: 'address', type: 'text', placeholder: 'Enter your address (e.g., 123 Main St)' },
          { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: 'Enter your phone number (e.g., +94 123456789)' },
          { label: 'Email', id: 'email', type: 'email', placeholder: 'Enter your email (e.g., john.doe@example.com)' }
        ].map(({ label, id, type, placeholder }) => (
          <div key={id} style={styles.formGroup}>
            <label style={styles.label} htmlFor={id}>{label}:</label>
            <input
              type={type}
              id={id}
              name={id}
              value={customerDetails[id]}
              onChange={handleInputChange}
              style={styles.input}
              placeholder={placeholder}
              required
              aria-label={label}
            />
          </div>
        ))}

        <button type="submit" style={styles.button}>Submit Order</button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center', // Ensures label and input align properly
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold', // Make it bold
    width: '130px', // Aligns to the left and keeps a fixed width
    textAlign: 'left',
    color: '#333',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#ff7f00',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    marginTop: '15px',
  },
  img: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '20px',
  }
};

export default MakeOrder;
