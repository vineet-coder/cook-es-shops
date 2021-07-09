import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiService } from "../../utils/ApiServices";
import { useAuth } from "../../providers/AuthProvider";
import { IoAlertCircleOutline } from "react-icons/io5";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const { isAxiosFullfil } = useAuth();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    try {
      await ApiService("post", "signup", {
        userName,
        email,
        password: password1,
        confirmPassword: password2,
      });

      setUserName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="main">
          {isAxiosFullfil && (
            <p className="incorrect-information-text">
              <IoAlertCircleOutline /> You filled something wrong!!
            </p>
          )}
          <p className="sign" align="center">
            Sign Up
          </p>
          <form className="form1" onSubmit={(e) => SignUpHandler(e)}>
            <input
              className="input"
              type="text"
              placeholder="Username"
              align="center"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              align="center"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              align="center"
              required
              onChange={(e) => setPassword1(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              align="center"
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
            <div className="login-signup-btn-div">
              <Link to="/login">
                <button className="submit">Log In</button>{" "}
              </Link>

              <button className="submit" type="submit">
                Sign Up
              </button>
            </div>

            <p className="forgot" align="center">
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
