import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { CartProvider } from "./providers/CartContext";
import { LoginProvider } from "./providers/loginProvider/LoginContext";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoginProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </LoginProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
