import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // adjust path if needed
import "./Signup.css";

const Signup = () => {
  const { signup } = useContext(AuthContext);  // ✅ get signup from context

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Call signup function from AuthContext
    const result = signup(
      formData.username,
      formData.email,
      formData.password,
      "9999999999" // phone (you can add a phone field if needed)
    );

    if (result.success) {
      alert("Signup successful!");
      // redirect to login or homepage
      window.location.href = "/"; // or use navigate from react-router
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h3>Create Account</h3>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
