import React, { createContext, useState, useEffect } from "react";
import { addUser, getUserByEmail } from "../storage/Storagee";
// import axios from "axios"; // Uncomment when backend API is ready

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // {id, name, email, phone, role}
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load user from localStorage (so session stays after refresh)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
      setIsAdmin(parsedUser.role === "admin");
    }
  }, []);

  // 🔹 Signup function
  const signup = async (name, email, password, phone, role = "user") => {
    try {
      // Check if user already exists in storage
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        return { success: false, message: "User already exists" };
      }

      const newUser = { id: Date.now(), name, email, password, phone, role, bookings: [] };
      
      // Add user to storage (Storagee.js)
      await addUser(newUser);
      
      // Also save to localStorage for quick access
      localStorage.setItem("user", JSON.stringify(newUser));

      setUser(newUser);
      setIsLoggedIn(true);
      setIsAdmin(role === "admin");
      console.log("Signup successful:", newUser);

      return { success: true, message: "Signup successful" };
    } catch (err) {
      console.error("Signup error:", err);
      return { success: false, message: "Signup failed" };
    }

    /*
    // --- Database API version (Spring Boot/Node backend) ---
    return axios.post("http://localhost:8080/api/signup", {
      name, email, password, phone, role
    }).then(res => {
      setUser(res.data);
      setIsLoggedIn(true);
      setIsAdmin(res.data.role === "admin");
      return { success: true };
    }).catch(err => ({ success: false, message: err.message }));
    */
  };

  // 🔹 Login function
  const login = async (email, password) => {
    try {
      // Check if user exists in storage
      const existingUser = await getUserByEmail(email);
      
      if (!existingUser || existingUser.password !== password) {
        console.log("No user found with these credentials");
        return { success: false, message: "Invalid email or password" };
      }

      localStorage.setItem("user", JSON.stringify(existingUser));
      setUser(existingUser);
      setIsLoggedIn(true);
      setIsAdmin(existingUser.role === "admin");
      console.log("Login successful:", existingUser);

      return { success: true, message: "Login successful" };
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, message: "Login failed" };
    }

    /*
    // --- Database API version ---
    return axios.post("http://localhost:8080/api/login", { email, password })
      .then(res => {
        setUser(res.data);
        setIsLoggedIn(true);
        setIsAdmin(res.data.role === "admin");
        localStorage.setItem("user", JSON.stringify(res.data));
        return { success: true };
      })
      .catch(err => ({ success: false, message: err.message }));
    */
  };

  // 🔹 Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn,
      isAdmin,
      signup,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
