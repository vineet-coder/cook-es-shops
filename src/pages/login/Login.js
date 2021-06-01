import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { useAuth } from "../../providers/AuthProvider";
import { useLogin } from "../../providers/loginProvider/LoginContext";
// import "./Login.css";
import { LoginHandler } from "./Login.Utils";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    setToken,
    setLogin,
    isUserLogin,
    setUserName,
    loginFailedModel,
    setLoginFailedModel,
  } = useAuth();

  const LogInHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/login",
        // `https://cook-es-shops.herokuapp.com/login`,

        {
          email,
          password,
        }
      );
      console.log(res);

      setEmail("");
      setPassword("");
      loginUser(res);
    } catch (error) {
      setLoginFailedModel(true);
      setEmail("");
      setPassword("");
    }
    function loginUser(res) {
      setLogin(true);

      setToken(res.data.token);
      navigate("/");
      setUserName(res.data.userName);

      localStorage?.setItem(
        "login",
        JSON.stringify({
          isUserLoggedIn: true,
          token: res.data.token,
          name: res.data.userName,
        })
      );
    }
  };

  function Logout() {
    localStorage?.removeItem("login");
    setLogin(false);
    setToken(null);
  }

  return (
    <div className="login-page">
      {/* <Header /> */}
      <div className="main-login">
        <Link to="/" className=" link">
          <img
            src="./images/company-logo.png"
            alt="img"
            className="login-logo-img"
          />
        </Link>
        <p className="login-sign" align="center">
          Log In
        </p>
        <form className="form1" />
        <input
          className="input"
          type="email"
          align="center"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-signup-btn-div">
          {isUserLogin ? (
            <button className="submit" onClick={() => Logout()}>
              Log Out
            </button>
          ) : (
            <button className="submit" onClick={(e) => LogInHandler(e)}>
              Log In
            </button>
          )}
          <Link to="/signup">
            <button className="submit">Sign Up</button>
          </Link>
        </div>

        <p className="forgot" align="center">
          <a href="#" />
          Forgot Password?
        </p>
      </div>
    </div>
  );
};
