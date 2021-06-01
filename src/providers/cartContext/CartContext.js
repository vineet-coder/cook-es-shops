import { createContext, useContext, useReducer, useState } from "react";
import {
  getDiscountedData,
  getFastDeliveryData,
  getPopulorData,
} from "./CartContext.utils";
import { CartReducer } from "./CartContextReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(true);
  const [isAddLoading, setIsAddLoading] = useState(false);

  const [state, dispatch] = useReducer(CartReducer, {
    wishlistListItem: [],
    cartListItem: [],
    Data: {
      cake: [],

      cookie: [],

      brownie: [],

      cupcake: [],
    },
    isHighToLow: false,
    isLowToHigh: false,
    Ready: false,
    Discount: false,
    Populor: false,
    productPage: [],
  });

  const populorState = getPopulorData(state);

  const discountedState = getDiscountedData(populorState);

  const finalState = getFastDeliveryData(discountedState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        finalState,
        isLoader,
        setIsLoader,
        isAddLoading,
        setIsAddLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export function useCart() {
  return useContext(CartContext);
}
