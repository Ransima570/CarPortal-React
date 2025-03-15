import React from 'react';
import { useNavigate } from 'react-router-dom';


function ChooseRolePage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'customer') {
      navigate('/customer-dashboard');
    } else if (role === 'company-worker') {
      navigate('/company-worker-dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-green-500">
      <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
        Are you a Customer or Company Worker?
      </h2>
      <div className="flex gap-8">
        <button
          onClick={() => handleRoleSelection('customer')}
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:bg-blue-100 transition-all ease-in-out duration-300"
        >
          Customer
        </button>
        <button
          onClick={() => handleRoleSelection('company-worker')}
          className="px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl shadow-lg hover:bg-green-100 transition-all ease-in-out duration-300"
        >
          Company Worker
        </button>
      </div>
    </div>
  );
}

export default ChooseRolePage;
