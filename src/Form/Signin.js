import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Components from "../Form/Components";
import { useUser } from "../Context/UserContext"; // Update the path accordingly

function Signin() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const { user, updateUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUser({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    // Dummy login logic for demonstration purposes
    if (email === "mony@gmail.com" && password === "123") {
      alert("Login Successful!!!!");
         navigate("/member");
    } else {
      alert("Email or password does not match");
    }
  };
  const handleSignUpClick = () => {
    navigate("/Signup")
  }

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
