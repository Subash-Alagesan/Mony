import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "../Api Base URL/axios";
import "./geanology.css";
import Adduser from "./Adduser";
import { useUser } from "../Context/UserContext";
import SetAuthToken from "../Context/SetAuthToken";
import Dialog from "@mui/material/Dialog";

// ... (existing imports)

function Geanology() {
  const { user, token } = useUser();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phonenumber: "",
  });
  const [descendantsData, setDescendantsData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set the authorization token in the axios headers before making the request
        SetAuthToken(token);

        // Fetch both parent and descendants
        const response = await axios.get(`/api/member/listmembersfromparent/${user.userId}`);

        const { parent, descendants } = response.data;

        // Handle parent data as needed
        console.log("Parent:", parent);
        setUserData(parent); // Set parent data in state

        // Handle descendants data as needed
        console.log("Descendants:", descendants);
        setDescendantsData(descendants); // Set descendants data in state
      } catch (error) {
        console.error("Error fetching member data:", error.message);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, [user.userId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with userData here
    console.log("Parent:", userData);
  };

  return (
    <>
      <Box height={100} />

      <div
        className="card"
        style={{
          textAlign: "right",
          padding: "20px",
          height: "35vh",
          width: "40%",
          marginLeft: "250px",
          border: "1px solid black",
        }}
      >
        <form onSubmit={handleSubmit} className="form-geo">
          <h2 className="h2-tag">Geanology Tree</h2>
          <div>
            <label htmlFor="email">Username:</label>
            <input
              className="geo-input"
              type="text"
              id="email"
              name="email"
              value={userData.email}
              onChange={() => {}} // Add your onChange logic here if needed
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="geo-input"
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={() => {}} // Add your onChange logic here if needed
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Mobile Number:</label>
            <input
              className="geo-input"
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={userData.phonenumber}
              onChange={() => {}} // Add your onChange logic here if needed
            />
          </div>
          <button className="adduser-btn" onClick={() => setOpen(true)}>
            Add User
          </button>
        </form>
      </div>     
      {/* Display Descendants */}
     
      <div>
        
        {descendantsData.map((descendant) => (
          <div key={descendant.memb_id} className="descendant-box">
            <form className="form-geo">
              <div>
                <label htmlFor={`descendant-email-${descendant.memb_id}`}>Username:</label>
                <input
                  className="geo-input"
                  type="text"
                  id={`descendant-email-${descendant.memb_id}`}
                  name={`descendant-email-${descendant.memb_id}`}
                  value={descendant.email}
                  onChange={() => {}} // Add your onChange logic here if needed
                />
              </div>
              <div>
                <label htmlFor={`descendant-name-${descendant.memb_id}`}>Name:</label>
                <input
                  className="geo-input"
                  type="text"
                  id={`descendant-name-${descendant.memb_id}`}
                  name={`descendant-name-${descendant.memb_id}`}
                  value={descendant.name}
                  onChange={() => {}} // Add your onChange logic here if needed
                />
              </div>
              <div>
                <label htmlFor={`descendant-phonenumber-${descendant.memb_id}`}>Mobile Number:</label>
                <input
                  className="geo-input"
                  type="text"
                  id={`descendant-phonenumber-${descendant.memb_id}`}
                  name={`descendant-phonenumber-${descendant.memb_id}`}
                  value={descendant.phonenumber}
                  onChange={() => {}} // Add your onChange logic here if needed
                />
              </div>
            </form>
          </div>
        ))}
      </div>


      <Dialog open={open} onClose={() => setOpen(false)} className="dialog-box">
        <Adduser />
      </Dialog>
    </>
  );
}

export default Geanology;
