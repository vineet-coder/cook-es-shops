import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/signup",
        // `https://cook-es-shops.herokuapp.com/signup`,

        {
          userName,
          email,
          password: password1,
          confirmPassword: password2,
        }
      );

      setUserName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      console.log(error.data);
    }
  };

  // console.log(userName);
  // console.log(email);
  // console.log(password1);
  // console.log(password2);

  return (
    <div className="signup-page">
      <div className="main">
        <p className="sign" align="center">
          Sign Up
        </p>
        <form className="form1" />
        <input
          className="input"
          type="text"
          placeholder="Username"
          align="center"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          align="center"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          align="center"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          align="center"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <div className="login-signup-btn-div">
          <Link to="/login">
            <button className="submit">Log In</button>{" "}
          </Link>

          <button className="submit" onClick={(e) => SignUpHandler(e)}>
            Sign Up
          </button>
        </div>

        <p className="forgot" align="center">
          <a href="#" />
          Forgot Password?
        </p>
      </div>
    </div>
  );
};
