import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Form/Signin";
import "./App.css";
import Signup from "./Form/Signup";
import ProfileDetails from "./Dashboard/ProfileDetails";
import GeanologyTree from "./Dashboard/Geanology";
import MyEarnings from "./Dashboard/MyEarnings";
import MemberDashboard from "./Dashboard/MemberDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/geanology" element={<GeanologyTree />} />
        <Route path="/earnings" element={<MyEarnings />} />
      </Routes>
    </div>
  );
}

export default App;
