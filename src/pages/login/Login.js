import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    isAxiosFullfil,
    setToken,
    setLogin,
    isUserLogin,
    setUserName,
    setLoginFailedModel,
  } = useAuth();

  const LogInHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await ApiService(
        "post",
        "login",

        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");
      loginUser(data);
    } catch (error) {
      setLoginFailedModel(true);
      setEmail("");
      setPassword("");
    }
    function loginUser(data) {
      setLogin(true);

      setToken(data.token);
      navigate("/");
      setUserName(data.userName);

      localStorage?.setItem(
        "login",
        JSON.stringify({
          isUserLoggedIn: true,
          token: data.token,
          name: data.userName,
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
        {isAxiosFullfil && (
          <p className="incorrect-information-text">
            Check your Email or Password
          </p>
        )}
        <form className="form1" onSubmit={(e) => LogInHandler(e)}>
          <input
            className="input"
            type="email"
            align="center"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            align="center"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-signup-btn-div">
            {isUserLogin ? (
              <button className="submit" onClick={() => Logout()}>
                Log Out
              </button>
            ) : (
              <button className="submit" type="submit">
                Log In
              </button>
            )}
            <Link to="/signup">
              <button className="submit">Sign Up</button>
            </Link>
          </div>

          <p className="forgot" align="center">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};
