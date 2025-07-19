import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5004/api/agents/signup", formData);
      if (res.data.success) {
        setSuccess("Signup successful!");
        setTimeout(() => navigate("/agent-login"), 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Agent Signup</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        <input type="text" name="username" placeholder="Username" required className="input" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required className="input" value={formData.password} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="input" value={formData.phone} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="input" value={formData.email} onChange={handleChange} />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AgentSignup;
