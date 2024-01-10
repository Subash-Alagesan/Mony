import React, { useState, useEffect } from "react";
import { useUser } from "../Context/UserContext";
import axios from "../Api Base URL/axios";
import "./profiledetails.css";

function ProfileDetails() {
  const { user } = useUser();
  console.log("user value is", user.userId);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    // password: "",
    phonenumber: "",
    account_name: "",
    acc_no: "",
    branch: "",
    ifsc_code: "",
    pancard_no: "",
    aadhaar_no: "",
    pincode: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("Inside Fetching")
      try {
        const response = await axios.get(
          `/api/member/getMembById/${user.userId}`
        );
        setFormData(response.data.member);
      } catch (error) {
        console.error("Error fetching member data:", error.message);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, [user.userId]);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // If the input type is file, update the state with files
    const updatedValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  return (
    <div className="center-container">
      <form className="form-container">
        <h3 className="h-tag">ProfileDetails</h3>
        <div className="form-group">
          <label htmlFor="name"> Name:</label>
          <input
            className="custom-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Address:</label>
          <input
            className="custom-input"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Email:</label>
          <input
            className="custom-input"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="firstName">Password:</label>
          <input
            className="custom-input"
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="firstName">Phone Number:</label>
          <input
            className="custom-input"
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Account Name:</label>
          <input
            className="custom-input"
            type="text"
            id="account_name"
            name="account_name"
            value={formData.account_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Account No:</label>
          <input
            className="custom-input"
            type="text"
            id="acc_no"
            name="acc_no"
            value={formData.acc_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Branch:</label>
          <input
            className="custom-input"
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">IFSC Code:</label>
          <input
            className="custom-input"
            type="text"
            id="ifsc_code"
            name="ifsc_code"
            value={formData.ifsc_code}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Pancard No:</label>
          <input
            className="custom-input"
            type="text"
            id="pancard_no"
            name="pancard_no"
            value={formData.pancard_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Aadhaar No:</label>
          <input
            className="custom-input"
            type="text"
            id="aadhaar_no"
            name="aadhaar_no"
            value={formData.aadhaar_no}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Pincode :</label>
          <input
            className="custom-input"
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
