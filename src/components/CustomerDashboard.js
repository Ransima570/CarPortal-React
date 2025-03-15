import React from "react";
import { FaHistory, FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to Your Dashboard
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard
            icon={<FaCalendarAlt className="text-blue-500 text-5xl" />}
            title="Upcoming Bookings"
            description="You have 2 upcoming rides."
            buttonText="View Details"
            buttonColor="bg-blue-500 hover:bg-blue-600"
          />
          <DashboardCard
            icon={<FaHistory className="text-green-500 text-5xl" />}
            title="Ride History"
            description="Check your past trips."
            buttonText="View History"
            buttonColor="bg-green-500 hover:bg-green-600"
          />
        </div>

        {/* Profile Section */}
        <div className="mt-6">
          <DashboardCard
            icon={<FaUser className="text-purple-500 text-5xl" />}
            title="Your Profile"
            description="Manage your account details."
            buttonText="Edit Profile"
            buttonColor="bg-purple-500 hover:bg-purple-600"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <NavButton to="/orders" text="Orders" color="bg-blue-600 hover:bg-blue-700" />
          <NavButton to="/available-cars" text="Available Cars" color="bg-green-600 hover:bg-green-700" />
          <NavButton to="/about-us" text="About Us" color="bg-gray-600 hover:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

// 📌 Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, description, buttonText, buttonColor }) => {
  return (
    <div className="shadow-lg rounded-2xl p-6 bg-white flex items-center space-x-6 transition duration-300 hover:shadow-xl">
      {icon}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <button className={`mt-3 px-5 py-2 text-white rounded-lg ${buttonColor} transition`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// 📌 Reusable Navigation Button Component
const NavButton = ({ to, text, color }) => {
  return (
    <Link to={to} className={`px-5 py-3 text-white rounded-lg shadow-lg ${color} transition`}>
      {text}
    </Link>
  );
};

export default CustomerDashboard;
