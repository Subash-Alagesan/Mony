import React, { useState } from "react";
import "./Signup.css";
import incan from "./images/incan.png";
import mony from "./images/mony-logo.jpg";
import MemberTab from "./MemberTab";
import SellerTab from "./SellerTab";

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState("seller");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderRightCardContent = () => {
    if (selectedOption === "seller") {
      return <SellerTab />;
    } else if (selectedOption === "buyer") {
      return <MemberTab />;
    }
    return null;
  };

  return (
    <div>
      <div className="header">
        <h1 className="h-tag">Sign Up</h1>
      </div>

      <div className="card">
        <div className="left-card">
          <div className="incan-img">
            <img src={incan} alt="incan.png" className="incan-img1" />
          </div>

          <div className="mony-img">
            <img src={mony} alt="mony-logo.jpg" className="mony-img1" />
          </div>

          <div className="radio-btn">
            <label>
              <input
                type="radio"
                value="seller"
                checked={selectedOption === "seller"}
                onChange={handleOptionChange}
              />
              Seller
            </label>

            <label>
              <input
                type="radio"
                value="buyer"
                checked={selectedOption === "buyer"}
                onChange={handleOptionChange}
              />
              Member
            </label>
          </div>
        </div>

        <div className="right-card">{renderRightCardContent()}</div>
      </div>
    </div>
  );
};

export default Signup;
