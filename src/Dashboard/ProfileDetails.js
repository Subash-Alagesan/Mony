import React, { useState } from 'react';
import './profiledetails.css';

function ProfileDetails() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    phonenumber: '',
    account_name: '',
    acc_no: '',
    branch: '',
    ifsc_code: '', 
    pancard_no:'',
    aadhaar_no:'',
    pincode:'',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // If the input type is file, update the state with files
    const updatedValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here using formData
    console.log(formData);
  };

  return (
    <div className="center-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 className='h-tag'>ProfileDetails</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="custom-input"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
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
        <div className="form-group">
          <label htmlFor="firstName">Password:</label>
          <input
            className="custom-input"
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
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
