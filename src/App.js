import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import ProfileDetails from "./Dashboard/MemberDashboard/ProfileDetails";
import GeanologyTree from "./Dashboard/MemberDashboard/Geanology";
import MyEarnings from "./Dashboard/MemberDashboard/MyEarnings";
import MemberDashboard from "./Dashboard/MemberDashboard/MemberDashboard";
import ProtectedRoutes from "./ProductedRoutes";
import SellerDashboard from "./Dashboard/SellerDashboard/SellerDashboard";
import ProductPage from "./Dashboard/SellerDashboard/ProductPage";

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
        <Route
          path="/sellerdashboard"
          element={
            <ProtectedRoutes>
              <SellerDashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
      
    </UserProvider>
  );
}

export default App;
