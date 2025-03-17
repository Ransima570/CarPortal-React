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
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-300 drop-shadow-2xl">
        Choose Your Role
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Customer Card */}
        <div 
          onClick={() => handleRoleSelection('customer')}
          className="flex flex-col items-center justify-center bg-gray-800 rounded-3xl shadow-lg w-72 h-72 p-8 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:bg-gray-700"
        >
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Customer</h3>
          <p className="text-lg text-gray-400 text-center mt-2">Book your ride, track it, and manage your profile.</p>
        </div>

        {/* Company Worker Card */}
        <div
          onClick={() => handleRoleSelection('company-worker')}
          className="flex flex-col items-center justify-center bg-gray-800 rounded-3xl shadow-lg w-72 h-72 p-8 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:bg-gray-700"
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">Company Worker</h3>
          <p className="text-lg text-gray-400 text-center mt-2">Manage rides, help customers, and monitor service quality.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseRolePage;
