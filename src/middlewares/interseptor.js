import { useEffect, useState } from "react";
import axios from "axios";

function Interceptor() {
  const addErrorInterceptor = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const code = error.response.status;
          if (code === 401) {
            console.log("interseptor hun me");
          } else {
            console.log("Something went wrong.");
            if (code === 403) {
              console.log("You’re not authorized to do that.");
            } else if (error.message) {
              console.log(error.message);
            }
            console.log("interseptor");
          }
        }
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    addErrorInterceptor();
  }, []);

  return null;
}

export default Interceptor;
