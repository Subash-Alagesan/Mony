import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Api Base URL/axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
function MemberTab() {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const memberData = "/api/member/regMemb";
      const response = await axios.post(memberData, formData);
      console.log(
        "Member Registered Successfully!!!",
        response.data.message,
        response.data.result
      );
      alert(
        "Registered Successfully!! Now You are the Member of Mony!!! Welcome!!!"
      );
      setFormData(initialFormData);
      navigate("/");
    } catch (error) {
      console.error("Error while registering Member", error.message);
      alert(error.message);
    }
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tablist"
          >
            <Tab label="Profile" value="1" />
            <Tab label="Bank Details" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Name</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Email</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Phone No</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="phonenumber"
                      placeholder="Enter phonenumber"
                      value={formData.phonenumber}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Address</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="address"
                      placeholder="Enter address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Password</label>
                  <p>
                    <input
                      className="input-field"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Pin Code</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="pincode"
                      placeholder="Enter pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
            </Grid>
            <Divider />
            <br></br>
            <Button
              className="btn-update"
              type="submit"
              variant="contained"
              color="primary"
              margintop="10px"
            >
              Update
            </Button>
          </form>
        </TabPanel>
        <TabPanel value="2">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Account Name</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="account_name"
                      placeholder="Enter account name"
                      value={formData.account_name}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Account No</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="acc_no"
                      placeholder="Enter accountno"
                      value={formData.acc_no}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Branch</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="branch"
                      placeholder="Enter branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">IFSC Code</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="ifsc_code"
                      placeholder="Enter ifsc code"
                      value={formData.ifsc_code}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">Aadhaar No</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="aadhaar_no"
                      placeholder="Enter aadhaar no"
                      value={formData.aadhaar_no}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="field">
                  <label className="lbl-field">PAN No</label>
                  <p>
                    <input
                      className="input-field"
                      type="text"
                      name="pan_no"
                      placeholder="Enter pan no"
                      value={formData.pancard_no}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
              </Grid>
            </Grid>
            <Divider />
            <br></br>
            <Button
              className="btn-update"
              type="submit"
              variant="contained"
              color="primary"
              margintop="10px"
            >
              Update
            </Button>
          </form>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default MemberTab;