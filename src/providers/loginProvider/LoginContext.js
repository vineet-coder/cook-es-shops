import { createContext, useContext, useReducer, useState } from "react";
import { loginInitialState, LoginReducer } from "./LoginReducer";
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(
    LoginReducer,
    loginInitialState
  );
  console.log(loginState);

  return (
    <LoginContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
export function useLogin() {
  return useContext(LoginContext);
}
