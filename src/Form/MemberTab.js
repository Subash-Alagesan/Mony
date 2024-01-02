import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Api Base URL/axios"
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
  const [memberCount, setMemberCount] = useState(0);

 
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
    pan_no: "",
    company_logo: "",
    company_name: "",
    gst_no: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
    const memberData = "/api/member/regMemb";
    const response = await axios.post(memberData,formData);
    console.log("Member Registered Successfully!!!", response.data.message,response.data.result);
    alert("REgistered Successfully!! Now You are the Member of Mony!!! Welcome!!!")
    setMemberCount((prevCount) => prevCount + 1);
    setFormData(initialFormData); 
    navigate("/")
    }catch(error) {
      console.error("Error while registering Member",error.message);
    }    
    console.log(formData);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <form onSubmit={handleSubmit}>
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
                      value={formData.pincode}
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
                      name="account_name"
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
                      name="acc_no"
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
                      name="ifsc_code"
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
                      name="aadhaar_no"
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
                      name="pan_no"
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
            {value === "2" && (
              <Button
                className="btn-update"
                type="submit"
                variant="contained"
                color="primary"
                margintop="10px"
                disabled={memberCount >= 3} 
              >
                Update
              </Button>
            )}
          </TabPanel>
        </form>
      </TabContext>
    </Box>
  );
}

export default MemberTab;
