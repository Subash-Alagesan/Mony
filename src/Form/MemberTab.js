import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import buyer from "./images/sellerr.jpeg";
import AddAPhotoIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";

function MemberTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [formData, setFormData] = useState({
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
    pan_no: "",
    company_logo: "",
    company_name: "",
    gst_no: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data or perform any necessary actions here
    console.log(formData); // For example, log the form data to the console
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
            <Tab label="Company Details" value="3" />
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
                      placeholder=" enter name"
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
                      placeholder="enter email"
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
                      placeholder="enter phonenumber"
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
                      placeholder="enter address"
                      value={formData.address}
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
                      placeholder="enter pincode"
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
            </Grid>

            {/* <Divider /> */}

            {/* <Button  className="btn-update" type="submit" variant="contained" color="primary" margintop="10px">
                    Update
                  </Button> */}
          </form>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Account Name</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="accountname"
                    placeholder=" enter account name"
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
                    name="accountno"
                    placeholder="enter accountno"
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
                    placeholder="enter branch"
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
                    name="ifsccode"
                    placeholder="enter ifsc code"
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
                    name="aadhaarno"
                    placeholder="enter aadhaar no"
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
                    name="panno"
                    placeholder="enter pan no"
                    value={formData.pan_no}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
          </Grid>

          <br></br>
          <Divider />
          <br></br>

          {/* <Button  className="btn-update" type="submit" variant="contained" color="primary" margintop="10px">
                   Update
                 </Button> */}
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <label
                className="lbl-field"
                htmlFor="fileInput"
                style={{ cursor: "pointer" }}
              >
                Add Logo
                {/* <img
                src={formData.company_logo}
                alt="Selected Image"
                style={{ width: "150px", height: "150px" }}
              /> */}
                <Avatar sx={{ width: 150, height: 150, borderRadius: "50%" }}>
                  <AddAPhotoIcon sx={{ width: 30, height: 30 }} />
                </Avatar>
              </label>
              <input
                className="cus-image"
                type="file"
                name="profile_pic"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">Company Name</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="companyname"
                    placeholder="enter companyname"
                    value={formData.company_name}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="field">
                <label className="lbl-field">GST No</label>
                <p>
                  <input
                    className="input-field"
                    type="text"
                    name="gstno"
                    placeholder="enter gstno"
                    value={formData.gst_no}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </Grid>
          </Grid>

          <br></br>
          <Divider />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MemberTab;
