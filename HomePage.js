import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div 
      className="home-container h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590905652146-8e169292f5de?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <motion.div 
        className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img 
          src="https://www.citypng.com/public/uploads/preview/round-logo-icon-of-taxi-service-png-701751694967529hk7gzdhbzx.png" 
          alt="Mega City Cab Logo" 
          className="w-20 h-20 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Welcome to Mega City Cab
        </motion.h1>
        <motion.p 
          className="text-lg mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Your trusted transportation service in Colombo
        </motion.p>
        <Link to="/login">
          <motion.button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded shadow-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default HomePage;