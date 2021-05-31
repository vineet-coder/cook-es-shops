import { Navigate } from "react-router";

export const LoginHandler = (userName, password, dispatch, navigate) => {
  if (userName === "dummyemail@gmail.com" && password === "123456") {
    dispatch({ type: "login" });
  } else {
    alert("You entered incorrect info!!");
  }
  navigate("/");
};





