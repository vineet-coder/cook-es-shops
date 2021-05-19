import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../providers/loginProvider/LoginContext";
import "./Login.css";
import { LoginHandler } from "./Login.Utils";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loginDispatch } = useLogin();
  const navigate = useNavigate();

  //   console.log(userName);
  return (
    <div className="login-page">
      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1" />
        <input
          class="user-name "
          type="text"
          align="center"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a
          class="submit"
          align="center"
          onClick={() =>
            LoginHandler(userName, password, loginDispatch, navigate)
          }
        >
          Sign in
        </a>
        <p class="forgot" align="center">
          <a href="#" />
          Forgot Password?
        </p>

        {/* <a class="submit" align="center">
          Sign in
        </a> */}
      </div>
    </div>
  );
};
