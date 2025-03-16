import React, { useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hardcodedUsername = "ransima";
  const hardcodedPassword = "qaz@123";

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-700 to-green-500">
      <div className="flex flex-col md:flex-row items-center gap-10 p-10">
        <div className="text-black max-w-md"> {/* Changed text color to black */}
          <h1 className="text-5xl font-bold mb-4 text-blue-500">Mega City <br /> <span className="text-yellow-300">Cab Service</span></h1>
          <p className="text-gray-800"> {/* Changed text color to black */}
            Mega City Cab Service is Sri Lanka's No. 1 Cab Service and online booking platform. We offer reliable and affordable transportation solutions to meet all your travel needs. Book your ride with us today and experience the best-in-class service.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <form className="space-y-6" onSubmit={handleEmailLogin}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black" // Added text-black
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black" // Added text-black
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit" 
              className="w-full py-3 bg-green-600 text-white rounded-[15px] font-semibold hover:bg-green-700 transition duration-300" 
              disabled={loading}
            >
              {loading ? "Loading..." : "SIGN IN"}
            </button>
          </form>
          <p className="text-center text-gray-800 my-4">or sign in with:</p> {/* Changed text color to black */}
          <div className="flex justify-center">
            <button 
              onClick={handleGoogleLogin} 
              className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-[15px] shadow-md text-gray-800 font-semibold hover:bg-gray-100 transition duration-300" // Changed text color to black
              disabled={loading}
            >
              <FcGoogle className="text-2xl" /> {loading ? "Loading..." : "Sign in with Google"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;