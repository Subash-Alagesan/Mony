

import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "../Api Base URL/axios";
import SetAuthToken from "./SetAuthToken"; 

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userType, setUserType] = useState("");

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  const checkAuthentication = () => {
    const storedToken = localStorage.getItem("mony");

    if (storedToken) {
      SetAuthToken(storedToken); // Set the token in axios headers
      const decoded = jwtDecode(storedToken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp > currentTime) {
        setLoggedIn(true);
        setToken(storedToken);
        updateUser(decoded);
        setUserType(decoded.userType);
      } else {
        setLoggedIn(false);
        setToken(null);
        updateUser(null);
      }
    } else {
      setLoggedIn(false);
      setToken(null);
      updateUser(null);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

 


  
  const login = async () => {
    try {
      const response = await axios.post("/api/login/login", user);
  
      if (!response.data.AccessToken) {
        console.error("Login failed: Token not present in response data", response.data);
        throw new Error("Login failed");
      }
  
      const { AccessToken: token } = response.data; // Use AccessToken property
  
      // Log the token before saving to localStorage
      console.log("Token before saving to localStorage:", token);
  
      // Do not stringify the token before saving to localStorage
      localStorage.setItem("mony", token);
  
      // Log the token after saving to localStorage
      console.log("Token after saving to localStorage:", localStorage.getItem("mony"));
  
      SetAuthToken(token); // Set the token in axios headers
      setToken(token);
      setLoggedIn(true);
  
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
  
  
  
  

  const logout = () => {
    localStorage.removeItem("mony");
    SetAuthToken(null); // Clear the token in axios headers
    setLoggedIn(false);
    setToken("");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, isLoggedIn, login, token, userType, logout, checkAuthentication }}
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
  return context;
};
