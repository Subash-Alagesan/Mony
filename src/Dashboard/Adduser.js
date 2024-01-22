import React, { useState } from "react";
import axios from "../Api Base URL/axios";
import SetAuthToken from "../Context/SetAuthToken";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import "./adduser.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function Adduser() {
  const navigate = useNavigate();
  const { token } = useUser();
  const initialFormData = {
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    pincode: "",
    password: "",
    account_name: "",
    acc_no: "",
    branch: "",
    ifsc_code: "",
    aadhaar_no: "",
    pancard_no: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const [genealogyData, setGenealogyData] = useState(/* initial genealogy data */);

  // const fetchGenealogyData = async () => {
  //   try {
  //     // Fetch the updated genealogy data from your API
  //     const response = await axios.get("/api/member/genealogy");
  
  //     // Update the state with the new genealogy data
  //     setGenealogyData(response.data);
  //   } catch (error) {
  //     console.error("Error while fetching genealogy data", error.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const memberData = "/api/member/genealogy";

      // Set the authentication token in the Axios headers
      SetAuthToken(token);

      console.log("FormData is", formData);

      // Include the token in the request headers
      const response = await axios.post(memberData, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response is", response);

      if (response.data && response.data.message) {
        console.log("Member Registered Successfully!!!", response.data.message);
        alert(
          "Registered Successfully!! Now You are the Member of Mony!!! Welcome!!!"
        );
        setFormData(initialFormData);
      } else {
        console.error("Unexpected response format:", response);
        alert(
          "Unexpected response format. Please check the console for details."
        );
      }
    } catch (error) {
      console.error("Error while registering Member", error.message);
      alert(
        "Error while registering Member. Please check the console for details."
      );
    } finally {
      // Reset the authentication token in the headers after the request
      SetAuthToken(null);
    }
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="center-container1">
      <form className="form-container1" onSubmit={handleSubmit}>
        <h3 className="h-tag1">UserDetails</h3>
        <div className="form-group1">
          <label htmlFor="name">First Name:</label>
          <input
            className="user-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Address:</label>
          <input
            className="user-input"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Email:</label>
          <input
            className="user-input"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Password:</label>
          <input
            className="user-input"
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Phone Number:</label>
          <input
            className="user-input"
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Account Name:</label>
          <input
            className="user-input"
            type="text"
            id="account_name"
            name="account_name"
            value={formData.account_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Account No:</label>
          <input
            className="user-input"
            type="text"
            id="acc_no"
            name="acc_no"
            value={formData.acc_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Branch:</label>
          <input
            className="user-input"
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">IFSC Code:</label>
          <input
            className="user-input"
            type="text"
            id="ifsc_code"
            name="ifsc_code"
            value={formData.ifsc_code}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label htmlFor="firstName">Pancard No:</label>
          <input
            className="user-input"
            type="text"
            id="pancard_no"
            name="pancard_no"
            value={formData.pancard_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="firstName">Aadhaar No:</label>
          <input
            className="user-input"
            type="text"
            id="aadhaar_no"
            name="aadhaar_no"
            value={formData.aadhaar_no}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label htmlFor="firstName">Pincode :</label>
          <input
            className="user-input"
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Adduser;
