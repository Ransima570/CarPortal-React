import React, { useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion"; // For animations
import "./LoginPage.css"; // Custom CSS for styling

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dummy authentication logic (Replace with Firebase Auth)
    if (email === "ransima" && password === "qaz@123") {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="login-container"
    >
      {/* Background Image */}
      <div className="background-overlay"></div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="login-card"
      >
        {/* Logo Image */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3448/3448637.png" 
          alt="Company Logo" 
          className="login-logo" 
        />

        <div className="login-header">
          <h1 className="login-title">Welcome Back Mega City Cab Service</h1>
          <p className="login-subtitle">Sign in to continue</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="error-message"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleEmailLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email eg: John@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Sign In"}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-button"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <FcGoogle className="google-icon" /> Sign in with Google
        </button>

        <div className="login-footer">
          <p>Don’t have an account? <a href="#">Sign Up</a></p>
          <p><a href="#">Forgot Password?</a></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
