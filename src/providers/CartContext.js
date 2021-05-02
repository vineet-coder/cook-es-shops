import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
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

  console.log(state);

  function reducer(state, value) {
    switch (value.type) {
      case "INITIALIZE_DATA":
        return {
          ...state,
          Data: { ...state.Data, [value.category]: value.payload1 },
          cartListItem: value.payload2,
          wishlistListItem: value.payload3,
        };

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
          cartListItem: value.payload1,

          Data: {
            ...state.Data,

            [value.category]: value.payload2,
          },
        };

      case "ADD_TO_CART_FROM_PRODUCTPAGE":
        return {
          ...state,
          productPage: [value.payload1],
          cartListItem: value.payload2,
        };

      case "ADD_TO_WISHLIST_FROM_PRODUCTPAGE":
        return {
          ...state,
          productPage: [value.payload1],
          wishlistListItem: value.payload2,
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
            (product) => product._id !== value.payload._id
          ),
        };

      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlistListItem: value.payload1,

          Data: {
            ...state.Data,

            [value.category]: value.payload2,
          },

          // productPage: [{ ...state.productPage[0], wishlist: true }],
        };
      case "MOVE_TO_CART_FROM_WISHLIST":
        return {
          ...state,
          cartListItem: value.payload1,

          wishlistListItem: state.wishlistListItem.filter(
            (item) => item._id !== value.payload2._id
          ),
        };

      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlistListItem: state.wishlistListItem.filter(
            (product) => product._id !== value.payload._id
          ),
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
  // console.log(state);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export function useCart() {
  return useContext(CartContext);
}
