import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Data from "../data/index";

const CartContext = createContext();

async function getCakeData() {
  try {
    const cakeResponse = await axios.get(`/CAKE`);
    console.log(cakeResponse);
  } catch (error) {
    console.log(error);
  }
}
async function getCupcakeData() {
  try {
    const cupcakeResponse = await axios.get(`/CUPCAKE`);
    console.log(cupcakeResponse);
  } catch (error) {
    console.log(error);
  }
}
async function getBrownieData() {
  try {
    const brownieResponse = await axios.get(`/BROWNIE`);
    console.log(brownieResponse);
  } catch (error) {
    console.log(error);
  }
}
async function getCookieData() {
  try {
    const cookieResponse = await axios.get(`/COOKIE`);
    console.log(cookieResponse);
  } catch (error) {
    console.log(error);
  }
}

getCakeData();
getCookieData();
getBrownieData();
getCupcakeData();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    wishlistListItem: [],
    cartListItem: [],
    Data,
    isHighToLow: false,
    isLowToHigh: false,
    Ready: false,
    Discount: false,
    Populor: false,
    productPage: [],
  });

  function reducer(state, value) {
    switch (value.type) {
      case "GO_TO_PRODUCT_PAGE":
        return {
          ...state,
          productPage: [value.payload],
        };

      case "GO_TO_PRODUCT_PAGE_FROM_CART":
        return {
          ...state,
          productPage: [{ ...value.payload, cart: true }],
        };
      case "GO_TO_PRODUCT_PAGE_FROM_WISHLIST":
        return {
          ...state,
          productPage: [{ ...value.payload, wishlist: true }],
        };

      case "POPULOR":
        return {
          ...state,
          Populor: !state.Populor,
        };

      case "DISCOUNT":
        return {
          ...state,
          Discount: !state.Discount,
        };

      case "READY":
        return {
          ...state,
          Ready: !state.Ready,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cartListItem: [...state.cartListItem, value.payload],

          Data: {
            ...state.Data,
            [value.payload.category]: state.Data[
              value.payload.category
            ].map((item) =>
              item.id === value.payload.id
                ? { ...item, cart: true }
                : { ...item }
            ),
          },
          wishlistListItem: state.wishlistListItem.map((item) =>
            item.id === value.payload.id ? { ...item, cart: true } : { ...item }
          ),
          productPage: [{ ...state.productPage[0], cart: true }],
        };
      case "INCREMENT":
        return {
          ...state,
          cartListItem: state.cartListItem.map((product) =>
            product.id === value.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : { ...product }
          ),
        };
      case "DECREMENT":
        return {
          ...state,
          cartListItem: state.cartListItem.map((product) =>
            product.id === value.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : { ...product }
          ),
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartListItem: state.cartListItem.filter(
            (product) => product.id !== value.payload.id
          ),
          Data: {
            ...state.Data,
            [value.payload.category]: state.Data[
              value.payload.category
            ].map((item) =>
              item.id === value.payload.id
                ? { ...item, cart: !item.cart }
                : { ...item }
            ),
          },
          wishlistListItem: state.wishlistListItem.map((item) =>
            item.id === value.payload.id
              ? { ...item, cart: false }
              : { ...item }
          ),
        };

      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlistListItem: [...state.wishlistListItem, value.payload],
          Data: {
            ...state.Data,
            [value.payload.category]: state.Data[
              value.payload.category
            ].map((item) =>
              item.id === value.payload.id
                ? { ...item, wishlist: true }
                : { ...item }
            ),
          },
          productPage: [{ ...state.productPage[0], wishlist: true }],
        };
      case "MOVE_TO_CART_FROM_WISHLIST":
        return {
          ...state,
          cartListItem: [...state.cartListItem, value.payload],

          wishlistListItem: state.wishlistListItem.filter(
            (item) => item.id !== value.payload.id
          ),
          Data: {
            ...state.Data,
            [value.payload.category]: state.Data[
              value.payload.category
            ].map((item) =>
              item.id === value.payload.id
                ? { ...item, cart: !value.payload.cart }
                : { ...item }
            ),
          },
        };

      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlistListItem: state.wishlistListItem.filter(
            (product) => product.id !== value.payload.id
          ),
          Data: {
            ...state.Data,
            [value.payload.category]: state.Data[
              value.payload.category
            ].map((item) =>
              item.id === value.payload.id
                ? { ...item, wishlist: false }
                : { ...item }
            ),
          },
        };

      case "HIGH_TO_LOW":
        return {
          ...state,
          Data: {
            ...state.Data,
            cake: state.Data.cake.sort(function (a, b) {
              return b.price - a.price;
            }),
            cupcake: state.Data.cupcake.sort(function (a, b) {
              return b.price - a.price;
            }),
            cookie: state.Data.cookie.sort(function (a, b) {
              return b.price - a.price;
            }),
            brownie: state.Data.brownie.sort(function (a, b) {
              return b.price - a.price;
            }),
          },
          isHighToLow: true,
          isLowToHigh: false,
        };

      case "LOW_TO_HIGH":
        return {
          ...state,
          Data: {
            ...state.Data,
            cake: state.Data.cake.sort(function (a, b) {
              return a.price - b.price;
            }),
            cupcake: state.Data.cupcake.sort(function (a, b) {
              return a.price - b.price;
            }),
            cookie: state.Data.cookie.sort(function (a, b) {
              return a.price - b.price;
            }),
            brownie: state.Data.brownie.sort(function (a, b) {
              return a.price - b.price;
            }),
          },
          isHighToLow: false,
          isLowToHigh: true,
        };

      default:
        return console.log("heyyy");
    }
  }

  function getPopulorData(givenState) {
    return givenState.Populor === true
      ? {
          ...givenState,
          Data: {
            ...givenState.Data,
            cake: givenState.Data.cake.filter(
              (item) => item.isPopulor === true
            ),

            cupcake: givenState.Data.cupcake.filter(
              (item) => item.isPopulor === true
            ),
            cookie: givenState.Data.cookie.filter(
              (item) => item.isPopulor === true
            ),
            brownie: givenState.Data.brownie.filter(
              (item) => item.isPopulor === true
            ),
          },
        }
      : { ...givenState };
  }

  function getDiscountedData(givenState) {
    return givenState.Discount === true
      ? {
          ...givenState,
          Data: {
            ...givenState.Data,
            cake: givenState.Data.cake.filter(
              (item) => item.isDiscount === true
            ),

            cupcake: givenState.Data.cupcake.filter(
              (item) => item.isDiscount === true
            ),
            cookie: givenState.Data.cookie.filter(
              (item) => item.isDiscount === true
            ),
            brownie: givenState.Data.brownie.filter(
              (item) => item.isDiscount === true
            ),
          },
        }
      : { ...givenState };
  }

  function getFastDeliveryData(givenState) {
    return givenState.Ready === true
      ? {
          ...givenState,
          Data: {
            ...givenState.Data,
            cake: givenState.Data.cake.filter((item) => item.isReady === true),

            cupcake: givenState.Data.cupcake.filter(
              (item) => item.isReady === true
            ),
            cookie: givenState.Data.cookie.filter(
              (item) => item.isReady === true
            ),
            brownie: givenState.Data.brownie.filter(
              (item) => item.isReady === true
            ),
          },
        }
      : { ...givenState };
  }

  const populorState = getPopulorData(state);

  const discountedState = getDiscountedData(populorState);

  const finalState = getFastDeliveryData(discountedState);

  return (
    <CartContext.Provider value={{ state, dispatch, finalState }}>
      {children}
    </CartContext.Provider>
  );
};
export function useCart() {
  return useContext(CartContext);
}
