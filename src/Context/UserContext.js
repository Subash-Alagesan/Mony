// UserContext.js
import React, { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

import axios from "../Api Base URL/axios"; // Import Axios

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(""); // Store the JWT token
  const [userType, setUserType] = useState("");

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };
  const checkAuthentication = () => {
    const token = localStorage.getItem("mony"); // Update storage key

    if (token) {
      const decoded = jwtDecode(token);
      console.log("Decoded Value is", decoded);
      const currentTime = Date.now() / 1000;

      if (decoded.exp > currentTime) {
        setLoggedIn(true);
        setToken(token);
        updateUser(decoded);
      } else {
        setLoggedIn(false);
        setToken(null); // Remove expired token
        updateUser(null);
      }
    } else {
      setLoggedIn(false);
      setToken(null);
      updateUser(null);
    }
  };

  useEffect(() => {
    checkAuthentication(); // Check authentication on component mount
  }, []);

  const login = async () => {
    try {
      // Use Axios for the login request
      const response = await axios.post("/api/login/login", user);

      if (!response.data.token) {
        throw new Error("Login failed");
      }

      const { token } = response.data;
      setToken(token);
      setLoggedIn(true);

      // Optionally, decode the token to get user information
      const decodedUser = jwtDecode(token);
      updateUser(decodedUser);
      setUserType(decodedUser.userType);

    } catch (error) {
      console.error("Login error:", error);
      setLoggedIn(false);
      setToken("");
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, isLoggedIn, login, token,userType }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
