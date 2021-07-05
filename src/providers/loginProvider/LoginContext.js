import { createContext, useContext, useReducer } from "react";
import { loginInitialState, LoginReducer } from "./LoginReducer";
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(
    LoginReducer,
    loginInitialState
  );

  return (
    <LoginContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
export function useLogin() {
  return useContext(LoginContext);
}
