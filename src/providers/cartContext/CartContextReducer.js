export function CartReducer(state, value) {
  switch (value.type) {
    case "INITIALIZE_DATA":
      return {
        ...state,
        Data: { ...state.Data, [value.category]: value.payload?.data },
        cartListItem: value.payload?.cartProducts,
        wishlistListItem: value.payload?.wishlistProducts,
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
        cartListItem: value.payload.cartProducts,

        // Data: {
        //   ...state.Data,

        //   [value.category]: value.payload2,
        // },
      };

    // case "ADD_TO_CART_FROM_PRODUCTPAGE":
    //   return {
    //     ...state,
    //     productPage: [value.payload1],
    //     cartListItem: value.payload2,
    //   };

    // case "ADD_TO_WISHLIST_FROM_PRODUCTPAGE":
    //   return {
    //     ...state,
    //     productPage: [value.payload1],
    //     wishlistListItem: value.payload2,
    //   };

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

    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cartListItem: state.cartListItem.filter(
    //       (product) => product._id !== value.payload._id
    //     ),
    //   };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistListItem: value.payload.wishlistProducts,

        // Data: {
        //   ...state.Data,

        //   [value.category]: value.payload2,
        // },
      };
    // case "MOVE_TO_CART_FROM_WISHLIST":
    //   return {
    //     ...state,
    //     cartListItem: value.payload1,

    //     wishlistListItem: state.wishlistListItem.filter(
    //       (item) => item._id !== value.payload2._id
    //     ),
    //   };

    // case "REMOVE_FROM_WISHLIST":
    //   return {
    //     ...state,
    //     wishlistListItem: state.wishlistListItem.filter(
    //       (product) => product._id !== value.payload._id
    //     ),
    //   };

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
      return console.log("ERROR IN CART REDUCER");
  }
}
