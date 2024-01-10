import React from "react";
import { Navigate } from "react-router-dom";
import { useUser  } from "../Context/UserContext"; // Import your authentication context

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useUser ();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
