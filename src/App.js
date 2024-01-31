
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import Signin from "./Form/Signin";
import Signup from "./Form/Signup";
import ProfileDetails from "./Dashboard/ProfileDetails";
import GeanologyTree from "./Dashboard/Geanology";
import MyEarnings from "./Dashboard/MyEarnings";
import MemberDashboard from "./Dashboard/MemberDashboard";
import ProtectedRoutes from "./ProductedRoutes";
import SellerDashboard from "./Dashboard/SellerDashboard";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<SellerDashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/member"
          element={
            <ProtectedRoutes>
              <MemberDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfileDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/geanology"
          element={
            <ProtectedRoutes>
              <GeanologyTree />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/earnings"
          element={
            <ProtectedRoutes>
              <MyEarnings />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
