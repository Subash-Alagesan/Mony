import React, { useState,useEffect } from "react";
import { useNavigate  } from "react-router";
import * as Components from "../Form/Components";
import { useUser } from "../Context/UserContext";
import { jwtDecode } from "jwt-decode";

function Signin() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const { user, updateUser, login,userType } = useUser(); // Add the login function from context

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUser({ [name]: value });
  };
  useEffect(() => {
    let currentTime;
    let decoded;
  
    if (localStorage.getItem("mony")) {
      const token = localStorage.getItem("mony");
      decoded = jwtDecode(token);
      console.log(userType)
      currentTime = Date.now() / 1000;
      if (!localStorage.getItem("mony") || decoded?.exp < currentTime) {
        // Handle expired or missing token
      } else {
        if (userType === "member") {
          navigate("/member");
        } else if (userType === "seller") {
          navigate("/sellerdashboard");
        }
      }
    }
  }, [navigate, userType]);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from context
      await login();
      // Optionally, redirect to another page upon successful login
      alert (`Login Suceesfully!!! ${userType} `)
      if (userType === "member") {
        navigate("/member");
      } else if (userType === "seller") {
        navigate("/sellerdashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., show an error message
    }
  };

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  return (
    <Components.Container>
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <Components.Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title1>Welcome to login</Components.Title1>
            <Components.Paragraph>Don't have an account?</Components.Paragraph>
            <Components.GhostButton1 onClick={handleSignUpClick}>
              SignUp
            </Components.GhostButton1>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Signin;
