import React, { useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hardcodedUsername = "sachin";
  const hardcodedPassword = "qaz@123";

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email === hardcodedUsername && password === hardcodedPassword) {
      setLoading(false);
      navigate("/choose-role");
    } else {
      setLoading(false);
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/choose-role");
    } catch (err) {
      setError("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 to-blue-800 px-4">
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-10 p-10 w-full max-w-4xl bg-white shadow-2xl rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-gray-800 max-w-md">
          <h1 className="text-5xl font-bold mb-4 text-indigo-900">Mega City <br /> <span className="text-blue-500">Cab Service</span></h1>
          <p className="text-gray-600 leading-relaxed">
            Mega City Cab Service is Sri Lanka's No. 1 Cab Service and online booking platform. We offer reliable and affordable transportation solutions to meet all your travel needs. Book your ride with us today and experience the best in class service.
          </p>
        </div>
        <motion.div 
          className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form className="space-y-6" onSubmit={handleEmailLogin}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <motion.button 
              type="submit" 
              className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 shadow-md transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'SIGN IN'}
            </motion.button>
          </form>
          <p className="text-center text-gray-500 my-4">or sign in with:</p>
          <div className="flex justify-center gap-4">
            <motion.button 
              onClick={handleGoogleLogin} 
              className="text-blue-500 font-semibold hover:underline"
              whileHover={{ scale: 1.05 }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign in with Google'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;