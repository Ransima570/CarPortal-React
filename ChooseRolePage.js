import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaBriefcase } from 'react-icons/fa';

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-teal-500">
      <h2 className="text-5xl font-extrabold text-white mb-12 drop-shadow-2xl">
        Choose Your Role
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Customer Card */}
        <div 
          onClick={() => handleRoleSelection('customer')}
          className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg w-72 h-72 p-8 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl"
        >
          <FaUserAlt className="text-6xl text-indigo-500 mb-6" />
          <h3 className="text-xl font-semibold text-indigo-600">Customer</h3>
          <p className="text-gray-500 text-center mt-2">Book your ride, track it, and manage your profile.</p>
        </div>

        {/* Company Worker Card */}
        <div
          onClick={() => handleRoleSelection('company-worker')}
          className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg w-72 h-72 p-8 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl"
        >
          <FaBriefcase className="text-6xl text-teal-500 mb-6" />
          <h3 className="text-xl font-semibold text-teal-600">Company Worker</h3>
          <p className="text-gray-500 text-center mt-2">Manage rides, help customers, and monitor service quality.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseRolePage;
