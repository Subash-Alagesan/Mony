import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "../Api Base URL/axios";
import "./geanology.css";
import Adduser from "./Adduser";
import { useUser } from "../Context/UserContext";
import SetAuthToken from "../Context/SetAuthToken";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const highlightedCardStyle = {
  width: "35%",
  margin: "20px auto",
  marginLeft:"250px",
  padding: "20px",
  border: "1px solid #e0e0e0",
  backgroundColor: 'rgba(0, 5, 25, 0.5)',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  
};

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
        SetAuthToken(token);

        const response = await axios.get(`/api/member/listmembersfromparent/${user.userId}`);
        const { parent, descendants } = response.data;

        setUserData(parent);
        setDescendantsData(descendants);
      } catch (error) {
        console.error("Error fetching member data:", error.message);
      }
    };
    fetchData();
  }, [user.userId, token]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Parent:", userData);
  };
  return (
    <>
      <Box height={100} />
      <Typography variant="h4" component="div" gutterBottom>
        Geanology Tree
      </Typography>
      <Card style={highlightedCardStyle}>
        <CardContent>
          <form onSubmit={handleSubmit} className="form-geo">
            <div>
              <label htmlFor="email">Username:</label>
              <input
                className="geo-input"
                type="text"
                id="email"
                name="email"
                value={userData.email}
                onChange={() => {}}
                style={{
                  backgroundColor: 'transparent', // Set to the desired background color
                  color: 'white', // Set to the desired text color
                  border: '1px solid #e0e0e0', // Match the border color of the card
                  padding: '5px', // Add padding to match the card's padding
                }}
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
                onChange={() => {}}
                style={{
                  backgroundColor: 'transparent', // Set to the desired background color
                  color: 'white', // Set to the desired text color
                  border: '1px solid #e0e0e0', // Match the border color of the card
                  padding: '5px', // Add padding to match the card's padding
                }}
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
                onChange={() => {}}
                style={{
                  backgroundColor: 'transparent', // Set to the desired background color
                  color: 'white', // Set to the desired text color
                  border: '1px solid #e0e0e0', // Match the border color of the card
                  padding: '5px', // Add padding to match the card's padding
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{ marginTop: "20px",marginLeft:"150px" }}
              color="primary"
              onClick={() => setOpen(true)}
            >
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* Display Descendants */}
      <div>
        {descendantsData.map((descendant) => (
          <Card key={descendant.memb_id} style={{ ...highlightedCardStyle, marginTop: "30px" }}>
            <CardContent>
              <form className="form-geo">
                <div>
                  <label htmlFor={`descendant-email-${descendant.memb_id}`}>Username:</label>
                  <input
                    className="geo-input"
                    type="text"
                    id={`descendant-email-${descendant.memb_id}`}
                    name={`descendant-email-${descendant.memb_id}`}
                    value={descendant.email}
                    onChange={() => {}}
                    style={{
                      backgroundColor: 'transparent', // Set to the desired background color
                      color: 'white', // Set to the desired text color
                      border: '1px solid #e0e0e0', // Match the border color of the card
                      padding: '5px', // Add padding to match the card's padding
                    }}
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
                    onChange={() => {}}
                    style={{
                      backgroundColor: 'transparent', // Set to the desired background color
                      color: 'white', // Set to the desired text color
                      border: '1px solid #e0e0e0', // Match the border color of the card
                      padding: '5px', // Add padding to match the card's padding
                    }}
                  />
                </div>
                <div>
                  <label htmlFor={`descendant-phonenumber-${descendant.memb_id}`}>
                    Mobile Number:
                  </label>
                  <input
                    className="geo-input"
                    type="text"
                    id={`descendant-phonenumber-${descendant.memb_id}`}
                    name={`descendant-phonenumber-${descendant.memb_id}`}
                    value={descendant.phonenumber}
                    onChange={() => {}}
                    style={{
                      backgroundColor: 'transparent', // Set to the desired background color
                      color: 'white', // Set to the desired text color
                      border: '1px solid #e0e0e0', // Match the border color of the card
                      padding: '5px', // Add padding to match the card's padding
                    }}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} className="dialog-box">
        <Adduser />
      </Dialog>
    </>
  );
}
export default Geanology;