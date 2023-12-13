    import React from "react";
    import Signin from "./Form/Signin";
    import './App.css';
    import Login from './Form/Login';
    import SellerDashboard from "./Dashboard/SellerDashboard";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
    import ProfileDetails from './Dashboard/ProfileDetails';
    import  geanologytree from './Dashboard/Geanology';
    import myearnings from './Dashboard/MyEarnings';
    import MemberDashboard from './MemberDashboard'

    function App() {
       
        return(
         
      <div className="App">
        <SellerDashboard />
        {/* <MemberDashboard /> */}
      
      </div>
    
           
        )
    }

    export default App;