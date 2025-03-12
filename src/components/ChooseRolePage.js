import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChooseRolePage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'customer') {
      // Redirect to the customer dashboard or home page
      navigate('/customer-dashboard');
    } else if (role === 'company-worker') {
      // Redirect to the company worker (admin) dashboard
      navigate('/company-worker-dashboard');
    }
  };

  return (
    <div className="choose-role-container">
      <h2>Are you a Customer or Company Worker?</h2>
      <button onClick={() => handleRoleSelection('customer')}>Customer</button>
      <button onClick={() => handleRoleSelection('company-worker')}>Company Worker</button>
    </div>
  );
}

export default ChooseRolePage;
