import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { CartProvider } from "./providers/CartContext";
import { LoginProvider } from "./providers/loginProvider/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
