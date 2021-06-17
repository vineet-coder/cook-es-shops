import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../providers/AuthProvider";

function Interceptor() {
  const { setIsAxiosFullfil } = useAuth();

  const addErrorInterceptor = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const code = error.response.status;
          if (code === 401) {
            setIsAxiosFullfil(true);
            setTimeout(() => {
              setIsAxiosFullfil(false);
            }, 2000);
          } else {
            console.log("Something went wrong.");
            if (code === 403) {
              console.log("You’re not authorized to do that.");
              setIsAxiosFullfil(true);
              setTimeout(() => {
                setIsAxiosFullfil(false);
              }, 5000);
            } else if (error.message) {
              console.log(error.message);
            }
            console.log("interseptor");
          }
        }
      }
    );
  };

  useEffect(() => {
    addErrorInterceptor();
  }, []);

  return null;
}

export default Interceptor;
