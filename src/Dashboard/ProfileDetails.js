import React from 'react';
import './profiledetails.css'; 

function ProfileDetails() {
  return (
   
    

    <div className="center-container">
  
      <form className="form-container">
      <h3>ProfileDetails</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input className="custom-input" type="text" id="firstName" name="firstName" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input  className="custom-input" type="text" id="lastName" name="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input className="custom-input" type="date" id="dob" name="dob" />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input className="custom-input" type="text" id="mobileNumber" name="mobileNumber" />
        </div>

        <div className="form-group">
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input className="custom-input" type="text" id="whatsappNumber" name="whatsappNumber" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input className="custom-input" id="address" name="address"></input>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input className="custom-input" type="text" id="language" name="language" />
        </div>

        <div className="form-group">
          <label htmlFor="panNumber">PAN Number:</label>
          <input className="custom-input" type="text" id="panNumber" name="panNumber" />
        </div>

        <div className="form-group">
          <label htmlFor="panCard">PAN Card:</label>
          <input className="custom-input" type="file" id="panCard" name="panCard" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfileDetails;
