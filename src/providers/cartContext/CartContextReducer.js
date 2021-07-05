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

    case "POPULAR":
      return {
        ...state,
        popular: !state.popular,
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
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistListItem: value.payload.wishlistProducts,
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
      return console.log("ERROR IN CART REDUCER");
  }
}
