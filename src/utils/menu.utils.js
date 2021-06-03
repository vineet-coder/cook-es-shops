import { ApiService } from "./ApiServices";

export const addToWishlist = async (
  productId,
  quantity,
  token,
  dispatch,
  setIsAddLoading
) => {
  setIsAddLoading(true);

  try {
    const data = await ApiService(
      "post",
      "wishlistproducts",

      { productId: productId, quantity: quantity },
      {
        headers: { authorization: token },
      }
    );

    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        wishlistProducts: data.result[0].products,
      },
    });

    setIsAddLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (
  productId,
  quantity,
  token,
  dispatch,
  setIsAddLoading
) => {
  setIsAddLoading(true);
  try {
    const data = await ApiService(
      "post",
      "cartproducts",
      { productId: productId, quantity: quantity },
      {
        headers: { authorization: token },
      }
    );

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartProducts: data.result[0].products,
      },
    });
    setIsAddLoading(false);
  } catch (error) {
    console.log(error, "axios error");
  }
};

export const updateCart = async (
  productObject_Id,
  updatedQuantity,
  token,
  dispatch
  // setIsAddLoading
) => {
  // setIsAddLoading(true);
  try {
    const data = await ApiService(
      "post",
      "cartproducts/products",
      { product_Id: productObject_Id, updatedQuantity: updatedQuantity },
      {
        headers: { authorization: token },
      }
    );

    console.log(data.result[0].products);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartProducts: data.result[0].products,
      },
    });
    // setIsAddLoading(false);
  } catch (error) {
    console.log(error, "axios error");
  }
};

export const removeFromCart = async (productId, token, dispatch) => {
  try {
    const data = await ApiService(
      "delete",
      "cartproducts",

      {
        headers: { authorization: token },

        data: { productId: productId },
      }
    );

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartProducts: data.result[0].products,
      },
    });
  } catch (error) {
    console.log(error, "axios error");
  }
};

export const removeFromWishlist = async (productId, token, dispatch) => {
  try {
    const data = await ApiService(
      "delete",
      "wishlistproducts",

      {
        headers: { authorization: token },

        data: { productId: productId },
      }
    );

    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        wishlistProducts: data.result[0].products,
      },
    });
  } catch (error) {
    console.log(error, "axios error");
  }
};
