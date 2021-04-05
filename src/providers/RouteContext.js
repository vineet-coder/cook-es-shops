import { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export function RouteProvider({ children }) {
  const [route, setRoute] = useState("home");

  const [product, setProduct] = useState([]);

  return (
    <RouteContext.Provider value={{ route, setRoute, product, setProduct }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouteContext);
}
