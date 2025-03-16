import React from "react";
import { FaHistory, FaUser, FaCalendarAlt, FaCar, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Welcome to Your Dashboard
        </motion.h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            icon={<FaCalendarAlt className="text-blue-500 text-6xl" />}
            title="Upcoming Bookings"
            description="You have 2 upcoming rides."
            buttonText="View Details"
            buttonColor="bg-blue-500 hover:bg-blue-600"
            animationDelay={0.2}
          />
          <DashboardCard
            icon={<FaHistory className="text-green-500 text-6xl" />}
            title="Ride History"
            description="Check your past trips."
            buttonText="View History"
            buttonColor="bg-green-500 hover:bg-green-600"
            animationDelay={0.4}
          />
          <DashboardCard
            icon={<FaUser className="text-purple-500 text-6xl" />}
            title="Your Profile"
            description="Manage your account details."
            buttonText="Edit Profile"
            buttonColor="bg-purple-500 hover:bg-purple-600"
            animationDelay={0.6}
          />
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <NavButton
            to="/orders"
            text="Orders"
            icon={<FaCalendarAlt className="mr-2" />}
            color="bg-blue-600 hover:bg-blue-700"
          />
          <NavButton
            to="/available-cars"
            text="Available Cars"
            icon={<FaCar className="mr-2" />}
            color="bg-green-600 hover:bg-green-700"
          />
          <NavButton
            to="/about-us"
            text="About Us"
            icon={<FaInfoCircle className="mr-2" />}
            color="bg-gray-600 hover:bg-gray-700"
          />
        </motion.div>
      </div>
    </div>
  );
}

// 📌 Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, description, buttonText, buttonColor, animationDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="shadow-2xl rounded-2xl p-8 bg-white flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        className={`px-6 py-3 text-white rounded-lg ${buttonColor} transition duration-300 hover:shadow-lg`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

// 📌 Reusable Navigation Button Component
const NavButton = ({ to, text, icon, color }) => {
  return (
    <Link
      to={to}
      className={`px-8 py-4 text-white rounded-xl shadow-lg ${color} transition duration-300 hover:scale-105 flex items-center justify-center`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default CustomerDashboard;