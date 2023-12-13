    import React from "react";
    import Signin from "./Form/Signin";
    import './App.css';
    import Login from './Form/Login';
    import SellerDashboard from "./Dashboard/SellerDashboard";

    function App() {
       
        return(
            <div className="App">
                {/* <Signin />
                <Login /> */}
                <SellerDashboard />
                
            </div>
           
        )
    }

    export default App;